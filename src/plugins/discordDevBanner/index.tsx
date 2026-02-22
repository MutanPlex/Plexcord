/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import "./styles.css";

import { plugin, t } from "@api/i18n";
import { Devs, PcDevs } from "@utils/constants";
import definePlugin from "@utils/types";

import { makeDevBanner, settings } from "./components";

export default definePlugin({
    name: "DiscordDevBanner",
    description: () => t(plugin.discordDevBanner.description),
    authors: [PcDevs.KrystalSkull, Devs.thororen, PcDevs.MutanPlex],
    settings,
    patches: [
        {
            find: '"isHideDevBanner"',
            replacement: [
                {
                    match: '"staging"===window.GLOBAL_ENV.RELEASE_CHANNEL',
                    replace: "true"
                },
                {
                    match: /children:\[.*?\{\}\)\]/g,
                    replace: "children:$self.makeDevBanner()"
                },
            ]
        }
    ],
    makeDevBanner,
});
