/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { OptionType } from "@utils/types";

import { FormatSetting } from ".";

export const settings = definePluginSettings({
    format: {
        component: ({ setValue }) => FormatSetting(setValue),
        type: OptionType.COMPONENT,
        default: "{buildChannel} {buildNumber} ({buildHash}) | {plexcordName} {plexcordVersion} ({plexcordHash})",
        restartNeeded: true
    }
});

export const names: Record<string, string> = {
    stable: "Stable",
    ptb: "PTB",
    canary: "Canary",
    staging: "Staging"
};

export const settingVariables = () => [
    t(plugin.discordDevBanner.variables.discord.title),
    "{discordIcon} - " + t(plugin.discordDevBanner.variables.discord.icon),
    "{devbannerIcon} - " + t(plugin.discordDevBanner.variables.discord.banner),
    "{buildChannel} - " + t(plugin.discordDevBanner.variables.discord.channel),
    "{buildNumber} - " + t(plugin.discordDevBanner.variables.discord.build),
    "{buildHash} - " + t(plugin.discordDevBanner.variables.discord.hash),
    "",
    t(plugin.discordDevBanner.variables.plexcord.title),
    "{plexcordIcon} - " + t(plugin.discordDevBanner.variables.plexcord.icon),
    "{plexcordName} - " + t(plugin.discordDevBanner.variables.plexcord.name),
    "{plexcordVersion} - " + t(plugin.discordDevBanner.variables.plexcord.version),
    "{plexcordHash} - " + t(plugin.discordDevBanner.variables.plexcord.hash),
    "{plexcordPlatform} - " + t(plugin.discordDevBanner.variables.plexcord.platform),
    "",
    t(plugin.discordDevBanner.variables.plextron.title),
    "{plextronHashShort} - " + t(plugin.discordDevBanner.variables.plextron.hashShort),
    "{plextronPlatformType} - " + t(plugin.discordDevBanner.variables.plextron.platformType),
    "",
    t(plugin.discordDevBanner.variables.client.title),
    "{clientIcon} - " + t(plugin.discordDevBanner.variables.client.icon),
    "{clientName} - " + t(plugin.discordDevBanner.variables.client.name),
    "{clientVersion} - " + t(plugin.discordDevBanner.variables.client.version),
    "",
    t(plugin.discordDevBanner.variables.electron.title),
    "{electronIcon} - " + t(plugin.discordDevBanner.variables.electron.icon),
    "{electronVersion} - " + t(plugin.discordDevBanner.variables.electron.version),
    "",
    t(plugin.discordDevBanner.variables.chromium.title),
    "{chromiumIcon} - " + t(plugin.discordDevBanner.variables.chromium.icon),
    "{chromiumVersion} - " + t(plugin.discordDevBanner.variables.chromium.version),
    "",
    t(plugin.discordDevBanner.variables.misc.title),
    "{newline} or \\n - " + t(plugin.discordDevBanner.variables.misc.newline),
    "",
];
