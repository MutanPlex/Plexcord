/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { t } from "@api/i18n";
import { Devs } from "@utils/constants";
import definePlugin from "@utils/types";

export default definePlugin({
    name: "FixImagesQuality",
    description: "Improves quality of images in chat by forcing png format",
    authors: [Devs.Nuckyz],

    get displayDescription() {
        return t("plugin.fixImagesQuality.description");
    },

    patches: [
        {
            find: ".handleImageLoad)",
            replacement: {
                match: /(?<=\i=)"webp"/,
                replace: '"png"'
            }
        }
    ]
});
