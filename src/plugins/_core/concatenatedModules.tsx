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
            find: ".web.tsx`",
            replacement: {
                match: /function \i\(\i\)\{let \i,\{badgeIcon:(?=.{0,400}\?\?=(\i\(\d+\));let \i=`\.\/\$\{\i\}\.web\.tsx`)/,
                replace: "$self.loadIcons($1);$&"
            }
        }
    ],
    iconsModule: undefined as IconsDef | undefined,
    async loadIcons(load: ((path: string) => Promise<IconsDef>) & { keys(): string[]; }) {
        const icons = await Promise.all(load.keys().map(load));
        this.setIconsModule(Object.assign({}, ...icons));
    },
    setIconsModule(value: IconsDef) {
        iconsModule = value;

        // if you don't want to use IconViewer, you can use
        // Plexcord.Plugins.plugins.ConcatenatedModules.iconsModule for icons and viewing paths
        this.iconsModule = value;
    },
});
