/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

export interface EnhancedLyric {
    time: number;
    text: string;
    words: Word[];
    confidence: null;
    characters: Character[];
}

interface Character {
    time: number;
    char: string;
    endTime: number;
    isVowel: boolean;
    isSilent: boolean;
    confidence: number | null;
    phoneme: string;
}

interface Word {
    time: number;
    word: string;
    endTime: number;
    isParenthetical: boolean;
    confidence: null;
    syllableCount: number;
    characters: Character[];
}
