/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { ColorPaletteIcon } from "@components/Icons";
import SettingsPlugin from "@plugins/_core/settings";
import { PcDevs } from "@utils/constants";
import { removeFromArray } from "@utils/misc";
import definePlugin from "@utils/types";
import { SettingsRouter } from "@webpack/common";

import { settings } from "./utils/settings";

export default definePlugin({
    name: "ThemeLibrary",
    description: () => t(plugin.themeLibrary.description),
    tags: ["appearance", "customisation"],
    authors: [PcDevs.Fafa, PcDevs.MutanPlex],
    settings,
    toolboxActions: () => ({
        [t(plugin.themeLibrary.text.openThemeLibrary)]: () => {
            SettingsRouter.openUserSettings("plexcord_theme_library_panel");
        },
    }),

    start() {
        SettingsPlugin.customEntries.push({
            key: "plexcord_theme_library",
            title: t(plugin.themeLibrary.text.themeLibrary),
            Component: require("./components/ThemeTab").default,
            Icon: ColorPaletteIcon
        });
    },

    stop() {
        removeFromArray(SettingsPlugin.customEntries, e => e.key === "plexcord_theme_library");
    },
});
