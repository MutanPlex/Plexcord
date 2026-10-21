/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2026 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { getUserSettingLazy } from "@api/UserSettings";
import type { Theme } from "@plexcord/discord-types";
import { findByCodeLazy } from "@webpack";
import { showToast, ThemeStore, VoiceActions } from "@webpack/common";

import type { PaletteCommand } from "../api/types";
import { CircleIcon, HeadphonesIcon, MicIcon, MoonIcon } from "../ui/icons";

const SECTION = "Discord";

const StatusSetting = getUserSettingLazy<string>("status", "status");
const updateDiscordTheme = findByCodeLazy('type:"UNSYNCED_USER_SETTINGS_UPDATE', '"system"===');

const THEMES = [
    { value: "light", label: t(plugin.commandPalette.text.light) },
    { value: "darker", label: t(plugin.commandPalette.text.ash) },
    { value: "dark", label: t(plugin.commandPalette.text.dark) },
    { value: "midnight", label: t(plugin.commandPalette.text.onyx) }
] as const satisfies ReadonlyArray<{ value: Theme; label: string; }>;

const STATUSES = [
    { value: "online", label: t(plugin.commandPalette.status.online) },
    { value: "idle", label: t(plugin.commandPalette.status.idle) },
    { value: "dnd", label: t(plugin.commandPalette.status.dnd) },
    { value: "invisible", label: t(plugin.commandPalette.status.invisible) }
];

export const discordCommands: PaletteCommand[] = [
    {
        id: "discord.toggleMute",
        title: t(plugin.commandPalette.text.toggleMute),
        section: SECTION,
        keywords: ["mute", "microphone", "voice"],
        icon: MicIcon,
        actions: [{
            id: "run",
            label: t(plugin.commandPalette.text.toggleMute),
            run: () => VoiceActions.toggleSelfMute()
        }]
    },
    {
        id: "discord.toggleDeafen",
        title: t(plugin.commandPalette.text.toggleDeafen),
        section: SECTION,
        keywords: ["deafen", "audio", "voice"],
        icon: HeadphonesIcon,
        actions: [{
            id: "run",
            label: t(plugin.commandPalette.text.toggleDeafen),
            run: () => VoiceActions.toggleSelfDeaf()
        }]
    },
    {
        id: "discord.setStatus",
        title: t(plugin.commandPalette.text.setStatus),
        section: SECTION,
        keywords: ["status", "online", "idle", "dnd", "invisible", "presence"],
        icon: CircleIcon,
        page: () => ({
            title: t(plugin.commandPalette.text.setStatus),
            icon: CircleIcon,
            spec: {
                type: "list",
                placeholder: t(plugin.commandPalette.text.searchStatuses),
                items: () => STATUSES.map(status => ({
                    id: status.value,
                    label: status.label,
                    sublabel: StatusSetting?.getSetting() === status.value ? t(plugin.commandPalette.text.current) : undefined,
                    icon: CircleIcon,
                    actions: [{
                        id: "set",
                        label: t(plugin.commandPalette.text.setLabel, { label: status.label }),
                        run() {
                            StatusSetting?.updateSetting(status.value);
                            showToast({ text: t(plugin.commandPalette.toast.statusSetToLabel, { label: status.label }), variant: "success" });
                        }
                    }]
                }))
            }
        })
    },
    {
        id: "discord.toggleTheme",
        title: t(plugin.commandPalette.text.toggleTheme),
        section: SECTION,
        keywords: ["theme", "light", "ash", "dark", "onyx", "appearance"],
        icon: MoonIcon,
        actions: [{
            id: "run",
            label: t(plugin.commandPalette.text.toggleTheme),
            run() {
                const currentIdx = THEMES.findIndex(theme => theme.value === ThemeStore.theme);
                const next = THEMES[(currentIdx + 1) % THEMES.length];
                updateDiscordTheme({ theme: next.value });
                showToast({ text: t(plugin.commandPalette.toast.themeSetToLabel, { label: next.label }), variant: "success" });
            }
        }]
    }
];
