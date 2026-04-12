/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

export function cleanUrl(url: string): string {
    try {
        const urlObject = new URL(url);
        urlObject.search = "";
        return urlObject.href;
    } catch {
        return url;
    }
}
