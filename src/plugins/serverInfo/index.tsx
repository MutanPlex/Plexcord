/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { findGroupChildrenByChildId, NavContextMenuPatchCallback } from "@api/ContextMenu";
import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { InfoIcon } from "@components/Icons";
import { Guild } from "@plexcord/discord-types";
import { Devs, PcDevs } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";
import { Menu } from "@webpack/common";

import { openGuildInfoModal } from "./GuildInfoModal";

const makePatch: (showIcon: boolean) => NavContextMenuPatchCallback = showIcon => (children, { guild }: { guild: Guild; }) => {
    const group = findGroupChildrenByChildId("privacy", children);

    group?.push(
        <Menu.MenuItem
            id="pc-server-info"
            label={t(plugin.serverInfo.context.serverInfo)}
            leadingAccessory={showIcon ? { type: "icon", icon: InfoIcon } : undefined}
            action={() => openGuildInfoModal(guild)}
        />
    );
};

export const settings = definePluginSettings({
    sorting: {
        label: () => t(plugin.serverInfo.option.sorting.label),
        description: () => t(plugin.serverInfo.option.sorting.description),
        type: OptionType.SELECT,
        options: [
            {
                label: () => t(plugin.serverInfo.option.sorting.username),
                value: "username"
            },
            {
                label: () => t(plugin.serverInfo.option.sorting.displayname),
                value: "displayname",
                default: true
            },
            {
                label: () => t(plugin.serverInfo.option.sorting.none),
                value: "none",
            }
        ]
    }
});

export default definePlugin({
    name: "ServerInfo",
    description: () => t(plugin.serverInfo.description),
    authors: [Devs.Ven, Devs.Nuckyz, PcDevs.Z1xus],
    tags: ["servers", "utility"],
    dependencies: ["DynamicImageModalAPI"],
    searchTerms: ["guild", "info", "ServerProfile"],
    settings,
    contextMenus: {
        "guild-context": makePatch(false),
        "guild-header-popout": makePatch(true)
    }
});
