/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2026 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { playAudio } from "@api/AudioPlayer";
import { plugin, t } from "@api/i18n";
import { showNotification } from "@api/Notifications";
import type { Quest } from "@plexcord/discord-types";
import { sleep } from "@utils/misc";
import type { PluginNative } from "@utils/types";
import { findByCodeLazy } from "@webpack";
import { QuestStore, RestAPI } from "@webpack/common";
import { NavigationRouter } from "@webpack/common/utils";

import { getQuestifySettings } from "../settings/access";
import { getIgnoredQuestIDs } from "../settings/ignoredQuests";
import { getNewQuests, normalizeQuestName, type QuestIncludedTypes, questMatchesIncludedTypes } from "./filtering";
import { QL } from "./logging";
import { isQuestHidden } from "./questState";
import { QUEST_PAGE } from "./ui";

const QuestifyNative = PlexcordNative?.pluginHelpers?.Questify as PluginNative<typeof import("../native")> | undefined;

export function snakeToCamel(obj: any): any {
    if (Array.isArray(obj)) {
        return obj.map(snakeToCamel);
    }

    if (obj && typeof obj === "object") {
        return Object.fromEntries(
            Object.entries(obj).map(([key, value]) => [
                key.replace(/_([a-z])/g, (_, c) => c.toUpperCase()),
                snakeToCamel(value),
            ]),
        );
    }

    return obj;
}

export const fetchAndDispatchQuests = findByCodeLazy("QUESTS_FETCH_CURRENT_QUESTS_BEGIN");
const parseQuestConfig = findByCodeLazy("config).with({config_version:");
const formatQuestData = findByCodeLazy("config),userStatus:null==");

async function fetchQuestById(questId: string): Promise<Quest | null> {
    try {
        const { body } = await RestAPI.get({ url: `/quests/${questId}`, retries: 3 });
        const valid = !!parseQuestConfig({ config: body });

        if (!valid) {
            QL.warn("FETCH_QUEST_BY_ID_INVALID_BODY", { questId, body });

            return null;
        }

        return formatQuestData(body);
    } catch (error: unknown) {
        QL.warn("FETCH_QUEST_BY_ID_FAILED", { questId, error });

        return null;
    }
}

async function fetchExcludedQuestConfigs(questIds: string[]): Promise<Quest[]> {
    const quests: Quest[] = [];

    for (const [index, questId] of questIds.entries()) {
        if (index > 0) {
            await sleep(1000);
        }

        const quest = await fetchQuestById(questId);

        if (quest) {
            quests.push(quest);
        }
    }

    return quests;
}

export function canOpenDevToolsWindow(): boolean {
    return typeof QuestifyNative?.canOpenDevTools === "function"
        && typeof QuestifyNative?.openDevTools === "function";
}

export async function openDevToolsWindow(): Promise<boolean> {
    if (!canOpenDevToolsWindow()) {
        return false;
    }

    const native = QuestifyNative!;

    return await native.canOpenDevTools()
        ? native.openDevTools()
        : false;
}

function getQuestNotificationText(quests: Quest[], excluded: boolean): { title: string; body: string; } {
    const firstQuest = quests[0];
    const firstQuestName = normalizeQuestName(firstQuest);

    if (quests.length === 1) {
        return excluded
            ? {
                title: t(plugin.questify.notification.newExcludedQuest.title),
                body: t(plugin.questify.notification.newExcludedQuest.body, { questName: firstQuestName, questId: firstQuest.id })
            }
            : {
                title: t(plugin.questify.notification.newQuest.title),
                body: t(plugin.questify.notification.newQuest.body, { questName: firstQuestName })
            };
    }

    return excluded
        ? {
            title: t(plugin.questify.notification.newExcludedQuests.title),
            body: t(plugin.questify.notification.newExcludedQuests.body, { count: quests.length })
        }
        : {
            title: t(plugin.questify.notification.newQuests.title),
            body: t(plugin.questify.notification.newQuests.body, { count: quests.length })
        };
}

