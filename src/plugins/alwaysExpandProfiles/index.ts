/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { Devs, PcDevs } from "@utils/constants";
import definePlugin from "@utils/types";

export default definePlugin({
    name: "AlwaysExpandProfiles",
    description: () => t(plugin.alwaysExpandProfiles.description),
    authors: [PcDevs.MutanPlex, Devs.thororen],
    tags: ["friends"],

    patches: [
        {
            find: '"view-profile"',
            replacement: {
                match: /function (\i)\(\i?\)\{.{0,45}\(0,\i\.openUserProfileModal.{0,300}(?=return)/,
                replace: "$&return $1();"
            },
            all: true
        },
    ],
});
