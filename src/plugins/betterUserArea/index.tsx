/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { PcDevs } from "@utils/constants";
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
    authors: [PcDevs.Prism, PcDevs.MutanPlex],
    settings,
    patches: [
        {
            find: "#{intl::ACCOUNT_SPEAKING_WHILE_MUTED}",
            replacement: {
                match: /,nameplate:\i,selectedGuildId:(\i),avatarDecoration/,
                replace: ",nameplate:null,selectedGuildId:$1,avatarDecoration"
            },
            predicate: () => settings.store.removeNameplate
        },
        {
            find: "#{intl::ACCOUNT_SPEAKING_WHILE_MUTED}",
            replacement: [
                {
                    match: /className:\i\.micButtonWithMenu,/g,
                    replace: ""
                },
                {
                    // TODO: MAKE THIS BETTER
                    match: /,\(0,\i\.jsxs?\).{0,130}\.buttonChevron.{0,530}\}\)(?=\])/g,
                    replace: ""
                }
            ],
            predicate: () => settings.store.removeAudioMenus
        },
        {
            find: "#{intl::ACCOUNT_SPEAKING_WHILE_MUTED}",
            replacement: {
                match: /hoverText:(\i),forceHover:\i,children:/g,
                replace: "hoverText:$1,forceHover:!0,children:"
            },
            predicate: () => settings.store.alwaysShowUsername
        },
        {
            find: "#{intl::ACCOUNT_SPEAKING_WHILE_MUTED}",
            replacement: {
                match: /tooltipText:\i,/g,
                replace: "tooltipText:void 0,"
            },
            predicate: () => settings.store.removeButtonTooltips
        },
        {
            find: "#{intl::ACCOUNT_SPEAKING_WHILE_MUTED}",
            replacement: {
                match: /avatarDecoration:(.{0,70}),size:/,
                replace: "avatarDecoration:void 0,size:"
            },
            predicate: () => settings.store.removeAvatarDecoration
        },
        {
            find: "#{intl::ACCOUNT_SPEAKING_WHILE_MUTED}",
            replacement: {
                match: /displayNameStyles:(\i),/,
                replace: "displayNameStyles:void 0,"
            },
            predicate: () => settings.store.removeUsernameStyles
        }
    ],
});
