/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { Devs } from "@utils/constants";
import definePlugin from "@utils/types";

export default definePlugin({
    name: "StickerPaste",
    description: () => t(plugin.stickerPaste.description),
    authors: [Devs.ImBanana],

    patches: [
        {
            find: ".stickers,previewSticker:",
            replacement: {
                match: /if\(\i\.\i\.getUploadCount/,
                replace: "return true;$&",
            }
        }
    ]
});
