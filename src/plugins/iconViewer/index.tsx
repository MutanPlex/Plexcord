/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import "./styles.css";

import { plugin, t } from "@api/i18n";
import { MagnifyingGlassIcon } from "@components/Icons";
import SettingsPlugin from "@plugins/_core/settings";
import { PcDevs } from "@utils/constants";
import { removeFromArray } from "@utils/misc";
import definePlugin, { StartAt } from "@utils/types";
import { SettingsRouter } from "@webpack/common";

import IconsTab from "./components/IconsTab";
import { SettingsAbout } from "./components/Modals";

export default definePlugin({
    name: "IconViewer",
    description: () => t(plugin.iconViewer.description),
    authors: [PcDevs.iamme, PcDevs.MutanPlex],
    dependencies: ["Settings"],
    startAt: StartAt.WebpackReady,

    toolboxActions: () => ({
        [t(plugin.iconViewer.toolbox)]() {
            SettingsRouter.openUserSettings("plexcord_icon_viewer_panel");
        }
    }),
    settingsAboutComponent: SettingsAbout,
    start() {
        SettingsPlugin.customEntries.push({
            key: "plexcord_icon_viewer",
            title: t(plugin.iconViewer.iconFinder),
            Component: IconsTab,
            Icon: MagnifyingGlassIcon
        });

        SettingsPlugin.settingsSectionMap.push(["PlexcordDiscordIcons", "plexcord_icon_viewer"]);
    },
    stop() {
        removeFromArray(SettingsPlugin.customEntries, e => e.key === "plexcord_icon_viewer");
        removeFromArray(SettingsPlugin.settingsSectionMap, entry => entry[1] === "plexcord_icon_viewer");
    },
});
