/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { PcDevs } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";

const settings = definePluginSettings({
    inviteDuration: {
        get label() {
            return t("plugin.inviteDefaults.option.inviteDuration.label");
        },
        get description() {
            return t("plugin.inviteDefaults.option.inviteDuration.description");
        },
        type: OptionType.SELECT,
        get options() {
            return [
                { label: t("plugin.inviteDefaults.option.inviteDuration.30m"), value: 1800 },
                { label: t("plugin.inviteDefaults.option.inviteDuration.1h"), value: 3600 },
                { label: t("plugin.inviteDefaults.option.inviteDuration.6h"), value: 21600 },
                { label: t("plugin.inviteDefaults.option.inviteDuration.12h"), value: 43200 },
                { label: t("plugin.inviteDefaults.option.inviteDuration.1d"), value: 86400 },
                { label: t("plugin.inviteDefaults.option.inviteDuration.7d"), value: 604800 },
                { label: t("plugin.inviteDefaults.option.inviteDuration.forever"), value: 0, default: true },
            ];
        }
    },
    maxUses: {
        get label() {
            return t("plugin.inviteDefaults.option.maxUses.label");
        },
        get description() {
            return t("plugin.inviteDefaults.option.maxUses.description");
        },
        type: OptionType.SELECT,
        get options() {
            return [
                { label: t("plugin.inviteDefaults.option.maxUses.unlimited"), value: 0, default: true },
                { label: t("plugin.inviteDefaults.option.maxUses.1"), value: 1 },
                { label: t("plugin.inviteDefaults.option.maxUses.5"), value: 5 },
                { label: t("plugin.inviteDefaults.option.maxUses.10"), value: 10 },
                { label: t("plugin.inviteDefaults.option.maxUses.25"), value: 25 },
                { label: t("plugin.inviteDefaults.option.maxUses.50"), value: 50 },
                { label: t("plugin.inviteDefaults.option.maxUses.100"), value: 100 },
            ];
        }
    },
    temporaryMembership: {
        get label() {
            return t("plugin.inviteDefaults.option.temporaryMembership.label");
        },
        get description() {
            return t("plugin.inviteDefaults.option.temporaryMembership.description");
        },
        type: OptionType.BOOLEAN,
        default: false,
    },
});

export default definePlugin({
    name: "InviteDefaults",
    description: "Allows you to edit the default values when creating server invites.",
    authors: [PcDevs.VillainsRule],
    settings,

    get displayDescription() {
        return t("plugin.inviteDefaults.description");
    },

    patches: [
        {
            find: ".GUILD_CREATE_INVITE_SUGGESTION,defaultMaxAge",
            replacement: [
                {
                    match: /(?<=maxAge:)null!=\(\i=null!=\i\?\i:\i\)\?\i:\i.\i/,
                    replace: "$self.settings.store.inviteDuration"
                },
                {
                    match: /(?<=maxUses:)null!=\i&&0!==\i\?\i:\i.value/,
                    replace: "$self.settings.store.maxUses"
                },
                {
                    match: /(?<=temporary:)null!=\i&&\i/,
                    replace: "$self.settings.store.temporaryMembership"
                }
            ]
        }
    ]
});
