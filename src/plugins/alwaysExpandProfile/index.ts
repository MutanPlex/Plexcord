/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { t } from "@api/i18n";
import { User } from "@plexcord/discord-types";
import { Devs, PcDevs } from "@utils/constants";
import { openUserProfile } from "@utils/discord";
import definePlugin from "@utils/types";

export default definePlugin({
    name: "AlwaysExpandProfile",
    description: "Always expands profile popouts to the full modal",
    authors: [PcDevs.MutanPlex, Devs.thororen],

    get displayDescription() {
        return t("plugin.alwaysExpandProfile.description");
    },

    patches: [
        {
            find: '"view-profile"',
            replacement: {
                match: /(user:(\i).*?"PRESS_VIEW_PROFILE".{0,200})return/,
                replace: "$1return $self.openUserProfile($2);"
            },
            all: true
        },
    ],
    openUserProfile(user: User) {
        openUserProfile(user.id);
    }
});
