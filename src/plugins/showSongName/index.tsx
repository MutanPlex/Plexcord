/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2026 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { Devs, PcDevs } from "@utils/constants";
import definePlugin from "@utils/types";

export default definePlugin({
    name: "ShowSongName",
    description: () => t(plugin.showSongName.description),
    authors: [Devs.prism, PcDevs.MutanPlex],

    patches: [{
        find: '.join(", ");return{text:',
        replacement: {
            match: /(?<=.join\(", "\);return\{text:)\i/,
            replace: "arguments[0]?.details??$&"
        }
    }]
});
