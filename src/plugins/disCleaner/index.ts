/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { Devs, PcDevs } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";

export const settings = definePluginSettings({
    dms: {
        get label() {
            return t("plugin.disCleaner.option.dms.label");
        },
        get description() {
            return t("plugin.disCleaner.option.dms.description");
        },
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: true,
    },
    serverBoost: {
        get label() {
            return t("plugin.disCleaner.option.serverBoost.label");
        },
        get description() {
            return t("plugin.disCleaner.option.serverBoost.description");
        },
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: true,
    },
    billing: {
        get label() {
            return t("plugin.disCleaner.option.billing.label");
        },
        get description() {
            return t("plugin.disCleaner.option.billing.description");
        },
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: true,
    },
    gift: {
        get label() {
            return t("plugin.disCleaner.option.gift.label");
        },
        get description() {
            return t("plugin.disCleaner.option.gift.description");
        },
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: true,
    },
    emojiList: {
        get label() {
            return t("plugin.disCleaner.option.emojiList.label");
        },
        get description() {
            return t("plugin.disCleaner.option.emojiList.description");
        },
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: true,
    },
});

export default definePlugin({
    name: "DisCleaner",
    description: "Removes shops and other useless things from Discord",
    authors: [Devs.Kyuuhachi, PcDevs.MutanPlex],
    settings,

    get displayDescription() {
        return t("plugin.disCleaner.description");
    },

    patches: [
        {
            // Above DMs, mouse nav
            find: 'tutorialId:"direct-messages"',
            replacement: [
                {
                    match: /NAVIGATION_LINK\}\}\}\)(?=,\i(&&\(|\]))/,
                    replace: "$&&&undefined",
                },
                {
                    match: /NAVIGATION_LINK\}\}\}.{0,20}\)(?=,\i&&!\i)/,
                    replace: "$&&&undefined",
                },
            ],
            predicate: () => settings.store.dms,
        },
        {
            // Channel list server boost progress bar
            find: "useGuildActionRow",
            replacement: {
                match: /\i\.premiumProgressBarEnabled&&[^,]+/,
                replace: "null"
            },
            predicate: () => settings.store.serverBoost,
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
            // Settings, sidebar
            find: "#{intl::BILLING_SETTINGS}",
            replacement: [
                {
                    match: /(?<=#{intl::BILLING_SETTINGS}[^,]*?,)(?=div)/,
                    replace: "capitalism:true,"
                },
                {
                    match: /\i\?\i:\i\.toSpliced\(3,0,\i\)/,
                    replace: "($&).filter(e=>!e.capitalism)",
                },
            ],
            predicate: () => settings.store.billing,
        },
        {
            // Gift button
            find: '"sticker")',
            replacement: { match: /&&\i\.push\(\([^&]*?,"gift"\)\)/, replace: "", },
            predicate: () => settings.store.gift,
        },
        {
            // Emoji list
            find: "#{intl::EMOJI_PICKER_CREATE_EMOJI_TITLE}),size:",
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
