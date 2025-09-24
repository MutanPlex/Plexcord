/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

export const packs = {
    "operagx": {
        others: [
            "https://github.com/MutanPlex/random-files/raw/main/sounds/keyboard/operagx/click1.wav",
            "https://github.com/MutanPlex/random-files/raw/main/sounds/keyboard/operagx/click2.wav",
            "https://github.com/MutanPlex/random-files/raw/main/sounds/keyboard/operagx/click3.wav"
        ],
        backspaces: [
            "https://github.com/MutanPlex/random-files/raw/main/sounds/keyboard/operagx/backspace.wav"
        ]
    },
    "osu": {
        others: [
            "https://github.com/MutanPlex/random-files/raw/main/sounds/keyboard/osu/key-press-1.mp3",
            "https://github.com/MutanPlex/random-files/raw/main/sounds/keyboard/osu/key-press-2.mp3",
            "https://github.com/MutanPlex/random-files/raw/main/sounds/keyboard/osu/key-press-3.mp3",
            "https://github.com/MutanPlex/random-files/raw/main/sounds/keyboard/osu/key-press-4.mp3"
        ],
        backspaces: [
            "https://github.com/MutanPlex/random-files/raw/main/sounds/keyboard/osu/key-delete.mp3"
        ],
        caps: [
            "https://github.com/MutanPlex/random-files/raw/main/sounds/keyboard/osu/key-caps.mp3"
        ],
        enters: [
            "https://github.com/MutanPlex/random-files/raw/main/sounds/keyboard/osu/key-confirm.mp3"
        ],
        arrows: [
            "https://github.com/MutanPlex/random-files/raw/main/sounds/keyboard/osu/key-movement.mp3"
        ],
        allowedIgnored: [
            "CapsLock",
            "ArrowUp",
            "ArrowRight",
            "ArrowLeft",
            "ArrowDown"
        ]
    }
} as Record<"operagx" | "osu", {
    others: string[];
    backspaces: string[];
    caps?: string[];
    enters?: string[];
    arrows?: string[];
    allowedIgnored?: string[];
}>;

export const ignoredKeys = [
    "CapsLock",
    "ShiftLeft",
    "ShiftRight",
    "ControlLeft",
    "ControlRight",
    "AltLeft",
    "AltRight",
    "MetaLeft",
    "MetaRight",
    "ArrowUp",
    "ArrowRight",
    "ArrowLeft",
    "ArrowDown",
    "MediaPlayPause",
    "MediaStop",
    "MediaTrackNext",
    "MediaTrackPrevious",
    "MediaSelect",
    "MediaEject",
    "MediaVolumeUp",
    "MediaVolumeDown",
    "AudioVolumeUp",
    "AudioVolumeDown"
];
