/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2026 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { CspPolicies } from "@main/csp";
import { RendererSettings } from "@main/settings";
import { app, type WebFrameMain, webFrameMain } from "electron";
import playerFilter from "file://playerFilter.js?minify";
import recoverEmbed from "file://recoverEmbed.js?minify";

const youtubeEmbed = /^https:\/\/www\.youtube(?:-nocookie)?\.com\/embed\//;
const youtubeVideoEmbed = new RegExp(`${youtubeEmbed.source}[\\w-]{11}(?:[?#]|$)`);

function isFeatureEnabled(feature: "fixBlockedEmbeds" | "blockAds") {
    const { BetterYouTubeEmbeds } = RendererSettings.plain.plugins ?? {};
    return !!BetterYouTubeEmbeds?.enabled && BetterYouTubeEmbeds[feature] !== false;
}

function runScript(frame: WebFrameMain, script: string) {
    frame.executeJavaScript(script).catch(error => {
        if (!frame.detached) {
            console.error("BetterYouTubeEmbeds: Failed to run embed script", error);
        }
    });
}

const fixBlockedEmbeds = isFeatureEnabled("fixBlockedEmbeds");
if (fixBlockedEmbeds) {
    CspPolicies["https://www.youtube-nocookie.com/embed/"] = ["frame-src"];
}

app.on("browser-window-created", (_, win) => {
    if (fixBlockedEmbeds) {
        win.webContents.on("did-frame-finish-load", (_, isMainFrame, processId, routingId) => {
            if (isMainFrame) {
                return;
            }

            const frame = webFrameMain.fromId(processId, routingId);
            if (frame && youtubeVideoEmbed.test(frame.url)) {
                runScript(frame, recoverEmbed);
            }
        });
    }

    win.webContents.on("frame-created", (_, { frame }) => {
        frame?.once("dom-ready", () => {
            if (!isFeatureEnabled("blockAds")) {
                return;
            }

            if (youtubeEmbed.test(frame.url)) {
                runScript(frame, playerFilter);
            } else if (frame.parent && youtubeEmbed.test(frame.parent.url)) {
                runScript(frame.parent, playerFilter);
            }
        });
    });
});
