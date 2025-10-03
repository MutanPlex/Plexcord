/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { Devs } from "@utils/constants";
import definePlugin, { makeRange, OptionType } from "@utils/types";

// The entire code of this plugin can be found in ipcPlugins
export default definePlugin({
    name: "FixSpotifyEmbeds",
    description: "Fixes spotify embeds being incredibly loud by letting you customise the volume",
    authors: [Devs.Ven],

    get displayDescription() {
        return t("plugin.fixSpotifyEmbeds.description");
    },

    settings: definePluginSettings({
        volume: {
            get label() {
                return t("plugin.fixSpotifyEmbeds.option.volume.label");
            },
            get description() {
                return t("plugin.fixSpotifyEmbeds.option.volume.description");
            },
            type: OptionType.SLIDER,
            markers: makeRange(0, 100, 10),
            stickToMarkers: false,
            default: 10
        }
    })
});
