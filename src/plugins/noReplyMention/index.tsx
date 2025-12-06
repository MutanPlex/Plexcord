/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2022 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import type { Message } from "@plexcord/discord-types";
import { Devs } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";
import { ChannelStore, GuildMemberStore } from "@webpack/common";

const settings = definePluginSettings({
    userList: {
        label: () => t(plugin.noReplyMention.option.userList.label),
        description: () => t(plugin.noReplyMention.option.userList.description),
        type: OptionType.STRING,
        default: "1234567890123445,1234567890123445",
    },
    roleList: {
        label: () => t(plugin.noReplyMention.option.roleList.label),
        description: () => t(plugin.noReplyMention.option.roleList.description),
        type: OptionType.STRING,
        default: "1234567890123445,1234567890123445",
    },
    shouldPingListed: {
        label: () => t(plugin.noReplyMention.option.shouldPingListed.label),
        description: () => t(plugin.noReplyMention.option.shouldPingListed.description),
        type: OptionType.SELECT,
        options: [
            {
                label: () => t(plugin.noReplyMention.option.shouldPingListed.dontPing),
                value: false,
            },
            {
                label: () => t(plugin.noReplyMention.option.shouldPingListed.onlyPing),
                value: true,
                default: true,
            },
        ],
    },
    inverseShiftReply: {
        label: () => t(plugin.noReplyMention.option.inverseShiftReply.label),
        description: () => t(plugin.noReplyMention.option.inverseShiftReply.description),
        type: OptionType.BOOLEAN,
        default: false,
    }
});

export default definePlugin({
    name: "NoReplyMention",
    description: () => t(plugin.noReplyMention.description),
    authors: [Devs.DustyAngel47, Devs.rae, Devs.pylix, Devs.outfoxxed],
    settings,

    shouldMention(message: Message, isHoldingShift: boolean) {
        let isListed = settings.store.userList.includes(message.author.id);

        const channel = ChannelStore.getChannel(message.channel_id);
        if (channel?.guild_id && !isListed) {
            const roles = GuildMemberStore.getMember(channel.guild_id, message.author.id)?.roles;
            isListed = !!roles && roles.some(role => settings.store.roleList.includes(role));
        }

        const isExempt = settings.store.shouldPingListed ? isListed : !isListed;
        return settings.store.inverseShiftReply ? isHoldingShift !== isExempt : !isHoldingShift && isExempt;
    },

    patches: [
        {
            find: ",\"Message\")}function",
            replacement: {
                match: /:(\i),shouldMention:!(\i)\.shiftKey/,
                replace: ":$1,shouldMention:$self.shouldMention($1,$2.shiftKey)"
            }
        }
    ],
});
