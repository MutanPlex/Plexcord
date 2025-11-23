/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { t } from "@api/i18n";
import { PcDevs } from "@utils/constants";
import definePlugin from "@utils/types";

export default definePlugin({
    name: "SelfForward",
    description: "Adds the current channel to the forward list popup",
    authors: [PcDevs.VillainsRule],

    get displayDescription() {
        return t("plugin.selfForward.description");
    },

    patches: [
        {
            find: ".getChannelHistory(),",
            replacement: [{
                match: /\i.id\]/,
                replace: "]"
            }]
        }
    ]
});
