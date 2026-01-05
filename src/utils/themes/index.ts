/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import type { UserstyleHeader } from "usercss-meta";

import type { UserThemeHeader } from "./bd";

export type ThemeHeader = {
    type: "other";
    header: UserThemeHeader;
} | {
    type: "usercss";
    header: UserstyleHeader;
};
