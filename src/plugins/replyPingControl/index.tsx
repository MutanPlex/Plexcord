/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { MessageJSON } from "@plexcord/discord-types";
import { Devs, PcDevs } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";
import { MessageStore, UserStore } from "@webpack/common";

export const settings = definePluginSettings({
    alwaysPingOnReply: {
        get label() {
            return t("plugin.replyPingControl.option.alwaysPingOnReply.label");
        },
        get description() {
            return t("plugin.replyPingControl.option.alwaysPingOnReply.description");
        },
        type: OptionType.BOOLEAN,
        default: false,
    },
    replyPingWhitelist: {
        get label() {
            return t("plugin.replyPingControl.option.replyPingWhitelist.label");
        },
        get description() {
            return t("plugin.replyPingControl.option.replyPingWhitelist.description");
        },
        type: OptionType.STRING,
        default: "",
        disabled: () => settings.store.alwaysPingOnReply,
    }
});

export default definePlugin({
    name: "ReplyPingControl",
    description: "Control whether to always or never get pinged on message replies, with a whitelist feature",
    authors: [Devs.ant0n, PcDevs.MrDiamond, PcDevs.MutanPlex],
    settings,

    get displayDescription() {
        return t("plugin.replyPingControl.description");
    },

    patches: [{
        find: "_channelMessages",
        replacement: {
            match: /receiveMessage\((\i)\)\{/,
            replace: "$&$self.modifyMentions($1);"
        }
    }],

    modifyMentions(message: MessageJSON) {
        const user = UserStore.getCurrentUser();
        if (message.author.id === user.id) return;

        const repliedMessage = this.getRepliedMessage(message);
        if (!repliedMessage || repliedMessage.author.id !== user.id) return;

        const whitelist = settings.store.replyPingWhitelist.split(",").map(id => id.trim());
        const isWhitelisted = whitelist.includes(message.author.id);

        if (isWhitelisted || settings.store.alwaysPingOnReply) {
            if (!message.mentions.some(mention => mention.id === user.id)) {
                message.mentions.push(user as any);
            }
        } else {
            message.mentions = message.mentions.filter(mention => mention.id !== user.id);
        }
    },

    getRepliedMessage(message: MessageJSON) {
        const ref = message.message_reference;
        return ref && MessageStore.getMessage(ref.channel_id, ref.message_id);
    },
});
