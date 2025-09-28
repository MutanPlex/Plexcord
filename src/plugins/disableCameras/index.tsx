/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { t } from "@api/i18n";
import { Devs } from "@utils/constants";
import definePlugin from "@utils/types";

export default definePlugin({
    name: "DisableCameras",
    description: "Disables cameras in a call by default",
    authors: [Devs.Joona],

    get displayDescription() {
        return t("plugin.disableCameras.description");
    },

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
