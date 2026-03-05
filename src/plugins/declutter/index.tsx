/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2026 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import "./style.css";

import { plugin, t } from "@api/i18n";
import { definePluginSettings, migratePluginSetting, migratePluginSettings } from "@api/Settings";
import { Divider } from "@components/Divider";
import { HeadingSecondary } from "@components/Heading";
import { Notice } from "@components/Notice";
import { classNameFactory, Devs, PcDevs } from "@utils/index";
import definePlugin, { OptionType } from "@utils/types";

migratePluginSettings("Declutter", "BetterUserArea", "Anammox");

const migrationsDiscleaner = [
    ["dms", "removeShopAboveDM"],
    ["quests", "removeQuestsAboveDM"],
    ["serverBoost", "removeServerBoostInfo"],
    ["billing", "removeBillingSettings"],
    ["gift", "removeGiftButton"],
    ["emojiList", "removeUnavailableEmojiPicker"],
];

for (const [oldKey, newKey] of migrationsDiscleaner) {
    migratePluginSetting("Declutter", newKey, oldKey);
}

const cl = classNameFactory("pc-declutter");

export const settings = definePluginSettings({
    userProfileHeader: {
        label: () => t(plugin.declutter.option.userProfileHeader.label),
        type: OptionType.COMPONENT,
        component: () => SectionSeparator(t(plugin.declutter.option.userProfileHeader.label)),
    },
    removeNameplate: {
        label: () => t(plugin.declutter.option.removeNameplate.label),
        description: () => t(plugin.declutter.option.removeNameplate.description),
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: true,
    },
    removeProfileEffect: {
        label: () => t(plugin.declutter.option.removeProfileEffect.label),
        description: () => t(plugin.declutter.option.removeProfileEffect.description),
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: true,
    },
    removeClanTag: {
        label: () => t(plugin.declutter.option.removeClanTag.label),
        description: () => t(plugin.declutter.option.removeClanTag.description),
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: true,
    },
    alwaysShowUsername: {
        label: () => t(plugin.declutter.option.alwaysShowUsername.label),
        description: () => t(plugin.declutter.option.alwaysShowUsername.description),
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: true
    },
    accessibilityNotice: {
        label: () => t(plugin.declutter.option.accessibilityNotice.label),
        type: OptionType.COMPONENT,
        component: () => (
            <Notice.Info className={cl("accessibility-notice")}>
                {t(plugin.declutter.option.accessibilityNotice.description)}
            </Notice.Info>
        )
    },
    friendsListHeader: {
        type: OptionType.COMPONENT,
        component: () => SectionSeparator(t(plugin.declutter.option.friendsListHeader.label)),
    },
    removeShopAboveDM: {
        label: () => t(plugin.declutter.option.removeShopAboveDM.label),
        description: () => t(plugin.declutter.option.removeShopAboveDM.description),
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: true,
    },
    removeQuestsAboveDM: {
        label: () => t(plugin.declutter.option.removeQuestsAboveDM.label),
        description: () => t(plugin.declutter.option.removeQuestsAboveDM.description),
        type: OptionType.BOOLEAN,
        default: false,
        restartNeeded: true,
    },
    miscHeader: {
        type: OptionType.COMPONENT,
        component: () => SectionSeparator(t(plugin.declutter.option.miscHeader.label)),
    },
    removeServerBoostInfo: {
        label: () => t(plugin.declutter.option.removeServerBoostInfo.label),
        description: () => t(plugin.declutter.option.removeServerBoostInfo.description),
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: true,
    },
    removeBillingSettings: {
        label: () => t(plugin.declutter.option.removeBillingSettings.label),
        description: () => t(plugin.declutter.option.removeBillingSettings.description),
        type: OptionType.BOOLEAN,
        default: false,
        restartNeeded: true,
    },
    removeGiftButton: {
        label: () => t(plugin.declutter.option.removeGiftButton.label),
        description: () => t(plugin.declutter.option.removeGiftButton.description),
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: true,
    },
    removeUnavailableEmojiPicker: {
        label: () => t(plugin.declutter.option.removeUnavailableEmojiPicker.label),
        description: () => t(plugin.declutter.option.removeUnavailableEmojiPicker.description),
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: true,
    },
    removeAudioMenus: {
        label: () => t(plugin.declutter.option.removeAudioMenus.label),
        description: () => t(plugin.declutter.option.removeAudioMenus.description),
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: true
    },
    removeButtonTooltips: {
        label: () => t(plugin.declutter.option.removeButtonTooltips.label),
        description: () => t(plugin.declutter.option.removeButtonTooltips.description),
        type: OptionType.BOOLEAN,
        default: false,
        restartNeeded: true
    },
});

function SectionSeparator(title: string) {
    return (
        <div className={cl("section-separator")}>
            <Divider />
            <HeadingSecondary className={cl("section-title")}>
                {title}
            </HeadingSecondary>
        </div>
    );
}

