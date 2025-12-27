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
import { Devs } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";
import { Alerts, Button, GuildStore } from "@webpack/common";
import { findByPropsLazy } from "webpack";

const DeleteGuild = findByPropsLazy("deleteGuild", "sendTransferOwnershipPincode").deleteGuild;

function GetPropsAndDeleteGuild(id) {
    const GotGuild = GuildStore.getGuild(id);
    if (!GotGuild) return;

    DeleteGuild(id, GotGuild.name);
}

const settings = definePluginSettings({
    domain: {
        label: () => t(plugin.alwaysTrust.option.domain.label),
        description: () => t(plugin.alwaysTrust.option.domain.description),
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: true
    },
    file: {
        label: () => t(plugin.alwaysTrust.option.file.label),
        description: () => t(plugin.alwaysTrust.option.file.description),
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: true
    },
    noDeleteSafety: {
        label: () => t(plugin.alwaysTrust.option.noDeleteSafety.label),
        description: () => t(plugin.alwaysTrust.option.noDeleteSafety.description),
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: true
    },
    confirmModal: {
        label: () => t(plugin.alwaysTrust.option.confirmModal.label),
        description: () => t(plugin.alwaysTrust.option.confirmModal.description),
        type: OptionType.BOOLEAN,
        default: true
    },
});

export default definePlugin({
    name: "AlwaysTrust",
    description: () => t(plugin.alwaysTrust.description),
    authors: [Devs.zt, Devs.Trwy],

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
        },
        {
            find: ".DELETE,onClick(){let",
            replacement: {
                match: /let\{name:\i\}=(\i)\.guild/,
                replace: "$self.HandleGuildDeleteModal($1);$&"
            },
            predicate: () => settings.store.noDeleteSafety
        }
    ],
    async HandleGuildDeleteModal(server) {
        if (settings.store.confirmModal) {
            return Alerts.show({
                title: t(plugin.alwaysTrust.alert.title),
                body: t(plugin.alwaysTrust.alert.body),
                confirmColor: Button.Colors.RED,
                confirmText: t(plugin.alwaysTrust.alert.confirm),
                onConfirm: () => GetPropsAndDeleteGuild(server.id),
                cancelText: t(plugin.alwaysTrust.alert.cancel)
            });
        } else {
            return GetPropsAndDeleteGuild(server.id);
        }
    },
    settings
});
