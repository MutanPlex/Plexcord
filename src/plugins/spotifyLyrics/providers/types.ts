/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

export interface SyncedLyric {
    time: number;
    text: string | null;
}

export enum Provider {
    Lrclib = "LRCLIB",
    Spotify = "Spotify",
    Translated = "Translated",
    Romanized = "Romanized",
    None = "None",
}

export interface LyricsData {
    lyricsVersions: Partial<Record<Provider, SyncedLyric[] | null>>;
    useLyric: Provider;
}
