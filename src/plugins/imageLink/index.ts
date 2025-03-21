/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { Devs } from "@utils/constants";
import definePlugin from "@utils/types";

export default definePlugin({
    name: "ImageLink",
    description: "Never hide image links in messages, even if it's the only content",
    authors: [Devs.Kyuuhachi, Devs.Sqaaakoi],

    patches: [
        {
            find: "unknownUserMentionPlaceholder:",
            replacement: {
                // SimpleEmbedTypes.has(embed.type) && isEmbedInline(embed)
                match: /\i\.has\(\i\.type\)&&\(0,\i\.\i\)\(\i\)/,
                replace: "false",
            }
        }
    ]
});
