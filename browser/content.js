/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2022 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

if (typeof browser === "undefined") {
    var browser = chrome;
}

document.addEventListener(
    "DOMContentLoaded",
    () => {
        window.postMessage({
            type: "plexcord:meta",
            meta: {
                EXTENSION_VERSION: browser.runtime.getManifest().version,
                EXTENSION_BASE_URL: browser.runtime.getURL(""),
                RENDERER_CSS_URL: browser.runtime.getURL("dist/Plexcord.css"),
            }
        });

        chrome.runtime.onMessage.addListener(request => {
            window.postMessage({ type: "plexcord:keybinds", meta: request.command });
        });

        window.addEventListener("message", function(event) {
            if (event.source !== window) return;

            if (event.data.type === "OPEN_SHORTCUTS") {
            chrome.runtime.sendMessage({ action: "openShortcuts" });
            }
        }, false);
    },
    { once: true }
);
