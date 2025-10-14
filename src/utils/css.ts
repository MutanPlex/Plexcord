/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

export function createAndAppendStyle(id: string, target = document.documentElement) {
    const style = document.createElement("style");
    style.id = id;
    target.append(style);
    return style;
}
