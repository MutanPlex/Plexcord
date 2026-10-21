/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2026 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { QuestRewardType, QuestTaskType } from "@plexcord/discord-types/enums";
import type { JSX } from "react";

import { enabledOnStartup } from "..";
import { getQuestifySettings, useQuestifySettings } from "../settings/access";
import { type QuestButtonAction, type QuestButtonDisplayMode, type QuestButtonIncludedTypes, type QuestButtonIndicatorMode } from "../settings/def";
import { startAutoFetchingQuests } from "../settings/fetching";
import { validateIgnoredQuests } from "../settings/ignoredQuests";
import { canShowBadge, canShowButton, canShowPill } from "../utils/ui";
import { DummyQuestButton } from "./questButton";
import { type ManaSelectOption, SettingsCard, SettingsColorPicker, SettingsDescription, SettingsHeader, SettingsRow, SettingsRowItem, SettingsSelect, SettingsSubheader } from "./shared";

interface QuestButtonIncludedTypeOption {
    label: string;
    value: QuestTaskType | QuestRewardType;
}

function getQuestButtonDisplayOptions() {
    return [
        { label: t(plugin.questify.settings.questButton.display.always), value: "always" },
        { label: t(plugin.questify.settings.questButton.display.unclaimed), value: "unclaimed" },
        { label: t(plugin.questify.settings.questButton.display.never), value: "never" },
    ] as const satisfies readonly { label: string; value: QuestButtonDisplayMode; }[];
}

function getQuestButtonIndicatorOptions() {
    return [
        { label: t(plugin.questify.settings.questButton.indicator.pill), value: "pill" },
        { label: t(plugin.questify.settings.questButton.indicator.badge), value: "badge" },
        { label: t(plugin.questify.settings.questButton.indicator.both), value: "both" },
        { label: t(plugin.questify.settings.questButton.indicator.none), value: "none" },
    ] as const satisfies readonly { label: string; value: QuestButtonIndicatorMode; }[];
}

function getQuestButtonClickOptions() {
    return [
        { label: t(plugin.questify.settings.questButton.action.openQuests), value: "open-quests" },
        { label: t(plugin.questify.settings.questButton.action.contextMenu), value: "context-menu" },
        { label: t(plugin.questify.settings.questButton.action.pluginSettings), value: "plugin-settings" },
        { label: t(plugin.questify.settings.questButton.action.nothing), value: "nothing" },
    ] as const satisfies readonly { label: string; value: QuestButtonAction; }[];
}

function getQuestButtonRewardTypeOptions(): QuestButtonIncludedTypeOption[] {
    return [
        { label: t(plugin.questify.settings.questButton.rewardTypes.orbs), value: QuestRewardType.VIRTUAL_CURRENCY },
        { label: t(plugin.questify.settings.questButton.rewardTypes.nitroCodes), value: QuestRewardType.FRACTIONAL_PREMIUM },
        { label: t(plugin.questify.settings.questButton.rewardTypes.rewardCodes), value: QuestRewardType.REWARD_CODE },
        { label: t(plugin.questify.settings.questButton.rewardTypes.inGameItems), value: QuestRewardType.IN_GAME },
        { label: t(plugin.questify.settings.questButton.rewardTypes.profileCollectibles), value: QuestRewardType.COLLECTIBLE },
    ];
}

function getQuestButtonQuestTypeOptions(): QuestButtonIncludedTypeOption[] {
    return [
        { label: t(plugin.questify.questTypes.watchVideo), value: QuestTaskType.WATCH_VIDEO },
        { label: t(plugin.questify.questTypes.watchVideoOnMobile), value: QuestTaskType.WATCH_VIDEO_ON_MOBILE },
        { label: t(plugin.questify.questTypes.achievementInActivity), value: QuestTaskType.ACHIEVEMENT_IN_ACTIVITY },
        { label: t(plugin.questify.questTypes.achievementInGame), value: QuestTaskType.ACHIEVEMENT_IN_GAME },
        { label: t(plugin.questify.questTypes.playActivity), value: QuestTaskType.PLAY_ACTIVITY },
        { label: t(plugin.questify.questTypes.playOnDesktop), value: QuestTaskType.PLAY_ON_DESKTOP },
        { label: t(plugin.questify.questTypes.playOnDesktopV2), value: QuestTaskType.PLAY_ON_DESKTOP_V2 },
        { label: t(plugin.questify.questTypes.streamOnDesktop), value: QuestTaskType.STREAM_ON_DESKTOP },
        { label: t(plugin.questify.questTypes.playOnPlayStation), value: QuestTaskType.PLAY_ON_PLAYSTATION },
        { label: t(plugin.questify.questTypes.playOnXbox), value: QuestTaskType.PLAY_ON_XBOX },
    ];
}

