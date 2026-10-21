/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2026 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { definePluginSettings, PlainSettings, SettingsStore } from "@api/Settings";
import ErrorBoundary from "@components/ErrorBoundary";
import { OptionType } from "@utils/types";

import { QuestButtonSetting } from "../components/questButtonSettings";
import { QuestFeaturesSetting } from "../components/questFeaturesSetting";
import { QuestNotificationsSetting } from "../components/questNotificationsSetting";
import { QuestTilesSetting } from "../components/questTilesSetting";
import { ReorderQuestsSetting } from "../components/reorderQuestsSetting";
import { SettingsSearch } from "../components/settingsSearch";
import { defaultAcknowledgedNotices, defaultAllowChangingDangerousSettings, defaultAutoCompleteQuestsSimultaneously, defaultAutoCompleteQuestTypes, defaultClaimedSubsort, defaultCompleteVideoQuestsQuicker, defaultDisableAccountPanelPromo, defaultDisableAccountPanelQuestProgress, defaultDisableFriendsListPromo, defaultDisableMembersListPromo, defaultDisableOrbsAndQuestsBadges, defaultDisableQuestsEverything, defaultDisableRelocationNotices, defaultDisableSponsoredBanner, defaultExpiredSubsort, defaultHiddenQuestStatuses, defaultHideNonAutoCompletableQuests, defaultIgnoredQuestIDs, defaultIgnoredSubsort, defaultIsOnQuestsPage, defaultLastQuestPageFilters, defaultLastQuestPageSort, defaultLeftClickAction, defaultMakeMobileVideoQuestsDesktopCompatible, defaultMiddleClickAction, defaultNewExcludedQuestAlertSound, defaultNewExcludedQuestAlertVolume, defaultNewQuestAlertSound, defaultNewQuestAlertVolume, defaultNotifyOnNewExcludedQuests, defaultNotifyOnNewQuests, defaultNotifyOnQuestComplete, defaultPreventVideoQuestsPausing, defaultQuestButtonBadgeColor, defaultQuestButtonBadgeCount, defaultQuestButtonDisplay, defaultQuestButtonIncludedTypes, defaultQuestButtonIndicator, defaultQuestCompletedAlertSound, defaultQuestCompletedAlertVolume, defaultQuestFetchInterval, defaultQuestOrder, defaultQuestTileClaimedColorSetting, defaultQuestTileExpiredColorSetting, defaultQuestTileGradient, defaultQuestTileIgnoredColorSetting, defaultQuestTilePreload, defaultQuestTileUnclaimedColorSetting, defaultRememberQuestPageFilters, defaultRememberQuestPageSort, defaultResumeInterruptedQuests, defaultResumeQuestIDs, defaultRightClickAction, defaultUnclaimedSubsort, type QuestButtonAction, type QuestButtonDisplayMode, type QuestButtonIncludedTypes, type QuestButtonIndicatorMode, type QuestOrderStatus } from "./def";

const MIGRATION_TARGET = 1;
const CURRENT_SETTINGS = PlainSettings.plugins.Questify;

if (CURRENT_SETTINGS) {
    let migrationVersion = CURRENT_SETTINGS.migrationVersion ?? 0;

    // 0 -> 1: Reset Settings
    if (migrationVersion === 0) {
        PlainSettings.plugins.Questify = { enabled: CURRENT_SETTINGS.enabled, migrationVersion: 1 };
        migrationVersion = 1;
    }

    if (migrationVersion !== CURRENT_SETTINGS.migrationVersion) {
        SettingsStore.markAsChanged();
    }
}

