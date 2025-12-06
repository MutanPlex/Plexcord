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
import { Devs } from "@utils/constants";
import { copyWithToast } from "@utils/discord";
import definePlugin, { OptionType } from "@utils/types";

const settings = definePluginSettings({
    bothStyles: {
        label: () => t(plugin.betterRoleDot.option.bothStyles.label),
        description: () => t(plugin.betterRoleDot.option.bothStyles.description),
        type: OptionType.BOOLEAN,
        restartNeeded: true,
        default: false,
    },
    copyRoleColorInProfilePopout: {
        label: () => t(plugin.betterRoleDot.option.copyRoleColorInProfilePopout.label),
        description: () => t(plugin.betterRoleDot.option.copyRoleColorInProfilePopout.description),
        type: OptionType.BOOLEAN,
        restartNeeded: true,
        default: false
    }
});

export default definePlugin({
    name: "BetterRoleDot",
    description: () => t(plugin.betterRoleDot.description),
    authors: [Devs.Ven, Devs.AutumnVN],
    settings,

    patches: [
        {
            find: ".dotBorderBase",
            replacement: {
                match: /,viewBox:"0 0 20 20"/,
                replace: "$&,onClick:()=>$self.copyToClipBoard(arguments[0].color),style:{cursor:'pointer'}",
            },
        },
        {
            find: '"dot"===',
            all: true,
            noWarn: true,
            predicate: () => settings.store.bothStyles,
            replacement: {
                match: /"(?:username|dot)"===\i(?!\.\i)/g,
                replace: "true",
            },
        },

        {
            find: "#{intl::ADD_ROLE_A11Y_LABEL}",
            all: true,
            predicate: () => settings.store.copyRoleColorInProfilePopout && !settings.store.bothStyles,
            noWarn: true,
            replacement: {
                match: /"dot"===\i/,
                replace: "true"
            }
        },
        {
            find: ".roleVerifiedIcon",
            all: true,
            predicate: () => settings.store.copyRoleColorInProfilePopout && !settings.store.bothStyles,
            noWarn: true,
            replacement: {
                match: /"dot"===\i/,
                replace: "true"
            }
        }
    ],

    copyToClipBoard(color: string) {
        copyWithToast(color);
    },
});
