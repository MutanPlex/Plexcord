/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2026 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import type { Message } from "@plexcord/discord-types";

export interface TranslateResponse {
    src: string;
    confidence: number;
    sentences: { trans?: string; }[];
}

export interface CachedTranslation {
    original: string;
    translated: string;
    sourceLang: string;
}

export type MessageWithContent = Message & { content: string; };