export const settings = definePluginSettings({
    migrationVersion: {
        type: OptionType.NUMBER,
        label: () => t(plugin.questify.option.migrationVersion.label),
        description: () => t(plugin.questify.option.migrationVersion.description),
        default: MIGRATION_TARGET,
        hidden: true,
    },
    acknowledgedNotices: {
        label: () => t(plugin.questify.option.acknowledgedNotices.label),
        type: OptionType.CUSTOM,
        description: () => t(plugin.questify.option.acknowledgedNotices.description),
        default: { ...defaultAcknowledgedNotices },
        hidden: true,
    },
    settingsSearch: {
        label: () => t(plugin.questify.option.settingsSearch.label),
        type: OptionType.COMPONENT,
        component: ErrorBoundary.wrap(SettingsSearch) as any,
        description: () => t(plugin.questify.option.settingsSearch.description),
    },
    questFeatures: {
        type: OptionType.COMPONENT,
        component: ErrorBoundary.wrap(QuestFeaturesSetting) as any,
        label: () => t(plugin.questify.option.questFeatures.label),
        description: () => t(plugin.questify.option.questFeatures.description),
    },
    disableQuestsEverything: {
        type: OptionType.BOOLEAN,
        label: () => t(plugin.questify.option.disableQuestsEverything.label),
        description: () => t(plugin.questify.option.disableQuestsEverything.description),
        default: defaultDisableQuestsEverything,
        restartNeeded: true,
        hidden: true,
    },
    disableRelocationNotices: {
        type: OptionType.BOOLEAN,
        label: () => t(plugin.questify.option.disableRelocationNotices.label),
        description: () => t(plugin.questify.option.disableRelocationNotices.description),
        default: defaultDisableRelocationNotices,
        restartNeeded: true,
        hidden: true,
    },
    disableSponsoredBanner: {
        type: OptionType.BOOLEAN,
        label: () => t(plugin.questify.option.disableSponsoredBanner.label),
        description: () => t(plugin.questify.option.disableSponsoredBanner.description),
        default: defaultDisableSponsoredBanner,
        restartNeeded: true,
        hidden: true,
    },
    disableAccountPanelPromo: {
        type: OptionType.BOOLEAN,
        label: () => t(plugin.questify.option.disableAccountPanelPromo.label),
        description: () => t(plugin.questify.option.disableAccountPanelPromo.description),
        default: defaultDisableAccountPanelPromo,
        restartNeeded: true,
        hidden: true,
    },
    disableAccountPanelQuestProgress: {
        type: OptionType.BOOLEAN,
        label: () => t(plugin.questify.option.disableAccountPanelQuestProgress.label),
        description: () => t(plugin.questify.option.disableAccountPanelQuestProgress.description),
        default: defaultDisableAccountPanelQuestProgress,
        restartNeeded: true,
        hidden: true,
    },
    disableOrbsAndQuestsBadges: {
        type: OptionType.BOOLEAN,
        label: () => t(plugin.questify.option.disableOrbsAndQuestsBadges.label),
        description: () => t(plugin.questify.option.disableOrbsAndQuestsBadges.description),
        default: defaultDisableOrbsAndQuestsBadges,
        restartNeeded: true,
        hidden: true,
    },
    disableFriendsListPromo: {
        type: OptionType.BOOLEAN,
        label: () => t(plugin.questify.option.disableFriendsListPromo.label),
        description: () => t(plugin.questify.option.disableFriendsListPromo.description),
        default: defaultDisableFriendsListPromo,
        restartNeeded: true,
        hidden: true,
    },
    disableMembersListPromo: {
        type: OptionType.BOOLEAN,
        label: () => t(plugin.questify.option.disableMembersListPromo.label),
        description: () => t(plugin.questify.option.disableMembersListPromo.description),
        default: defaultDisableMembersListPromo,
        restartNeeded: true,
        hidden: true,
    },
    allowChangingDangerousSettings: {
        type: OptionType.BOOLEAN,
        label: () => t(plugin.questify.option.allowChangingDangerousSettings.label),
        description: () => t(plugin.questify.option.allowChangingDangerousSettings.description),
        default: defaultAllowChangingDangerousSettings,
        hidden: true,
    },
    resumeInterruptedQuests: {
        type: OptionType.BOOLEAN,
        label: () => t(plugin.questify.option.resumeInterruptedQuests.label),
        description: () => t(plugin.questify.option.resumeInterruptedQuests.description),
        default: defaultResumeInterruptedQuests,
        restartNeeded: true,
        hidden: true,
    },
    makeMobileVideoQuestsDesktopCompatible: {
        type: OptionType.BOOLEAN,
        label: () => t(plugin.questify.option.makeMobileVideoQuestsDesktopCompatible.label),
        description: () => t(plugin.questify.option.makeMobileVideoQuestsDesktopCompatible.description),
        default: defaultMakeMobileVideoQuestsDesktopCompatible,
        restartNeeded: true,
        hidden: true,
    },
    hideNonAutoCompletableQuests: {
        label: () => t(plugin.questify.option.hideNonAutoCompletableQuests.label),
        type: OptionType.BOOLEAN,
        description: () => t(plugin.questify.option.hideNonAutoCompletableQuests.description),
        default: defaultHideNonAutoCompletableQuests,
        hidden: true,
    },
    autoCompleteQuestsSimultaneously: {
        type: OptionType.BOOLEAN,
        label: () => t(plugin.questify.option.autoCompleteQuestsSimultaneously.label),
        description: () => t(plugin.questify.option.autoCompleteQuestsSimultaneously.description),
        default: defaultAutoCompleteQuestsSimultaneously,
        restartNeeded: true,
        hidden: true,
    },
    completeVideoQuestsQuicker: {
        type: OptionType.BOOLEAN,
        label: () => t(plugin.questify.option.completeVideoQuestsQuicker.label),
        description: () => t(plugin.questify.option.completeVideoQuestsQuicker.description),
        default: defaultCompleteVideoQuestsQuicker,
        restartNeeded: true,
        hidden: true,
    },
    preventVideoQuestsPausing: {
        label: () => t(plugin.questify.option.preventVideoQuestsPausing.label),
        type: OptionType.BOOLEAN,
        description: () => t(plugin.questify.option.preventVideoQuestsPausing.description),
        default: defaultPreventVideoQuestsPausing,
        restartNeeded: true,
        hidden: true,
    },
    autoCompleteQuestTypes: {
        type: OptionType.CUSTOM,
        label: () => t(plugin.questify.option.autoCompleteQuestTypes.label),
        description: () => t(plugin.questify.option.autoCompleteQuestTypes.description),
        default: defaultAutoCompleteQuestTypes,
        restartNeeded: true,
        hidden: true,
    },
    questButton: {
        type: OptionType.COMPONENT,
        component: ErrorBoundary.wrap(QuestButtonSetting) as any,
        label: () => t(plugin.questify.option.questButton.label),
        description: () => t(plugin.questify.option.questButton.description),
    },
    questButtonDisplay: {
        type: OptionType.CUSTOM,
        label: () => t(plugin.questify.option.questButtonDisplay.label),
        description: () => t(plugin.questify.option.questButtonDisplay.description),
        default: defaultQuestButtonDisplay as QuestButtonDisplayMode,
        restartNeeded: true,
        hidden: true,
    },
    questButtonIncludedTypes: {
        type: OptionType.CUSTOM,
        label: () => t(plugin.questify.option.questButtonIncludedTypes.label),
        description: () => t(plugin.questify.option.questButtonIncludedTypes.description),
        default: defaultQuestButtonIncludedTypes as QuestButtonIncludedTypes,
        hidden: true,
    },
    questButtonIndicator: {
        type: OptionType.CUSTOM,
        label: () => t(plugin.questify.option.questButtonIndicator.label),
        description: () => t(plugin.questify.option.questButtonIndicator.description),
        default: defaultQuestButtonIndicator as QuestButtonIndicatorMode,
        hidden: true,
    },
    questButtonBadgeCount: {
        type: OptionType.NUMBER,
        label: () => t(plugin.questify.option.questButtonBadgeCount.label),
        description: () => t(plugin.questify.option.questButtonBadgeCount.description),
        default: defaultQuestButtonBadgeCount,
        hidden: true,
    },
    questButtonBadgeColor: {
        type: OptionType.NUMBER | OptionType.CUSTOM,
        label: () => t(plugin.questify.option.questButtonBadgeColor.label),
        description: () => t(plugin.questify.option.questButtonBadgeColor.description),
        default: defaultQuestButtonBadgeColor as number | null,
        hidden: true,
    },
    questButtonLeftClickAction: {
        type: OptionType.CUSTOM,
        label: () => t(plugin.questify.option.questButtonLeftClickAction.label),
        description: () => t(plugin.questify.option.questButtonLeftClickAction.description),
        default: defaultLeftClickAction as QuestButtonAction,
        hidden: true,
    },
    questButtonMiddleClickAction: {
        type: OptionType.CUSTOM,
        label: () => t(plugin.questify.option.questButtonMiddleClickAction.label),
        description: () => t(plugin.questify.option.questButtonMiddleClickAction.description),
        default: defaultMiddleClickAction as QuestButtonAction,
        hidden: true,
    },
    questButtonRightClickAction: {
        type: OptionType.CUSTOM,
        label: () => t(plugin.questify.option.questButtonRightClickAction.label),
        description: () => t(plugin.questify.option.questButtonRightClickAction.description),
        default: defaultRightClickAction as QuestButtonAction,
        hidden: true,
    },
    questNotifications: {
        type: OptionType.COMPONENT,
        component: ErrorBoundary.wrap(QuestNotificationsSetting) as any,
        label: () => t(plugin.questify.option.questNotifications.label),
        description: () => t(plugin.questify.option.questNotifications.description),
    },
    notifyOnQuestComplete: {
        type: OptionType.BOOLEAN,
        label: () => t(plugin.questify.option.notifyOnQuestComplete.label),
        description: () => t(plugin.questify.option.notifyOnQuestComplete.description),
        default: defaultNotifyOnQuestComplete,
        hidden: true,
    },
    notifyOnNewQuests: {
        type: OptionType.BOOLEAN,
        label: () => t(plugin.questify.option.notifyOnNewQuests.label),
        description: () => t(plugin.questify.option.notifyOnNewQuests.description),
        default: defaultNotifyOnNewQuests,
        hidden: true,
    },
    notifyOnNewExcludedQuests: {
        type: OptionType.BOOLEAN,
        label: () => t(plugin.questify.option.notifyOnNewExcludedQuests.label),
        description: () => t(plugin.questify.option.notifyOnNewExcludedQuests.description),
        default: defaultNotifyOnNewExcludedQuests,
        hidden: true,
    },
    questCompletedAlertSound: {
        type: OptionType.STRING | OptionType.CUSTOM,
        label: () => t(plugin.questify.option.questCompletedAlertSound.label),
        description: () => t(plugin.questify.option.questCompletedAlertSound.description),
        default: defaultQuestCompletedAlertSound as string | null,
        hidden: true,
    },
    questCompletedAlertVolume: {
        type: OptionType.NUMBER,
        label: () => t(plugin.questify.option.questCompletedAlertVolume.label),
        description: () => t(plugin.questify.option.questCompletedAlertVolume.description),
        default: defaultQuestCompletedAlertVolume,
        hidden: true,
    },
    questFetchInterval: {
        type: OptionType.NUMBER,
        label: () => t(plugin.questify.option.questFetchInterval.label),
        description: () => t(plugin.questify.option.questFetchInterval.description),
        default: defaultQuestFetchInterval,
        hidden: true,
    },
    newQuestAlertSound: {
        type: OptionType.STRING | OptionType.CUSTOM,
        label: () => t(plugin.questify.option.newQuestAlertSound.label),
        description: () => t(plugin.questify.option.newQuestAlertSound.description),
        default: defaultNewQuestAlertSound as string | null,
        hidden: true,
    },
    newQuestAlertVolume: {
        type: OptionType.NUMBER,
        label: () => t(plugin.questify.option.newQuestAlertVolume.label),
        description: () => t(plugin.questify.option.newQuestAlertVolume.description),
        default: defaultNewQuestAlertVolume,
        hidden: true,
    },
    newExcludedQuestAlertSound: {
        type: OptionType.STRING | OptionType.CUSTOM,
        label: () => t(plugin.questify.option.newExcludedQuestAlertSound.label),
        description: () => t(plugin.questify.option.newExcludedQuestAlertSound.description),
        default: defaultNewExcludedQuestAlertSound as string | null,
        hidden: true,
    },
    newExcludedQuestAlertVolume: {
        type: OptionType.NUMBER,
        label: () => t(plugin.questify.option.newExcludedQuestAlertVolume.label),
        description: () => t(plugin.questify.option.newExcludedQuestAlertVolume.description),
        default: defaultNewExcludedQuestAlertVolume,
        hidden: true,
    },
    questTiles: {
        type: OptionType.COMPONENT,
        component: ErrorBoundary.wrap(QuestTilesSetting) as any,
        label: () => t(plugin.questify.option.questTiles.label),
        description: () => t(plugin.questify.option.questTiles.description),
    },
    questTileUnclaimedColor: {
        type: OptionType.CUSTOM,
        label: () => t(plugin.questify.option.questTileUnclaimedColor.label),
        description: () => t(plugin.questify.option.questTileUnclaimedColor.description),
        default: { ...defaultQuestTileUnclaimedColorSetting },
        hidden: true,
    },
    questTileClaimedColor: {
        type: OptionType.CUSTOM,
        label: () => t(plugin.questify.option.questTileClaimedColor.label),
        description: () => t(plugin.questify.option.questTileClaimedColor.description),
        default: { ...defaultQuestTileClaimedColorSetting },
        hidden: true,
    },
    questTileIgnoredColor: {
        type: OptionType.CUSTOM,
        label: () => t(plugin.questify.option.questTileIgnoredColor.label),
        description: () => t(plugin.questify.option.questTileIgnoredColor.description),
        default: { ...defaultQuestTileIgnoredColorSetting },
        hidden: true,
    },
    questTileExpiredColor: {
        type: OptionType.CUSTOM,
        label: () => t(plugin.questify.option.questTileExpiredColor.label),
        description: () => t(plugin.questify.option.questTileExpiredColor.description),
        default: { ...defaultQuestTileExpiredColorSetting },
        hidden: true,
    },
    questTileGradient: {
        type: OptionType.STRING,
        label: () => t(plugin.questify.option.questTileGradient.label),
        description: () => t(plugin.questify.option.questTileGradient.description),
        default: defaultQuestTileGradient,
        hidden: true,
    },
    questTilePreload: {
        type: OptionType.BOOLEAN,
        label: () => t(plugin.questify.option.questTilePreload.label),
        description: () => t(plugin.questify.option.questTilePreload.description),
        default: defaultQuestTilePreload,
        hidden: true,
    },
    reorderQuests: {
        type: OptionType.COMPONENT,
        label: () => t(plugin.questify.option.reorderQuests.label),
        description: () => t(plugin.questify.option.reorderQuests.description),
        component: ErrorBoundary.wrap(ReorderQuestsSetting) as any,
    },
    questOrder: {
        type: OptionType.CUSTOM,
        label: () => t(plugin.questify.option.questOrder.label),
        description: () => t(plugin.questify.option.questOrder.description),
        default: Array.from(defaultQuestOrder) as QuestOrderStatus[],
        hidden: true,
    },
    hiddenQuestStatuses: {
        label: () => t(plugin.questify.option.hiddenQuestStatuses.label),
        type: OptionType.CUSTOM,
        description: () => t(plugin.questify.option.hiddenQuestStatuses.description),
        default: Array.from(defaultHiddenQuestStatuses),
        hidden: true,
    },
    unclaimedSubsort: {
        type: OptionType.STRING,
        label: () => t(plugin.questify.option.unclaimedSubsort.label),
        description: () => t(plugin.questify.option.unclaimedSubsort.description),
        default: defaultUnclaimedSubsort,
        hidden: true,
    },
    claimedSubsort: {
        type: OptionType.STRING,
        label: () => t(plugin.questify.option.claimedSubsort.label),
        description: () => t(plugin.questify.option.claimedSubsort.description),
        default: defaultClaimedSubsort,
        hidden: true,
    },
    ignoredSubsort: {
        type: OptionType.STRING,
        label: () => t(plugin.questify.option.ignoredSubsort.label),
        description: () => t(plugin.questify.option.ignoredSubsort.description),
        default: defaultIgnoredSubsort,
        hidden: true,
    },
    expiredSubsort: {
        type: OptionType.STRING,
        label: () => t(plugin.questify.option.expiredSubsort.label),
        description: () => t(plugin.questify.option.expiredSubsort.description),
        default: defaultExpiredSubsort,
        hidden: true,
    },
    isOnQuestsPage: {
        type: OptionType.BOOLEAN,
        label: () => t(plugin.questify.option.isOnQuestsPage.label),
        description: () => t(plugin.questify.option.isOnQuestsPage.description),
        default: defaultIsOnQuestsPage,
        hidden: true,
    },
    rememberQuestPageSort: {
        type: OptionType.BOOLEAN,
        label: () => t(plugin.questify.option.rememberQuestPageSort.label),
        description: () => t(plugin.questify.option.rememberQuestPageSort.description),
        default: defaultRememberQuestPageSort,
        hidden: true,
    },
    rememberQuestPageFilters: {
        type: OptionType.BOOLEAN,
        label: () => t(plugin.questify.option.rememberQuestPageFilters.label),
        description: () => t(plugin.questify.option.rememberQuestPageFilters.description),
        default: defaultRememberQuestPageFilters,
        hidden: true,
    },
    lastQuestPageSort: {
        type: OptionType.STRING,
        label: () => t(plugin.questify.option.lastQuestPageSort.label),
        description: () => t(plugin.questify.option.lastQuestPageSort.description),
        default: defaultLastQuestPageSort,
        hidden: true,
    },
    lastQuestPageFilters: {
        type: OptionType.CUSTOM,
        label: () => t(plugin.questify.option.lastQuestPageFilters.label),
        description: () => t(plugin.questify.option.lastQuestPageFilters.description),
        default: defaultLastQuestPageFilters,
        hidden: true,
    },
    ignoredQuestIDs: {
        type: OptionType.CUSTOM,
        label: () => t(plugin.questify.option.ignoredQuestIDs.label),
        description: () => t(plugin.questify.option.ignoredQuestIDs.description),
        default: defaultIgnoredQuestIDs,
        hidden: true,
    },
    resumeQuestIDs: {
        type: OptionType.CUSTOM,
        label: () => t(plugin.questify.option.resumeQuestIDs.label),
        description: () => t(plugin.questify.option.resumeQuestIDs.description),
        default: defaultResumeQuestIDs,
        hidden: true,
    },
});
