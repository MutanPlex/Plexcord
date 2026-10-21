/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2026 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";

import type { PaletteCommand } from "../api/types";
import { BoltIcon, GearIcon, PaintIcon, RestartIcon } from "../ui/icons";
import { openSettingsPage } from "./openSettings";

const SECTION = "Plexcord";

export const plexcordCommands: PaletteCommand[] = [
    {
        id: "plexcord.settings",
        title: t(plugin.commandPalette.builtIn.open.settings.plexcord),
        section: SECTION,
        keywords: ["plexcord", "plexcord", "settings"],
        icon: GearIcon,
        actions: [{
            id: "run",
            label: t(plugin.commandPalette.builtIn.open.settings.plexcord),
            run: () => void openSettingsPage("plexcord_main")
        }]
    },
    {
        id: "plexcord.quickCss",
        title: t(plugin.commandPalette.text.openQuickcss),
        section: SECTION,
        keywords: ["css", "quickcss", "editor", "style"],
        icon: PaintIcon,
        actions: [{
            id: "run",
            label: t(plugin.commandPalette.text.openQuickcss),
            run: () => PlexcordNative.quickCss.openEditor()
        }]
    },
    {
        id: "plexcord.updater",
        title: t(plugin.commandPalette.text.openUpdater),
        section: SECTION,
        keywords: ["update", "updater", "version"],
        icon: BoltIcon,
        predicate: () => !IS_UPDATER_DISABLED,
        actions: [{
            id: "run",
            label: t(plugin.commandPalette.text.openUpdater),
            run: () => void openSettingsPage("plexcord_updater")
        }]
    },
    {
        id: "plexcord.changelog",
        title: t(plugin.commandPalette.text.openChangelog),
        section: SECTION,
        keywords: ["changelog", "news", "whats new"],
        icon: BoltIcon,
        actions: [{
            id: "run",
            label: t(plugin.commandPalette.text.openChangelog),
            run: () => void openSettingsPage("plexcord_changelog")
        }]
    },
    {
        id: "plexcord.restart",
        title: t(plugin.commandPalette.text.restartDiscord),
        section: SECTION,
        keywords: ["restart", "reload", "refresh"],
        icon: RestartIcon,
        actions: [{
            id: "run",
            label: t(plugin.commandPalette.text.restartDiscord),
            run: () => window.location.reload()
        }]
    }
];
