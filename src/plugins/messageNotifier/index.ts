/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { Notifications } from "@api/index";
import { definePluginSettings } from "@api/Settings";
import { MessageJSON } from "@plexcord/discord-types";
import { MessageType } from "@plexcord/discord-types/enums";
import { PcDevs } from "@utils/constants";
import { getCurrentChannel } from "@utils/discord";
import definePlugin, { OptionType } from "@utils/types";
import { ChannelStore, GuildStore, NavigationRouter, RelationshipStore } from "@webpack/common";

interface MessageCreatePayload {
    guildId: string;
    channelId: string;
    message: MessageJSON;
}

const settings = definePluginSettings({
    users: {
        label: () => t(plugin.messageNotifier.option.users.label),
        description: () => t(plugin.messageNotifier.option.users.description),
        type: OptionType.STRING,
        default: "",
        isValid(value: string) {
            if (value === "") return true;
            const userIds = value.split(",").map(id => id.trim());
            for (const id of userIds)
                if (!/\d+/.test(id)) return t(plugin.messageNotifier.option.users.invalidId, { id });
            return true;
        },
    }
});

export default definePlugin({
    name: "MessageNotifier",
    description: () => t(plugin.messageNotifier.description),
    authors: [PcDevs.cassie, PcDevs.mochienya, PcDevs.MutanPlex],
    tags: ["notifications", "chat"],
    settings,

    flux: {
        MESSAGE_CREATE({ message, channelId, guildId }: MessageCreatePayload) {
            if (message.type !== MessageType.DEFAULT || getCurrentChannel()?.id === channelId) return;

            const userIds = settings.store.users.split(",").map(id => id.trim());
            if (!userIds.includes(message.author.id)) return;

            const username = RelationshipStore.getNickname(message.author.id) ?? message.author.globalName ?? message.author.username;
            const guild = GuildStore.getGuild(guildId);
            const channel = ChannelStore.getChannel(channelId);
            const locationName = guild ? `${guild.name}#${channel.name}` : channel?.name ?? t(plugin.messageNotifier.dm);

            Notifications.showNotification({
                title: t(plugin.messageNotifier.notification.title, { username }),
                body: t(plugin.messageNotifier.notification.body, { locationName }),
                onClick() {
                    NavigationRouter.transitionTo(`/channels/${guild?.id ?? "@me"}/${channel.id}/${message.id}`);
                },
            });
        },
    },
});
