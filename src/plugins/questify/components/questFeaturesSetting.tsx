/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2026 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { QuestTaskType } from "@plexcord/discord-types/enums";
import type { JSX } from "react";

import { getQuestifySettings, useQuestifySettings } from "../settings/access";
import { resetDangerousSettings } from "../settings/dangerous";
import { autoCompleteQuestTaskTypes, defaultAutoCompleteQuestTypes, isAutoCompleteCompatible } from "../settings/def";
import { validateIgnoredQuests } from "../settings/ignoredQuests";
import { Alerts, q } from "../utils/ui";
import { ManaButton, type ManaSelectOption, SettingsCard, SettingsDescription, SettingsHeader, SettingsNotice, SettingsParagraph, SettingsSelect, SettingsSubheader, SettingsSubtleSwitch } from "./shared";

type QuestDisableSettingKey =
    | "disableAccountPanelPromo"
    | "disableAccountPanelQuestProgress"
    | "disableFriendsListPromo"
    | "disableMembersListPromo"
    | "disableOrbsAndQuestsBadges"
    | "disableRelocationNotices"
    | "disableSponsoredBanner";

type QuestModifySettingKey =
    | "autoEnrollQuests"
    | "autoCompleteQuests"
    | "autoCompleteQuestsSimultaneously"
    | "resumeInterruptedQuests"
    | "completeVideoQuestsQuicker"
    | "preventVideoQuestsPausing"
    | "hideNonAutoCompletableQuests"
    | "makeMobileVideoQuestsDesktopCompatible";

interface QuestDisableOption {
    key: QuestDisableSettingKey;
    label: string;
}

function getDisableFeatureOptions(): QuestDisableOption[] {
    return [
        { key: "disableSponsoredBanner", label: t(plugin.questify.settings.questFeatures.disableOptions.sponsoredBanner) },
        { key: "disableRelocationNotices", label: t(plugin.questify.settings.questFeatures.disableOptions.relocationNotices) },
        { key: "disableFriendsListPromo", label: t(plugin.questify.settings.questFeatures.disableOptions.friendsListPromo) },
        { key: "disableMembersListPromo", label: t(plugin.questify.settings.questFeatures.disableOptions.membersListPromo) },
        { key: "disableAccountPanelPromo", label: t(plugin.questify.settings.questFeatures.disableOptions.accountPanelPromo) },
        { key: "disableAccountPanelQuestProgress", label: t(plugin.questify.settings.questFeatures.disableOptions.accountPanelProgress) },
        { key: "disableOrbsAndQuestsBadges", label: t(plugin.questify.settings.questFeatures.disableOptions.orbsAndQuestsBadges) },
    ];
}

function getAutoCompleteQuestTypeLabels(): Record<typeof autoCompleteQuestTaskTypes[number], string> {
    return {
        [QuestTaskType.WATCH_VIDEO]: t(plugin.questify.questTypes.watchVideo),
        [QuestTaskType.WATCH_VIDEO_ON_MOBILE]: t(plugin.questify.questTypes.watchVideoOnMobile),
        [QuestTaskType.ACHIEVEMENT_IN_ACTIVITY]: t(plugin.questify.questTypes.achievementInActivity),
        [QuestTaskType.PLAY_ACTIVITY]: t(plugin.questify.questTypes.playActivity),
        [QuestTaskType.PLAY_ON_DESKTOP]: t(plugin.questify.questTypes.playOnDesktop),
        [QuestTaskType.PLAY_ON_PLAYSTATION]: t(plugin.questify.questTypes.playOnPlayStation),
        [QuestTaskType.PLAY_ON_XBOX]: t(plugin.questify.questTypes.playOnXbox),
    };
}

function getAutoCompleteQuestTypeManaOptions(): ManaSelectOption[] {
    const labels = getAutoCompleteQuestTypeLabels();

    return autoCompleteQuestTaskTypes.map(questType => ({
        id: String(questType),
        label: labels[questType],
        value: String(questType),
        disabled: !isAutoCompleteCompatible(questType),
    }));
}

