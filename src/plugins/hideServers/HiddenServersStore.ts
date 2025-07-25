/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import * as DataStore from "@api/DataStore";
import { Guild } from "@plexcord/discord-types";
import { findStoreLazy, proxyLazyWebpack } from "@webpack";
import { Flux, FluxDispatcher, GuildStore } from "@webpack/common";

interface IHiddenServersStore {
    hiddenGuilds: Set<string>;
    load(): Promise<void>;
    unload(): void;
    addHidden(guild: Guild): void;
    removeHidden(id: string): void;
    clearHidden(): void;
    hiddenGuildsDetail(): Guild[];
}

export const HiddenServersStore: IHiddenServersStore = proxyLazyWebpack(() => {
    const { Store } = Flux;

    const SortedGuildStore = findStoreLazy("SortedGuildStore");
    const DB_KEY = "HideServers_servers";

    class HiddenServersStore extends Store {
        private _hiddenGuilds: Set<string> = new Set();
        public get hiddenGuilds() {
            return this._hiddenGuilds;
        }
        // id try to use .initialize() but i dont know how it works
        public async load() {
            const data = await DataStore.get(DB_KEY);
            if (data && data instanceof Set) {
                this._hiddenGuilds = data;
            }
        }
        public unload() {
            this._hiddenGuilds.clear();
        }

        public addHidden(guild: Guild) {
            this._hiddenGuilds.add(guild.id);
            DataStore.set(DB_KEY, this._hiddenGuilds);
            this.emitChange();
        }
        public removeHidden(id: string) {
            this._hiddenGuilds.delete(id);
            DataStore.set(DB_KEY, this._hiddenGuilds);
            this.emitChange();
        }
        public clearHidden() {
            this._hiddenGuilds.clear();
            DataStore.del(DB_KEY);
            this.emitChange();
        }
        public hiddenGuildsDetail(): Guild[] {
            const sortedGuildIds = SortedGuildStore.getFlattenedGuildIds() as string[];
            // otherwise the list is in order of increasing id number which is confusing
            return sortedGuildIds.filter(id => this._hiddenGuilds.has(id)).map(id => GuildStore.getGuild(id));
        }
    }

    return new HiddenServersStore(FluxDispatcher);
});
