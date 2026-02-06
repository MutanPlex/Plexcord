/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { Devs, PcDevs } from "@utils/constants";
import definePlugin from "@utils/types";

export default definePlugin({
    name: "NoMirroredCamera",
    description: () => t(plugin.noMirroredCamera.description),
    authors: [Devs.nyx, PcDevs.MutanPlex],

    patches: [
        // When focused on voice channel or group chat voice call
        {
            find: ".STATUS_WARNING_BACKGROUND})})",
            replacement: {
                match: /mirror:\i/,
                replace: "mirror:!1"
            }
        },
        // Popout camera when not focused on voice channel
        {
            find: "this.handleReady})",
            replacement: {
                match: /(\[\i\.\i\]:)\i/,
                replace: "$1!1"
            }
        },
        // Overriding css on Preview Camera/Change Video Background popup
        {
            find: ".PREVIEW_CAMERA_MODAL,",
            replacement: {
                match: /className:\i.\i,(?=children:\()/,
                replace: "$&style:{transform: \"scalex(1)\"},"
            }
        }
    ]
});