export function QuestFeaturesSetting(): JSX.Element {
    const questFeatures = useQuestifySettings([
        "disableQuestsEverything",
        "disableSponsoredBanner",
        "disableRelocationNotices",
        "disableFriendsListPromo",
        "disableMembersListPromo",
        "disableAccountPanelPromo",
        "disableAccountPanelQuestProgress",
        "disableOrbsAndQuestsBadges",
        "resumeInterruptedQuests",
        "allowChangingDangerousSettings",
        "makeMobileVideoQuestsDesktopCompatible",
        "usedKonamiCode",
        "autoEnrollQuests",
        "autoCompleteQuests",
        "autoCompleteQuestsSimultaneously",
        "autoCompleteQuestTypes",
        "completeVideoQuestsQuicker",
        "preventVideoQuestsPausing",
        "hideNonAutoCompletableQuests",
    ]);

    const disableFeatureOptions = getDisableFeatureOptions();
    const disableManaOptions: ManaSelectOption[] = disableFeatureOptions.map(({ key, label }) => ({
        id: key,
        label,
        value: key,
    }));
    const autoCompleteQuestTypeManaOptions = getAutoCompleteQuestTypeManaOptions();

    const selectedDisableValues = disableFeatureOptions
        .filter(({ key }) => questFeatures[key])
        .map(({ key }) => key);

    const selectedAutoCompleteQuestTypeValues = autoCompleteQuestTaskTypes
        .filter(questType => isAutoCompleteCompatible(questType) && questFeatures.autoCompleteQuestTypes[questType] === true)
        .map(questType => String(questType));

    function updateDisableValue(value: string | string[] | null) {
        const selectedKeys = new Set(Array.isArray(value) ? value : value ? [value] : []);

        for (const { key } of disableFeatureOptions) {
            getQuestifySettings()[key] = selectedKeys.has(key);
        }
    }

    function confirmDangerousSettingChange(body: string, onConfirm: () => void) {
        Alerts.show({
            title: t(plugin.questify.alert.dangerous.title),
            body,
            confirmText: t(plugin.questify.alert.dangerous.confirm),
            confirmVariant: "critical-primary",
            cancelText: t(plugin.questify.alert.dangerous.cancel),
            onConfirm,
        });
    }

    function updateAutoCompleteQuestTypes(value: string | string[] | null) {
        const selectedValues = new Set(Array.isArray(value) ? value : value ? [value] : []);
        const nextAutoCompleteQuestTypes = { ...defaultAutoCompleteQuestTypes };

        for (const questType of autoCompleteQuestTaskTypes) {
            const nextValue = selectedValues.has(String(questType))
                && isAutoCompleteCompatible(questType);

            nextAutoCompleteQuestTypes[questType] = nextValue;
        }

        getQuestifySettings().autoCompleteQuestTypes = nextAutoCompleteQuestTypes;
        validateIgnoredQuests();
    }

    function updateDisableEverything(checked: boolean) {
        function setDisableEverything() {
            getQuestifySettings().disableQuestsEverything = checked;
        }

        if (checked) {
            confirmDangerousSettingChange(
                t(plugin.questify.alert.dangerous.disableEverything),
                () => {
                    resetDangerousSettings();
                    setDisableEverything();
                }
            );
        } else {
            setDisableEverything();
        }
    }

    function updateDangerousAccess(checked: boolean) {
        function setDangerousAccess() {
            getQuestifySettings().allowChangingDangerousSettings = checked;
        }

        if (checked) {
            confirmDangerousSettingChange(
                t(plugin.questify.alert.dangerous.allowDangerous),
                setDangerousAccess
            );
        } else {
            resetDangerousSettings();
            setDangerousAccess();
        }
    }

    function updateModifyValue(key: QuestModifySettingKey, checked: boolean) {
        getQuestifySettings()[key] = checked;

        if (key === "hideNonAutoCompletableQuests" || key === "makeMobileVideoQuestsDesktopCompatible") {
            validateIgnoredQuests();
        }
    }

    return (
        <SettingsCard>
            <SettingsHeader>{t(plugin.questify.settings.questFeatures.title)}</SettingsHeader>
            <SettingsDescription>{t(plugin.questify.settings.questFeatures.description)}</SettingsDescription>
            <SettingsSubheader>{t(plugin.questify.settings.questFeatures.disableFeatures)}</SettingsSubheader>
            <SettingsSubtleSwitch
                checked={questFeatures.disableQuestsEverything}
                label={t(plugin.questify.settings.questFeatures.disableEverything)}
                onChange={updateDisableEverything}
                bottomSpacing="10"
                tooltip={{
                    position: "top",
                    text: t(plugin.questify.settings.questFeatures.disableEverythingTooltip)
                }}
            />
            <SettingsSelect
                label={t(plugin.questify.settings.questFeatures.disableSpecific)}
                wrapTags={true}
                options={disableManaOptions}
                value={selectedDisableValues}
                closeOnSelect={false}
                maxOptionsVisible={7}
                selectionMode="multiple"
                disabled={questFeatures.disableQuestsEverything}
                onSelectionChange={updateDisableValue}
                tooltip={{
                    position: "top",
                    text: t(plugin.questify.settings.questFeatures.disableSpecificTooltip)
                }}
            />
            <SettingsSubheader>{t(plugin.questify.settings.questFeatures.modifyFeatures)}</SettingsSubheader>
            <SettingsNotice className={["notice-card-red", questFeatures.disableQuestsEverything ? "dimmed-settings-item" : undefined, questFeatures.allowChangingDangerousSettings ? undefined : "notice-card-solo", "no-bottom-margin"].filter(c => c !== undefined)}>
                <SettingsParagraph>
                    {t(plugin.questify.text.knownToPunish)} <a href="https://discord.com/safety/platform-manipulation-policy-explainer" target="_blank" rel="noreferrer">{t(plugin.questify.settings.questFeatures.tos)}</a>.
                </SettingsParagraph>
                <br />
                <SettingsParagraph>
                    {t(plugin.questify.text.punishmentConsists)} <strong>{t(plugin.questify.text.thePunishmentAlsoConsists)}</strong>
                </SettingsParagraph>
                <br />
                <SettingsParagraph>
                    {t(plugin.questify.text.dueToTheVarious)}
                </SettingsParagraph>
                <br />
                <SettingsParagraph>
                    {t(plugin.questify.settings.questFeatures.warningRisk)}
                </SettingsParagraph>
                <div className={q("settings-button", "allow-dangerous-button")}>
                    <ManaButton
                        text={questFeatures.allowChangingDangerousSettings
                            ? t(plugin.questify.settings.questFeatures.disallowDangerous)
                            : t(plugin.questify.settings.questFeatures.allowDangerous)}
                        variant={questFeatures.allowChangingDangerousSettings ? "critical-secondary" : "critical-primary"}
                        fullWidth={true}
                        disabled={questFeatures.disableQuestsEverything}
                        onClick={() => updateDangerousAccess(!questFeatures.allowChangingDangerousSettings)}
                        size="sm"
                    />
                </div>
                <div style={{ display: questFeatures.allowChangingDangerousSettings ? undefined : "none" }}>
                    <SettingsSubtleSwitch
                        disabled={questFeatures.disableQuestsEverything || !questFeatures.allowChangingDangerousSettings}
                        checked={questFeatures.hideNonAutoCompletableQuests}
                        label={t(plugin.questify.text.hideNonAutoCompletable)}
                        onChange={checked => updateModifyValue("hideNonAutoCompletableQuests", checked)}
                        topSpacing="10"
                        bottomSpacing="5"
                        tooltip={{
                            position: "top",
                            text: t(plugin.questify.text.hideIncompleteQuestsWith)
                        }}
                    />
                    <SettingsSubtleSwitch
                        disabled={questFeatures.disableQuestsEverything || !questFeatures.allowChangingDangerousSettings}
                        checked={questFeatures.completeVideoQuestsQuicker}
                        label={t(plugin.questify.settings.questFeatures.completeVideoQuicker)}
                        onChange={checked => updateModifyValue("completeVideoQuestsQuicker", checked)}
                        bottomSpacing="5"
                        tooltip={{
                            position: "top",
                            text: t(plugin.questify.settings.questFeatures.completeVideoQuickerTooltip)
                        }}
                    />
                    <SettingsSubtleSwitch
                        disabled={questFeatures.disableQuestsEverything || !questFeatures.allowChangingDangerousSettings}
                        checked={questFeatures.preventVideoQuestsPausing}
                        label={t(plugin.questify.text.preventVideoQuestsFrom)}
                        onChange={checked => updateModifyValue("preventVideoQuestsPausing", checked)}
                        bottomSpacing="5"
                        tooltip={{
                            position: "top",
                            text: t(plugin.questify.text.discordForcesYouTo)
                                + "\n\n" + t(plugin.questify.text.preventsVideoPausing)
                                + "\n\n" + t(plugin.questify.text.appliesOnlyToVideoQuests)
                        }}
                    />
                    <SettingsSubtleSwitch
                        disabled={questFeatures.disableQuestsEverything || !questFeatures.allowChangingDangerousSettings}
                        checked={questFeatures.makeMobileVideoQuestsDesktopCompatible}
                        label={t(plugin.questify.settings.questFeatures.mobileDesktop)}
                        onChange={checked => updateModifyValue("makeMobileVideoQuestsDesktopCompatible", checked)}
                        bottomSpacing="5"
                        tooltip={{
                            position: "top",
                            text: t(plugin.questify.settings.questFeatures.mobileDesktopTooltip)
                        }}
                    />
                    <SettingsSubtleSwitch
                        disabled={questFeatures.disableQuestsEverything || !questFeatures.allowChangingDangerousSettings}
                        checked={questFeatures.autoCompleteQuestsSimultaneously}
                        label={t(plugin.questify.settings.questFeatures.simultaneous)}
                        onChange={checked => updateModifyValue("autoCompleteQuestsSimultaneously", checked)}
                        bottomSpacing="5"
                        tooltip={{
                            position: "top",
                            text: t(plugin.questify.settings.questFeatures.simultaneousTooltip)
                        }}
                    />
                    <SettingsSubtleSwitch
                        disabled={questFeatures.disableQuestsEverything || !questFeatures.allowChangingDangerousSettings}
                        checked={questFeatures.resumeInterruptedQuests}
                        label={t(plugin.questify.settings.questFeatures.resumeInterrupted)}
                        onChange={checked => updateModifyValue("resumeInterruptedQuests", checked)}
                        bottomSpacing="5"
                        tooltip={{
                            position: "top",
                            text: t(plugin.questify.settings.questFeatures.resumeInterruptedTooltip)
                        }}
                    />
                    {questFeatures.usedKonamiCode === true && (
                        <>
                            <SettingsSubtleSwitch
                                disabled={questFeatures.disableQuestsEverything || !questFeatures.allowChangingDangerousSettings}
                                checked={questFeatures.autoCompleteQuests}
                                label={t(plugin.questify.settings.questFeatures.autoProcess)}
                                onChange={checked => updateModifyValue("autoCompleteQuests", checked)}
                                bottomSpacing="5"
                                tooltip={{
                                    position: "top",
                                    text: t(plugin.questify.settings.questFeatures.autoProcessTooltip)
                                }}
                            />
                            <SettingsSubtleSwitch
                                disabled={questFeatures.disableQuestsEverything || !questFeatures.allowChangingDangerousSettings}
                                checked={questFeatures.autoEnrollQuests}
                                label={t(plugin.questify.settings.questFeatures.autoEnroll)}
                                onChange={checked => updateModifyValue("autoEnrollQuests", checked)}
                                bottomSpacing="5"
                                tooltip={{
                                    position: "top",
                                    text: t(plugin.questify.settings.questFeatures.autoEnrollTooltip)
                                }}
                            />
                        </>
                    )}
                    <SettingsSelect
                        label={t(plugin.questify.settings.questFeatures.autoCompleteTypes)}
                        wrapTags={true}
                        options={autoCompleteQuestTypeManaOptions}
                        value={selectedAutoCompleteQuestTypeValues}
                        closeOnSelect={false}
                        maxOptionsVisible={7}
                        selectionMode="multiple"
                        disabled={questFeatures.disableQuestsEverything || !questFeatures.allowChangingDangerousSettings}
                        onSelectionChange={updateAutoCompleteQuestTypes}
                        tooltip={{
                            position: "top",
                            wider: true,
                            text: t(plugin.questify.settings.questFeatures.autoCompleteTypesTooltip)
                        }}
                    />
                </div>
            </SettingsNotice>
        </SettingsCard>
    );
}
