/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import "./FormDivider.css";

import { classes } from "@utils/misc";

export function FormDivider({ className }: { className?: string; }) {
    return <div className={classes("pc-form-divider", className)} />;
}
