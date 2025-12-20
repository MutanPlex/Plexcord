/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { findGroupChildrenByChildId, NavContextMenuPatchCallback } from "@api/ContextMenu";
import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { Message, User } from "@plexcord/discord-types";
import { Devs, PcDevs } from "@utils/constants";
import { classNameFactory } from "@utils/css";
import definePlugin, { OptionType } from "@utils/types";
import { findByCodeLazy } from "@webpack";
import { FluxDispatcher, Menu, MessageActions, MessageStore, RelationshipStore, SelectedChannelStore, UserStore } from "@webpack/common";

import { openVoiceChannelLog } from "./components/VoiceChannelLogModal";
import { addLogEntry } from "./logs";

export const cl = classNameFactory("pc-voice-channel-log-");
const createBotMessage = findByCodeLazy('username:"Clyde"');

const settings = definePluginSettings({
    mode: {
        label: () => t(plugin.voiceChannelLog.option.mode.label),
        description: () => t(plugin.voiceChannelLog.option.mode.description),
        type: OptionType.SELECT,
        options: [
            { label: () => t(plugin.voiceChannelLog.option.mode.menu), value: 1, default: true },
            { label: () => t(plugin.voiceChannelLog.option.mode.associated), value: 2 },
            { label: () => t(plugin.voiceChannelLog.option.mode.both), value: 3 },
        ]
    },
    voiceChannelChatSelf: {
        label: () => t(plugin.voiceChannelLog.option.voiceChannelChatSelf.label),
        description: () => t(plugin.voiceChannelLog.option.voiceChannelChatSelf.description),
        type: OptionType.BOOLEAN,
        default: true
    },
    voiceChannelChatSilent: {
        label: () => t(plugin.voiceChannelLog.option.voiceChannelChatSilent.label),
        description: () => t(plugin.voiceChannelLog.option.voiceChannelChatSilent.description),
        type: OptionType.BOOLEAN,
        default: true
    },
    voiceChannelChatSilentSelf: {
        label: () => t(plugin.voiceChannelLog.option.voiceChannelChatSilentSelf.label),
        description: () => t(plugin.voiceChannelLog.option.voiceChannelChatSilentSelf.description),
        type: OptionType.BOOLEAN,
        default: false
    },
    ignoreBlockedUsers: {
        label: () => t(plugin.voiceChannelLog.option.ignoreBlockedUsers.label),
        description: () => t(plugin.voiceChannelLog.option.ignoreBlockedUsers.description),
        type: OptionType.BOOLEAN,
        default: false
    },
});

interface VoiceState {
    guildId?: string;
    channelId?: string;
    oldChannelId?: string;
    user: User;
    userId: string;
}

function getMessageFlags(selfInChannel: boolean) {
    let flags = 1 << 6;
    if (selfInChannel ? settings.store.voiceChannelChatSilentSelf : settings.store.voiceChannelChatSilent) flags += 1 << 12;
    return flags;
}

function sendVoiceStatusMessage(channelId: string, content: string, userId: string, selfInChannel: boolean): Message | null {
    if (!channelId) return null;

    const message: Message = createBotMessage({ channelId, content, embeds: [] });
    message.flags = getMessageFlags(selfInChannel);
    message.author = UserStore.getUser(userId);
    // If we try to send a message into an unloaded channel, the client-sided messages get overwritten when the channel gets loaded
    // This might be messy but It Works:tm:
    const messagesLoaded: Promise<any> = MessageStore.hasPresent(channelId) ? new Promise<void>(r => r()) : MessageActions.fetchMessages({ channelId });
    messagesLoaded.then(() => {
        FluxDispatcher.dispatch({
            type: "MESSAGE_CREATE",
            channelId,
            message,
            optimistic: true,
            sendMessageOptions: {},
            isPushNotification: false
        });
    });
    return message;
}

const patchChannelContextMenu: NavContextMenuPatchCallback = (children, { channel }) => {
    const group = findGroupChildrenByChildId("mark-channel-read", children) ?? children;
    group.push(
        <Menu.MenuItem
            id="pc-view-voice-channel-logs"
            label={t(plugin.voiceChannelLog.context.view)}
            action={() => { openVoiceChannelLog(channel); }}
        />
    );
};

// Blatantly stolen from VcNarrator plugin

// For every user, channelId and oldChannelId will differ when moving channel.
// Only for the local user, channelId and oldChannelId will be the same when moving channel,
// for some ungodly reason
let clientOldChannelId: string | undefined;

export default definePlugin({
    name: "VoiceChannelLog",
    description: () => t(plugin.voiceChannelLog.description),
    authors: [Devs.Sqaaakoi, Devs.thororen, PcDevs.nyx],
    settings,

    contextMenus: {
        "channel-context": patchChannelContextMenu
    },
    flux: {
        VOICE_STATE_UPDATES({ voiceStates }: { voiceStates: VoiceState[]; }) {
            const clientUserId = UserStore.getCurrentUser().id;
            voiceStates.forEach(state => {
                // mmmm hacky workaround
                const { userId, channelId } = state;
                const user = UserStore.getUser(userId) as User & { globalName: string; };
                const username = user.globalName || user.username;
                let { oldChannelId } = state;
                if (userId === clientUserId && channelId !== clientOldChannelId) {
                    oldChannelId = clientOldChannelId;
                    clientOldChannelId = channelId;
                }
                if (settings.store.ignoreBlockedUsers && RelationshipStore.isBlocked(userId)) return;
                // Ignore events from same channel
                if (oldChannelId === channelId) return;

                const logEntry = {
                    userId,
                    username,
                    oldChannel: oldChannelId || null,
                    newChannel: channelId || null,
                    timestamp: new Date()
                };


                if (settings.store.mode !== 2) {
                    addLogEntry(logEntry, oldChannelId);
                    addLogEntry(logEntry, channelId);
                }

                if (!settings.store.voiceChannelChatSelf && userId === clientUserId) return;
                if (settings.store.mode === 1) return;
                // Join / Leave
                if ((!oldChannelId && channelId) || (oldChannelId && !channelId)) {
                    // empty string is to make type checker shut up
                    const targetChannelId = oldChannelId || channelId || "";
                    const selfInChannel = SelectedChannelStore.getVoiceChannelId() === targetChannelId;
                    sendVoiceStatusMessage(targetChannelId, `${(channelId ? t(plugin.voiceChannelLog.modal.joined, { channel: targetChannelId }) : t(plugin.voiceChannelLog.modal.left, { channel: targetChannelId }))}`, userId, selfInChannel);
                }
                // Move between channels
                if (oldChannelId && channelId) {
                    sendVoiceStatusMessage(oldChannelId, t(plugin.voiceChannelLog.modal.movedTo, { channel: channelId }), userId, SelectedChannelStore.getVoiceChannelId() === oldChannelId);
                    sendVoiceStatusMessage(channelId, t(plugin.voiceChannelLog.modal.movedFrom, { channel: oldChannelId }), userId, SelectedChannelStore.getVoiceChannelId() === channelId);
                }

            });
        },
    }
});
