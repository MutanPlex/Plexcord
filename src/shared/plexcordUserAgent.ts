/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import gitHash from "~git-hash";
import gitRemote from "~git-remote";

export { gitHash, gitRemote };

export const gitHashShort = gitHash.slice(0, 7);
export const PLEXCORD_USER_AGENT = `Plexcord/${gitHash}${gitRemote ? ` (https://github.com/${gitRemote})` : ""}`;
export const PLEXCORD_USER_AGENT_HASHLESS = `Plexcord${gitRemote ? ` (https://github.com/${gitRemote})` : ""}`;
