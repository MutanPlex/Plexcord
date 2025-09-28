/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import "./style.css";

import { t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { Devs, PcDevs } from "@utils/constants";
import definePlugin, { makeRange, OptionType } from "@utils/types";

export const settings = definePluginSettings({
    frequentEmojis: {
        get label() {
            return t("plugin.betterQuickReact.option.frequentEmojis.label");
        },
        get description() {
            return t("plugin.betterQuickReact.option.frequentEmojis.description");
        },
        type: OptionType.BOOLEAN,
        restartNeeded: true,
        default: true
    },
    rows: {
        get label() {
            return t("plugin.betterQuickReact.option.rows.label");
        },
        get description() {
            return t("plugin.betterQuickReact.option.rows.description");
        },
        type: OptionType.SLIDER,
        default: 2,
        markers: makeRange(1, 16, 1),
        stickToMarkers: true
    },
    columns: {
        get label() {
            return t("plugin.betterQuickReact.option.columns.label");
        },
        get description() {
            return t("plugin.betterQuickReact.option.columns.description");
        },
        type: OptionType.SLIDER,
        default: 4,
        markers: makeRange(1, 12, 1),
        stickToMarkers: true
    },
    compactMode: {
        get label() {
            return t("plugin.betterQuickReact.option.compactMode.label");
        },
        get description() {
            return t("plugin.betterQuickReact.option.compactMode.description");
        },
        type: OptionType.BOOLEAN,
        default: false
    },
    scroll: {
        get label() {
            return t("plugin.betterQuickReact.option.scroll.label");
        },
        get description() {
            return t("plugin.betterQuickReact.option.scroll.description");
        },
        type: OptionType.BOOLEAN,
        default: true
    }
});

export default definePlugin({
    name: "BetterQuickReact",
    description: "Improves the quick react buttons in the message context menu.",
    authors: [Devs.Ven, Devs.Sqaaakoi, PcDevs.MutanPlex],
    settings,

    get displayDescription() {
        return t("plugin.betterQuickReact.description");
    },

    patches: [
        // Remove favourite emojis from being inserted at the start of the reaction list
        {
            find: "this.favoriteEmojisWithoutFetchingLatest.concat",
            replacement: {
                match: /(this\.favoriteEmojisWithoutFetchingLatest)\.concat/,
                replace: "[].concat"
            },
            predicate: () => settings.store.frequentEmojis
        },
        {
            find: "#{intl::ADD_REACTION_NAMED}",
            group: true,
            replacement: [
                // Override limit of emojis to display with offset hook.
                {
                    match: /(\i)\.length>4&&\((\i)\.length=4\);/,
                    replace: "let [betterQuickReactScrollValue,setBetterQuickReactScrollValue]=Plexcord.Webpack.Common.React.useState(0);betterQuickReactScrollValue;"
                },
                // Add a custom class to identify the quick reactions have been modified and a CSS variable for the number of columns to display
                {
                    match: /className:(\i)\.wrapper,/,
                    replace: "className:\"pc-better-quick-react \"+(Plexcord.Settings.plugins.BetterQuickReact.compactMode?\"pc-better-quick-react-compact \":\"\")+$1.wrapper,style:{\"--pc-better-quick-react-columns\":$self.settings.store.columns},"
                },
                // Scroll handler + Apply the emoji count limit from earlier with custom logic
                {
                    match: /children:(\i)\.map\(/,
                    replace: "onWheel:$self.onWheelWrapper(betterQuickReactScrollValue,setBetterQuickReactScrollValue,$1.length),children:$self.applyScroll($1,betterQuickReactScrollValue).map("
                }
            ]
        },
        // MenuGroup doesn't accept styles or anything special by default :/
        {
            find: ".groupLabel,",
            replacement: {
                match: /role:"group",/,
                replace: "$&style:arguments[0].style,onWheel:arguments[0].onWheel,"
            }
        }
    ],
    getMaxQuickReactions() {
        return settings.store.rows * settings.store.columns;
    },
    applyScroll(emojis: any[], index: number) {
        return emojis.slice(index, index + this.getMaxQuickReactions());
    },
    onWheelWrapper(currentScrollValue: number, setScrollHook: (value: number) => void, emojisLength: number) {
        if (settings.store.scroll) return (e: WheelEvent) => {
            if (e.deltaY === 0 || e.shiftKey) return;
            e.stopPropagation(); // does this do anything?
            const modifier = e.deltaY < 0 ? -1 : 1;
            const newValue = currentScrollValue + (modifier * settings.store.columns);
            setScrollHook(Math.max(0, Math.min(newValue, emojisLength - this.getMaxQuickReactions())));
        };
    },
});
