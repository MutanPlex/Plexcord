/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { PcDevs } from "@utils/constants";
import definePlugin from "@utils/types";

export default definePlugin({
    name: "FileDownloadButton",
    description: () => t(plugin.fileDownloadButton.description),
    authors: [PcDevs.MutanPlex],

    patches: [
        {
            find: '"VISUAL_PLACEHOLDER":',
            replacement: {
                match: /(\.downloadUrl,showDownload:)\i/,
                replace: "$1!0"
            }
        },
    ]
});
