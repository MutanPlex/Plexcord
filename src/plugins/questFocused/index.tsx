/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { PcDevs } from "@utils/constants";
import definePlugin from "@utils/types";
import { Forms } from "@webpack/common";

export default definePlugin({
    name: "QuestFocused",
    description: "Prevent the quests player from pausing and possibly skip it all together.",
    settingsAboutComponent: () => <>
        <Forms.FormText className="plugin-warning">
            You might need to spam left mouse button on the video to skip it.
        </Forms.FormText>
    </>,
    authors: [PcDevs.secp192k1],
    patches: [
        // Block pausing
        {
            find: "[QV] | updatePlayerState | playerState",
            replacement: {
                match: /(?<=case \i\.\i\.PAUSED:.{0,25})\i\.current\.pause\(\),/,
                replace: ""
            }
        },
        {
            find: "[QV] | updatePlayerState | playerState:",
            replacement: {
                match: /(?<=case \i\.\i\.PLAYING:)\i\.current\.paused/,
                replace: "false"
            }
        },
    ],
});
