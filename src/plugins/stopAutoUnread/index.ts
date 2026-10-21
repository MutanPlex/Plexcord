/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { PcDevs } from "@utils/constants";
import definePlugin from "@utils/types";

export default definePlugin({
    name: "StopAutoUnread",
    description: () => t(plugin.stopAutoUnread.description),
    tags: ["notifications"],
    authors: [PcDevs.SobakinTech, PcDevs.MutanPlex],
    patches: [
        {
            find: "}maybeAutoUpgradeChannel(",
            replacement: {
                match: /maybeAutoUpgradeChannel\(\i\){/,
                replace: "$&return !1;"
            }
        }
    ]
});
