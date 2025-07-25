/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { Channel, Guild } from "@plexcord/discord-types";
import { proxyLazy } from "@utils/lazy";
import { findByPropsLazy } from "@webpack";
import { ChannelStore, Flux, FluxDispatcher, GuildStore } from "@webpack/common";

// cant destructure, otherwise context is lost
const DMChannelHandler = findByPropsLazy("getOrEnsurePrivateChannel");

interface SidebarData {
    isUser: boolean;
    guildId: string;
    id: string;
}

export const SidebarStore = proxyLazy(() => {
    class SidebarStore extends Flux.Store {
        public guild: Guild | null = null;
        public channel: Channel | null = null;
    }

    const store = new SidebarStore(FluxDispatcher, {
        // @ts-ignore
        async NEW_SIDEBAR_CHAT({ isUser, guildId, id }: SidebarData) {
            store.guild = guildId ? GuildStore.getGuild(guildId) : null;

            if (!isUser) {
                store.channel = ChannelStore.getChannel(id);
                return;
            }

            const channelId = await DMChannelHandler.getOrEnsurePrivateChannel(id);
            store.channel = ChannelStore.getChannel(channelId);
            store.emitChange();
        },
        // @ts-ignore
        CLOSE_SIDEBAR_CHAT() {
            store.guild = null;
            store.channel = null;
        }
    });

    return store;
});
