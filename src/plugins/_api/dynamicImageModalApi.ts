/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugins, t } from "@api/i18n";
import { Devs } from "@utils/constants";
import definePlugin from "@utils/types";


export default definePlugin({
    name: "DynamicImageModalAPI",
    authors: [Devs.sadan, Devs.Nuckyz],
    description: () => t(plugins.metadata.api.description.dynamicImageModal),

    patches: [
        {
            find: ".dimensionlessImage,",
            replacement: {
                // widthAndHeightPassed = w != null && w !== 0 && h == null || h === 0
                match: /(?<=\i=)(null!=\i&&0!==\i)&&(null!=\i&&0!==\i)/,
                replace: "($1)||($2)"
            }
        }
    ]
});
