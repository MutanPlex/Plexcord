/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { Devs } from "@utils/constants";
import definePlugin from "@utils/types";

export default definePlugin({
    name: "DisableDeepLinks",
    description: () => t(plugin.noDeepLinks.description),
    authors: [Devs.Ven],
    required: true,

    noop: () => { },

    patches: [
        {
            find: /\.openNativeAppModal\(.{0,50}?\.DEEP_LINK/,
            replacement: {
                match: /\i\.\i\.openNativeAppModal/,
                replace: "$self.noop",
            }
        }
    ]
});
