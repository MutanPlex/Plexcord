/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { app } from "electron";
import { RendererSettings } from "main/settings";

app.on("browser-window-created", (_, win) => {
    win.webContents.on("frame-created", (_, { frame }) => {
        frame?.once("dom-ready", () => {
            if (frame.url.startsWith("https://open.spotify.com/embed/")) {
                const settings = RendererSettings.store.plugins?.FixSpotifyEmbeds;
                if (!settings?.enabled) return;

                frame.executeJavaScript(`
                    const original = Audio.prototype.play;
                    Audio.prototype.play = function() {
                        this.volume = ${(settings.volume / 100) || 0.1};
                        return original.apply(this, arguments);
                    }
                `);
            }
        });
    });
});
