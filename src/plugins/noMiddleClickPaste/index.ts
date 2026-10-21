/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { Devs, IS_LINUX, PcDevs } from "@utils/constants";
import definePlugin from "@utils/types";

function preventMiddleClick(e: MouseEvent) {
    if (e.button === 1) {
        e.preventDefault();
    }
}

export default definePlugin({
    name: "NoMiddleClickPaste",
    description: () => t(plugin.noMiddleClickPaste.description),
    authors: [Devs.Darxoon, PcDevs.MutanPlex],
    tags: ["accessibility"],
    hidden: !IS_LINUX,

    start() {
        window.addEventListener("mouseup", preventMiddleClick);
    },

    stop() {
        window.removeEventListener("mouseup", preventMiddleClick);
    },
});
