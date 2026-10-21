/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2026 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import "./styles.css";

import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { UserIcon } from "@components/Icons";
import SettingsPlugin from "@plugins/_core/settings";
import { PcDevs } from "@utils/constants";
import { classNameFactory } from "@utils/css";
import { removeFromArray } from "@utils/misc";
import definePlugin, { OptionType } from "@utils/types";
import { SettingsRouter } from "@webpack/common";

import { loadPresets } from "./utils/storage";

export const cl = classNameFactory("pc-profile-presets-");
export const settings = definePluginSettings({
    avatarSize: {
        label: () => t(plugin.profileSets.option.avatarSize.label),
        description: () => t(plugin.profileSets.option.avatarSize.description),
        type: OptionType.SLIDER,
        markers: [56, 64, 72, 80, 88, 96],
        default: 56,
        stickToMarkers: true
    },
});

export default definePlugin({
    name: "ProfileSets",
    description: () => t(plugin.profileSets.description),
    tags: ["appearance", "customisation", "utility"],
    authors: [PcDevs.omaw, PcDevs.justjxke],
    settings,
    toolboxActions: () => ({
        [t(plugin.profileSets.text.openProfileSets)]: () => {
            SettingsRouter.openUserSettings("plexcord_profile_sets_panel");
        },
    }),

    start() {
        loadPresets("main");
        SettingsPlugin.customEntries.push({
            key: "plexcord_profile_sets",
            title: t(plugin.profileSets.text.profileSets),
            Component: require("./components/profileSetsTab").default,
            Icon: UserIcon
        });
    },

    stop() {
        removeFromArray(SettingsPlugin.customEntries, e => e.key === "plexcord_profile_sets");
    },
});
