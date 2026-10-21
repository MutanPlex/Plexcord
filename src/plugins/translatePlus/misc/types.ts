/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { classNameFactory } from "@utils/css";

export const cl = classNameFactory("pc-trans-");

export interface Translation {
    text: string;
    src: string;
}

export type IconProps = {
    width?: number;
    height?: number;
};
