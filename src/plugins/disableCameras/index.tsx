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
    name: "DisableCameras",
    description: () => t(plugin.disableCameras.description),
    authors: [Devs.Joona],

    patches: [
        {
            find: ".identifyStartTime));",
            replacement: {
                match: /\i\.self_video\|\|!1/g,
                replace: "false"
            },
        }
    ]
});