export default definePlugin({
    name: "Declutter",
    description: () => t(plugin.declutter.description),
    authors: [PcDevs.Leon135, Devs.prism, Devs.Kyuuhachi],
    settings,
    patches: [
        {
            // Nameplate
            find: "#{intl::AVATAR_MALLOW}",
            replacement: {
                match: /function \i\(\i\)\{(?=.{0,25}skuId:)/,
                replace: "$&return null;"
            },
            predicate: () => settings.store.removeNameplate,
        },
        {
            // Profile banner animation effect
            find: "bannerAdjustment,noBorderRadius",
            replacement: {
                match: /\i=\i=>\{(?=.{0,50}\.useReducedMotion\))/,
                replace: "$&return null;"
            },
            predicate: () => settings.store.removeProfileEffect,
        },
        {
            // Clan tag
            find: ".GuildFeatures.GUILD_TAGS)",
            replacement: {
                match: /(?<=\.profile\?\.badge.{0,50}\i\)\{)/,
                replace: "return false;"
            },
            predicate: () => settings.store.removeClanTag,
        },
        {
            // Always show username
            find: ".DISPLAY_NAME_STYLES_COACHMARK),",
            replacement: {
                match: /hoverText:(\i),forceHover:\i,children:/g,
                replace: "hoverText:$1,forceHover:!0,children:"
            },
            predicate: () => settings.store.alwaysShowUsername
        },
        {
            // Button tooltips in user area
            find: '"MicrophoneButton"',
            replacement: [
                {
                    // Button tooltips
                    match: /:\{tooltipText:\i\};/,
                    replace: ":{tooltipText:void 0};",
                    predicate: () => settings.store.removeButtonTooltips
                },
                {
                    // Audio menus
                    match: /(?<=#{intl::MUTE}\),)className:\i\.\i,/,
                    replace: "",
                    predicate: () => settings.store.removeAudioMenus
                },
                {
                    // Audio menus
                    match: /,\(0,\i\.jsxs?\)\(\i\.\i,\{.{0,600}#{intl::ACCOUNT_INPUT_OPTIONS}\)\}\)(?=\])/,
                    replace: "",
                    predicate: () => settings.store.removeAudioMenus
                },
            ],
        },
        {
            // Button tooltips in right click audio settings
            find: "#{intl::f+DDY/::raw},{outputDeviceName",
            replacement: [
                {
                    // Button tooltips
                    match: /(?<=role:"switch",)tooltipText:\i\}/,
                    replace: "tooltipText:void 0}",
                    predicate: () => settings.store.removeButtonTooltips
                },
                {
                    // Audio menus
                    match: /(?<=#{intl::DEAFEN}\),)className:\i\.\i,/,
                    replace: "",
                    predicate: () => settings.store.removeAudioMenus
                },
                {
                    // Audio menus
                    match: /,\(0,\i\.jsxs?\)\(\i\.\i,\{.{0,650}#{intl::ACCOUNT_OUTPUT_OPTIONS}\)\}\)(?=\])/,
                    replace: "",
                    predicate: () => settings.store.removeAudioMenus
                }
            ],
        },
        {
            // ? Another button tooltips
            find: "#{intl::USER_SETTINGS_WITH_BUILD_OVERRIDE}",
            replacement: {
                match: /tooltipText:\i,tooltipPositionKey/,
                replace: "tooltipText:void 0,tooltipPositionKey"
            },
            predicate: () => settings.store.removeButtonTooltips
        },
        {
            // Above DMs section, shops and quests
            find: 'tutorialId:"direct-messages"',
            replacement: [
                {
                    match: /"nitro-tab-group"\)/,
                    replace: "$&&&undefined",
                    predicate: () => settings.store.removeShopAboveDM,
                },
                {
                    match: /"discord-shop"\)/,
                    replace: "$&&&undefined",
                    predicate: () => settings.store.removeShopAboveDM

                },
                {
                    match: /"quests"\)/,
                    replace: "$&&&undefined",
                    predicate: () => settings.store.removeQuestsAboveDM
                },
            ],
        },
        {
            // Above DMs section, keyboard navigation
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
            predicate: () => settings.store.removeShopAboveDM,
        },
        {
            // Channel list server boost progress bar
            find: "useGuildActionRow",
            replacement: {
                match: /(GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR\)):(\i(?:\.premiumProgressBarEnabled)?)/,
                replace: "$1:null"
            },
            predicate: () => settings.store.removeServerBoostInfo,
        },
        {
            // Billing settings
            find: ".BILLING_SECTION,",
            replacement: {
                match: /(?<=buildLayout:\(\)=>)\[.+?\]/,
                replace: "[]",
            },
            predicate: () => settings.store.removeBillingSettings,
        },
        {
            // Gift button
            find: '"sticker")',
            replacement: {
                match: /&&\i\.push\(\([^&]*?,"gift"\)\)/,
                replace: "",
            },
            predicate: () => settings.store.removeGiftButton,
        },
        {
            // Emoji list
            find: "#{intl::EMOJI_PICKER_EXPAND_EMOJI_SECTION}),size:",
            replacement: {
                match: /(\i)=\i\|\|!\i&&\i.\i.isEmojiCategoryNitroLocked\(\{[^}]*\}\);/,
                replace: "$&$1||"
            },
            predicate: () => settings.store.removeUnavailableEmojiPicker,
        },
        {
            // Emoji category list
            find: "#{intl::EMOJI_CATEGORY_TOP_GUILD_EMOJI},{guildName:",
            replacement: {
                match: /(?<=(\i)\.unshift\((\i)\):)(?=\1\.push\(\2\))/,
                replace: "$2.isNitroLocked||"
            },
            predicate: () => settings.store.removeUnavailableEmojiPicker,
        }
    ],
});
