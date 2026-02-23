/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { Icon } from "@plexcord/discord-types";

export type IconsDef = Record<string, Icon>;

export interface CssColorData {
    name: string;
    css: string;
    key: string;
}

export type IconSize = "xxs" | "xs" | "sm" | "md" | "lg";
