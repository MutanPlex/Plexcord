/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2026 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import type { JSX } from "react";

import { getQuestifySettings, useQuestifySettings } from "../settings/access";
import { defaultQuestOrder, type QuestOrderStatus, type QuestSubsort } from "../settings/def";
import { validateIgnoredQuests } from "../settings/ignoredQuests";
import { rerenderQuests } from "../settings/rerender";
import { type ManaSelectOption, SettingsCard, SettingsDescription, SettingsHeader, SettingsRow, SettingsRowItem, SettingsSelect, SettingsSubheader, SettingsSubtleSwitch } from "./shared";

const questStatusOptions = [
    { label: t(plugin.questify.status.unclaimed), value: "UNCLAIMED" },
    { label: t(plugin.questify.status.claimed), value: "CLAIMED" },
    { label: t(plugin.questify.status.ignored), value: "IGNORED" },
    { label: t(plugin.questify.status.expired), value: "EXPIRED" },
] as const satisfies readonly { label: string, value: QuestOrderStatus; }[];

const questPositionManaOptions: ManaSelectOption[] = [t(plugin.questify.settings.reorderQuests.positions.first), t(plugin.questify.settings.reorderQuests.positions.second), t(plugin.questify.settings.reorderQuests.positions.third), t(plugin.questify.settings.reorderQuests.positions.fourth)].map((label, index) => ({
    id: String(index),
    label,
    value: String(index),
}));

questPositionManaOptions.push({ id: "hidden", label: t(plugin.questify.text.hidden), value: "hidden" });

const baseSubsortOptions = [
    { label: t(plugin.questify.settings.reorderQuests.subsort.addedNewest), value: "Recent DESC" },
    { label: t(plugin.questify.settings.reorderQuests.subsort.addedOldest), value: "Recent ASC" },
] as const satisfies readonly { label: string, value: QuestSubsort; }[];

const expiringSubsortOptions = [
    ...baseSubsortOptions,
    { label: t(plugin.questify.settings.reorderQuests.subsort.expiringSoonest), value: "Expiring ASC" },
    { label: t(plugin.questify.settings.reorderQuests.subsort.expiringLatest), value: "Expiring DESC" },
] as const satisfies readonly { label: string, value: QuestSubsort; }[];

const expiredSubsortOptions = [
    ...baseSubsortOptions,
    { label: t(plugin.questify.settings.reorderQuests.subsort.expiredMostRecent), value: "Expiring DESC" },
    { label: t(plugin.questify.settings.reorderQuests.subsort.expiredLeastRecent), value: "Expiring ASC" },
] as const satisfies readonly { label: string, value: QuestSubsort; }[];

const claimedSubsortOptions = [
    ...baseSubsortOptions,
    { label: t(plugin.questify.settings.reorderQuests.subsort.claimedMostRecent), value: "Claimed DESC" },
    { label: t(plugin.questify.settings.reorderQuests.subsort.claimedLeastRecent), value: "Claimed ASC" },
] as const satisfies readonly { label: string, value: QuestSubsort; }[];

function toManaOptions(options: readonly { label: string, value: QuestSubsort; }[]): ManaSelectOption[] {
    return options.map(({ label, value }) => ({
        id: value,
        label,
        value,
    }));
}

const unclaimedSubsortManaOptions = toManaOptions(expiringSubsortOptions);
const claimedSubsortManaOptions = toManaOptions(claimedSubsortOptions);
const ignoredSubsortManaOptions = toManaOptions(expiringSubsortOptions);
const expiredSubsortManaOptions = toManaOptions(expiredSubsortOptions);
const subsortTooltips = {
    unclaimedSubsort: t(plugin.questify.settings.reorderQuests.unclaimedSubsortTooltip),
    claimedSubsort: t(plugin.questify.settings.reorderQuests.claimedSubsortTooltip),
    ignoredSubsort: t(plugin.questify.settings.reorderQuests.ignoredSubsortTooltip),
    expiredSubsort: t(plugin.questify.settings.reorderQuests.expiredSubsortTooltip),
} as const;

function sanitizeQuestOrder(order: unknown): QuestOrderStatus[] {
    const validStatuses = new Set<QuestOrderStatus>(defaultQuestOrder);
    const sanitized = Array.isArray(order)
        ? order.filter((status): status is QuestOrderStatus => validStatuses.has(status as QuestOrderStatus))
        : [];
    const uniqueOrder = Array.from(new Set(sanitized));

    for (const status of defaultQuestOrder) {
        if (!uniqueOrder.includes(status)) {
            uniqueOrder.push(status);
        }
    }

    return uniqueOrder;
}

