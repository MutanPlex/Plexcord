/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { Devs } from "@utils/constants";
import definePlugin from "@utils/types";


export default definePlugin({
    name: "DynamicImageModalAPI",
    authors: [Devs.sadan, Devs.Nuckyz],
    description: "Allows you to omit either width or height when opening an image modal",
    patches: [
        {
            find: ".dimensionlessImage,",
            replacement: {
                match: /(?<="IMAGE"===\i&&\(\i=)\i(?=\?)/,
                replace: "true"
            }
        }
    ]
});
