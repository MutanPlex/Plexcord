/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { definePluginSettings } from "@api/Settings";
import { Devs } from "@utils/constants";
import definePlugin, { makeRange, OptionType } from "@utils/types";

// The entire code of this plugin can be found in ipcPlugins
export default definePlugin({
    name: "FixSpotifyEmbeds",
    description: "Fixes spotify embeds being incredibly loud by letting you customise the volume",
    authors: [Devs.Ven],
    settings: definePluginSettings({
        volume: {
            type: OptionType.SLIDER,
            description: "The volume % to set for spotify embeds. Anything above 10% is veeeery loud",
            markers: makeRange(0, 100, 10),
            stickToMarkers: false,
            default: 10
        }
    })
});
