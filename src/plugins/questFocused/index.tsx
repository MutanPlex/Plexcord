/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { t } from "@api/i18n";
import { Paragraph } from "@components/Paragraph";
import { PcDevs } from "@utils/constants";
import definePlugin from "@utils/types";

export default definePlugin({
    name: "QuestFocused",
    description: "Prevent the quests player from pausing and possibly skip it all together.",
    settingsAboutComponent: () => <>
        <Paragraph className="plugin-warning">
            {t("plugin.questFocused.about")}
        </Paragraph>
    </>,
    authors: [PcDevs.secp192k1],

    get displayDescription() {
        return t("plugin.questFocused.description");
    },

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
