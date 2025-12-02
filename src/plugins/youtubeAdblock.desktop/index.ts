/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { t } from "@api/i18n";
import { Devs } from "@utils/constants";
import definePlugin from "@utils/types";

// The entire code of this plugin can be found in native.ts
export default definePlugin({
    name: "YoutubeAdblock",
    description: "Block ads in YouTube embeds and the WatchTogether activity via AdGuard",
    authors: [Devs.ImLvna, Devs.Ven],

    get displayDescription() {
        return t("plugin.youtubeAdblock.description");
    }
});
