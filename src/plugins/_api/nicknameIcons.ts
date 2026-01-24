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
    name: "NicknameIconsAPI",
    description: () => t(plugins.metadata.api.description.nicknameIcons),
    authors: [Devs.Nuckyz],

    patches: [
        {
            find: "#{intl::USER_PROFILE_PRONOUNS}",
            replacement: {
                match: /(?<=isVerifiedBot\(\)}\).{0,60})children:(\i)/,
                replace: "children:[...Plexcord.Api.NicknameIcons._renderIcons({userId:arguments[0].user?.id}),$1]"
            }
        }
    ]
});