export function ReorderQuestsSetting(): JSX.Element {
    const reorderQuests = useQuestifySettings([
        "disableQuestsEverything",
        "questOrder",
        "hiddenQuestStatuses",
        "unclaimedSubsort",
        "claimedSubsort",
        "ignoredSubsort",
        "expiredSubsort",
        "rememberQuestPageSort",
        "rememberQuestPageFilters",
    ]);

    const disabled = reorderQuests.disableQuestsEverything;
    const questOrder = sanitizeQuestOrder(reorderQuests.questOrder);

    function updateQuestOrder(status: QuestOrderStatus, value: string | string[] | null): void {
        if (typeof value !== "string") return;

        const hiddenStatuses = new Set(reorderQuests.hiddenQuestStatuses);

        if (value === "hidden") {
            hiddenStatuses.add(status);
            getQuestifySettings().hiddenQuestStatuses = Array.from(hiddenStatuses);
            validateIgnoredQuests();
            return;
        }

        const index = Number(value);

        if (!Number.isInteger(index) || index < 0 || index >= questOrder.length) return;

        const nextOrder = [...questOrder];
        const previousIndex = nextOrder.indexOf(status);

        nextOrder[previousIndex] = nextOrder[index];
        nextOrder[index] = status;
        hiddenStatuses.delete(status);
        getQuestifySettings().questOrder = nextOrder;
        getQuestifySettings().hiddenQuestStatuses = Array.from(hiddenStatuses);
        validateIgnoredQuests();
    }

    function updateSubsort(key: "unclaimedSubsort" | "claimedSubsort" | "ignoredSubsort" | "expiredSubsort", value: string | string[] | null): void {
        if (typeof value !== "string") return;

        getQuestifySettings()[key] = value;
        rerenderQuests();
    }

    function updateRememberSetting(key: "rememberQuestPageSort" | "rememberQuestPageFilters", checked: boolean): void {
        getQuestifySettings()[key] = checked;
    }

    return (
        <SettingsCard>
            <SettingsHeader>{t(plugin.questify.settings.reorderQuests.title)}</SettingsHeader>
            <SettingsDescription> {t(plugin.questify.settings.reorderQuests.description)} </SettingsDescription>
            <SettingsSubheader>{t(plugin.questify.settings.reorderQuests.statusOrder)}</SettingsSubheader>
            <SettingsRow>
                {questStatusOptions.map(({ label, value: status }) => (
                    <SettingsRowItem key={status}>
                        <SettingsSelect
                            label={`${label}:`}
                            options={questPositionManaOptions}
                            value={reorderQuests.hiddenQuestStatuses.includes(status) ? "hidden" : String(questOrder.indexOf(status))}
                            selectionMode="single"
                            disabled={disabled}
                            fullWidth={true}
                            maxOptionsVisible={questPositionManaOptions.length}
                            onSelectionChange={value => updateQuestOrder(status, value)}
                            tooltip={{
                                position: "top",
                                text: t(plugin.questify.text.selectingAnOccupiedPosition)
                            }}
                        />
                    </SettingsRowItem>
                ))}
            </SettingsRow>
            <SettingsSubheader>{t(plugin.questify.settings.reorderQuests.subsorts)}</SettingsSubheader>
            <SettingsRow>
                <SettingsRowItem>
                    <SettingsSelect
                        label={t(plugin.questify.settings.reorderQuests.unclaimedSubsort)}
                        options={unclaimedSubsortManaOptions}
                        value={reorderQuests.unclaimedSubsort}
                        selectionMode="single"
                        disabled={disabled}
                        fullWidth={true}
                        maxOptionsVisible={unclaimedSubsortManaOptions.length}
                        onSelectionChange={value => updateSubsort("unclaimedSubsort", value)}
                        tooltip={{
                            position: "top",
                            text: subsortTooltips.unclaimedSubsort
                        }}
                    />
                </SettingsRowItem>
                <SettingsRowItem>
                    <SettingsSelect
                        label={t(plugin.questify.settings.reorderQuests.claimedSubsort)}
                        options={claimedSubsortManaOptions}
                        value={reorderQuests.claimedSubsort}
                        selectionMode="single"
                        disabled={disabled}
                        fullWidth={true}
                        maxOptionsVisible={claimedSubsortManaOptions.length}
                        onSelectionChange={value => updateSubsort("claimedSubsort", value)}
                        tooltip={{
                            position: "top",
                            text: subsortTooltips.claimedSubsort
                        }}
                    />
                </SettingsRowItem>
            </SettingsRow>
            <SettingsRow>
                <SettingsRowItem>
                    <SettingsSelect
                        label={t(plugin.questify.settings.reorderQuests.ignoredSubsort)}
                        options={ignoredSubsortManaOptions}
                        value={reorderQuests.ignoredSubsort}
                        selectionMode="single"
                        disabled={disabled}
                        fullWidth={true}
                        maxOptionsVisible={ignoredSubsortManaOptions.length}
                        onSelectionChange={value => updateSubsort("ignoredSubsort", value)}
                        tooltip={{
                            position: "top",
                            text: subsortTooltips.ignoredSubsort
                        }}
                    />
                </SettingsRowItem>
                <SettingsRowItem>
                    <SettingsSelect
                        label={t(plugin.questify.settings.reorderQuests.expiredSubsort)}
                        options={expiredSubsortManaOptions}
                        value={reorderQuests.expiredSubsort}
                        selectionMode="single"
                        disabled={disabled}
                        fullWidth={true}
                        maxOptionsVisible={expiredSubsortManaOptions.length}
                        onSelectionChange={value => updateSubsort("expiredSubsort", value)}
                        tooltip={{
                            position: "top",
                            text: subsortTooltips.expiredSubsort
                        }}
                    />
                </SettingsRowItem>
            </SettingsRow>
            <SettingsSubheader>{t(plugin.questify.settings.reorderQuests.memory)}</SettingsSubheader>
            <SettingsSubtleSwitch
                checked={reorderQuests.rememberQuestPageSort}
                disabled={disabled}
                label={t(plugin.questify.settings.reorderQuests.rememberSort)}
                onChange={checked => updateRememberSetting("rememberQuestPageSort", checked)}
                bottomSpacing="5"
                tooltip={{
                    position: "top",
                    text: t(plugin.questify.settings.reorderQuests.rememberSortTooltip)
                }}
            />
            <SettingsSubtleSwitch
                checked={reorderQuests.rememberQuestPageFilters}
                disabled={disabled}
                label={t(plugin.questify.settings.reorderQuests.rememberFilters)}
                onChange={checked => updateRememberSetting("rememberQuestPageFilters", checked)}
                tooltip={{
                    position: "top",
                    text: t(plugin.questify.settings.reorderQuests.rememberFiltersTooltip)
                }}
            />
        </SettingsCard>
    );
}
