/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
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
import { GuildMember, Role } from "@plexcord/discord-types";
import { Devs } from "@utils/constants";
import { Logger } from "@utils/Logger";
import definePlugin, { OptionType } from "@utils/types";

const settings = definePluginSettings({
    showTimeouts: {
        label: () => t(plugin.showHiddenThings.option.showTimeouts.label),
        description: () => t(plugin.showHiddenThings.option.showTimeouts.description),
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: true
    },
    showInvitesPaused: {
        label: () => t(plugin.showHiddenThings.option.showInvitesPaused.label),
        description: () => t(plugin.showHiddenThings.option.showInvitesPaused.description),
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: true
    },
    showModView: {
        label: () => t(plugin.showHiddenThings.option.showModView.label),
        description: () => t(plugin.showHiddenThings.option.showModView.description),
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: true
    }
});

export default definePlugin({
    name: "ShowHiddenThings",
    description: () => t(plugin.showHiddenThings.description),
    tags: ["ShowTimeouts", "ShowInvitesPaused", "ShowModView", "DisableDiscoveryFilters"],
    authors: [Devs.Dolfies],
    settings,

    patches: [
        {
            find: "showCommunicationDisabledStyles",
            predicate: () => settings.store.showTimeouts,
            replacement: {
                match: /&&\i\.\i\.canManageUser\(\i\.\i\.MODERATE_MEMBERS,\i\.author,\i\)/,
                replace: "",
            },
        },
        {
            find: "INVITES_DISABLED))||",
            predicate: () => settings.store.showInvitesPaused,
            replacement: {
                match: /\i\.\i\.can\(\i\.\i.MANAGE_GUILD,\i\)/,
                replace: "true",
            },
        },
        {
            find: /,checkElevated:!1}\),\i\.\i\)}(?<=getCurrentUser\(\);return.+?)/,
            predicate: () => settings.store.showModView,
            replacement: {
                match: /return \i\.\i\(\i\.\i\(\{user:\i,context:\i,checkElevated:!1\}\),\i\.\i\)/,
                replace: "return true",
            }
        },
        // fixes a bug where Members page must be loaded to see highest role, why is Discord depending on MemberSafetyStore.getEnhancedMember for something that can be obtained here?
        {
            find: "#{intl::GUILD_MEMBER_MOD_VIEW_HIGHEST_ROLE}),children:",
            predicate: () => settings.store.showModView,
            replacement: {
                match: /(?<=\.highestRole\),)role:\i(?<=\[\i\.roles,\i\.highestRoleId,(\i)\].+)/,
                replace: "role:$self.getHighestRole(arguments[0],$1)",
            }
        },
        // allows you to open mod view on yourself
        {
            find: 'action:"PRESS_MOD_VIEW",icon:',
            predicate: () => settings.store.showModView,
            replacement: {
                match: /\i(?=\?null)/,
                replace: "false"
            }
        }
    ],
    getHighestRole({ member }: { member: GuildMember; }, roles: Role[]): Role | undefined {
        try {
            return roles.find(role => role.id === member.highestRoleId);
        } catch (e) {
            new Logger("ShowHiddenThings").error("Failed to find highest role", e);
            return undefined;
        }
    }
});
