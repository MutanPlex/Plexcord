/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { Devs, PcDevs } from "@utils/constants";
import { openUserProfile } from "@utils/discord";
import definePlugin from "@utils/types";

export default definePlugin({
    name: "AlwaysExpandProfiles",
    description: () => t(plugin.alwaysExpandProfiles.description),
    authors: [PcDevs.MutanPlex, Devs.thororen],

    patches: [
        {
            find: '"view-profile"',
            replacement: {
                match: /("PRESS_VIEW_PROFILE".{0,200})return(?<=userId:(\i\.id).*?)/,
                replace: "$1return $self.openUserModal($2);"
            },
            all: true
        },
    ],
    openUserModal(userId: string) {
        openUserProfile(userId);
    }
});
