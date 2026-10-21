/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { Devs, PcDevs } from "@utils/constants";
import definePlugin from "@utils/types";
import { UserGuildSettingsStore, UserStore, VoiceStateStore } from "@webpack/common";

export default definePlugin({
    name: "HideMutedVoiceIndicator",
    description: () => t(plugin.hideMutedVoiceIndicator.description),
    authors: [Devs.thororen, PcDevs.MutanPlex],
    tags: ["servers", "voice", "appearance"],

    patches: [
        {
            find: "DirectMessage: getSpringConfigs()",
            replacement: [
                {
                    match: /("data-drop-hovering".{0,100}selected:(?:\i|!0),upperBadge:)(\i)(?=,lowerBadge:\i)/g,
                    replace: "$1$self.hasUnmutedVoiceChannel(arguments[0]?.guild?.id)?$2:null"
                },
                {
                    match: /return (\i)\.type===\i\.\i\.GUILD_VOICE/,
                    replace: "$&&&!$self.isChannelMuted($1?.guildId,$1?.id)"
                },
                {
                    match: /\.afkChannelId\).{0,80}.filter\((\i)=>\i\.type===\i\.\i\.VOICE/,
                    replace: "$&&&!$self.isChannelMuted($1?.guildId,$1?.channelId)"
                },
                {
                    match: /\.getAllApplicationStreams\(\).filter\((\i)=>\i\.guildId===\i/,
                    replace: "$&&&!$self.isChannelMuted($1?.guildId,$1?.channelId)"
                },
                {
                    match: /\.getEmbeddedActivitiesForGuild\((\i)\)(?=.{0,100}\.flatMap\(\i=>)/,
                    replace: "$&.filter(e=>!$self.isChannelMuted($1?.guildId,e?.channelId))"
                }
            ]
        }
    ],

    isChannelMuted(guildId: string, channelId: string) {
        const currentUserVoiceState = VoiceStateStore.getVoiceStateForUser(UserStore.getCurrentUser()?.id);
        if (currentUserVoiceState?.channelId === channelId) return false;
        return UserGuildSettingsStore.isChannelMuted(guildId, channelId);
    },

    hasUnmutedVoiceChannel(guildId: string) {
        const voiceStates = VoiceStateStore.getVoiceStates(guildId);
        const currentUserVoiceState = VoiceStateStore.getVoiceStateForUser(UserStore.getCurrentUser()?.id);

        return Object.values(voiceStates ?? {}).some(voiceState =>
            voiceState?.channelId === currentUserVoiceState?.channelId ||
            !UserGuildSettingsStore.isChannelMuted(guildId, voiceState?.channelId!)
        );
    }
});
