/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */
import { t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { Flux as TFlux } from "@plexcord/discord-types";
import { proxyLazy } from "@utils/lazy";
import { OptionType } from "@utils/types";
import { ChannelActionCreators, Flux as FluxWP, FluxDispatcher } from "@webpack/common";
interface IFlux extends TFlux {
    PersistedStore: TFlux["Store"];
}

export const settings = definePluginSettings({
    persistSidebar: {
        get label() {
            return t("plugin.sidebarChat.option.persistSidebar.label");
        },
        get description() {
            return t("plugin.sidebarChat.option.persistSidebar.description");
        },
        type: OptionType.BOOLEAN,
        default: true,
    },
    patchCommunity: {
        get label() {
            return t("plugin.sidebarChat.option.patchCommunity.label");
        },
        get description() {
            return t("plugin.sidebarChat.option.patchCommunity.description");
        },
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: true,
    }
});

export const SidebarStore = proxyLazy(() => {
    const current = {
        guildId: "",
        channelId: "",
        width: 0
    };

    let previous = { ...current };

    class SidebarStore extends (FluxWP as IFlux).PersistedStore {
        static persistKey = "SidebarStore";
        // @ts-ignore
        initialize(previousState: { guildId?: string; channelId?: string; width?: number; } | undefined) {
            if (!settings.store.persistSidebar || !previousState) return;
            const { guildId, channelId, width } = previousState;
            current.guildId = guildId || "";
            current.channelId = channelId || "";
            current.width = width || 0;
        }

        getState() {
            return current;
        }
    }

    const store = new SidebarStore(FluxDispatcher, {
        // @ts-ignore
        async PC_SIDEBAR_CHAT_NEW({ guildId: newGId, id }: { guildId: string | null; id: string; }) {
            previous = { ...current };

            current.guildId = newGId || "";

            if (current.guildId) {
                current.channelId = id;
                store.emitChange();
                return;
            }

            current.channelId = await ChannelActionCreators.getOrEnsurePrivateChannel(id);
            store.emitChange();
        },

        PC_SIDEBAR_CHAT_PREVIOUS() {
            if (previous.channelId) {
                current.guildId = previous.guildId;
                current.channelId = previous.channelId;
            }
            store.emitChange();
        },

        PC_SIDEBAR_CHAT_CLOSE() {
            previous = { ...current };
            current.guildId = "";
            current.channelId = "";
            store.emitChange();
        },
    });

    return store;
});
