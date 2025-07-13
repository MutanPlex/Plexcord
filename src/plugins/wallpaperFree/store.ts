/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import * as DataStore from "@api/DataStore";
import { Channel } from "@plexcord/discord-types";
import { proxyLazy } from "@utils/lazy";
import { Flux, FluxDispatcher } from "@webpack/common";

const DB_KEY = "WallpaperFree_data";

export const WallpaperFreeStore = proxyLazy(() => {
    const wallpaperChannelMap: Map<string, string> = new Map();
    const wallpaperGuildMap: Map<string, string> = new Map();
    let globalDefault: string | undefined;

    class WallpaperFreeStore extends Flux.Store {
        async initialize() {
            const data = await DataStore.get(DB_KEY);
            if (!data) return;

            wallpaperGuildMap.clear();
            wallpaperChannelMap.clear();

            if (data.channelMap) {
                for (const [channel, url] of data.channelMap) {
                    wallpaperChannelMap.set(channel, url);
                }
            }

            if (data.guildMap) {
                for (const [guild, url] of data.guildMap) {
                    wallpaperGuildMap.set(guild, url);
                }
            }

            globalDefault = data.globalDefault;
        }

        public async saveState() {
            await DataStore.set(DB_KEY, {
                guildMap: Array.from(wallpaperGuildMap),
                channelMap: Array.from(wallpaperChannelMap),
                globalDefault
            });
        }

        getUrl(channel: Channel): string | undefined {
            return (
                wallpaperChannelMap.get(channel.id) ??
                wallpaperGuildMap.get(channel.guild_id) ??
                globalDefault
            );
        }
    }

    const store = new WallpaperFreeStore(FluxDispatcher, {
        // @ts-ignore
        async PC_WALLPAPER_FREE_CHANGE({ guildId, channelId, url }: { guildId: string | undefined, channelId: string | undefined, url: string; }) {
            if (guildId) {
                wallpaperGuildMap.set(guildId, url);
            } else if (channelId) {
                wallpaperChannelMap.set(channelId, url);
            }
            await store.saveState();
            store.emitChange();
        },

        async PC_WALLPAPER_FREE_CHANGE_GLOBAL({ url }: { url: string | undefined; }) {
            globalDefault = url;
            await store.saveState();
            store.emitChange();
        },

        async PC_WALLPAPER_FREE_RESET() {
            wallpaperChannelMap.clear();
            wallpaperGuildMap.clear();
            globalDefault = void 0;
            await DataStore.del(DB_KEY);
            store.emitChange();
        }
    });

    return store;
});
