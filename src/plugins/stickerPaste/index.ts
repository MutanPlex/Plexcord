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
    name: "StickerPaste",
    description: "Makes picking a sticker in the sticker picker insert it into the chatbox instead of instantly sending",
    authors: [Devs.ImBanana],

    get displayDescription() {
        return t("plugin.stickerPaste.description");
    },

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
