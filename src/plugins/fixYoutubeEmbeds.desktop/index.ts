/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { t } from "@api/i18n";
import { Devs } from "@utils/constants";
import definePlugin from "@utils/types";

export default definePlugin({
    name: "FixYoutubeEmbeds",
    description: "Bypasses youtube videos being blocked from display on Discord (for example by UMG)",

    get displayDescription() {
        return t("plugin.fixYoutubeEmbeds.description");
    },

    authors: [Devs.coolelectronics]
});
