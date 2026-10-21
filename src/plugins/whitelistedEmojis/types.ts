/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

export interface ContextMenuEmoji {
    type: string;
    id: string;
    name: string;
    surrogates?: string;
}

export interface Target {
    dataset: ContextMenuEmoji;
}

export interface SavedEmoji {
    type: string;
    id: string;
    name: string;
    guildId?: string;
    surrogates?: string;
    url?: string;
    animated?: boolean;
}
