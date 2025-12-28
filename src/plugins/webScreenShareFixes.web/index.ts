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
    name: "WebScreenShareFixes",
    description: () => t(plugin.webScreenShareFixes.description),
    authors: [Devs.Kaitlyn],
    enabledByDefault: true,

    patches: [
        {
            find: "x-google-max-bitrate",
            replacement: [
                {
                    match: /"x-google-max-bitrate=".concat\(\i\)/,
                    replace: '"x-google-max-bitrate=".concat("80_000")'
                },
                {
                    match: ";level-asymmetry-allowed=1",
                    replace: ";b=AS:800000;level-asymmetry-allowed=1"
                },
                {
                    match: /;usedtx=".concat\((\i)\?"0":"1"\)/,
                    replace: '$&.concat($1?";stereo=1;sprop-stereo=1":"")'
                },
                {
                    match: /\i\?\[(\i\.\i)\.H265,\i\.\i\.H264,\i\.\i\.VP8,\i\.\i\.VP9\]/,
                    replace: "true?['AV1',$1.H265,$1.VP9,$1.H264,$1.VP8]"
                }
            ]
        }
    ]
});
