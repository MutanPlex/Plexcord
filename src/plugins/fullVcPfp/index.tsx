/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { Settings } from "@api/Settings";
import { disableStyle, enableStyle } from "@api/Styles";
import USRBGPlugin from "@plugins/usrbg";
import { PcDevs } from "@utils/constants";
import definePlugin from "@utils/types";
import { IconUtils, UserStore } from "@webpack/common";

import style from "./style.css?managed";

export default definePlugin({
    name: "FullVCPFP",
    description: () => t(plugin.fullVCPFP.description),
    authors: [PcDevs.mochienya, PcDevs.MutanPlex],

    patches: [
        {
            find: "\"data-selenium-video-tile\":",
            replacement: {
                match: /(?<=function\((\i),\i\)\{)/,
                replace: "$1.style=$self.getVoiceBackgroundStyles($1);",
            }
        }
    ],

    getVoiceBackgroundStyles({ className, participantUserId }: any) {
        if (!className.includes("tile_")) return;
        if (!participantUserId) return;

        const user = UserStore.getUser(participantUserId);
        const avatarUrl = IconUtils.getUserAvatarURL(user, false, 1024);

        if (Settings.plugins.USRBG.enabled && Settings.plugins.USRBG.voiceBackground) {
            if (USRBGPlugin.userHasBackground?.(participantUserId)) {
                document.querySelectorAll('[class*="background_"]').forEach(element => {
                    (element as HTMLElement).style.backgroundColor = "transparent";
                });
                return {
                    backgroundImage: `url(${USRBGPlugin.getImageUrl(participantUserId)})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    "--full-res-avatar": `url(${avatarUrl})`
                };
            }
        }

        return {
            "--full-res-avatar": `url(${avatarUrl})`,
        };
    },

    start() {
        enableStyle(style);
    },
    stop() {
        disableStyle(style);
    },
});
