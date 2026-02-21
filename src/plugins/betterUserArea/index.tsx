/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { Devs, PcDevs } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";

const settings = definePluginSettings({
    removeNameplate: {
        label: () => t(plugin.betterUserArea.option.removeNameplate.label),
        description: () => t(plugin.betterUserArea.option.removeNameplate.description),
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: true
    },
    removeAudioMenus: {
        label: () => t(plugin.betterUserArea.option.removeAudioMenus.label),
        description: () => t(plugin.betterUserArea.option.removeAudioMenus.description),
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: true
    },
    alwaysShowUsername: {
        label: () => t(plugin.betterUserArea.option.alwaysShowUsername.label),
        description: () => t(plugin.betterUserArea.option.alwaysShowUsername.description),
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: true
    },
    removeButtonTooltips: {
        label: () => t(plugin.betterUserArea.option.removeButtonTooltips.label),
        description: () => t(plugin.betterUserArea.option.removeButtonTooltips.description),
        type: OptionType.BOOLEAN,
        default: false,
        restartNeeded: true
    },
    removeAvatarDecoration: {
        label: () => t(plugin.betterUserArea.option.removeAvatarDecoration.label),
        description: () => t(plugin.betterUserArea.option.removeAvatarDecoration.description),
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: true
    },
    removeUsernameStyles: {
        label: () => t(plugin.betterUserArea.option.removeUsernameStyles.label),
        description: () => t(plugin.betterUserArea.option.removeUsernameStyles.description),
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: true
    }
});

export default definePlugin({
    name: "BetterUserArea",
    description: () => t(plugin.betterUserArea.description),
    authors: [Devs.prism, PcDevs.MutanPlex],
    settings,
    patches: [
        {
            find: ".NITRO_PRIVACY_PERK_BETA_COACHMARK));",
            replacement: [
                {
                    match: /,nameplate:\i,selectedGuildId:(\i),avatarDecoration/,
                    replace: ",nameplate:null,selectedGuildId:$1,avatarDecoration",
                    predicate: () => settings.store.removeNameplate
                },
                {
                    match: /hoverText:(\i),forceHover:\i,children:/g,
                    replace: "hoverText:$1,forceHover:!0,children:",
                    predicate: () => settings.store.alwaysShowUsername
                },
                {
                    match: /avatarDecoration:(.{0,70}),size:/,
                    replace: "avatarDecoration:void 0,size:",
                    predicate: () => settings.store.removeAvatarDecoration
                },
                {
                    match: /displayNameStyles:(\i),/,
                    replace: "displayNameStyles:void 0,",
                    predicate: () => settings.store.removeUsernameStyles
                }
            ],
        },
        {
            find: '"MicrophoneButton"',
            replacement: [
                {
                    match: /:\{tooltipText:\i\};/,
                    replace: ":{tooltipText:void 0};",
                    predicate: () => settings.store.removeButtonTooltips
                },
                {
                    match: /(?<=#{intl::MUTE}\),)className:\i\.\i,/,
                    replace: "",
                    predicate: () => settings.store.removeAudioMenus
                },
                {
                    match: /,\(0,\i\.jsxs?\)\(\i\.\i,\{.{0,600}#{intl::ACCOUNT_INPUT_OPTIONS}\)\}\)(?=\])/,
                    replace: "",
                    predicate: () => settings.store.removeAudioMenus
                },
            ],
            predicate: () => settings.store.removeAudioMenus
        },
        {
            find: "#{intl::f+DDY/::raw},{outputDeviceName",
            replacement: [
                {
                    match: /(?<=role:"switch",)tooltipText:\i\}/,
                    replace: "tooltipText:void 0}",
                    predicate: () => settings.store.removeButtonTooltips
                },
                {
                    match: /(?<=#{intl::DEAFEN}\),)className:\i\.\i,/,
                    replace: "",
                    predicate: () => settings.store.removeAudioMenus
                },
                {
                    match: /,\(0,\i\.jsxs?\)\(\i\.\i,\{.{0,650}#{intl::ACCOUNT_OUTPUT_OPTIONS}\)\}\)(?=\])/,
                    replace: "",
                    predicate: () => settings.store.removeAudioMenus
                }
            ],
        },
        {
            find: "#{intl::USER_SETTINGS_WITH_BUILD_OVERRIDE}",
            replacement: {
                match: /tooltipText:\i,tooltipPositionKey/,
                replace: "tooltipText:void 0,tooltipPositionKey"
            },
            predicate: () => settings.store.removeButtonTooltips
        },
    ],
});
