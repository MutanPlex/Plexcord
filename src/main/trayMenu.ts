/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2026 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { IpcEvents } from "@shared/IpcEvents";
import { BrowserWindow, ipcMain, Menu, MenuItemConstructorOptions, shell } from "electron";

import { SETTINGS_DIR } from "./utils/constants";

let cachedUpdateAvailable = false;

ipcMain.on(IpcEvents.SET_TRAY_UPDATE_STATE, (_, available: boolean) => {
    cachedUpdateAvailable = available;
});

function getMainWindow(): BrowserWindow | undefined {
    return BrowserWindow.getFocusedWindow() ?? BrowserWindow.getAllWindows()[0];
}

function sendToRenderer(event: IpcEvents): void {
    getMainWindow()?.webContents.send(event);
}

function findInsertIndex(template: MenuItemConstructorOptions[]): number {
    const openIndex = template.findIndex(item => {
        const label = item.label?.toLowerCase() ?? "";
        return label.includes("open") || label.includes("show");
    });
    return openIndex !== -1 ? openIndex + 1 : 0;
}

function isTrayMenu(template: MenuItemConstructorOptions[]): boolean {
    if (!template.length) return false;

    const hasOpenOrShow = template.some(item => {
        const label = item.label?.toLowerCase() ?? "";
        return label.includes("open") || label.includes("show");
    });

    const hasQuit = template.some(item =>
        item.label?.toLowerCase().includes("quit") || item.role === "quit"
    );

    const isNotAppMenu = !template.some(item =>
        item.label === "&File" || item.label === "File" ||
        item.label === "&Edit" || item.label === "Edit"
    );

    return hasOpenOrShow && hasQuit && isNotAppMenu;
}

function createPlexcordMenuItems(): MenuItemConstructorOptions[] {
    return [
        {
            label: "Plexcord",
            submenu: [
                {
                    label: cachedUpdateAvailable ? "Update Plexcord" : "Check for Updates",
                    click: () => sendToRenderer(IpcEvents.TRAY_CHECK_UPDATES)
                },
                {
                    label: "Repair Plexcord",
                    click: () => sendToRenderer(IpcEvents.TRAY_REPAIR_PLEXCORD)
                },
                { type: "separator" },
                {
                    label: "Open Settings Folder",
                    click: () => shell.openPath(SETTINGS_DIR)
                }
            ]
        },
        { type: "separator" }
    ];
}

export function patchTrayMenu(): void {
    const originalBuildFromTemplate = Menu.buildFromTemplate;

    Menu.buildFromTemplate = function (template: MenuItemConstructorOptions[]) {
        if (isTrayMenu(template)) {
            const insertIndex = findInsertIndex(template);
            const plexcordItems = createPlexcordMenuItems();
            template.splice(insertIndex, 0, ...plexcordItems);
        }

        return originalBuildFromTemplate.call(this, template);
    };
}
