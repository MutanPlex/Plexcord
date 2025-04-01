/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { Devs } from "@utils/constants";
import definePlugin from "@utils/types";

export default definePlugin({
    name: "BlockKrisp",
    description: "Prevent Krisp from loading",
    authors: [Devs.D3SOX],
    patches: [
        // Block loading modules on Desktop
        {
            find: "Failed to load Krisp module",
            replacement: {
                match: /await \i.\i.ensureModule\("discord_krisp"\)/,
                replace: "throw new Error();$&"
            }
        },
        // Block loading modules on Web
        {
            find: "krisp_browser_models",
            replacement: {
                match: /(\i,\{\i:\(\)=>)\i/,
                replace: "$1null"
            }
        },
        // Set Krisp to not supported
        {
            find: "isNoiseCancellationSupported(){",
            replacement: {
                match: /isNoiseCancellationSupported\(\)\{/,
                replace: "$&return false;"
            }
        }
    ],
});
