/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { MessageJSON } from "@plexcord/discord-types";
import { ChannelType } from "@plexcord/discord-types/enums";
import { Devs } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";
import { ChannelStore, ReadStateStore, UserStore } from "@webpack/common";

const settings = definePluginSettings({
    channelToAffect: {
        get label() {
            return t("plugin.onePingPerDM.option.channelToAffect.label");
        },
        get description() {
            return t("plugin.onePingPerDM.option.channelToAffect.description");
        },
        type: OptionType.SELECT,
        get options() {
            return [
                { label: t("plugin.onePingPerDM.option.channelToAffect.both"), value: "both_dms", default: true },
                { label: t("plugin.onePingPerDM.option.channelToAffect.user"), value: "user_dm" },
                { label: t("plugin.onePingPerDM.option.channelToAffect.group"), value: "group_dm" },
            ];
        }
    },
    allowMentions: {
        get label() {
            return t("plugin.onePingPerDM.option.allowMentions.label");
        },
        get description() {
            return t("plugin.onePingPerDM.option.allowMentions.description");
        },
        type: OptionType.BOOLEAN,
        default: false,
    },
    allowEveryone: {
        get label() {
            return t("plugin.onePingPerDM.option.allowEveryone.label");
        },
        get description() {
            return t("plugin.onePingPerDM.option.allowEveryone.description");
        },
        type: OptionType.BOOLEAN,
        default: false,
    },
    ignoreUsers: {
        get label() {
            return t("plugin.onePingPerDM.option.ignoreUsers.label");
        },
        get description() {
            return t("plugin.onePingPerDM.option.ignoreUsers.description");
        },
        type: OptionType.STRING,
        restartNeeded: true,
        default: ""
    },
    alwaysPlaySound: {
        get label() {
            return t("plugin.onePingPerDM.option.alwaysPlaySound.label");
        },
        get description() {
            return t("plugin.onePingPerDM.option.alwaysPlaySound.description");
        },
        type: OptionType.BOOLEAN,
        restartNeeded: true,
        default: false
    }
});

export default definePlugin({
    name: "OnePingPerDM",
    description: "If unread messages are sent by a user in DMs multiple times, you'll only receive one audio ping. Read the messages to reset the limit",
    authors: [Devs.ProffDea],
    settings,

    get displayDescription() {
        return t("plugin.onePingPerDM.description");
    },

    patches: [
        {
            find: ".getDesktopType()===",
            replacement: [
                {
                    match: /(\i\.\i\.getDesktopType\(\)===\i\.\i\.NEVER)\)(?=.*?(\i\.\i\.playNotificationSound\(.{0,5}\)))/,
                    replace: "$&if(!$self.isPrivateChannelRead(arguments[0]?.message))return;else if($self.playSound())return $2;else "
                },
                {
                    match: /sound:(\i\?(\i):void 0,volume:\i,onClick)/,
                    replace: "sound:!$self.isPrivateChannelRead(arguments[0]?.message)?undefined:$self.playSound()?$2:$1"
                }
            ]
        }
    ],
    playSound() {
        return settings.store.alwaysPlaySound;
    },
    isPrivateChannelRead(message: MessageJSON) {
        const ignoreList = settings.store.ignoreUsers.split(", ").filter(Boolean);
        if (ignoreList.includes(message.author.id)) return true;
        const channelType = ChannelStore.getChannel(message.channel_id)?.type;
        if (
            (channelType !== ChannelType.DM && channelType !== ChannelType.GROUP_DM) ||
            (channelType === ChannelType.DM && settings.store.channelToAffect === "group_dm") ||
            (channelType === ChannelType.GROUP_DM && settings.store.channelToAffect === "user_dm") ||
            (settings.store.allowMentions && message.mentions.some(m => m.id === UserStore.getCurrentUser().id)) ||
            (settings.store.allowEveryone && message.mention_everyone)
        ) {
            return true;
        }
        return ReadStateStore.getOldestUnreadMessageId(message.channel_id) === message.id;
    },
});
