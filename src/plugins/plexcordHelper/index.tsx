/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { Settings } from "@api/Settings";
import { Devs, PcDevs } from "@utils/constants";
import definePlugin from "@utils/types";

import { PluginButtons } from "./pluginButtons";
import { PluginCards } from "./pluginCards";

export default definePlugin({
    name: "PlexcordHelper",
    description: () => t(plugin.plexcordHelper.description),
    tags: ["utility"],
    dependencies: ["MessageAccessoriesAPI"],
    authors: [
        Devs.thororen,
        PcDevs.nyx,
        PcDevs.Naibuu,
        PcDevs.MutanPlex
    ],
    required: true,
    patches: [
        // Fixes Unknown Resolution/FPS Crashing
        {
            find: "Unknown resolution:",
            replacement: [
                {
                    match: /throw Error\(`Unknown resolution: \$\{(\i)\}`\)/,
                    replace: "return $1;"
                },
                {
                    match: /throw Error\(`Unknown frame rate: \$\{(\i)\}`\)/,
                    replace: "return $1;"
                }
            ]
        },
        {
            find: ".USE_OSX_NATIVE_TRAFFIC_LIGHTS",
            replacement: {
                match: /case \i\.\i\.WINDOWS:/,
                replace: 'case "WEB":'
            },
            predicate: () => Settings.nativeTitleBar,
        },
        {
            find: '"refresh-title-bar-small"',
            replacement: [
                {
                    match: /\i===\i\.PlatformTypes\.WINDOWS/g,
                    replace: "false"
                },
                {
                    match: /\i===\i\.PlatformTypes\.WEB/g,
                    replace: "true"
                }
            ],
            predicate: () => Settings.nativeTitleBar,
        },
        // gif-picker context menu doesnt get full context so give it
        {
            find: "renderEmptyFavorite",
            replacement: {
                match: /(?<=handleContextMenu.{0,150})(?=link:(\i)\.url)/,
                replace: "...$1,"
            }
        }
    ],
    renderMessageAccessory(props) {
        return (
            <>
                <PluginButtons message={props.message} />
                <PluginCards message={props.message} />
            </>
        );
    }
});
