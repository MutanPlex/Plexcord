/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { Devs } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";
import { findByPropsLazy } from "@webpack";
import { Alerts, Button, GuildStore } from "@webpack/common";
const DeleteGuild = findByPropsLazy("deleteGuild", "sendTransferOwnershipPincode").deleteGuild;

function GetPropsAndDeleteGuild(id) {
    const GotGuild = GuildStore.getGuild(id);
    if (!GotGuild) return;

    DeleteGuild(id, GotGuild.name);
}

const settings = definePluginSettings(
    {
        confirmModal: {
            type: OptionType.BOOLEAN,
            get label() {
                return t("plugin.noDeleteSafety.option.confirmModal.label");
            },
            get description() {
                return t("plugin.noDeleteSafety.option.confirmModal.description");
            },
            default: true
        },
    });

export default definePlugin({
    name: "NoDeleteSafety",
    description: "Removes the 'enter server name' requirement when deleting a server",
    authors: [Devs.Samwich],
    settings,

    get displayDescription() {
        return t("plugin.noDeleteSafety.description");
    },

    async HandleGuildDeleteModal(server) {
        if (settings.store.confirmModal) {
            return Alerts.show({
                title: t("plugin.noDeleteSafety.modal.title"),
                body: <p>{t("plugin.noDeleteSafety.modal.body")}</p>,
                confirmColor: Button.Colors.RED,
                confirmText: t("plugin.noDeleteSafety.modal.confirm"),
                onConfirm: () => GetPropsAndDeleteGuild(server.id),
                cancelText: t("plugin.noDeleteSafety.modal.cancel")
            });
        } else {
            return GetPropsAndDeleteGuild(server.id);
        }
    },
    patches: [
        {
            find: ".DELETE,onClick(){let",
            replacement: {
                match: /let\{name:\i\}=(\i)\.guild/,
                replace: "$self.HandleGuildDeleteModal($1);$&"
            }
        }
    ]
});
