/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import "./styles.css";

import { Settings } from "@api/Settings";
import ErrorBoundary from "@components/ErrorBoundary";
import { Devs } from "@utils/constants";
import definePlugin from "@utils/types";
import { Player } from "plugins/spotifyControls/PlayerComponent";

import { migrateOldLyrics } from "./api";
import { Lyrics } from "./components/lyrics";
import settings from "./settings";


export default definePlugin({
    name: "SpotifyLyrics",
    authors: [Devs.Joona],
    description: "Adds lyrics to SpotifyControls",
    dependencies: ["SpotifyControls"],
    patches: [
        {
            find: "this.isCopiedStreakGodlike",
            replacement: {
                match: /Plexcord.Plugins.plugins\["SpotifyControls"\].PanelWrapper/,
                replace: "$self.FakePanelWrapper",
            },
            predicate: () => Settings.plugins.SpotifyControls.enabled,
            noWarn: true,
        },
    ],
    FakePanelWrapper({ PlexcordOriginal, ...props }) {
        const { LyricsPosition } = settings.use(["LyricsPosition"]);
        return (
            <>
                <ErrorBoundary
                    fallback={() => (
                        <div className="vc-spotify-fallback">
                            <p>Failed to render Spotify Lyrics Modal :(</p>
                            <p>Check the console for errors</p>
                        </div>
                    )}
                >
                    {LyricsPosition === "above" && <Lyrics />}
                    <Player />
                    {LyricsPosition === "below" && <Lyrics />}
                </ErrorBoundary>

                <PlexcordOriginal {...props} />
            </>
        );
    },
    settings,
    async start() {
        await migrateOldLyrics();
    },
});
