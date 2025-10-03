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
import { Forms, SearchableSelect, useState } from "@webpack/common";
import { JSX } from "react";

interface DynamicDropdownSettingOption {
    label: string;
    value: string;
    selected: boolean;
}

function AnimationSettings(): JSX.Element {
    const animationOptions: DynamicDropdownSettingOption[] = [
        { label: "Tab Hover Effects (lift + scale)", value: "hover", selected: settings.store.animationHover },
        { label: "Selected Tab Lift Animation", value: "selection", selected: settings.store.animationSelection },
        { label: "Tab Drag & Drop (ghost + reorder)", value: "drag-drop", selected: settings.store.animationDragDrop },
        { label: "Tab Enter/Exit Slides (creation + closing)", value: "enter-exit", selected: settings.store.animationEnterExit },
        { label: "Icon Pop on Selection (icon scale-up)", value: "icon-pop", selected: settings.store.animationIconPop },
        { label: "Close Button Rotation", value: "close-rotation", selected: settings.store.animationCloseRotation },
        { label: "Plus Button Pulse", value: "plus-pulse", selected: settings.store.animationPlusPulse },
        { label: "Mention Badge Glow", value: "mention-glow", selected: settings.store.animationMentionGlow },
        { label: "Compact Mode Expansion", value: "compact-expand", selected: settings.store.animationCompactExpand },
        { label: "Selected Tab Blue Border", value: "selected-border", selected: settings.store.animationSelectedBorder },
        { label: "Selected Tab Background Color", value: "selected-background", selected: settings.store.animationSelectedBackground },
        { label: "Tab Shadow Effects", value: "tab-shadows", selected: settings.store.animationTabShadows }
    ];

    const [currentValue, setCurrentValue] = useState(animationOptions.filter(option => option.selected));

    function updateSettingsTruthy(enabled: DynamicDropdownSettingOption[]) {
        const enabledValues = enabled.map(option => option.value);

        animationOptions.forEach(option => {
            option.selected = enabledValues.includes(option.value);
        });

        settings.store.animationHover = enabledValues.includes("hover");
        settings.store.animationSelection = enabledValues.includes("selection");
        settings.store.animationDragDrop = enabledValues.includes("drag-drop");
        settings.store.animationEnterExit = enabledValues.includes("enter-exit");
        settings.store.animationIconPop = enabledValues.includes("icon-pop");
        settings.store.animationCloseRotation = enabledValues.includes("close-rotation");
        settings.store.animationPlusPulse = enabledValues.includes("plus-pulse");
        settings.store.animationMentionGlow = enabledValues.includes("mention-glow");
        settings.store.animationCompactExpand = enabledValues.includes("compact-expand");
        settings.store.animationSelectedBorder = enabledValues.includes("selected-border");
        settings.store.animationSelectedBackground = enabledValues.includes("selected-background");
        settings.store.animationTabShadows = enabledValues.includes("tab-shadows");

        setCurrentValue(enabled);
    }

    function handleChange(values: Array<DynamicDropdownSettingOption | string>) {
        if (values.length === 0) {
            updateSettingsTruthy([]);
            return;
        }

        const stringlessValues = values.filter(v => typeof v !== "string") as DynamicDropdownSettingOption[];
        const selectedOption = values.find(v => typeof v === "string") as string;
        const option = animationOptions.find(option => option.value === selectedOption) as DynamicDropdownSettingOption;

        if (option.selected) {
            updateSettingsTruthy(stringlessValues.filter(v => v.value !== selectedOption));
        } else {
            updateSettingsTruthy([...stringlessValues, option]);
        }
    }

    return (
        <Forms.FormSection>
            <Forms.FormTitle>Animation Controls</Forms.FormTitle>
            <Forms.FormText>
                Enable or disable specific animations for channel tabs. Each option can be toggled independently.
            </Forms.FormText>
            <div style={{ marginTop: "8px" }}>
                <SearchableSelect
                    placeholder="Select which animations to enable..."
                    maxVisibleItems={12}
                    clearable={true}
                    multi={true}
                    value={currentValue as any}
                    options={animationOptions}
                    onChange={handleChange}
                    closeOnSelect={false}
                />
            </div>
        </Forms.FormSection>
    );
}


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
        restartNeeded: true
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
    },
    animations: {
        type: OptionType.COMPONENT,
        component: AnimationSettings
    },
    // me when storage yes
    animationHover: {
        type: OptionType.BOOLEAN,
        description: "Enable hover lift and scale effects",
        default: true,
        hidden: true
    },
    animationSelection: {
        type: OptionType.BOOLEAN,
        description: "Enable selection animations (border glow, lift)",
        default: true,
        hidden: true
    },
    animationDragDrop: {
        type: OptionType.BOOLEAN,
        description: "Enable drag and drop ghost effects",
        default: true,
        hidden: true
    },
    animationEnterExit: {
        type: OptionType.BOOLEAN,
        description: "Enable tab creation/closing slide animations",
        default: true,
        hidden: true
    },
    animationIconPop: {
        type: OptionType.BOOLEAN,
        description: "Enable icon scale-up animation on selection",
        default: true,
        hidden: true
    },
    animationCloseRotation: {
        type: OptionType.BOOLEAN,
        description: "Enable rotation animation for close buttons",
        default: true,
        hidden: true
    },
    animationPlusPulse: {
        type: OptionType.BOOLEAN,
        description: "Enable pulse animation for plus button",
        default: true,
        hidden: true
    },
    animationMentionGlow: {
        type: OptionType.BOOLEAN,
        description: "Enable pulsing red glow for mentions",
        default: true,
        hidden: true
    },
    animationCompactExpand: {
        type: OptionType.BOOLEAN,
        description: "Enable smooth expansion for compact tabs",
        default: true,
        hidden: true
    },
    animationSelectedBorder: {
        type: OptionType.BOOLEAN,
        description: "Enable border and glow styling for selected tabs",
        default: true,
        hidden: true
    },
    animationSelectedBackground: {
        type: OptionType.BOOLEAN,
        description: "Enable background color change for selected tabs",
        default: true,
        hidden: true
    },
    animationTabShadows: {
        type: OptionType.BOOLEAN,
        description: "Enable shadow effects on tabs",
        default: true,
        hidden: true
    },
    compactAutoExpandSelected: {
        type: OptionType.BOOLEAN,
        description: "Automatically expand compact tabs when selected to show the full channel name",
        default: true,
        restartNeeded: false
    },
    openInNewTabAutoSwitch: {
        type: OptionType.BOOLEAN,
        description: "Automatically switch to new tabs opened from 'Open in New Tab' context menu",
        default: true,
        restartNeeded: false
    }
});

export const CircleQuestionIcon = findComponentByCodeLazy("10.58l-3.3-3.3a1");
