/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2026 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import "./style.css";

import { plugin, t } from "@api/i18n";
import ErrorBoundary from "@components/ErrorBoundary";
import { PcDevs } from "@utils/constants";
import definePlugin from "@utils/types";

import { useAuthorizationStore } from "./lib/stores/AuthorizationStore";
import { useSongStore } from "./lib/stores/SongStore";
import settings from "./settings";
import ProfileSongs from "./ui/songs/ProfileSongs";
import WidgetSongs from "./ui/songs/WidgetSongs";

export default definePlugin({
    name: "SongSpotlight",
    description: () => t(plugin.songSpotlight.description),
    dependencies: ["ProfileCollectionsAPI"],
    tags: ["appearance", "media"],
    authors: [PcDevs.nexpid, PcDevs.MutanPlex],
    settings,
    patches: [
        // Full profile modal sections (lazy loaded)
        {
            find: ".MUTUAL_GUILDS})),",
            replacement: {
                match: /(\i).push\({text.{0,50}.ACTIVITY\}\),/,
                replace: '$&$1.push({text:$self.getSectionTitle(),section:"SONG_SPOTLIGHT"}),',
            },
        },
        {
            find: ".hasUnsavedChanges()&&",
            replacement: {
                match: /({user:(\i),.{0,80}return (\i===))/,
                replace: '$1"SONG_SPOTLIGHT"?$self.renderWidgetSongs({user:$2}):$3',
            },
        },
    ],

    flux: {
        CONNECTION_OPEN: () => {
            useSongStore.getState().$refresh();
        },
    },
    start() {
        useSongStore.getState().$refresh();
        useAuthorizationStore.persist.rehydrate();
    },

    renderProfileCollection: {
        render: ProfileSongs,
        priority: 0,
    },
    getSectionTitle: () => t(plugin.songSpotlight.text.songSpotlight),

    renderWidgetSongs: ErrorBoundary.wrap(WidgetSongs, { noop: true }),
});
