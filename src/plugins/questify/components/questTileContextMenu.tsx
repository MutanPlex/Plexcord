/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2026 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import type { Quest } from "@plexcord/discord-types";
import { copyToClipboard } from "@utils/clipboard";
import { Menu } from "@webpack/common";
import type { ReactNode } from "react";

import { addIgnoredQuest, questIsIgnored, removeIgnoredQuest } from "../settings/ignoredQuests";
import { rerenderQuests } from "../settings/rerender";
import { canAutoCompleteQuest, enrollAndStartQuestAutoComplete, ensureQuestEnrolled, getQuestAutoCompleteEntry, stopQuestAutoComplete } from "../utils/completion";
import { getQuestStatus, QuestStatus, refreshQuest } from "../utils/questState";
import { q } from "../utils/ui";

export function QuestTileContextMenu(
    children: ReactNode[],
    props: { quest?: Quest; },
    isClaimedMenu: boolean = false,
): void {
    const quest = props.quest && refreshQuest(props.quest);

    if (!quest) {
        return;
    }

    const isIgnored = questIsIgnored(quest.id);
    const isEnrolled = Boolean(quest.userStatus?.enrolledAt);
    const isAutoCompleting = getQuestAutoCompleteEntry(quest) != null;
    const canStartAutoComplete = !isClaimedMenu && canAutoCompleteQuest(quest);
    const canEnroll = !isClaimedMenu && !isEnrolled && !quest.userStatus?.completedAt && getQuestStatus(quest, []) === QuestStatus.Unclaimed;
    const taskType = Object.values(quest.config.taskConfigV2?.tasks ?? {})[0]?.type;

    children.unshift((
        <Menu.MenuGroup>
            {canEnroll && (
                <Menu.MenuItem
                    id={q("enroll-in-quest")}
                    label={t(plugin.questify.text.enrollInQuest)}
                    action={async () => {
                        if ((await ensureQuestEnrolled(quest, { analytics: { taskType }, method: "native" })).type === "success") {
                            rerenderQuests();
                        }
                    }}
                />
            )}
            {isAutoCompleting ? (
                <Menu.MenuItem
                    id={q("stop-auto-complete")}
                    label={t(plugin.questify.context.quest.stopAuto)}
                    action={() => {
                        stopQuestAutoComplete(quest, {
                            manual: true,
                            preserveResume: false,
                            terminalHeartbeat: true,
                        });
                        rerenderQuests();
                    }}
                />
            ) : canStartAutoComplete ? (
                <Menu.MenuItem
                    id={q("start-auto-complete")}
                    label={t(plugin.questify.context.quest.startAuto)}
                    action={async () => {
                        if (await enrollAndStartQuestAutoComplete(quest, { taskType })) {
                            rerenderQuests();
                        }
                    }}
                />
            ) : null}
            {!isClaimedMenu && (!isIgnored ? (
                <Menu.MenuItem
                    id={q("ignore-quest")}
                    label={t(plugin.questify.context.quest.markAsIgnored)}
                    action={() => addIgnoredQuest(quest.id)}
                />
            ) : (
                <Menu.MenuItem
                    id={q("unignore-quest")}
                    label={t(plugin.questify.context.quest.unmarkAsIgnored)}
                    action={() => removeIgnoredQuest(quest.id)}
                />
            ))}
            <Menu.MenuItem
                id={q("copy-quest-id")}
                label={t(plugin.questify.context.quest.copyQuestID)}
                action={() => copyToClipboard(quest.id)}
            />
        </Menu.MenuGroup>
    ));
}
