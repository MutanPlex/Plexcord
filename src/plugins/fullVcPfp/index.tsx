/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { disableStyle, enableStyle } from "@api/Styles";
import { PcDevs } from "@utils/constants";
import definePlugin from "@utils/types";
import { ChannelRTCStore, IconUtils, UserStore, VoiceStateStore } from "@webpack/common";

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
                replace: "Object.assign($1.style=$1.style||{},$self.getVoiceBackgroundStyles($1));",
            }
        },
    ],

    getVoiceBackgroundStyles({ className, participantUserId }: any) {
        if (!className.includes("tile") || !participantUserId) return;

        const user = UserStore.getUser(participantUserId);
        const channelId = VoiceStateStore.getVoiceStateForUser(participantUserId)?.channelId!;
        const isSpeaking = ChannelRTCStore.getSpeakingParticipants(channelId).some(p => p.user.id === participantUserId && p.speaking);
        const avatarUrl = IconUtils.getUserAvatarURL(user, isSpeaking, 1024);

        return {
            "--full-res-avatar": `url(${avatarUrl})`
        };
    },

    start() {
        enableStyle(style);
    },
    stop() {
        disableStyle(style);
    },
});
