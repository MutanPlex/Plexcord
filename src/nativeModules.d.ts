/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

/// <reference types="standalone-electron-types"/>

declare module "~pluginNatives" {
    const pluginNatives: Record<string, Record<string, (event: Electron.IpcMainInvokeEvent, ...args: unknown[]) => unknown>>;
    export default pluginNatives;
}
