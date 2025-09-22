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
    domain: {
        get label() {
            return t("plugin.alwaysTrust.option.domain.label");
        },
        get description() {
            return t("plugin.alwaysTrust.option.domain.description");
        },
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: true
    },
    file: {
        get label() {
            return t("plugin.alwaysTrust.option.file.label");
        },
        get description() {
            return t("plugin.alwaysTrust.option.file.description");
        },
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: true
    }
});

export default definePlugin({
    name: "AlwaysTrust",
    description: "Removes the annoying untrusted domain and suspicious file popup",
    authors: [Devs.zt, Devs.Trwy],

    get displayDescription() {
        return t("plugin.alwaysTrust.description");
    },

    patches: [
        {
            find: '="MaskedLinkStore",',
            replacement: {
                match: /(?<=isTrustedDomain\(\i\){)return \i\(\i\)/,
                replace: "return true"
            },
            predicate: () => settings.store.domain
        },
        {
            find: "bitbucket.org",
            replacement: {
                match: /function \i\(\i\){(?=.{0,30}pathname:\i)/,
                replace: "$&return null;"
            },
            predicate: () => settings.store.file
        }
    ],
    settings
});
