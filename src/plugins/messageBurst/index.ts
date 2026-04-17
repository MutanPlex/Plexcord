/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { Channel, Message } from "@plexcord/discord-types";
import { PcDevs } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";
import { ChannelStore, MessageActions, MessageStore, UserStore } from "@webpack/common";

function shouldEdit(channel: Channel, message: Message, timePeriod: number, shouldMergeWithAttachment: boolean) {
    let should = true;

    if (channel.isGroupDM()) {
        if (channel.name === message.content) {
            should = false;
        }
    }

    if (message.author.id !== UserStore.getCurrentUser().id) {
        should = false;
    }

    if (document.querySelector('[class*="replyBar"]')) {
        should = false;
    }

    if (message.attachments.length > 0 && !shouldMergeWithAttachment) {
        should = false;
    }

    // @ts-ignore
    const timestamp = new Date(message.timestamp);
    const now = new Date();

    if ((now.getTime() - timestamp.getTime()) > (timePeriod * 1000)) {
        should = false;
    }

    return {
        should: should,
        content: message.content
    };
}

const settings = definePluginSettings({
    timePeriod: {
        label: () => t(plugin.messageBurst.option.timePeriod.label),
        description: () => t(plugin.messageBurst.option.timePeriod.description),
        type: OptionType.NUMBER,
        default: 3
    },
    shouldMergeWithAttachment: {
        label: () => t(plugin.messageBurst.option.shouldMergeWithAttachment.label),
        description: () => t(plugin.messageBurst.option.shouldMergeWithAttachment.description),
        type: OptionType.BOOLEAN,
        default: false
    },
    useSpace: {
        label: () => t(plugin.messageBurst.option.useSpace.label),
        description: () => t(plugin.messageBurst.option.useSpace.description),
        type: OptionType.BOOLEAN,
        default: false
    }
});

export default definePlugin({
    name: "MessageBurst",
    description: () => t(plugin.messageBurst.description),
    authors: [PcDevs.port22exposed, PcDevs.MutanPlex],
    tags: ["chat", "utility"],
    settings,
    onBeforeMessageSend(channelId, message) {
        const messages = MessageStore.getMessages(channelId)._map;

        if (!messages) {
            return;
        }

        const entries = Object.entries(messages);
        const [lastMessageId, lastMessage] = entries[entries.length - 1];

        const channel = ChannelStore.getChannel(channelId);

        const { should, content } = shouldEdit(channel, lastMessage as Message, this.settings.store.timePeriod, this.settings.store.shouldMergeWithAttachment);

        if (should) {
            const separator = settings.store.useSpace ? " " : "\n";
            const newContent = content + separator + message.content;

            MessageActions.editMessage(channelId, lastMessageId, {
                content: newContent,
            });

            message.content = "";
        }
    },
});
