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

import { findGroupChildrenByChildId, NavContextMenuPatchCallback } from "@api/ContextMenu";
import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { CogWheel } from "@components/Icons";
import { Guild } from "@plexcord/discord-types";
import { Devs } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";
import { findByCodeLazy, findByPropsLazy, mapMangledModuleLazy } from "@webpack";
import { Menu } from "@webpack/common";

const { updateGuildNotificationSettings } = findByPropsLazy("updateGuildNotificationSettings");
const { toggleShowAllChannels } = mapMangledModuleLazy(".onboardExistingMember(", {
    toggleShowAllChannels: m => {
        const s = String(m);
        return s.length < 100 && !s.includes("onboardExistingMember") && !s.includes("getOptedInChannels");
    }
});
const isOptInEnabledForGuild = findByCodeLazy(".COMMUNITY)||", ".isOptInEnabled(");

const settings = definePluginSettings({
    guild: {
        label: () => t(plugin.newGuildSettings.option.guild.label),
        description: () => t(plugin.newGuildSettings.option.guild.description),
        type: OptionType.BOOLEAN,
        default: true
    },
    messages: {
        label: () => t(plugin.newGuildSettings.option.messages.label),
        description: () => t(plugin.newGuildSettings.option.messages.description),
        type: OptionType.SELECT,
        options: [
            { label: () => t(plugin.newGuildSettings.option.messages.all), value: 0 },
            { label: () => t(plugin.newGuildSettings.option.messages.mentions), value: 1 },
            { label: () => t(plugin.newGuildSettings.option.messages.nothing), value: 2 },
            { label: () => t(plugin.newGuildSettings.option.messages.default), value: 3, default: true }
        ]
    },
    everyone: {
        label: () => t(plugin.newGuildSettings.option.everyone.label),
        description: () => t(plugin.newGuildSettings.option.everyone.description),
        type: OptionType.BOOLEAN,
        default: true
    },
    role: {
        label: () => t(plugin.newGuildSettings.option.role.label),
        description: () => t(plugin.newGuildSettings.option.role.description),
        type: OptionType.BOOLEAN,
        default: true
    },
    highlights: {
        label: () => t(plugin.newGuildSettings.option.highlights.label),
        description: () => t(plugin.newGuildSettings.option.highlights.description),
        type: OptionType.BOOLEAN,
        default: true
    },
    events: {
        label: () => t(plugin.newGuildSettings.option.events.label),
        description: () => t(plugin.newGuildSettings.option.events.description),
        type: OptionType.BOOLEAN,
        default: true
    },
    showAllChannels: {
        label: () => t(plugin.newGuildSettings.option.showAllChannels.label),
        description: () => t(plugin.newGuildSettings.option.showAllChannels.description),
        type: OptionType.BOOLEAN,
        default: true
    },
    mobilePush: {
        label: () => t(plugin.newGuildSettings.option.mobilePush.label),
        description: () => t(plugin.newGuildSettings.option.mobilePush.description),
        type: OptionType.BOOLEAN,
        default: true
    }
});

const makeContextMenuPatch: (shouldAddIcon: boolean) => NavContextMenuPatchCallback = (shouldAddIcon: boolean) => (children, { guild }: { guild: Guild, onClose(): void; }) => {
    if (!guild) return;

    const group = findGroupChildrenByChildId("privacy", children);
    group?.push(
        <Menu.MenuItem
            label={t(plugin.newGuildSettings.context.apply)}
            id="pc-newguildsettings-apply"
            icon={shouldAddIcon ? CogWheel : void 0}
            action={() => applyDefaultSettings(guild.id)}
        />
    );
};

function applyDefaultSettings(guildId: string | null) {
    if (guildId === "@me" || guildId === "null" || guildId == null) return;
    updateGuildNotificationSettings(guildId,
        {
            muted: settings.store.guild,
            mobile_push: !settings.store.mobilePush,
            suppress_everyone: settings.store.everyone,
            suppress_roles: settings.store.role,
            mute_scheduled_events: settings.store.events,
            notify_highlights: settings.store.highlights ? 1 : 0
        });
    if (settings.store.messages !== 3) {
        updateGuildNotificationSettings(guildId,
            {
                message_notifications: settings.store.messages,
            });
    }
    if (settings.store.showAllChannels && isOptInEnabledForGuild(guildId)) {
        toggleShowAllChannels(guildId);
    }
}

export default definePlugin({
    name: "NewGuildSettings",
    description: () => t(plugin.newGuildSettings.description),
    tags: ["MuteNewGuild", "mute", "server"],
    authors: [Devs.Glitch, Devs.Nuckyz, Devs.carince, Devs.Mopi, Devs.GabiRP],

    contextMenus: {
        "guild-context": makeContextMenuPatch(false),
        "guild-header-popout": makeContextMenuPatch(true)
    },
    patches: [
        {
            find: ",acceptInvite(",
            replacement: {
                match: /INVITE_ACCEPT_SUCCESS.+?,(\i)=\i\?\.guild_id.+?;/,
                replace: (m, guildId) => `${m}$self.applyDefaultSettings(${guildId});`
            }
        },
        {
            find: "{joinGuild:",
            replacement: {
                match: /guildId:(\i),lurker:(\i).{0,20}}\)\);/,
                replace: (m, guildId, lurker) => `${m}if(!${lurker})$self.applyDefaultSettings(${guildId});`
            }
        }
    ],
    settings,
    applyDefaultSettings
});
