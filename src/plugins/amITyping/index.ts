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
    name: "AmITyping",
    description: "Shows you if other people can see you typing.",
    authors: [PcDevs.MutanPlex, PcDevs.MrDiamond],

    get displayDescription() {
        return t("plugin.amITyping.description");
    },

    patches: [
        {
            find: "\"handleDismissInviteEducation\"",
            replacement: {
                match: /\i\.default\.getCurrentUser\(\)/,
                replace: "\"\""
            }
        }
    ]
});
