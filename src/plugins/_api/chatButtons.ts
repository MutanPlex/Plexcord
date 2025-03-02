/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { Devs } from "@utils/constants";
import definePlugin from "@utils/types";

export default definePlugin({
    name: "ChatInputButtonAPI",
    description: "API to add buttons to the chat input",
    authors: [Devs.Ven],

    patches: [
        {
            find: '"sticker")',
            replacement: {
                // FIXME(Bundler change related): Remove old compatiblity once enough time has passed
                match: /return\((!)?\i\.\i(?:\|\||&&)(?=\(.+?(\i)\.push)/,
                replace: (m, not, children) => not
                    ? `${m}(Plexcord.Api.ChatButtons._injectButtons(${children},arguments[0]),true)&&`
                    : `${m}(Plexcord.Api.ChatButtons._injectButtons(${children},arguments[0]),false)||`
            }
        }
    ]
});
