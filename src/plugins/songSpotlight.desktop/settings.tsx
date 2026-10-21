/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2026 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { makeRange, OptionType } from "@utils/types";

import { apiConstants } from "./lib/api";
import Settings from "./ui/settings";

export default definePluginSettings({
    collapseSongList: {
        label: () => t(plugin.songSpotlight.option.collapseSongList.label),
        type: OptionType.BOOLEAN,
        description: () => t(plugin.songSpotlight.option.collapseSongList.description),
        default: false,
    },
    profileSongsLimit: {
        label: () => t(plugin.songSpotlight.option.profileSongsLimit.label),
        type: OptionType.SLIDER,
        description: () => t(plugin.songSpotlight.option.profileSongsLimit.description),
        default: apiConstants.songLimit,
        markers: makeRange(1, 3),
    },
    previewVolume: {
        label: () => t(plugin.songSpotlight.option.previewVolume.label),
        type: OptionType.SLIDER,
        description: () => t(plugin.songSpotlight.option.previewVolume.description),
        markers: [0, 25, 50, 100],
        default: 100,
        stickToMarkers: false
    },
    manager: {
        type: OptionType.COMPONENT,
        component: () => <Settings />,
    },
}, {
    profileSongsLimit: {
        disabled() {
            return this.store.collapseSongList;
        },
    },
});
