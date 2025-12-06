/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { Devs } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";

const settings = definePluginSettings({
    defaultLayout: {
        label: () => t(plugin.overrideForumDefaults.option.defaultLayout.label),
        description: () => t(plugin.overrideForumDefaults.option.defaultLayout.description),
        type: OptionType.SELECT,
        options: [
            { label: () => t(plugin.overrideForumDefaults.option.defaultLayout.list), value: 1, default: true },
            { label: () => t(plugin.overrideForumDefaults.option.defaultLayout.gallery), value: 2 }
        ]
    },
    defaultSortOrder: {
        label: () => t(plugin.overrideForumDefaults.option.defaultSortOrder.label),
        description: () => t(plugin.overrideForumDefaults.option.defaultSortOrder.description),
        type: OptionType.SELECT,
        options: [
            { label: () => t(plugin.overrideForumDefaults.option.defaultSortOrder.recentlyActive), value: 0, default: true },
            { label: () => t(plugin.overrideForumDefaults.option.defaultSortOrder.datePosted), value: 1 }
        ]
    }
});

export default definePlugin({
    name: "OverrideForumDefaults",
    description: () => t(plugin.overrideForumDefaults.description),
    authors: [Devs.Inbestigator],

    patches: [
        {
            find: "getDefaultLayout(){",
            replacement: [
                {
                    match: /}getDefaultLayout\(\){/,
                    replace: "$&return $self.getLayout();"
                },
                {
                    match: /}getDefaultSortOrder\(\){/,
                    replace: "$&return $self.getSortOrder();"
                }
            ]
        }
    ],

    getLayout: () => settings.store.defaultLayout,
    getSortOrder: () => settings.store.defaultSortOrder,

    settings
});
