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
        { label: t("plugin.channelTabs.animation.tabHover"), value: "hover", selected: settings.store.animationHover },
        { label: t("plugin.channelTabs.animation.tabSelection"), value: "selection", selected: settings.store.animationSelection },
        { label: t("plugin.channelTabs.animation.tabDragDrop"), value: "drag-drop", selected: settings.store.animationDragDrop },
        { label: t("plugin.channelTabs.animation.tabEnterExit"), value: "enter-exit", selected: settings.store.animationEnterExit },
        { label: t("plugin.channelTabs.animation.tabIconPop"), value: "icon-pop", selected: settings.store.animationIconPop },
        { label: t("plugin.channelTabs.animation.closeRotation"), value: "close-rotation", selected: settings.store.animationCloseRotation },
        { label: t("plugin.channelTabs.animation.plusPulse"), value: "plus-pulse", selected: settings.store.animationPlusPulse },
        { label: t("plugin.channelTabs.animation.mentionGlow"), value: "mention-glow", selected: settings.store.animationMentionGlow },
        { label: t("plugin.channelTabs.animation.compactExpand"), value: "compact-expand", selected: settings.store.animationCompactExpand },
        { label: t("plugin.channelTabs.animation.selectedBorder"), value: "selected-border", selected: settings.store.animationSelectedBorder },
        { label: t("plugin.channelTabs.animation.selectedBackground"), value: "selected-background", selected: settings.store.animationSelectedBackground },
        { label: t("plugin.channelTabs.animation.tabShadows"), value: "tab-shadows", selected: settings.store.animationTabShadows }
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
            <Forms.FormTitle>{t("plugin.channelTabs.animation.title")}</Forms.FormTitle>
            <Forms.FormText>
                {t("plugin.channelTabs.animation.description")}
            </Forms.FormText>
            <div style={{ marginTop: "8px" }}>
                <SearchableSelect
                    placeholder={t("plugin.channelTabs.animation.placeholder")}
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
        get label() {
            return t("plugin.channelTabs.option.animations.label");
        },
        type: OptionType.COMPONENT,
        component: AnimationSettings
    },
    // me when storage yes
    animationHover: {
        get label() {
            return t("plugin.channelTabs.option.animationHover.label");
        },
        get description() {
            return t("plugin.channelTabs.option.animationHover.description");
        },
        type: OptionType.BOOLEAN,
        default: true,
        hidden: true
    },
    animationSelection: {
        get label() {
            return t("plugin.channelTabs.option.animationSelection.label");
        },
        get description() {
            return t("plugin.channelTabs.option.animationSelection.description");
        },
        type: OptionType.BOOLEAN,
        default: true,
        hidden: true
    },
    animationDragDrop: {
        get label() {
            return t("plugin.channelTabs.option.animationDragDrop.label");
        },
        get description() {
            return t("plugin.channelTabs.option.animationDragDrop.description");
        },
        type: OptionType.BOOLEAN,
        default: true,
        hidden: true
    },
    animationEnterExit: {
        get label() {
            return t("plugin.channelTabs.option.animationEnterExit.label");
        },
        get description() {
            return t("plugin.channelTabs.option.animationEnterExit.description");
        },
        type: OptionType.BOOLEAN,
        default: true,
        hidden: true
    },
    animationIconPop: {
        get label() {
            return t("plugin.channelTabs.option.animationIconPop.label");
        },
        get description() {
            return t("plugin.channelTabs.option.animationIconPop.description");
        },
        type: OptionType.BOOLEAN,
        default: true,
        hidden: true
    },
    animationCloseRotation: {
        get label() {
            return t("plugin.channelTabs.option.animationCloseRotation.label");
        },
        get description() {
            return t("plugin.channelTabs.option.animationCloseRotation.description");
        },
        type: OptionType.BOOLEAN,
        default: true,
        hidden: true
    },
    animationPlusPulse: {
        get label() {
            return t("plugin.channelTabs.option.animationPlusPulse.label");
        },
        get description() {
            return t("plugin.channelTabs.option.animationPlusPulse.description");
        },
        type: OptionType.BOOLEAN,
        default: true,
        hidden: true
    },
    animationMentionGlow: {
        get label() {
            return t("plugin.channelTabs.option.animationMentionGlow.label");
        },
        get description() {
            return t("plugin.channelTabs.option.animationMentionGlow.description");
        },
        type: OptionType.BOOLEAN,
        default: true,
        hidden: true
    },
    animationCompactExpand: {
        get label() {
            return t("plugin.channelTabs.option.animationCompactExpand.label");
        },
        get description() {
            return t("plugin.channelTabs.option.animationCompactExpand.description");
        },
        type: OptionType.BOOLEAN,
        default: true,
        hidden: true
    },
    animationSelectedBorder: {
        get label() {
            return t("plugin.channelTabs.option.animationSelectedBorder.label");
        },
        get description() {
            return t("plugin.channelTabs.option.animationSelectedBorder.description");
        },
        type: OptionType.BOOLEAN,
        default: true,
        hidden: true
    },
    animationSelectedBackground: {
        get label() {
            return t("plugin.channelTabs.option.animationSelectedBackground.label");
        },
        get description() {
            return t("plugin.channelTabs.option.animationSelectedBackground.description");
        },
        type: OptionType.BOOLEAN,
        default: true,
        hidden: true
    },
    animationTabShadows: {
        get label() {
            return t("plugin.channelTabs.option.animationTabShadows.label");
        },
        get description() {
            return t("plugin.channelTabs.option.animationTabShadows.description");
        },
        type: OptionType.BOOLEAN,
        default: true,
        hidden: true
    },
    compactAutoExpandSelected: {
        get label() {
            return t("plugin.channelTabs.option.compactAutoExpandSelected.label");
        },
        get description() {
            return t("plugin.channelTabs.option.compactAutoExpandSelected.description");
        },
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: false
    },
    openInNewTabAutoSwitch: {
        get label() {
            return t("plugin.channelTabs.option.openInNewTabAutoSwitch.label");
        },
        get description() {
            return t("plugin.channelTabs.option.openInNewTabAutoSwitch.description");
        },
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: false
    }
});

export const CircleQuestionIcon = findComponentByCodeLazy("10.58l-3.3-3.3a1");
