/*
 * Plexcord, a modification for Discord's desktop app
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

// Shared with the renderer, so nothing electron/node specific may be imported here

// Themes are written for Vencord/Equicord, whose classes use vc-/vc_ (and eq-) instead of pc-/pc_
const legacyPrefixRe = /(\.|#|--|class[*^$|~]?=\s*["']?)(?:vc|eq)([-_])/g;
export const rewriteLegacyClasses = (css: string) => css.replace(legacyPrefixRe, "$1pc$2");

const importRe = /@import\s+(?:url\(\s*(["']?)([^"')]+)\1\s*\)|(["'])([^"']+)\3)\s*([^;]*);/g;
const urlRe = /url\(\s*(["']?)([^"')]+)\1\s*\)/g;
const isHttp = (url: string) => /^https?:\/\//i.test(url);

// Inlines nested http(s) @imports so their classes get rewritten too. Imports that can't be inlined are hoisted to the top
export async function rewriteThemeCss(css: string, baseUrl: string, fetchCss: (url: string) => Promise<string>) {
    const hoisted: string[] = [];
    const body = await inline(css, baseUrl, fetchCss, hoisted, 0);
    return [...hoisted, body].join("\n");
}

async function inline(css: string, baseUrl: string, fetchCss: (url: string) => Promise<string>, hoisted: string[], depth: number): Promise<string> {
    // inlined content no longer lives at its own url, so its relative url()s would resolve against the wrong file
    if (isHttp(baseUrl)) css = css.replace(urlRe, (m, q, href: string) =>
        /^([a-z][a-z\d+.-]*:|#)/i.test(href) || href.includes("(") ? m : `url(${q}${new URL(href, baseUrl)}${q})`
    );

    const matches = [...css.matchAll(importRe)];
    const inlined = await Promise.all(matches.map(async ([raw, , href1, , href2, conditions]) => {
        const rawHref = href1 ?? href2;
        const { href } = new URL(rawHref, baseUrl);
        const hoist = () => void hoisted.push(raw.replace(rawHref, href));

        if (depth >= 5 || conditions.trim() || !isHttp(href)) return hoist();
        try {
            return await inline(await fetchCss(href), href, fetchCss, hoisted, depth + 1);
        } catch {
            hoist();
        }
    }));

    let i = 0;
    return rewriteLegacyClasses(css.replace(importRe, () => inlined[i++] ?? ""));
}
