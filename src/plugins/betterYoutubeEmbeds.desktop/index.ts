/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2026 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { Devs } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";

// The entire code of this plugin can be found in native.ts
const settings = definePluginSettings({
    fixBlockedEmbeds: {
        label: () => t(plugin.betterYoutubeEmbeds.option.fixBlockedEmbeds.label),
        description: () => t(plugin.betterYoutubeEmbeds.option.fixBlockedEmbeds.description),
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: true
    },
    blockAds: {
        label: () => t(plugin.betterYoutubeEmbeds.option.blockAds.label),
        description: () => t(plugin.betterYoutubeEmbeds.option.blockAds.description),
        type: OptionType.BOOLEAN,
        default: true
    }
});

export default definePlugin({
    name: "BetterYouTubeEmbeds",
    description: () => t(plugin.betterYoutubeEmbeds.description),
    tags: ["media", "utility"],
    searchTerms: ["YoutubeAdblock", "FixYoutubeEmbeds"],
    authors: [Devs.coolelectronics, Devs.ImLvna, Devs.Ven, Devs.arHSM],
    requiresRestart: true,
    settings
});
