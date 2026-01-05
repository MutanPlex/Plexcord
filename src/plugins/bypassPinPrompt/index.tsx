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
    name: "BypassPinPrompt",
    description: () => t(plugin.bypassPinPrompt.description),
    authors: [Devs.thororen],
    patches: [
        {
            find: '"Channel Pins"',
            replacement: {
                match: /(\i\.\i\.unpinMessage\(\i,\i\.id\)):\i\.\i\.confirmUnpin\(\i,\i\)/,
                replace: "$1:$1"
            }
        },
        {
            find: 'source:"message-actions"',
            replacement: [
                {
                    match: /(\i\.\i\.pinMessage\(\i,\i\.id\)):\i\.\i\.confirmPin\(\i,\i\)/,
                    replace: "$1:$1"
                },
                {
                    match: /(\i\.\i\.unpinMessage\(\i,\i\.id\)):\i\.\i\.confirmUnpin\(\i,\i\)/,
                    replace: "$1:$1"
                }
            ]
        },
        {
            find: 'id:"pin",action',
            replacement: [
                {
                    match: /(\i\.\i\.pinMessage\(\i,\i\.id\)):\i\.\i\.confirmPin\(\i,\i\)/,
                    replace: "$1:$1"
                },
                {
                    match: /(\i\.\i\.unpinMessage\(\i,\i\.id\)):\i\.\i\.confirmUnpin\(\i,\i\)/,
                    replace: "$1:$1"
                }
            ]
        },
    ],
});
