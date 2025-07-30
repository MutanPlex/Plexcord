/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { User } from "@plexcord/discord-types";
import { PcDevs } from "@utils/constants";
import { openUserProfile } from "@utils/discord";
import definePlugin from "@utils/types";

export default definePlugin({
    name: "AlwaysExpandProfile",
    description: "Always display a user's full popout",
    authors: [PcDevs.MutanPlex, PcDevs.thororen],
    patches: [
        {
            find: '"UserProfilePopout"})',
            replacement: {
                match: /(?<=user:(\i).*?"PRESS_VIEW_PROFILE".{0,150})return/,
                replace: "return $self.openUserProfile($1);"
            }
        },
        {
            find: '"BotUserProfilePopout"',
            replacement: {
                match: /(?<=user:(\i).*?"PRESS_VIEW_PROFILE".{0,100})return/,
                replace: "return $self.openUserProfile($1);"
            }
        },
    ],
    openUserProfile(user: User) {
        openUserProfile(user.id);
    }
});
