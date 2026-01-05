/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { Devs } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";

let closeSuppressCount = 0;
const settings = definePluginSettings({
    keepOpen: {
        label: () => t(plugin.betterGifPicker.option.keepOpen.label),
        description: () => t(plugin.betterGifPicker.option.keepOpen.description),
        type: OptionType.BOOLEAN,
        default: false
    },
});

export default definePlugin({
    name: "BetterGifPicker",
    description: () => t(plugin.betterGifPicker.description),
    authors: [Devs.Samwich],
    settings,

    patches: [
        {
            find: '"state",{resultType:',
            replacement: [{
                match: /(?<="state",{resultType:)null/,
                replace: '"Favorites"'
            }]
        },
        {
            find: "#{intl::NO_GIF_FAVORITES_HOW_TO_FAVORITE}",
            predicate: () => settings.store.keepOpen,
            replacement: [
                {
                    match: /null!=\i&&\i\(\i\),/,
                    replace: "$self.onGifSelect(),$&"
                },
                {
                    match: /\i\.scrollIntoViewRect\(\{/,
                    replace: "$self.shouldSuppressGifFocusScroll()||$&"
                },
                {
                    match: /this.renderGIF\(\).{0,50}\]/,
                    replace: "$&,onMouseDown:e=>{$self.shouldSuppressGifFocusScroll()&&e.preventDefault()}"
                }
            ]
        },
        {
            find: "expression-picker-last-active-view",
            replacement: {
                match: /\i\.setState\(\{activeView:null/,
                replace: "$self.consumeCloseSuppress()||$&"
            }
        },
    ],

    onGifSelect() {
        if (!settings.store.keepOpen) return;
        closeSuppressCount = 2;
    },

    consumeCloseSuppress() {
        if (!settings.store.keepOpen) {
            closeSuppressCount = 0;
            return false;
        }

        if (closeSuppressCount <= 0) return false;
        closeSuppressCount--;
        return true;
    },

    shouldSuppressGifFocusScroll() {
        return settings.store.keepOpen;
    }
});
