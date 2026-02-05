/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2026 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { IpcEvents } from "@shared/IpcEvents";
import { gitHashShort } from "@shared/plexcordUserAgent";
import { BrowserWindow, ipcMain, Menu, MenuItemConstructorOptions, shell } from "electron";
import aboutHtml from "file://about.html?minify";

import { SETTINGS_DIR, THEMES_DIR } from "./utils/constants";

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

let aboutWindow: BrowserWindow | null = null;

function openAboutWindow() {
    if (aboutWindow) {
        aboutWindow.focus();
        return;
    }

    const height = 750;
    const width = height * (4 / 3);

    aboutWindow = new BrowserWindow({
        center: true,
        autoHideMenuBar: true,
        height,
        width
    });

    aboutWindow.webContents.setWindowOpenHandler(({ url }) => {
        shell.openExternal(url);
        return { action: "deny" };
    });

    aboutWindow.webContents.on("will-navigate", (e, url) => {
        e.preventDefault();
        shell.openExternal(url);
    });

    const aboutParams = aboutHtml
        .replaceAll("{{VERSION}}", VERSION)
        .replaceAll("{{GIT_HASH}}", gitHashShort);
    const base64Html = Buffer.from(aboutParams).toString("base64");
    aboutWindow.loadURL(`data:text/html;base64,${base64Html}`);
    aboutWindow.on("closed", () => {
        aboutWindow = null;
    });
}

function createPlexcordMenuItems(): MenuItemConstructorOptions[] {
    return [
        {
            label: "Plexcord",
            submenu: [
                {
                    label: "About Plexcord",
                    click: () => openAboutWindow()
                },
                {
                    label: cachedUpdateAvailable ? "Update Plexcord" : "Check for Updates",
                    click: () => sendToRenderer(IpcEvents.TRAY_CHECK_UPDATES)
                },
                {
                    label: "Repair Plexcord",
                    click: () => sendToRenderer(IpcEvents.TRAY_REPAIR)
                },
                { type: "separator" },
                {
                    label: "Open Settings Folder",
                    click: () => shell.openPath(SETTINGS_DIR)
                },
                {
                    label: "Open Themes Folder",
                    click: () => shell.openPath(THEMES_DIR)
                }
            ]
        },
        { type: "separator" }
    ];
}

export function patchTrayMenu(): void {
    const originalBuildFromTemplate = Menu.buildFromTemplate;

    Menu.buildFromTemplate = function (template: MenuItemConstructorOptions[]) {
        const alreadyPatched = template.some(item => item.label === "Plexcord");
        if (isTrayMenu(template) && !alreadyPatched) {
            const insertIndex = findInsertIndex(template);
            const plexcordItems = createPlexcordMenuItems();
            template.splice(insertIndex, 0, ...plexcordItems);
        }

        return originalBuildFromTemplate.call(this, template);
    };
}
