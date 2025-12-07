/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { PcDevs } from "@utils/constants";
import definePlugin from "@utils/types";

export default definePlugin({
    name: "HeaderBarAPI",
    description: "API to add buttons to the header bar.",
    authors: [PcDevs.Prism],

    patches: [
        {
            find: '?"BACK_FORWARD_NAVIGATION":',
            replacement: {
                match: /(?<=\i\.Fragment,\{children:\[.{1,500}className:\i\}\))(?=\])/,
                replace: ",...Plexcord.Api.HeaderBar._addButtons()"
            }
        }
    ]
});
