/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2026 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { IconsDef } from "@plugins/iconViewer/types";
import { Devs } from "@utils/constants";
import definePlugin from "@utils/types";

export let iconsModule: IconsDef;

export default definePlugin({
    name: "ConcatenatedModules",
    description: () => t(plugin.concatenatedModules.description),
    authors: [Devs.thororen],
    patches: [
        {
            find: "AngleBracketsIcon",
            replacement: {
                match: /\i\.\i\((\i)\),\i\.\i\(\i,\{AIcon/,
                replace: "$self.setIconsModule($1),$&"
            }
        }
    ],
    iconsModule: undefined as IconsDef | undefined,
    setIconsModule(value: IconsDef) {
        iconsModule = value;

        // if you don't want to use IconViewer, you can use
        // Plexcord.Plugins.plugins.ConcatenatedModules.iconsModule for icons and viewing paths
        this.iconsModule = value;
    },
});
