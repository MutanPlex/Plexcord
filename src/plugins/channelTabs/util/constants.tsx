/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { Heading } from "@components/Heading";
import { Paragraph } from "@components/Paragraph";
import { ChannelTabsPreview } from "@plugins/channelTabs/components/ChannelTabsContainer";
import { KeybindSettings } from "@plugins/channelTabs/components/KeybindSettings";
import { Logger } from "@utils/Logger";
import { makeRange, OptionType } from "@utils/types";
import { SearchableSelect, useState } from "@webpack/common";
import { JSX } from "react";

interface DynamicDropdownSettingOption {
    label: string;
    value: string;
    selected: boolean;
}

function AnimationSettings(): JSX.Element {
    const animationOptions: DynamicDropdownSettingOption[] = [
        { label: t(plugin.channelTabs.animation.tabHover), value: "hover", selected: settings.store.animationHover },
        { label: t(plugin.channelTabs.animation.tabSelection), value: "selection", selected: settings.store.animationSelection },
        { label: t(plugin.channelTabs.animation.tabDragDrop), value: "drag-drop", selected: settings.store.animationDragDrop },
        { label: t(plugin.channelTabs.animation.tabEnterExit), value: "enter-exit", selected: settings.store.animationEnterExit },
        { label: t(plugin.channelTabs.animation.tabIconPop), value: "icon-pop", selected: settings.store.animationIconPop },
        { label: t(plugin.channelTabs.animation.closeRotation), value: "close-rotation", selected: settings.store.animationCloseRotation },
        { label: t(plugin.channelTabs.animation.plusPulse), value: "plus-pulse", selected: settings.store.animationPlusPulse },
        { label: t(plugin.channelTabs.animation.mentionGlow), value: "mention-glow", selected: settings.store.animationMentionGlow },
        { label: t(plugin.channelTabs.animation.compactExpand), value: "compact-expand", selected: settings.store.animationCompactExpand },
        { label: t(plugin.channelTabs.animation.selectedBorder), value: "selected-border", selected: settings.store.animationSelectedBorder },
        { label: t(plugin.channelTabs.animation.selectedBackground), value: "selected-background", selected: settings.store.animationSelectedBackground },
        { label: t(plugin.channelTabs.animation.tabShadows), value: "tab-shadows", selected: settings.store.animationTabShadows },
        { label: t(plugin.channelTabs.animation.tabRepositioning), value: "tab-positioning", selected: settings.store.animationTabPositioning },
        { label: t(plugin.channelTabs.animation.resizeHandle), value: "resize-handle", selected: settings.store.animationResizeHandle },
        { label: t(plugin.channelTabs.animation.questActivate), value: "quests-active", selected: settings.store.animationQuestsActive }
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
        settings.store.animationTabPositioning = enabledValues.includes("tab-positioning");
        settings.store.animationResizeHandle = enabledValues.includes("resize-handle");
        settings.store.animationQuestsActive = enabledValues.includes("quests-active");

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
        <section>
            <Heading>{t(plugin.channelTabs.animation.title)}</Heading>
            <Paragraph>
                {t(plugin.channelTabs.animation.description)}
            </Paragraph>
            <div style={{ marginTop: "8px" }}>
                <SearchableSelect
                    placeholder={t(plugin.channelTabs.animation.placeholder)}
                    maxVisibleItems={12}
                    clearable={true}
                    multi={true}
                    value={currentValue as any}
                    options={animationOptions}
                    onChange={handleChange}
                    closeOnSelect={false}
                />
            </div>
        </section>
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
        label: () => t(plugin.channelTabs.option.onStartup.label),
        description: () => t(plugin.channelTabs.option.onStartup.description),
        type: OptionType.SELECT,
        options: [
            {
                label: () => t(plugin.channelTabs.option.onStartup.nothing),
                value: "nothing",
                default: true
            },
            {
                label: () => t(plugin.channelTabs.option.onStartup.remember),
                value: "remember"
            },
            {
                label: () => t(plugin.channelTabs.option.onStartup.open),
                value: "preset"
            }
        ],
    },
    tabSet: {
        label: () => t(plugin.channelTabs.option.tabSet.label),
        component: ChannelTabsPreview,
        type: OptionType.COMPONENT,
        default: {}
    },
    noPomeloNames: {
        label: () => t(plugin.channelTabs.option.noPomeloNames.label),
        description: () => t(plugin.channelTabs.option.noPomeloNames.description),
        type: OptionType.BOOLEAN,
        default: false
    },
    showStatusIndicators: {
        label: () => t(plugin.channelTabs.option.showStatusIndicators.label),
        description: () => t(plugin.channelTabs.option.showStatusIndicators.description),
        type: OptionType.BOOLEAN,
        default: true
    },
    showBookmarkBar: {
        label: () => t(plugin.channelTabs.option.showBookmarkBar.label),
        description: "",
        type: OptionType.BOOLEAN,
        default: true
    },
    bookmarkNotificationDot: {
        label: () => t(plugin.channelTabs.option.bookmarkNotificationDot.label),
        description: () => t(plugin.channelTabs.option.bookmarkNotificationDot.description),
        type: OptionType.BOOLEAN,
        default: true
    },
    widerTabsAndBookmarks: {
        label: () => t(plugin.channelTabs.option.widerTabsAndBookmarks.label),
        description: () => t(plugin.channelTabs.option.widerTabsAndBookmarks.description),
        type: OptionType.BOOLEAN,
        default: false,
        restartNeeded: false
    },
    tabWidthScale: {
        label: () => t(plugin.channelTabs.option.tabWidthScale.label),
        description: () => t(plugin.channelTabs.option.tabWidthScale.description),
        type: OptionType.NUMBER,
        default: 100,
        hidden: true,
        restartNeeded: false
    },
    renderAllTabs: {
        label: () => t(plugin.channelTabs.option.renderAllTabs.label),
        description: () => t(plugin.channelTabs.option.renderAllTabs.description),
        type: OptionType.BOOLEAN,
        default: false,
        restartNeeded: false
    },
    switchToExistingTab: {
        label: () => t(plugin.channelTabs.option.switchToExistingTab.label),
        description: () => t(plugin.channelTabs.option.switchToExistingTab.description),
        type: OptionType.BOOLEAN,
        default: false,
        restartNeeded: false
    },
    createNewTabIfNotExists: {
        label: () => t(plugin.channelTabs.option.createNewTabIfNotExists.label),
        description: () => t(plugin.channelTabs.option.createNewTabIfNotExists.description),
        type: OptionType.BOOLEAN,
        default: false,
        restartNeeded: false
    },
    enableRapidNavigation: {
        label: () => t(plugin.channelTabs.option.enableRapidNavigation.label),
        description: () => t(plugin.channelTabs.option.enableRapidNavigation.description),
        type: OptionType.BOOLEAN,
        default: false,
        restartNeeded: false
    },
    rapidNavigationThreshold: {
        label: () => t(plugin.channelTabs.option.rapidNavigationThreshold.label),
        description: () => t(plugin.channelTabs.option.rapidNavigationThreshold.description),
        type: OptionType.SLIDER,
        markers: [500, 1000, 1500, 2000, 3000, 5000, 10000],
        default: 3000,
        stickToMarkers: false,
    },
    tabBarPosition: {
        label: () => t(plugin.channelTabs.option.tabBarPosition.label),
        description: () => t(plugin.channelTabs.option.tabBarPosition.description),
        type: OptionType.SELECT,
        options: [
            { label: () => t(plugin.channelTabs.option.tabBarPosition.top), value: "top", default: true },
            { label: () => t(plugin.channelTabs.option.tabBarPosition.bottom), value: "bottom" }
        ],
        restartNeeded: true
    },
    enableNumberKeySwitching: {
        label: () => t(plugin.channelTabs.option.enableNumberKeySwitching.label),
        description: () => t(plugin.channelTabs.option.enableNumberKeySwitching.description),
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: false
    },
    numberKeySwitchCount: {
        label: () => t(plugin.channelTabs.option.numberKeySwitchCount.label),
        description: () => t(plugin.channelTabs.option.numberKeySwitchCount.description),
        type: OptionType.SLIDER,
        markers: makeRange(1, 9, 1),
        default: 3,
        stickToMarkers: true,
    },
    enableCloseTabShortcut: {
        label: () => t(plugin.channelTabs.option.enableCloseTabShortcut.label),
        description: () => t(plugin.channelTabs.option.enableCloseTabShortcut.description),
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: false
    },
    enableNewTabShortcut: {
        label: () => t(plugin.channelTabs.option.enableNewTabShortcut.label),
        description: () => t(plugin.channelTabs.option.enableNewTabShortcut.description),
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: false
    },
    enableTabCycleShortcut: {
        label: () => t(plugin.channelTabs.option.enableTabCycleShortcut.label),
        description: () => t(plugin.channelTabs.option.enableTabCycleShortcut.description),
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: false
    },
    keybindsSection: {
        label: () => t(plugin.channelTabs.option.keybindsSection.label),
        type: OptionType.COMPONENT,
        component: KeybindSettings
    },
    // me when storage yes for keybinds
    closeTabKeybind: {
        label: () => t(plugin.channelTabs.option.closeTabKeybind.label),
        description: () => t(plugin.channelTabs.option.closeTabKeybind.description),
        type: OptionType.STRING,
        default: "CTRL+W",
        hidden: true
    },
    newTabKeybind: {
        label: () => t(plugin.channelTabs.option.newTabKeybind.label),
        description: () => t(plugin.channelTabs.option.newTabKeybind.description),
        type: OptionType.STRING,
        default: "CTRL+T",
        hidden: true
    },
    cycleTabForwardKeybind: {
        label: () => t(plugin.channelTabs.option.cycleTabForwardKeybind.label),
        description: () => t(plugin.channelTabs.option.cycleTabForwardKeybind.description),
        type: OptionType.STRING,
        default: "CTRL+TAB",
        hidden: true
    },
    cycleTabBackwardKeybind: {
        label: () => t(plugin.channelTabs.option.cycleTabBackwardKeybind.label),
        description: () => t(plugin.channelTabs.option.cycleTabBackwardKeybind.description),
        type: OptionType.STRING,
        default: "CTRL+SHIFT+TAB",
        hidden: true
    },
    showTabNumbers: {
        label: () => t(plugin.channelTabs.option.showTabNumbers.label),
        description: () => t(plugin.channelTabs.option.showTabNumbers.description),
        type: OptionType.BOOLEAN,
        default: false,
        restartNeeded: false
    },
    tabNumberPosition: {
        label: () => t(plugin.channelTabs.option.tabNumberPosition.label),
        description: () => t(plugin.channelTabs.option.tabNumberPosition.description),
        type: OptionType.SELECT,
        options: [
            { label: () => t(plugin.channelTabs.option.tabNumberPosition.left), value: "left", default: true },
            { label: () => t(plugin.channelTabs.option.tabNumberPosition.right), value: "right" }
        ],
        restartNeeded: false
    },
    animations: {
        label: () => t(plugin.channelTabs.option.animations.label),
        type: OptionType.COMPONENT,
        component: AnimationSettings
    },
    // me when storage yes
    animationHover: {
        label: () => t(plugin.channelTabs.option.animationHover.label),
        description: () => t(plugin.channelTabs.option.animationHover.description),
        type: OptionType.BOOLEAN,
        default: true,
        hidden: true
    },
    animationSelection: {
        label: () => t(plugin.channelTabs.option.animationSelection.label),
        description: () => t(plugin.channelTabs.option.animationSelection.description),
        type: OptionType.BOOLEAN,
        default: true,
        hidden: true
    },
    animationDragDrop: {
        label: () => t(plugin.channelTabs.option.animationDragDrop.label),
        description: () => t(plugin.channelTabs.option.animationDragDrop.description),
        type: OptionType.BOOLEAN,
        default: true,
        hidden: true
    },
    animationEnterExit: {
        label: () => t(plugin.channelTabs.option.animationEnterExit.label),
        description: () => t(plugin.channelTabs.option.animationEnterExit.description),
        type: OptionType.BOOLEAN,
        default: true,
        hidden: true
    },
    animationIconPop: {
        label: () => t(plugin.channelTabs.option.animationIconPop.label),
        description: () => t(plugin.channelTabs.option.animationIconPop.description),
        type: OptionType.BOOLEAN,
        default: true,
        hidden: true
    },
    animationCloseRotation: {
        label: () => t(plugin.channelTabs.option.animationCloseRotation.label),
        description: () => t(plugin.channelTabs.option.animationCloseRotation.description),
        type: OptionType.BOOLEAN,
        default: true,
        hidden: true
    },
    animationPlusPulse: {
        label: () => t(plugin.channelTabs.option.animationPlusPulse.label),
        description: () => t(plugin.channelTabs.option.animationPlusPulse.description),
        type: OptionType.BOOLEAN,
        default: true,
        hidden: true
    },
    animationMentionGlow: {
        label: () => t(plugin.channelTabs.option.animationMentionGlow.label),
        description: () => t(plugin.channelTabs.option.animationMentionGlow.description),
        type: OptionType.BOOLEAN,
        default: true,
        hidden: true
    },
    animationCompactExpand: {
        label: () => t(plugin.channelTabs.option.animationCompactExpand.label),
        description: () => t(plugin.channelTabs.option.animationCompactExpand.description),
        type: OptionType.BOOLEAN,
        default: true,
        hidden: true
    },
    animationSelectedBorder: {
        label: () => t(plugin.channelTabs.option.animationSelectedBorder.label),
        description: () => t(plugin.channelTabs.option.animationSelectedBorder.description),
        type: OptionType.BOOLEAN,
        default: true,
        hidden: true
    },
    animationSelectedBackground: {
        label: () => t(plugin.channelTabs.option.animationSelectedBackground.label),
        description: () => t(plugin.channelTabs.option.animationSelectedBackground.description),
        type: OptionType.BOOLEAN,
        default: true,
        hidden: true
    },
    animationTabShadows: {
        label: () => t(plugin.channelTabs.option.animationTabShadows.label),
        description: () => t(plugin.channelTabs.option.animationTabShadows.description),
        type: OptionType.BOOLEAN,
        default: true,
        hidden: true
    },
    animationTabPositioning: {
        label: () => t(plugin.channelTabs.option.animationTabPositioning.label),
        description: () => t(plugin.channelTabs.option.animationTabPositioning.description),
        type: OptionType.BOOLEAN,
        default: true,
        hidden: true
    },
    animationResizeHandle: {
        label: () => t(plugin.channelTabs.option.animationResizeHandle.label),
        description: () => t(plugin.channelTabs.option.animationResizeHandle.description),
        type: OptionType.BOOLEAN,
        default: true,
        hidden: true
    },
    animationQuestsActive: {
        label: () => t(plugin.channelTabs.option.animationQuestsActive.label),
        description: () => t(plugin.channelTabs.option.animationQuestsActive.description),
        type: OptionType.BOOLEAN,
        default: true,
        hidden: true
    },
    compactAutoExpandSelected: {
        label: () => t(plugin.channelTabs.option.compactAutoExpandSelected.label),
        description: () => t(plugin.channelTabs.option.compactAutoExpandSelected.description),
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: false
    },
    compactAutoExpandOnHover: {
        label: () => t(plugin.channelTabs.option.compactAutoExpandOnHover.label),
        description: () => t(plugin.channelTabs.option.compactAutoExpandOnHover.description),
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: false
    },
    openInNewTabAutoSwitch: {
        label: () => t(plugin.channelTabs.option.openInNewTabAutoSwitch.label),
        description: () => t(plugin.channelTabs.option.openInNewTabAutoSwitch.description),
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: false
    },
    bookmarksIndependentFromTabs: {
        label: () => t(plugin.channelTabs.option.bookmarksIndependentFromTabs.label),
        description: () => t(plugin.channelTabs.option.bookmarksIndependentFromTabs.description),
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: false
    },
    showResizeHandle: {
        label: () => t(plugin.channelTabs.option.showResizeHandle.label),
        description: () => t(plugin.channelTabs.option.showResizeHandle.description),
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: false
    },
    openNewTabsInCompactMode: {
        label: () => t(plugin.channelTabs.option.openNewTabsInCompactMode.label),
        description: () => t(plugin.channelTabs.option.openNewTabsInCompactMode.description),
        type: OptionType.BOOLEAN,
        default: false,
        restartNeeded: false
    },
    newTabButtonBehavior: {
        label: () => t(plugin.channelTabs.option.newTabButtonBehavior.label),
        description: () => t(plugin.channelTabs.option.newTabButtonBehavior.description),
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: false
    },
    oneTabPerServer: {
        label: () => t(plugin.channelTabs.option.oneTabPerServer.label),
        description: () => t(plugin.channelTabs.option.oneTabPerServer.description),
        type: OptionType.BOOLEAN,
        default: false,
        restartNeeded: false
    },
    maxOpenTabs: {
        label: () => t(plugin.channelTabs.option.maxOpenTabs.label),
        description: () => t(plugin.channelTabs.option.maxOpenTabs.description),
        type: OptionType.SLIDER,
        markers: makeRange(0, 20, 1),
        default: 0,
        stickToMarkers: true,
        restartNeeded: false
    }
});