function notifyNewQuests(quests: Quest[], excluded: boolean): void {
    if (quests.length === 0) return;

    const firstQuest = quests[0];
    const { title, body } = getQuestNotificationText(quests, excluded);
    const onClick = excluded
        ? canOpenDevToolsWindow() ? openDevToolsWindow : undefined
        : () => NavigationRouter.transitionTo(`${QUEST_PAGE}#${firstQuest.id}`);

    showNotification({
        title,
        body,
        dismissOnClick: true,
        onClick
    });

    QL.log("NOTIFY_NEW_QUESTS", { excluded, quests });
}

export async function fetchAndAlertQuests(source: string): Promise<Quest[] | null> {
    const settings = getQuestifySettings();
    const alertSound = settings.newQuestAlertSound;
    const alertVolume = settings.newQuestAlertVolume;
    const excludedAlertSound = settings.newExcludedQuestAlertSound;
    const excludedAlertVolume = settings.newExcludedQuestAlertVolume;
    const shouldFetchExcludedQuests = settings.notifyOnNewExcludedQuests || Boolean(excludedAlertSound);
    const currentQuests = Array.from(QuestStore.quests.values());
    const currentExcludedQuestIds = new Set(Array.from(QuestStore.excludedQuests.values()).map(quest => quest.id));
    const includedTypes = settings.questButtonIncludedTypes as QuestIncludedTypes;

    await fetchAndDispatchQuests();
    await sleep(1000);

    const nextQuests = Array.from(QuestStore.quests.values());

    if (!nextQuests || currentQuests.length === 0) {
        return nextQuests;
    }

    const newQuests = getNewQuests(currentQuests, nextQuests);
    const newExcludedQuestIds = shouldFetchExcludedQuests
        ? Array.from(QuestStore.excludedQuests.values())
            .map(quest => quest.id)
            .filter(questId => !currentExcludedQuestIds.has(questId))
        : [];

    if (newQuests.length === 0 && newExcludedQuestIds.length === 0) {
        return nextQuests;
    }

    const newExcludedQuests = newExcludedQuestIds.length > 0 ? await fetchExcludedQuestConfigs(newExcludedQuestIds) : [];
    const ignoredQuestIds = getIgnoredQuestIDs();
    const includeQuest = (quest: Quest) => questMatchesIncludedTypes(quest, includedTypes)
        && !ignoredQuestIds.includes(quest.id)
        && !isQuestHidden(quest, ignoredQuestIds);
    const newIncludedQuests = newQuests.filter(includeQuest);
    const newIncludedExcludedQuests = newExcludedQuests.filter(includeQuest);
    const shouldAlert = Boolean(alertSound) && newIncludedQuests.length > 0;
    const shouldAlertExcluded = Boolean(excludedAlertSound) && newIncludedExcludedQuests.length > 0;
    const shouldNotify = settings.notifyOnNewQuests && newIncludedQuests.length > 0;
    const shouldNotifyExcluded = settings.notifyOnNewExcludedQuests && newIncludedExcludedQuests.length > 0;

    QL.info("FETCH_AND_ALERT_QUESTS_NEW_QUESTS", {
        source,
        newQuestCount: newQuests.length,
        newQuests: newIncludedQuests,
        matchedQuestCount: newIncludedQuests.length + newIncludedExcludedQuests.length,
        ...(shouldFetchExcludedQuests ? {
            newExcludedQuestCount: newExcludedQuestIds.length,
            newExcludedQuests: newIncludedExcludedQuests,
            matchedExcludedQuestCount: newIncludedExcludedQuests.length,
        } : {}),
        shouldAlert,
        shouldAlertExcluded,
        shouldNotify,
        shouldNotifyExcluded,
    });

    if (shouldAlert) {
        playAudio(
            alertSound!,
            { volume: Math.max(0, Math.min(100, alertVolume)) }
        );
    }

    if (shouldAlertExcluded) {
        playAudio(
            excludedAlertSound!,
            { volume: Math.max(0, Math.min(100, excludedAlertVolume)) }
        );
    }

    if (shouldNotify) {
        notifyNewQuests(newIncludedQuests, false);
    }

    if (shouldNotifyExcluded) {
        notifyNewQuests(newIncludedExcludedQuests, true);
    }

    return nextQuests;
}
