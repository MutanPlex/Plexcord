/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { PcDevs } from "@utils/constants";
import definePlugin from "@utils/types";

export default definePlugin({
    name: "AmITyping",
    description: () => t(plugin.amITyping.description),
    authors: [PcDevs.MutanPlex, PcDevs.MrDiamond],

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
