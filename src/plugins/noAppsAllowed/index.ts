/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { PcDevs } from "@utils/constants";
import definePlugin from "@utils/types";

export default definePlugin({
    name: "NoAppsAllowed",
    description: () => t(plugin.noAppsAllowed.description),
    authors: [PcDevs.meowabyte, PcDevs.MutanPlex],
    patches: [
        {
            find: '"#{intl::APP_TAG::hash}":',
            replacement: {
                match: /(#{intl::APP_TAG::hash}":\[").*?("\])/,
                replace: "$1BOT$2"
            }
        }
    ]
});
