/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2026 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { Devs } from "@utils/constants";
import definePlugin from "@utils/types";

export default definePlugin({
    name: "MutedServersActivityBadge",
    description: () => t(plugin.mutedServersActivityBadge.description),
    authors: [Devs.NiNoX],
    tags: ["servers", "appearance", "activity", "voice"],

    patches: [
        {
            find: '"GuildMediaStateStore"',
            replacement: {
                match: /=\i\.\i\.isMuted\(\i\)/,
                replace: "=false"
            }
        }
    ]
});
