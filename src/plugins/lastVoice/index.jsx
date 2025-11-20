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

const ChannelActions = findByPropsLazy("selectChannel", "selectVoiceChannel"), CONNECT = 1n << 20n, getDiscordBranch = () => (window as any).GLOBAL_ENV?.RELEASE_CHANNEL || "stable", DATASTORE_KEY = () => `LastVoice_${getDiscordBranch()}_${UserStore.getCurrentUser().id}`, joinVoiceChannel = async (channelId: string) => { const channel = ChannelStore.getChannel(channelId); if (!channel || !PermissionStore.can(CONNECT, channel) || (channel.userLimit > 0 && Object.keys(VoiceStateStore.getVoiceStatesForChannel(channelId)).length >= channel.userLimit)) return false; try { ChannelActions.selectVoiceChannel(channelId); return true; } catch { return false; } }, autoRejoin = async () => { const savedChannelId = await DataStore.get(DATASTORE_KEY()); if (savedChannelId) setTimeout(() => joinVoiceChannel(savedChannelId), 100); };

export default definePlugin({ name: "LastVoice", description: "Automatically rejoins your last voice channel when you restart Discord.", authors: [PcDevs.He4vuc], get displayDescription() { return t("plugin.lastVoice.description"); }, flux: { VOICE_STATE_UPDATES({ voiceStates }) { for (const state of voiceStates) if (state.userId === UserStore.getCurrentUser().id && "oldChannelId" in state) DataStore.set(DATASTORE_KEY(), state.channelId); }, CONNECTION_OPEN() { autoRejoin(); } }, start() { autoRejoin(); }, stop() { } });
