/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { t } from "@api/i18n";
import { Devs } from "@utils/constants";
import definePlugin from "@utils/types";

export default definePlugin({
    name: "NicknameIconsAPI",
    description: "API to add icons to the nickname, in profiles",
    authors: [Devs.Nuckyz],

    get displayDescription() {
        return t("plugins.metadata.api.description.nicknameIcons");
    },

    patches: [
        {
            find: "#{intl::USER_PROFILE_LOAD_ERROR}",
            replacement: {
                match: /(\.fetchError.+?\?)null/,
                replace: (_, rest) => `${rest}Plexcord.Api.NicknameIcons._renderIcons(arguments[0])`
            }
        }
    ]
});
