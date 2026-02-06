/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { PcDevs } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";

const settings = definePluginSettings({
    inviteDuration: {
        label: () => t(plugin.inviteDefaults.option.inviteDuration.label),
        description: () => t(plugin.inviteDefaults.option.inviteDuration.description),
        type: OptionType.SELECT,
        options: [
            { label: () => t(plugin.inviteDefaults.option.inviteDuration.thirtyMinutes), value: 1800 },
            { label: () => t(plugin.inviteDefaults.option.inviteDuration.oneHour), value: 3600 },
            { label: () => t(plugin.inviteDefaults.option.inviteDuration.sixHours), value: 21600 },
            { label: () => t(plugin.inviteDefaults.option.inviteDuration.twelveHours), value: 43200 },
            { label: () => t(plugin.inviteDefaults.option.inviteDuration.oneDay), value: 86400 },
            { label: () => t(plugin.inviteDefaults.option.inviteDuration.sevenDays), value: 604800 },
            { label: () => t(plugin.inviteDefaults.option.inviteDuration.forever), value: 0, default: true },
        ],
    },
    maxUses: {
        label: () => t(plugin.inviteDefaults.option.maxUses.label),
        description: () => t(plugin.inviteDefaults.option.maxUses.description),
        type: OptionType.SELECT,
        options: [
            { label: () => t(plugin.inviteDefaults.option.maxUses.unlimited), value: 0, default: true },
            { label: () => t(plugin.inviteDefaults.option.maxUses.one), value: 1 },
            { label: () => t(plugin.inviteDefaults.option.maxUses.five), value: 5 },
            { label: () => t(plugin.inviteDefaults.option.maxUses.ten), value: 10 },
            { label: () => t(plugin.inviteDefaults.option.maxUses.twentyFive), value: 25 },
            { label: () => t(plugin.inviteDefaults.option.maxUses.fifty), value: 50 },
            { label: () => t(plugin.inviteDefaults.option.maxUses.oneHundred), value: 100 },
        ],
    },
    temporaryMembership: {
        label: () => t(plugin.inviteDefaults.option.temporaryMembership.label),
        description: () => t(plugin.inviteDefaults.option.temporaryMembership.description),
        type: OptionType.BOOLEAN,
        default: false,
    },
});

export default definePlugin({
    name: "InviteDefaults",
    description: () => t(plugin.inviteDefaults.description),
    authors: [PcDevs.VillainsRule],
    settings,

    patches: [
        {
            find: ".GUILD_CREATE_INVITE_SUGGESTION,defaultMaxAge",
            replacement: [
                {
                    match: /(?<=maxAge:)\i\?\?\i\?\?\i\.\i/,
                    replace: "$self.settings.store.inviteDuration"
                },
                {
                    match: /(?<=maxUses:)null!=\i&&0!==\i\?\i:\i.value/,
                    replace: "$self.settings.store.maxUses"
                },
                {
                    match: /(?<=temporary:)\i\?\?!1/,
                    replace: "$self.settings.store.temporaryMembership"
                }
            ]
        }
    ]
});
