/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { ChannelTabsPreview } from "@plugins/channelTabs/components/ChannelTabsContainer";
import { Logger } from "@utils/Logger";
import { OptionType } from "@utils/types";
import { findComponentByCodeLazy } from "@webpack";

export const logger = new Logger("ChannelTabs");

export const bookmarkFolderColors = {
    Red: "var(--channeltabs-red)",
    Blue: "var(--channeltabs-blue)",
    Yellow: "var(--channeltabs-yellow)",
    Green: "var(--channeltabs-green)",
    Black: "var(--channeltabs-black)",
    White: "var(--channeltabs-white)",
    Orange: "var(--channeltabs-orange)",
    Pink: "var(--channeltabs-pink)"
} as const;

export const settings = definePluginSettings({
    onStartup: {
        get label() {
            return t("plugin.channelTabs.option.onStartup.label");
        },
        get description() {
            return t("plugin.channelTabs.option.onStartup.description");
        },
        type: OptionType.SELECT,
        options: [{
            get label() {
                return t("plugin.channelTabs.option.onStartup.nothing");
            },
            value: "nothing",
            default: true
        }, {
            get label() {
                return t("plugin.channelTabs.option.onStartup.remember");
            },
            value: "remember"
        }, {
            get label() {
                return t("plugin.channelTabs.option.onStartup.open");
            },
            value: "preset"
        }],
    },
    tabSet: {
        get label() {
            return t("plugin.channelTabs.option.tabSet.label");
        },
        get description() {
            return t("plugin.channelTabs.option.tabSet.description");
        },
        component: ChannelTabsPreview,
        type: OptionType.COMPONENT,
        default: {}
    },
    noPomeloNames: {
        get label() {
            return t("plugin.channelTabs.option.noPomeloNames.label");
        },
        get description() {
            return t("plugin.channelTabs.option.noPomeloNames.description");
        },
        type: OptionType.BOOLEAN,
        default: false
    },
    showStatusIndicators: {
        get label() {
            return t("plugin.channelTabs.option.showStatusIndicators.label");
        },
        get description() {
            return t("plugin.channelTabs.option.showStatusIndicators.description");
        },
        type: OptionType.BOOLEAN,
        default: true
    },
    showBookmarkBar: {
        get label() {
            return t("plugin.channelTabs.option.showBookmarkBar.label");
        },
        description: "",
        type: OptionType.BOOLEAN,
        default: true
    },
    bookmarkNotificationDot: {
        get label() {
            return t("plugin.channelTabs.option.bookmarkNotificationDot.label");
        },
        get description() {
            return t("plugin.channelTabs.option.bookmarkNotificationDot.description");
        },
        type: OptionType.BOOLEAN,
        default: true
    },
    widerTabsAndBookmarks: {
        get label() {
            return t("plugin.channelTabs.option.widerTabsAndBookmarks.label");
        },
        get description() {
            return t("plugin.channelTabs.option.widerTabsAndBookmarks.description");
        },
        type: OptionType.BOOLEAN,
        default: false,
        restartNeeded: false
    },
    switchToExistingTab: {
        get label() {
            return t("plugin.channelTabs.option.switchToExistingTab.label");
        },
        get description() {
            return t("plugin.channelTabs.option.switchToExistingTab.description");
        },
        type: OptionType.BOOLEAN,
        default: false,
        restartNeeded: false
    },
    createNewTabIfNotExists: {
        get label() {
            return t("plugin.channelTabs.option.createNewTabIfNotExists.label");
        },
        get description() {
            return t("plugin.channelTabs.option.createNewTabIfNotExists.description");
        },
        type: OptionType.BOOLEAN,
        default: false,
        restartNeeded: false
    },
    enableRapidNavigation: {
        get label() {
            return t("plugin.channelTabs.option.enableRapidNavigation.label");
        },
        get description() {
            return t("plugin.channelTabs.option.enableRapidNavigation.description");
        },
        type: OptionType.BOOLEAN,
        default: false,
        restartNeeded: false
    },
    rapidNavigationThreshold: {
        get label() {
            return t("plugin.channelTabs.option.rapidNavigationThreshold.label");
        },
        get description() {
            return t("plugin.channelTabs.option.rapidNavigationThreshold.description");
        },
        type: OptionType.SLIDER,
        markers: [500, 1000, 1500, 2000, 3000, 5000, 10000],
        default: 3000,
        stickToMarkers: false,
    },
    tabBarPosition: {
        get label() {
            return t("plugin.channelTabs.option.tabBarPosition.label");
        },
        get description() {
            return t("plugin.channelTabs.option.tabBarPosition.description");
        },
        type: OptionType.SELECT,
        get options() {
            return [
                { label: t("plugin.channelTabs.option.tabBarPosition.top"), value: "top", default: true },
                { label: t("plugin.channelTabs.option.tabBarPosition.bottom"), value: "bottom" }
            ];
        },
    },
    enableHotkeys: {
        get label() {
            return t("plugin.channelTabs.option.enableHotkeys.label");
        },
        get description() {
            return t("plugin.channelTabs.option.enableHotkeys.description");
        },
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: false
    },
    hotkeyCount: {
        get label() {
            return t("plugin.channelTabs.option.hotkeyCount.label");
        },
        get description() {
            return t("plugin.channelTabs.option.hotkeyCount.description");
        },
        type: OptionType.SLIDER,
        markers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        default: 3,
        stickToMarkers: true,
    }
});

export const CircleQuestionIcon = findComponentByCodeLazy("10.58l-3.3-3.3a1");
