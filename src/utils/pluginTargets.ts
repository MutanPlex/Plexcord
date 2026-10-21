/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2026 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

export const PluginTargets = ["web", "browser", "discordDesktop", "plextron", "desktop", "dev"] as const;
export type PluginTarget = typeof PluginTargets[number];
