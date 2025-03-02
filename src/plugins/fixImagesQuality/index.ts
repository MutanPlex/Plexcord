/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { Devs } from "@utils/constants";
import definePlugin from "@utils/types";

export default definePlugin({
    name: "FixImagesQuality",
    description: "Prevents images from being loaded as webp, which can cause quality loss",
    authors: [Devs.Nuckyz],
    patches: [
        {
            find: ".handleImageLoad)",
            replacement: {
                match: /(?<=null;return )\i\.\i&&\(\i\|\|!\i\.isAnimated.+?:(?=\i&&\(\i="png"\))/,
                replace: ""
            }
        }
    ]
});
