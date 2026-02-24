/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2022 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { Notice } from "@components/Notice";
import { PcDevs } from "@utils/constants";
import definePlugin from "@utils/types";

export default definePlugin({
    name: "NeverPausePreviews",
    description: () => t(plugin.neverPausePreviews.description),
    authors: [PcDevs.vappstar, PcDevs.MutanPlex],
    settingsAboutComponent: () => (
        <Notice.Warning>
            {t(plugin.neverPausePreviews.about)}
        </Notice.Warning>
    ),
    patches: [
        {
            find: "streamerPaused()",
            replacement: {
                match: /streamerPaused\(\)\{/,
                replace: "$&return false;"
            }
        },
        {
            find: "StreamTile",
            replacement: {
                match: /\i\.\i\.isFocused\(\)/,
                replace: "true"
            }
        }
    ],
});
