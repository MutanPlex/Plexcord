#!/usr/bin/node
/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2022 Vendicated and contributors
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

// @ts-check

import { readFileSync } from "fs";
import { appendFile, mkdir, readdir, readFile, rm, writeFile } from "fs/promises";
import { join } from "path";
import JSZip from "jszip";

import { BUILD_TIMESTAMP, commonOpts, globPlugins, IS_COMPANION_TEST, IS_DEV, IS_REPORTER, IS_ANTI_CRASH_TEST, VERSION, commonRendererPlugins, buildOrWatchAll, stringifyValues } from "./common.mjs";

/**
 * @type {import("esbuild").BuildOptions}
 */
const commonOptions = {
    ...commonOpts,
    entryPoints: ["browser/Plexcord.ts"],
    format: "iife",
    globalName: "Plexcord",
    external: ["~plugins", "~git-hash", "/assets/*"],
    target: ["esnext"],
    plugins: [
        globPlugins("web"),
        ...commonRendererPlugins
    ],
    define: stringifyValues({
        IS_WEB: true,
        IS_EXTENSION: false,
        IS_USERSCRIPT: false,
        IS_STANDALONE: true,
        IS_DEV,
        IS_REPORTER,
        IS_COMPANION_TEST,
        IS_ANTI_CRASH_TEST,
        IS_DISCORD_DESKTOP: false,
        IS_PLEXTRON: false,
        IS_UPDATER_DISABLED: true,
        VERSION,
        BUILD_TIMESTAMP
    })
};

const MonacoWorkerEntryPoints = [
    "vs/language/css/css.worker.js",
    "vs/editor/editor.worker.js"
];

/** @type {import("esbuild").BuildOptions[]} */
const buildConfigs = [
    {
        entryPoints: MonacoWorkerEntryPoints.map(entry => `node_modules/monaco-editor/esm/${entry}`),
        bundle: true,
        minify: true,
        format: "iife",
        outbase: "node_modules/monaco-editor/esm/",
        outdir: "dist/vendor/monaco"
    },
    {
        entryPoints: ["browser/monaco.ts"],
        bundle: true,
        minify: true,
        format: "iife",
        outfile: "dist/vendor/monaco/index.js",
        loader: {
            ".ttf": "file"
        }
    },
    {
        ...commonOptions,
        outfile: "dist/browser.js",
        footer: { js: "//# sourceURL=file:///PlexcordWeb" }
    },
    {
        ...commonOptions,
        outfile: "dist/extension.js",
        define: {
            ...commonOptions.define,
            IS_EXTENSION: "true"
        },
        footer: { js: "//# sourceURL=file:///PlexcordWeb" }
    },
    {
        ...commonOptions,
        inject: ["browser/GMPolyfill.js", ...(commonOptions?.inject || [])],
        define: {
            ...commonOptions.define,
            IS_USERSCRIPT: "true",
            window: "unsafeWindow",
        },
        outfile: "dist/Plexcord.user.js",
        banner: {
            js: readFileSync("browser/userscript.meta.js", "utf-8").replace("%version%", `${VERSION}.${new Date().getTime()}`)
        },
        footer: {
            // UserScripts get wrapped in an iife, so define Plexcord prop on window that returns our local
            js: "Object.defineProperty(unsafeWindow,'Plexcord',{get:()=>Plexcord});"
        }
    }
];

await buildOrWatchAll(buildConfigs);

/**
 * @type {(dir: string) => Promise<string[]>}
 */
async function globDir(dir) {
    const files = [];

    for (const child of await readdir(dir, { withFileTypes: true })) {
        const p = join(dir, child.name);
        if (child.isDirectory())
            files.push(...await globDir(p));
        else
            files.push(p);
    }

    return files;
}

/**
 * @type {(dir: string, basePath?: string) => Promise<Record<string, string>>}
 */
async function loadDir(dir, basePath = "") {
    const files = await globDir(dir);
    return Object.fromEntries(await Promise.all(files.map(async f => [f.slice(basePath.length), await readFile(f)])));
}

/**
  * @type {(target: string, files: string[]) => Promise<void>}
 */
async function buildExtension(target, files) {
    const entries = {
        "dist/Plexcord.js": await readFile("dist/extension.js"),
        "dist/Plexcord.css": await readFile("dist/extension.css"),
        ...await loadDir("dist/vendor/monaco", "dist/"),
        ...Object.fromEntries(await Promise.all(files.map(async f => {
            let content = await readFile(join("browser", f));
            if (f.startsWith("manifest")) {
                const json = JSON.parse(content.toString("utf-8"));
                json.version = VERSION;
                content = Buffer.from(new TextEncoder().encode(JSON.stringify(json)));
            }

            return [
                f.startsWith("manifest") ? "manifest.json" : f,
                content
            ];
        })))
    };

    await rm(target, { recursive: true, force: true });
    await Promise.all(Object.entries(entries).map(async ([file, content]) => {
        const dest = join("dist", target, file);
        const parentDirectory = join(dest, "..");
        await mkdir(parentDirectory, { recursive: true });
        await writeFile(dest, content);
    }));

    console.info("Unpacked Extension written to dist/" + target);
}

/**
 * Add a directory recursively to a JSZip instance
 * @param {JSZip} zip - JSZip instance
 * @param {string} dirPath - Directory path to add
 * @param {string} zipPath - Path in the zip file
 */
async function addDirectoryToZip(zip, dirPath, zipPath) {
    const entries = await readdir(dirPath, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = join(dirPath, entry.name);
        const zipFilePath = zipPath ? join(zipPath, entry.name) : entry.name;

        if (entry.isDirectory()) {
            await addDirectoryToZip(zip, fullPath, zipFilePath);
        } else {
            const content = await readFile(fullPath);
            zip.file(zipFilePath, content);
        }
    }
}

const appendCssRuntime = readFile("dist/Plexcord.user.css", "utf-8").then(content => {
    const cssRuntime = `unsafeWindow._pcUserScriptRendererCss=\`${content.replaceAll("`", "\\`")}\``;

    return appendFile("dist/Plexcord.user.js", cssRuntime);
});

if (!process.argv.includes("--skip-extension")) {
    await Promise.all([
        appendCssRuntime,
        buildExtension("chromium-unpacked", ["modifyResponseHeaders.json", "content.js", "manifest.json", "icon.png"]),
        buildExtension("firefox-unpacked", ["background.js", "content.js", "manifestv2.json", "icon.png"]),
    ]);

    // Zip chromium extension
    const chromiumZip = new JSZip();
    await addDirectoryToZip(chromiumZip, "dist/chromium-unpacked", "");
    const chromiumBuffer = await chromiumZip.generateAsync({ type: "nodebuffer" });
    await writeFile("dist/extension-chrome.zip", chromiumBuffer);
    console.info("Packed Chromium Extension written to dist/extension-chrome.zip");

    // Zip firefox extension
    const firefoxZip = new JSZip();
    await addDirectoryToZip(firefoxZip, "dist/firefox-unpacked", "");
    const firefoxBuffer = await firefoxZip.generateAsync({ type: "nodebuffer" });
    await writeFile("dist/extension-firefox.zip", firefoxBuffer);
    console.info("Packed Firefox Extension written to dist/extension-firefox.zip");
} else {
    await appendCssRuntime;
}
