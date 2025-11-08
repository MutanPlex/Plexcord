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

const settings = definePluginSettings({
    defaultLayout: {
        get label() {
            return t("plugin.overrideForumDefaults.option.defaultLayout.label");
        },
        get description() {
            return t("plugin.overrideForumDefaults.option.defaultLayout.description");
        },
        type: OptionType.SELECT,
        get options() {
            return [
                { label: t("plugin.overrideForumDefaults.option.defaultLayout.list"), value: 1, default: true },
                { label: t("plugin.overrideForumDefaults.option.defaultLayout.gallery"), value: 2 }
            ];
        }
    },
    defaultSortOrder: {
        get label() {
            return t("plugin.overrideForumDefaults.option.defaultSortOrder.label");
        },
        get description() {
            return t("plugin.overrideForumDefaults.option.defaultSortOrder.description");
        },
        type: OptionType.SELECT,
        get options() {
            return [
                { label: t("plugin.overrideForumDefaults.option.defaultSortOrder.recentlyActive"), value: 0, default: true },
                { label: t("plugin.overrideForumDefaults.option.defaultSortOrder.datePosted"), value: 1 }
            ];
        }
    }
});

export default definePlugin({
    name: "OverrideForumDefaults",
    description: "Allows you to override default forum layout/sort order. you can still change it on a per-channel basis",
    authors: [Devs.Inbestigator],

    get displayDescription() {
        return t("plugin.overrideForumDefaults.description");
    },

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
