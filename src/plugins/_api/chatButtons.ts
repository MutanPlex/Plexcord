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
                match: /0===(\i)\.length(?=.{0,25}?\(0,\i\.jsxs?\)\(.{0,75}?children:\1)/,
                replace: "(Plexcord.Api.ChatButtons._injectButtons($1,arguments[0]),$&)"
            }
        }
    ]
});
