/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { NavContextMenuPatchCallback } from "@api/ContextMenu";
import { plugin, t } from "@api/i18n";
import { Channel, Message, User } from "@plexcord/discord-types";
import { Devs } from "@utils/constants";
import definePlugin from "@utils/types";
import { ChannelStore, Constants, Menu, NavigationRouter, RestAPI, SelectedChannelStore, SelectedGuildStore, Toasts } from "@webpack/common";

function jumpToFirstMessage(channelId: string, guildId?: string | null) {
    NavigationRouter.transitionTo(`/channels/${guildId ?? "@me"}/${channelId}/0`);
}

async function jumpToLastMessage(channelId: string, guildId?: string | null) {
    const res = await RestAPI.get({
        url: Constants.Endpoints.MESSAGES(channelId),
        query: { limit: 1 }
    });

    const messageId = res.body?.[0]?.id;
    if (!messageId) return;

    NavigationRouter.transitionTo(`/channels/${guildId ?? "@me"}/${channelId}/${messageId}`);
}

async function jumpToUserMessage(channelId: string, guildId: string, userId: string, first: boolean) {
    try {
        const res = await RestAPI.get({
            url: Constants.Endpoints.SEARCH_GUILD(guildId),
            query: {
                author_id: userId,
                channel_id: channelId,
                sort_by: "timestamp",
                sort_order: first ? "asc" : "desc"
            }
        });

        const messageId = res.body?.messages?.[0]?.[0]?.id;
        if (!messageId) {
            Toasts.show({
                type: Toasts.Type.FAILURE,
                message: t(plugin.jumpTo.context.noMessages),
                id: Toasts.genId()
            });
            return;
        }

        NavigationRouter.transitionTo(`/channels/${guildId}/${channelId}/${messageId}`);
    } catch (e) {
        Toasts.show({
            type: Toasts.Type.FAILURE,
            message: t(plugin.jumpTo.context.searchFailed),
            id: Toasts.genId()
        });
    }
}

const ChannelMenuPatch: NavContextMenuPatchCallback = (
    children,
    { channel, thread }: { channel?: Channel; thread?: Channel; }
) => {
    const selectedId = SelectedChannelStore.getChannelId();
    const selectedChannel = selectedId ? ChannelStore.getChannel(selectedId) : null;
    const forumChild = channel?.isForumLikeChannel?.() && selectedChannel?.isThread?.() && selectedChannel.parent_id === channel.id
        ? selectedChannel
        : null;
    const targetChannel = thread ?? forumChild ?? channel;
    if (!targetChannel) return;

    children.push(
        <Menu.MenuItem
            id="pc-jump-to-first"
            label={t(plugin.jumpTo.context.top)}
            action={() => jumpToFirstMessage(targetChannel.id, targetChannel.guild_id)}
        />,
        <Menu.MenuItem
            id="pc-jump-to-last"
            label={t(plugin.jumpTo.context.bottom)}
            action={() => jumpToLastMessage(targetChannel.id, targetChannel.guild_id)}
        />
    );
};

const UserMenuPatch: NavContextMenuPatchCallback = (children, { user, channel }: { user: User; channel?: Channel; }) => {
    if (!user) return;

    if (!channel || channel.guild_id) return;

    children.push(
        <Menu.MenuItem
            id="pc-jump-to-first"
            label={t(plugin.jumpTo.context.top)}
            action={() => jumpToFirstMessage(channel.id, null)}
        />,
        <Menu.MenuItem
            id="pc-jump-to-last"
            label={t(plugin.jumpTo.context.bottom)}
            action={() => jumpToLastMessage(channel.id, null)}
        />
    );
};

const MessageMenuPatch: NavContextMenuPatchCallback = (children, { message }: { message: Message; }) => {
    if (!message) return;

    const channelId = SelectedChannelStore.getChannelId();
    const guildId = SelectedGuildStore.getGuildId();
    if (!channelId || !guildId) return;

    children.push(
        <Menu.MenuItem
            id="pc-jump-to-first-user"
            label={t(plugin.jumpTo.context.top)}
            action={() => jumpToUserMessage(channelId, guildId, message.author.id, true)}
        />,
        <Menu.MenuItem
            id="pc-jump-to-last-user"
            label={t(plugin.jumpTo.context.bottom)}
            action={() => jumpToUserMessage(channelId, guildId, message.author.id, false)}
        />
    );
};

export default definePlugin({
    name: "JumpTo",
    description: () => t(plugin.jumpTo.description),
    authors: [Devs.Samwich, Devs.thororen],
    tags: ["chat", "shortcuts", "utility"],
    contextMenus: {
        "channel-context": ChannelMenuPatch,
        "gdm-context": ChannelMenuPatch,
        "thread-context": ChannelMenuPatch,
        "user-context": UserMenuPatch,
        "message": MessageMenuPatch
    }
});
