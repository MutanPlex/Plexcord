/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { findGroupChildrenByChildId, NavContextMenuPatchCallback } from "@api/ContextMenu";
import { t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { Guild } from "@plexcord/discord-types";
import { Devs, PcDevs } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";
import { Menu } from "@webpack/common";

import { openGuildInfoModal } from "./GuildInfoModal";

const Patch: NavContextMenuPatchCallback = (children, { guild }: { guild: Guild; }) => {
    const group = findGroupChildrenByChildId("privacy", children);

    group?.push(
        <Menu.MenuItem
            id="pc-server-info"
            label={t("plugin.serverInfo.context.serverInfo")}
            action={() => openGuildInfoModal(guild)}
        />
    );
};

export const settings = definePluginSettings({
    sorting: {
        get label() {
            return t("plugin.serverInfo.option.sorting.label");
        },
        get description() {
            return t("plugin.serverInfo.option.sorting.description");
        },
        type: OptionType.SELECT,
        get options() {
            return [
                {
                    label: t("plugin.serverInfo.option.sorting.username"),
                    value: "username"
                },
                {
                    label: t("plugin.serverInfo.option.sorting.displayname"),
                    value: "displayname",
                    default: true
                },
                {
                    label: t("plugin.serverInfo.option.sorting.none"),
                    value: "none",
                }
            ];
        }
    }
});

export default definePlugin({
    name: "ServerInfo",
    description: "Allows you to view info about a server",
    authors: [Devs.Ven, Devs.Nuckyz, PcDevs.Z1xus],
    dependencies: ["DynamicImageModalAPI"],
    tags: ["guild", "info", "ServerProfile"],

    get displayDescription() {
        return t("plugin.serverInfo.description");
    },

    contextMenus: {
        "guild-context": Patch,
        "guild-header-popout": Patch
    },
    settings
});