function toManaOptions<T extends string | number>(options: readonly { label: string; value: T; }[]): ManaSelectOption[] {
    return options.map(({ label, value }) => ({
        id: String(value),
        label,
        value: String(value),
    }));
}

export function QuestButtonSetting(): JSX.Element {
    const questButton = useQuestifySettings([
        "disableQuestsEverything",
        "questButtonDisplay",
        "questButtonIncludedTypes",
        "questButtonIndicator",
        "questButtonBadgeCount",
        "questButtonBadgeColor",
        "questButtonLeftClickAction",
        "questButtonMiddleClickAction",
        "questButtonRightClickAction",
    ]);

    const disabled = questButton.disableQuestsEverything;
    const includedTypes = questButton.questButtonIncludedTypes as QuestButtonIncludedTypes;

    const questButtonRewardTypeOptions = getQuestButtonRewardTypeOptions();
    const questButtonQuestTypeOptions = getQuestButtonQuestTypeOptions();
    const questButtonDisplayManaOptions = toManaOptions(getQuestButtonDisplayOptions());
    const questButtonIndicatorManaOptions = toManaOptions(getQuestButtonIndicatorOptions());
    const questButtonClickManaOptions = toManaOptions(getQuestButtonClickOptions());
    const questButtonRewardTypeManaOptions = toManaOptions(questButtonRewardTypeOptions);
    const questButtonQuestTypeManaOptions = toManaOptions(questButtonQuestTypeOptions);

    const selectedRewardTypes = questButtonRewardTypeOptions
        .filter(({ value }) => includedTypes[value])
        .map(({ value }) => String(value));

    const selectedQuestTypes = questButtonQuestTypeOptions
        .filter(({ value }) => includedTypes[value])
        .map(({ value }) => String(value));

    function updateQuestButtonDisplay(value: string | string[] | null) {
        if (typeof value !== "string") return;

        getQuestifySettings().questButtonDisplay = value as QuestButtonDisplayMode;
        startAutoFetchingQuests(true);
    }

    function updateQuestButtonIndicator(value: string | string[] | null) {
        if (typeof value !== "string") return;

        getQuestifySettings().questButtonIndicator = value as QuestButtonIndicatorMode;
        startAutoFetchingQuests(true);
    }

    function updateQuestButtonAction(key: "questButtonLeftClickAction" | "questButtonMiddleClickAction" | "questButtonRightClickAction", value: string | string[] | null) {
        if (typeof value !== "string") return;

        getQuestifySettings()[key] = value as QuestButtonAction;
    }

    function updateBadgeColor(value: number | null) {
        getQuestifySettings().questButtonBadgeColor = value;
    }

    function updateIncludedTypes(options: readonly QuestButtonIncludedTypeOption[], value: string | string[] | null) {
        const selectedValues = new Set(Array.isArray(value) ? value : value ? [value] : []);
        const nextIncludedTypes = { ...getQuestifySettings().questButtonIncludedTypes };

        for (const option of options) {
            nextIncludedTypes[option.value] = selectedValues.has(String(option.value));
        }

        getQuestifySettings().questButtonIncludedTypes = nextIncludedTypes;
        validateIgnoredQuests();
    }

    return (
        <SettingsCard>
            <SettingsRow>
                <SettingsRowItem>
                    <SettingsHeader>{t(plugin.questify.settings.questButton.title)}</SettingsHeader>
                    <SettingsDescription>{t(plugin.questify.settings.questButton.description)}</SettingsDescription>
                </SettingsRowItem>
                {enabledOnStartup && <SettingsRowItem width="content">
                    <DummyQuestButton
                        badgeColor={questButton.questButtonBadgeColor}
                        leftClickAction={questButton.questButtonLeftClickAction}
                        middleClickAction={questButton.questButtonMiddleClickAction}
                        rightClickAction={questButton.questButtonRightClickAction}
                        showBadge={canShowBadge(questButton.questButtonIndicator)}
                        showPill={canShowPill(questButton.questButtonIndicator)}
                        visible={canShowButton(questButton.questButtonDisplay)}
                    />
                </SettingsRowItem>}
            </SettingsRow>
            <SettingsSubheader className="no-top-margin">{t(plugin.questify.settings.questButton.behavior)}</SettingsSubheader>
            <SettingsRow>
                <SettingsRowItem>
                    <SettingsSelect
                        label={t(plugin.questify.settings.questButton.leftClick)}
                        options={questButtonClickManaOptions}
                        value={questButton.questButtonLeftClickAction}
                        selectionMode="single"
                        disabled={disabled}
                        fullWidth={true}
                        onSelectionChange={value => updateQuestButtonAction("questButtonLeftClickAction", value)}
                    />
                </SettingsRowItem>
                <SettingsRowItem>
                    <SettingsSelect
                        label={t(plugin.questify.settings.questButton.middleClick)}
                        options={questButtonClickManaOptions}
                        value={questButton.questButtonMiddleClickAction}
                        selectionMode="single"
                        disabled={disabled}
                        fullWidth={true}
                        onSelectionChange={value => updateQuestButtonAction("questButtonMiddleClickAction", value)}
                    />
                </SettingsRowItem>
                <SettingsRowItem>
                    <SettingsSelect
                        label={t(plugin.questify.settings.questButton.rightClick)}
                        options={questButtonClickManaOptions}
                        value={questButton.questButtonRightClickAction}
                        selectionMode="single"
                        disabled={disabled}
                        fullWidth={true}
                        onSelectionChange={value => updateQuestButtonAction("questButtonRightClickAction", value)}
                    />
                </SettingsRowItem>
            </SettingsRow>
            <SettingsRow>
                <SettingsRowItem>
                    <SettingsSelect
                        label={t(plugin.questify.settings.questButton.visibility)}
                        options={questButtonDisplayManaOptions}
                        value={questButton.questButtonDisplay}
                        selectionMode="single"
                        disabled={disabled}
                        fullWidth={true}
                        onSelectionChange={updateQuestButtonDisplay}
                        tooltip={{
                            position: "top",
                            text: t(plugin.questify.settings.questButton.visibilityTooltip)
                        }}
                    />
                </SettingsRowItem>
                <SettingsRowItem>
                    <SettingsSelect
                        label={t(plugin.questify.settings.questButton.unclaimedIndicator)}
                        options={questButtonIndicatorManaOptions}
                        value={questButton.questButtonIndicator}
                        selectionMode="single"
                        disabled={disabled}
                        fullWidth={true}
                        onSelectionChange={updateQuestButtonIndicator}
                        tooltip={{
                            position: "top",
                            text: t(plugin.questify.settings.questButton.unclaimedIndicatorTooltip)
                        }}
                    />
                </SettingsRowItem>
                <SettingsRowItem>
                    <SettingsColorPicker
                        label={t(plugin.questify.settings.questButton.badgeColor)}
                        className="quest-button-color-picker"
                        color={questButton.questButtonBadgeColor}
                        disabled={disabled}
                        onChange={updateBadgeColor}
                        showEyeDropper={true}
                    />
                </SettingsRowItem>
            </SettingsRow>
            <SettingsSubheader>{t(plugin.questify.settings.questButton.relevancy)}</SettingsSubheader>
            <SettingsSelect
                label={t(plugin.questify.settings.questButton.includedRewardTypes)}
                wrapTags={true}
                options={questButtonRewardTypeManaOptions}
                value={selectedRewardTypes}
                closeOnSelect={false}
                maxOptionsVisible={questButtonRewardTypeManaOptions.length}
                selectionMode="multiple"
                disabled={disabled}
                fullWidth={true}
                onSelectionChange={value => updateIncludedTypes(questButtonRewardTypeOptions, value)}
                tooltip={{
                    position: "top",
                    text: t(plugin.questify.settings.questButton.includedRewardTypesTooltip)
                }}
            />
            <SettingsSelect
                label={t(plugin.questify.settings.questButton.includedQuestTypes)}
                labelClassName="margin-top-9"
                wrapTags={true}
                options={questButtonQuestTypeManaOptions}
                value={selectedQuestTypes}
                closeOnSelect={false}
                maxOptionsVisible={questButtonQuestTypeManaOptions.length}
                selectionMode="multiple"
                disabled={disabled}
                fullWidth={true}
                onSelectionChange={value => updateIncludedTypes(questButtonQuestTypeOptions, value)}
                tooltip={{
                    position: "top",
                    text: t(plugin.questify.settings.questButton.includedQuestTypesTooltip)
                }}
            />
        </SettingsCard>
    );
}
