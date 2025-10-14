/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { createAndAppendStyle } from "@utils/css";

import { generateTextCss } from "./BaseText";
import { generateMarginCss } from "./margins";

export function addPlexcordUiStyles() {
    createAndAppendStyle("plexcord-text", document.head).textContent = generateTextCss();
    createAndAppendStyle("plexcord-margins").textContent = generateMarginCss();
}
