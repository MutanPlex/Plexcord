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

export const settings = definePluginSettings({
    dms: {
        label: () => t(plugin.disCleaner.option.dms.label),
        description: () => t(plugin.disCleaner.option.dms.description),
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: true,
    },
    quests: {
        label: () => t(plugin.disCleaner.option.quests.label),
        description: () => t(plugin.disCleaner.option.quests.description),
        type: OptionType.BOOLEAN,
        default: false,
        restartNeeded: true,
    },
    serverBoost: {
        label: () => t(plugin.disCleaner.option.serverBoost.label),
        description: () => t(plugin.disCleaner.option.serverBoost.description),
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: true,
    },
    billing: {
        label: () => t(plugin.disCleaner.option.billing.label),
        description: () => t(plugin.disCleaner.option.billing.description),
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: true,
    },
    gift: {
        label: () => t(plugin.disCleaner.option.gift.label),
        description: () => t(plugin.disCleaner.option.gift.description),
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: true,
    },
    emojiList: {
        label: () => t(plugin.disCleaner.option.emojiList.label),
        description: () => t(plugin.disCleaner.option.emojiList.description),
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: true,
    },
});

export default definePlugin({
    name: "DisCleaner",
    description: () => t(plugin.disCleaner.description),
    authors: [Devs.Kyuuhachi, PcDevs.MutanPlex],
    settings,

    patches: [
        {
            // Above DMs, mouse nav
            find: 'tutorialId:"direct-messages"',
            replacement: [
                {
                    match: /"nitro-tab-group"\)/,
                    replace: "$&&&undefined",
                    predicate: () => settings.store.dms
                },
                {
                    match: /"discord-shop"\)/,
                    replace: "$&&&undefined",
                    predicate: () => settings.store.dms
                },
                {
                    match: /"quests"\)/,
                    replace: "$&&&undefined",
                    predicate: () => settings.store.quests
                },
            ],
        },
        {
            // Above DMs, keyboard nav
            find: ".hasLibraryApplication()&&!",
            replacement: [
                {
                    match: /\i\.\i\.APPLICATION_STORE,/,
                    replace: "/*$&*/",
                },
                {
                    match: /\i\.\i\.COLLECTIBLES_SHOP,/,
                    replace: "/*$&*/",
                },
            ],
            predicate: () => settings.store.dms,
        },
        {
            // Channel list server boost progress bar
            find: "useGuildActionRow",
            replacement: {
                match: /(GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR\)):(\i(?:\.premiumProgressBarEnabled)?)/,
                replace: "$1:null"
            },
            predicate: () => settings.store.serverBoost,
        },
        {
            // Settings, sidebar
            find: ".BILLING_SECTION,",
            replacement: {
                match: /(?<=buildLayout:\(\)=>)\[.+?\]/,
                replace: "[]",
            },
            predicate: () => settings.store.billing,
        },
        {
            // Gift button
            find: '"sticker")',
            replacement: {
                match: /&&\i\.push\(\([^&]*?,"gift"\)\)/,
                replace: "",
            },
            predicate: () => settings.store.gift,
        },
        {
            // Emoji list
            find: "#{intl::EMOJI_PICKER_EXPAND_EMOJI_SECTION}),size:",
            replacement: {
                match: /(\i)=\i\|\|!\i&&\i.\i.isEmojiCategoryNitroLocked\(\{[^}]*\}\);/,
                replace: "$&$1||"
            },
            predicate: () => settings.store.emojiList,
        },
        {
            // Emoji category list
            find: "#{intl::EMOJI_CATEGORY_TOP_GUILD_EMOJI},{guildName:",
            replacement: {
                match: /(?<=(\i)\.unshift\((\i)\):)(?=\1\.push\(\2\))/,
                replace: "$2.isNitroLocked||"
            },
            predicate: () => settings.store.emojiList,
        }
    ],
});
