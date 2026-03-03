/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { disableStyle, enableStyle } from "@api/Styles";
import { PcDevs } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";
import { ChannelRTCStore, ChannelStore, GuildMemberStore, IconUtils, UserStore, VoiceStateStore } from "@webpack/common";

import style from "./style.css?managed";

const settings = definePluginSettings({
    useServerProfileAvatars: {
        label: () => t(plugin.fullVCPFP.option.useServerProfileAvatars.label),
        description: () => t(plugin.fullVCPFP.option.useServerProfileAvatars.description),
        type: OptionType.BOOLEAN,
        default: false
    }
});

export default definePlugin({
    name: "FullVCPFP",
    description: () => t(plugin.fullVCPFP.description),
    authors: [PcDevs.mochienya, PcDevs.MutanPlex],
    settings,

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
        if (!user) return;

        const channelId = VoiceStateStore.getVoiceStateForUser(participantUserId)?.channelId;
        if (!channelId) return;
        const isSpeaking = ChannelRTCStore.getSpeakingParticipants(channelId).some(p => p.user.id === participantUserId && p.speaking);
        const avatarUrl = settings.store.useServerProfileAvatars
            ? this.getServerAvatarUrl(participantUserId, channelId, isSpeaking) ?? IconUtils.getUserAvatarURL(user, isSpeaking, 1024)
            : IconUtils.getUserAvatarURL(user, isSpeaking, 1024);

        return {
            "--full-res-avatar": `url(${avatarUrl})`
        };
    },

    getServerAvatarUrl(userId: string, channelId: string, canAnimate: boolean) {
        const guildId = ChannelStore.getChannel(channelId)?.guild_id;
        if (!guildId) return;

        const guildAvatar = GuildMemberStore.getMember(guildId, userId)?.avatar;
        if (!guildAvatar) return;

        return IconUtils.getGuildMemberAvatarURLSimple({
            userId,
            guildId,
            avatar: guildAvatar,
            canAnimate,
            size: 1024
        });
    },

    start() {
        enableStyle(style);
    },
    stop() {
        disableStyle(style);
    },
});
