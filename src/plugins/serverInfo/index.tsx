/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { findGroupChildrenByChildId, NavContextMenuPatchCallback } from "@api/ContextMenu";
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
            label="Server Info"
            action={() => openGuildInfoModal(guild)}
        />
    );
};

export const settings = definePluginSettings({
    sorting: {
        type: OptionType.SELECT,
        description: "Username or if applicable Display Name",
        options: [
            {
                label: "Username",
                value: "username"
            },
            {
                label: "Display Name",
                value: "displayname",
                default: true
            },
            {
                label: "Dont Sort",
                value: "none",
            }
        ]
    }
});

export default definePlugin({
    name: "ServerInfo",
    description: "Allows you to view info about a server",
    authors: [Devs.Ven, Devs.Nuckyz, PcDevs.Z1xus],
    dependencies: ["DynamicImageModalAPI"],
    tags: ["guild", "info", "ServerProfile"],
    contextMenus: {
        "guild-context": Patch,
        "guild-header-popout": Patch
    },
    settings
});
