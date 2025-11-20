/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { t } from "@api/i18n";
import { DataStore } from "@api/index";
import { PcDevs } from "@utils/constants";
import definePlugin from "@utils/types";
import { findByPropsLazy } from "@webpack";
import { ChannelStore, PermissionStore, UserStore, VoiceStateStore } from "@webpack/common";

const ChannelActions = findByPropsLazy("selectChannel", "selectVoiceChannel");
const CONNECT = 1n << 20n;
const getDiscordBranch = () => (window as any).GLOBAL_ENV?.RELEASE_CHANNEL || "stable";
const DATASTORE_KEY = () => `LastVoice_${getDiscordBranch()}_${UserStore.getCurrentUser().id}`;

async function joinVoiceChannel(channelId: string) {
    const channel = ChannelStore.getChannel(channelId);
    if (!channel) return false;
    if (!PermissionStore.can(CONNECT, channel)) return false;
    if (channel.userLimit > 0 && Object.keys(VoiceStateStore.getVoiceStatesForChannel(channelId)).length >= channel.userLimit) return false;
    try { ChannelActions.selectVoiceChannel(channelId); return true; } catch { return false; }
}

async function autoRejoin() {
    const savedChannelId = await DataStore.get(DATASTORE_KEY());
    if (!savedChannelId) return;
    setTimeout(() => joinVoiceChannel(savedChannelId), 2000);
}

export default definePlugin({
    name: "LastVoice",
    description: "Automatically rejoins your last voice channel when you restart Discord.",
    authors: [PcDevs.MutanPlex],
    get displayDescription() { return t("plugin.lastVoice.description"); },
    flux: {
        VOICE_STATE_UPDATES({ voiceStates }) {
            for (const state of voiceStates) {
                if (state.userId === UserStore.getCurrentUser().id && "oldChannelId" in state) {
                    DataStore.set(DATASTORE_KEY(), state.channelId);
                }
            }
        },
        CONNECTION_OPEN() { autoRejoin(); }
    },
    start() { autoRejoin(); },
    stop() { }
});
