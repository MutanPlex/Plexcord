/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { PcDevs } from "@utils/constants";
import definePlugin from "@utils/types";

export default definePlugin({
    name: "ShowResourceChannels",
    description: () => t(plugin.showResourceChannels.description),
    authors: [PcDevs.VillainsRule, PcDevs.MutanPlex],
    tags: ["servers", "utility"],

    patches: [{
        find: ".GUILD_DIRECTORY:null",
        replacement: {
            match: /\i\.hideResourceChannels&&/,
            replace: "false&&"
        }
    }]
});
