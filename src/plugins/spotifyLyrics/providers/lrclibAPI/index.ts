/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { LyricsData, Provider } from "@plugins/spotifyLyrics/providers/types";
import { Track } from "plugins/spotifyControls/SpotifyStore";

const baseUrlLrclib = "https://lrclib.net/api/get";

interface LrcLibResponse {
    id: number;
    name: string;
    trackName: string;
    artistName: string;
    albumName: string;
    duration: number;
    instrumental: boolean;
    plainLyrics: string | null;
    syncedLyrics: string | null;
}

function lyricTimeToSeconds(time: string) {
    const [minutes, seconds] = time.slice(1, -1).split(":").map(Number);
    return minutes * 60 + seconds;
}

export async function getLyricsLrclib(track: Track): Promise<LyricsData | null> {
    const info = {
        track_name: track.name,
        artist_name: track.artists[0].name,
        album_name: track.album.name,
        duration: track.duration / 1000
    };

    const params = new URLSearchParams(info as any);
    const url = `${baseUrlLrclib}?${params.toString()}`;
    const response = await fetch(url, {
        headers: {
            "User-Agent": "https://github.com/Masterjoona/vc-spotifylyrics"
        }
    });

    if (!response.ok) return null;

    const data = await response.json() as LrcLibResponse;
    if (!data.syncedLyrics) return null;

    const lyrics = data.syncedLyrics;
    const lines = lyrics.split("\n").filter(line => line.trim() !== "");

    return {
        useLyric: Provider.Lrclib,
        lyricsVersions: {
            LRCLIB: lines.map(line => {
                const [lrcTime, text] = line.split("]");
                const trimmedText = text.trim();
                return {
                    time: lyricTimeToSeconds(lrcTime),
                    text: (trimmedText === "" || trimmedText === "♪") ? null : trimmedText
                };
            })
        }
    };
}
