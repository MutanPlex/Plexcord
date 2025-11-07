/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { t } from "@api/i18n";
import { Devs, PcDevs } from "@utils/constants";
import definePlugin from "@utils/types";

export default definePlugin({
    name: "NoMirroredCamera",
    description: "Prevents the camera from being mirrored on your screen",
    authors: [Devs.nyx, PcDevs.MutanPlex],

    get displayDescription() {
        return t("plugin.noMirroredCamera.description");
    },

    patches: [
        // When focused on voice channel or group chat voice call
        {
            find: /\i\?\i.\i.SELF_VIDEO/,
            replacement: {
                match: /mirror:\i/,
                replace: "mirror:!1"
            }
        },
        // Popout camera when not focused on voice channel
        {
            find: ".mirror]:",
            replacement: {
                match: /\[(\i).mirror]:\i/,
                replace: "[$1.mirror]:!1"
            }
        },
        // Overriding css on Preview Camera/Change Video Background popup
        {
            find: ".cameraPreview,",
            replacement: {
                match: /className:\i.camera,/,
                replace: "$&style:{transform: \"scalex(1)\"},"
            }
        }
    ]
});
