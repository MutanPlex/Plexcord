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

import { t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { Devs } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";

const settings = definePluginSettings({
    icons: {
        get label() {
            return t("plugin.alwaysAnimate.option.icons.label");
        },
        get description() {
            return t("plugin.alwaysAnimate.option.icons.description");
        },
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: true
    },
    statusEmojis: {
        get label() {
            return t("plugin.alwaysAnimate.option.statusEmojis.label");
        },
        get description() {
            return t("plugin.alwaysAnimate.option.statusEmojis.description");
        },
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: true
    },
    serverBanners: {
        get label() {
            return t("plugin.alwaysAnimate.option.serverBanners.label");
        },
        get description() {
            return t("plugin.alwaysAnimate.option.serverBanners.description");
        },
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: true
    },
    nameplates: {
        get label() {
            return t("plugin.alwaysAnimate.option.nameplates.label");
        },
        get description() {
            return t("plugin.alwaysAnimate.option.nameplates.description");
        },
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: true
    },
    roleGradients: {
        get label() {
            return t("plugin.alwaysAnimate.option.roleGradients.label");
        },
        get description() {
            return t("plugin.alwaysAnimate.option.roleGradients.description");
        },
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: true
    }
});

export default definePlugin({
    name: "AlwaysAnimate",
    description: "Animates anything that can be animated",
    authors: [Devs.FieryFlames],
    settings,

    get displayDescription() {
        return t("plugin.alwaysAnimate.description");
    },

    patches: [
        {
            find: "canAnimate:",
            predicate: () => settings.store.icons,
            all: true,
            // Some modules match the find but the replacement is returned untouched
            noWarn: true,
            replacement: {
                match: /canAnimate:.+?([,}].*?\))/g,
                replace: (m, rest) => {
                    const destructuringMatch = rest.match(/}=.+/);
                    if (destructuringMatch == null) return `canAnimate:!0${rest}`;
                    return m;
                }
            }
        },
        {
            // Status emojis
            find: "#{intl::GUILD_OWNER}),children:",
            predicate: () => settings.store.statusEmojis,
            replacement: {
                match: /(\.CUSTOM_STATUS.+?animateEmoji:)\i/,
                replace: "$1!0"
            }
        },
        {
            // Guild Banner
            find: ".animatedBannerHoverLayer,onMouseEnter:",
            predicate: () => settings.store.serverBanners,
            replacement: {
                match: /(\.headerContent.+?guildBanner:\i,animate:)\i/,
                replace: "$1!0"
            }
        },
        {
            // Nameplates
            find: ".MINI_PREVIEW,[",
            predicate: () => settings.store.nameplates,
            replacement: {
                match: /animate:\i,loop:.{0,15}===\i/,
                replace: "animate:true,loop:true"
            },
        },
        {
            // Gradient roles in chat
            find: "=!1,contentOnly:",
            predicate: () => settings.store.roleGradients,
            replacement: {
                match: /animate:\i/,
                replace: "animate:!0"
            }
        },
        {
            // Gradient roles in member list
            find: '="left",className:',
            predicate: () => settings.store.roleGradients,
            replacement: {
                match: /,animateGradient:[^)]+\)/,
                replace: ",animateGradient:!0"
            }
        },
        {
            // Role Gradients
            find: "animateGradient:",
            predicate: () => settings.store.roleGradients,
            all: true,
            noWarn: true,
            replacement: {
                match: /animateGradient:.+?([,}].*?\))/g,
                replace: (m, rest) => {
                    const destructuringMatch = rest.match(/}=.+/);
                    if (destructuringMatch == null) return `animateGradient:!0${rest}`;
                    return m;
                }
            }
        }
    ]
});
