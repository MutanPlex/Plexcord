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
    name: "ChatInputButtonAPI",
    description: () => t(plugins.metadata.api.description.chatInputButtons),
    authors: [Devs.Ven],

    patches: [
        {
            find: '"sticker")',
            replacement: {
                match: /(?<=className:.{0,20}\.buttons.{0,50}children:)(\i)/,
                replace: "Plexcord.Api.ChatButtons._injectButtons($1,arguments[0])"
            }
        }
    ]
});
