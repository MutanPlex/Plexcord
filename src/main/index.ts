/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

import "./ipcMain";

import { app, net, protocol } from "electron";
import { join } from "path";
import { pathToFileURL } from "url";

import { initCsp } from "./csp";
import { isStyleUrlAllowed } from "./csp/manager";
import { RendererSettings } from "./settings";
import { rewriteThemeCss } from "./themes/rewrite";
import { IS_VANILLA, THEMES_DIR } from "./utils/constants";
import { ensureSafePath } from "./utils/ensureSafePath";
import { installExt } from "./utils/extensions";

const ONLINE_THEMES_PREFIX = "plexcord:///online-themes/";

// net.fetch goes through chromium's network stack, so http caching still applies like it did with plain @imports
async function fetchCss(url: string) {
    // the CSP doesn't apply to the main process, so enforce its style-src allowlist here
    if (!isStyleUrlAllowed(url)) throw new Error(`Blocked by CSP: ${url}`);

    const res = await net.fetch(url);
    if (!res.ok) throw new Error(`${res.status} ${url}`);
    return res.text();
}

const cssResponse = (css: string) => new Response(css, { headers: { "Content-Type": "text/css" } });

if (!IS_VANILLA && !IS_EXTENSION) {
    app.whenReady().then(() => {
        protocol.handle("plexcord", async ({ url: unsafeUrl }) => {
            if (unsafeUrl.startsWith(ONLINE_THEMES_PREFIX)) {
                const link = decodeURIComponent(unsafeUrl.slice(ONLINE_THEMES_PREFIX.length));
                // only serve links the user added
                const isThemeLink = RendererSettings.store.themeLinks?.some(l => l.replace(/^@(light|dark) /, "").trim() === link);
                if (!isThemeLink) return new Response(null, { status: 404 });

                try {
                    return cssResponse(await rewriteThemeCss(await fetchCss(link), link, fetchCss));
                } catch (e) {
                    console.error("[Plexcord] Failed to load online theme", link, e);
                    return new Response(null, { status: 502 });
                }
            }

            let url = decodeURI(unsafeUrl).slice("plexcord://".length).replace(/\?v=\d+$/, "");

            if (url.endsWith("/")) url = url.slice(0, -1);

            if (url.startsWith("/themes/")) {
                const theme = url.slice("/themes/".length);

                const safeUrl = ensureSafePath(THEMES_DIR, theme);
                if (!safeUrl) {
                    return new Response(null, {
                        status: 404
                    });
                }
                const res = await net.fetch(pathToFileURL(safeUrl).toString());
                if (!res.ok) return res;
                return cssResponse(await rewriteThemeCss(await res.text(), `plexcord:///themes/${theme}`, fetchCss));
            }

            // Source Maps! Maybe there's a better way but since the renderer is executed
            // from a string I don't think any other form of sourcemaps would work

            switch (url) {
                case "renderer.js.map":
                case "preload.js.map":
                case "patcher.js.map":
                case "main.js.map":
                    return net.fetch(pathToFileURL(join(__dirname, url)).toString());
                default:
                    return new Response(null, {
                        status: 404
                    });
            }
        });

        try {
            if (RendererSettings.store.enableReactDevtools)
                installExt("fmkadmapgofadopljbjfkapdkoienihi")
                    .then(() => console.info("[Plexcord] Installed React Developer Tools"))
                    .catch(err => console.error("[Plexcord] Failed to install React Developer Tools", err));
        } catch { }

        initCsp();
    });
}

if (IS_DISCORD_DESKTOP) {
    require("./patcher");
}
