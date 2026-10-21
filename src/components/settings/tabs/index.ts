/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import "./styles.css";

export * from "./BaseTab";
export { default as ChangelogTab } from "./changelog";
export { default as PatchHelperTab } from "./patchHelper";
export { default as PlexcordTab } from "./plexcord";
export { default as PluginsTab } from "./plugins";
export { openContributorModal } from "./plugins/ContributorModal";
export { openPluginModal } from "./plugins/PluginModal";
export { default as BackupAndRestoreTab } from "./sync/BackupAndRestoreTab";
export { default as CloudTab } from "./sync/CloudTab";
export { default as ThemesTab } from "./themes";
export { default as UpdaterTab } from "./updater";
