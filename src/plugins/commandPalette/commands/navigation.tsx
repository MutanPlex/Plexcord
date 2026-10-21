/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2026 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { openPrivateChannel } from "@utils/discord";
import { ChannelRouter, GuildChannelStore, GuildStore, IconUtils, NavigationRouter, RelationshipStore, SelectedGuildStore, UserStore } from "@webpack/common";

import type { PaletteCommand, PaletteListItem } from "../api/types";
import { CompassIcon, GearIcon, HashIcon, HomeIcon, ServerIcon, UserIcon } from "../ui/icons";
import { DISCORD_SETTINGS_ROUTES, openSettingsPage } from "./openSettings";

const SECTION = t(plugin.commandPalette.text.sectionNavigation);

function guildItems(): PaletteListItem[] {
    return Object.values(GuildStore.getGuilds()).map(guild => ({
        id: guild.id,
        label: guild.name,
        icon: IconUtils.getGuildIconURL({ id: guild.id, icon: guild.icon, size: 64 }) ?? ServerIcon,
        actions: [{
            id: "open",
            label: t(plugin.commandPalette.text.openServer),
            run: () => NavigationRouter.transitionToGuild(guild.id)
        }]
    }));
}

function channelItems(): PaletteListItem[] {
    const guildId = SelectedGuildStore.getGuildId();
    if (!guildId) return [];

    return GuildChannelStore.getSelectableChannels(guildId).map(({ channel }) => ({
        id: channel.id,
        label: `#${channel.name}`,
        icon: HashIcon,
        actions: [{
            id: "open",
            label: t(plugin.commandPalette.text.openChannel),
            run: () => ChannelRouter.transitionToChannel(channel.id)
        }]
    }));
}

function friendItems(): PaletteListItem[] {
    const currentUserId = UserStore.getCurrentUser().id;

    return RelationshipStore.getFriendIDs()
        .filter(id => id !== currentUserId)
        .map(id => UserStore.getUser(id))
        .filter(user => user != null)
        .map(user => ({
            id: user.id,
            label: user.globalName || user.username,
            sublabel: user.username,
            icon: IconUtils.getUserAvatarURL(user, false, 64),
            actions: [{
                id: "open",
                label: t(plugin.commandPalette.text.openDm),
                run: () => openPrivateChannel(user.id)
            }]
        }));
}

export const navigationCommands: PaletteCommand[] = [
    {
        id: "navigation.home",
        title: t(plugin.commandPalette.text.goHome),
        section: SECTION,
        keywords: ["friends", "dms", "home"],
        icon: HomeIcon,
        actions: [{
            id: "run",
            label: t(plugin.commandPalette.text.goHome),
            run: () => NavigationRouter.transitionTo("/channels/@me")
        }]
    },
    {
        id: "navigation.server",
        title: t(plugin.commandPalette.text.goToServer),
        section: SECTION,
        keywords: ["guild", "server", "jump"],
        icon: ServerIcon,
        page: () => ({
            title: t(plugin.commandPalette.text.goToServer),
            icon: ServerIcon,
            spec: { type: "list", placeholder: t(plugin.commandPalette.text.searchServers), items: guildItems }
        })
    },
    {
        id: "navigation.channel",
        title: t(plugin.commandPalette.text.goToChannel),
        section: SECTION,
        keywords: ["channel", "jump"],
        icon: HashIcon,
        predicate: () => SelectedGuildStore.getGuildId() != null,
        page: () => ({
            title: t(plugin.commandPalette.text.goToChannel),
            icon: HashIcon,
            spec: { type: "list", placeholder: t(plugin.commandPalette.text.searchChannels), items: channelItems }
        })
    },
    {
        id: "navigation.dm",
        title: t(plugin.commandPalette.text.openDm),
        section: SECTION,
        keywords: ["dm", "message", "friend"],
        icon: UserIcon,
        page: () => ({
            title: t(plugin.commandPalette.text.openDm),
            icon: UserIcon,
            spec: { type: "list", placeholder: t(plugin.commandPalette.text.searchFriends), items: friendItems }
        })
    },
    {
        id: "navigation.settings",
        title: t(plugin.commandPalette.action.settings.label),
        section: SECTION,
        keywords: ["settings", "preferences", "options"],
        icon: GearIcon,
        page: () => ({
            title: t(plugin.commandPalette.action.settings.label),
            icon: GearIcon,
            spec: {
                type: "list",
                placeholder: t(plugin.commandPalette.text.searchSettingsPages),
                items: () => DISCORD_SETTINGS_ROUTES.map(entry => ({
                    id: entry.route,
                    label: entry.label,
                    keywords: entry.keywords,
                    icon: CompassIcon,
                    actions: [{
                        id: "open",
                        label: t(plugin.commandPalette.action.settings.label),
                        run: () => void openSettingsPage(entry.route, entry.label)
                    }]
                }))
            }
        })
    }
];
