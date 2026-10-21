/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2026 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { Logger } from "@utils/Logger";
import { SettingsRouter, showToast } from "@webpack/common";

export interface SettingsRoute {
    route: string;
    label: string;
    keywords?: string[];
}

export const DISCORD_SETTINGS_ROUTES: SettingsRoute[] = [
    { route: "my_account", label: t(plugin.commandPalette.text.myAccount), keywords: ["account", "profile"] },
    { route: "profiles", label: t(plugin.commandPalette.text.profiles), keywords: ["profile", "avatar", "bio"] },
    { route: "data_and_privacy", label: t(plugin.commandPalette.text.dataPrivacy), keywords: ["privacy", "safety"] },
    { route: "devices", label: t(plugin.commandPalette.text.devices), keywords: ["sessions"] },
    { route: "connections", label: t(plugin.commandPalette.text.connections), keywords: ["integrations"] },
    { route: "appearance", label: t(plugin.commandPalette.text.appearance), keywords: ["theme", "dark", "light"] },
    { route: "accessibility", label: t(plugin.commandPalette.text.accessibility), keywords: [] },
    { route: "voice_and_video", label: t(plugin.commandPalette.text.voiceVideo), keywords: ["audio", "mic", "camera"] },
    { route: "chat", label: t(plugin.commandPalette.text.chat), keywords: ["messages"] },
    { route: "text_and_images", label: t(plugin.commandPalette.text.textImages), keywords: ["text", "images"] },
    { route: "notifications", label: t(plugin.commandPalette.text.notifications), keywords: [] },
    { route: "keybinds", label: t(plugin.commandPalette.text.keybinds), keywords: ["shortcuts"] },
    { route: "authorized_apps", label: t(plugin.commandPalette.text.authorizedApps), keywords: ["oauth", "apps"] },
    { route: "family_center", label: t(plugin.commandPalette.text.familyCenter), keywords: ["family", "safety"] },
    { route: "advanced", label: t(plugin.commandPalette.text.advanced), keywords: ["developer"] },
    { route: "plexcord_main", label: t(plugin.commandPalette.text.plexcord), keywords: ["plexcord"] },
    { route: "plexcord_plugins", label: t(plugin.commandPalette.text.plexcordPlugins), keywords: ["plugins"] },
    { route: "plexcord_themes", label: t(plugin.commandPalette.text.plexcordThemes), keywords: ["themes", "css"] },
    { route: "plexcord_updater", label: t(plugin.commandPalette.text.plexcordUpdater), keywords: ["update"] },
    { route: "plexcord_changelog", label: t(plugin.commandPalette.text.plexcordChangelog), keywords: ["changelog", "news"] }
];

const ROUTE_ALIASES = new Map<string, string[]>([
    ["my_account", ["my_account_panel", "account"]],
    ["data_and_privacy", ["privacy_and_safety", "privacy_&_safety", "data_and_privacy_panel"]],
    ["notifications", ["legacy_notifications_settings", "notifications_panel"]],
    ["voice_and_video", ["voice_video", "voice_and_video_panel"]],
    ["text_and_images", ["text_images", "text_and_images_panel"]],
    ["appearance", ["appearance_panel"]],
    ["accessibility", ["accessibility_panel"]],
    ["keybinds", ["keybinds_panel"]],
    ["advanced", ["advanced_panel"]],
    ["profiles", ["profiles_panel"]],
    ["devices", ["devices_panel", "sessions_panel"]],
    ["connections", ["connections_panel"]],
    ["chat", ["chat_panel"]],
    ["authorized_apps", ["authorized_apps_panel"]],
    ["family_center", ["family_center_panel"]],
    ["plexcord_main", ["plexcord_main_panel"]],
    ["plexcord_plugins", ["plexcord_plugins_panel"]],
    ["plexcord_themes", ["plexcord_themes_panel"]],
    ["plexcord_updater", ["plexcord_updater_panel"]],
    ["plexcord_changelog", ["plexcord_changelog_panel"]]
]);

const ROUTE_LOOKUP = (() => {
    const lookup = new Map<string, string>();
    for (const [canonical, aliases] of ROUTE_ALIASES) {
        lookup.set(canonical, canonical);
        for (const alias of aliases) lookup.set(alias, canonical);
    }
    return lookup;
})();

function normalizeRoute(route: string): string {
    return route
        .trim()
        .toLowerCase()
        .replace(/^\/+/, "")
        .replace(/\s+/g, "_")
        .replace(/&/g, "and");
}

function resolveRouteCandidates(route: string): string[] {
    const normalized = normalizeRoute(route);
    if (!normalized) return [];

    const canonical = ROUTE_LOOKUP.get(normalized) ?? normalized;
    const aliases = ROUTE_ALIASES.get(canonical) ?? [];
    const seen = new Set<string>();
    const unique: string[] = [];

    for (const candidate of [canonical, ...aliases, normalized]) {
        const base = normalizeRoute(candidate);
        if (!base) continue;

        const expanded = base.endsWith("_panel")
            ? [base, base.slice(0, -"_panel".length)]
            : [`${base}_panel`, base];

        for (const item of expanded) {
            const key = normalizeRoute(item);
            if (!key || seen.has(key)) continue;
            seen.add(key);
            unique.push(key);
        }
    }

    return unique;
}

const logger = new Logger("CommandPalette");

export async function openSettingsPage(route: string, label?: string) {
    const candidates = resolveRouteCandidates(route);
    if (candidates.length === 0) {
        showToast({ text: t(plugin.commandPalette.toast.noSettingsPageWas), variant: "critical" });
        return false;
    }

    for (const candidate of candidates) {
        try {
            await Promise.resolve(SettingsRouter.openUserSettings(candidate));
            return true;
        } catch (e) {
            logger.debug(`Settings route failed: ${candidate}`, e);
            continue;
        }
    }

    showToast({ text: t(plugin.commandPalette.toast.unableToOpenLabel, { label_that_settings_page: label ?? "that settings page" }), variant: "critical" });
    return false;
}
