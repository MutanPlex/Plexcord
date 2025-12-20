/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

export let EXTENSION_VERSION: string;
export let EXTENSION_BASE_URL: string;
export let RENDERER_CSS_URL: string;

let resolveMetaReady: Function;
export const metaReady = new Promise<void>(res => resolveMetaReady = res);

if (IS_EXTENSION) {
    const listener = (e: MessageEvent) => {
        if (e.data?.type === "plexcord:meta") {
            ({ EXTENSION_BASE_URL, EXTENSION_VERSION, RENDERER_CSS_URL } = e.data.meta);
            window.removeEventListener("message", listener);
            resolveMetaReady();
        }
    };

    window.addEventListener("message", listener);
}
