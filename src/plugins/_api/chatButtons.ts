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
    name: "ChatInputButtonAPI",
    description: "API to add buttons to the chat input",
    authors: [Devs.Ven],

    get displayDescription() {
        return t("plugins.metadata.api.description.chatInputButtons");
    },

    patches: [
        {
            find: '"sticker")',
            replacement: {
                match: /return\(\i\.\i\|\|(?=\(.+?(\i)\.push)/,
                replace: "$&(Plexcord.Api.ChatButtons._injectButtons($1,arguments[0]),false)||"
            }
        }
    ]
});
