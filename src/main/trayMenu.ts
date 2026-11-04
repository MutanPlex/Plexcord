/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2026 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { gitHash } from "@shared/plexcordUserAgent";
import { app, BaseWindow, BrowserWindow, dialog, Menu, MenuItemConstructorOptions, shell } from "electron";
import aboutHtml from "file://about.html?minify";

import updater from "./updater";
import { SETTINGS_DIR, THEMES_DIR } from "./utils/constants";
import { components, t } from "./utils/i18n";

const isTrayMenu = (template: MenuItemConstructorOptions[]) =>
    template.at(-1)?.role === "quit";

let aboutWindow: BrowserWindow | null = null;

function openAboutWindow() {
    if (aboutWindow) {
        aboutWindow.focus();
        return;
    }

    aboutWindow = new BrowserWindow({
        center: true,
        autoHideMenuBar: true,
        height: 525,
        width: 900
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
        .replaceAll("{{GIT_HASH}}", gitHash); // change to gitHashShort if/when its added
    const base64Html = Buffer.from(aboutParams).toString("base64");
    aboutWindow.loadURL(`data:text/html;base64,${base64Html}`);
    aboutWindow.on("closed", () => {
        aboutWindow = null;
    });
}

const notify = (window: BaseWindow | undefined, title: string, message: string) =>
    window && !window.isDestroyed()
        ? dialog.showMessageBox(window, { title, message })
        : dialog.showMessageBox({ title, message });

let isUpdating = false;

function createPlexcordMenuItems(): MenuItemConstructorOptions[] {
    return [
        { type: "separator" },
        {
            id: "plexcord",
            label: "Plexcord",
            submenu: [
                {
                    label: t(components.tray.aboutPlexcord, "About Plexcord"),
                    click: () => openAboutWindow()
                },
                {
                    label: t(components.tray.updatePlexcord, "Update Plexcord"),
                    visible: !IS_UPDATER_DISABLED,
                    async click(_item, window) {
                        if (isUpdating) return;
                        isUpdating = true;

                        try {
                            const updateAvailable = await updater.fetchUpdate();
                            if (!updateAvailable) {
                                return notify(window, t(components.tray.noUpdateTitle, "No Update Available"), t(components.tray.noUpdateBody, "You are already using the latest version of Plexcord."));
                            }

                            const result = await updater.applyUpdate();
                            if (!result) {
                                return notify(window, t(components.tray.updateFailedTitle, "Update Failed"), t(components.tray.updateFailedBody, "Failed to apply the update for Plexcord."));
                            }

                            await notify(window, t(components.tray.updateSuccessTitle, "Update Successful"), t(components.tray.updateSuccessBody, "Now relaunching Plexcord to apply the update."));
                            app.relaunch();
                            app.exit();
                        } catch (e) {
                            notify(window, t(components.tray.updateErrorTitle, "Update Error"), t(components.tray.updateErrorBody, { error: String(e) }, "An error occurred while updating Plexcord.\n\n{{error}}"));
                        }
                    }
                },
                { type: "separator" },
                {
                    label: t(components.tray.openSettingsFolder, "Open Settings Folder"),
                    click: () => shell.openPath(SETTINGS_DIR)
                },
                {
                    label: t(components.tray.openThemesFolder, "Open Themes Folder"),
                    click: () => shell.openPath(THEMES_DIR)
                }
            ]
        }
    ];
}

export function patchTrayMenu(): void {
    const originalBuildFromTemplate = Menu.buildFromTemplate;

    Menu.buildFromTemplate = function (template: MenuItemConstructorOptions[]) {
        if (isTrayMenu(template) && !template.some(item => item.id === "plexcord")) {
            const separatorIndex = template.findIndex(item => item.type === "separator");
            const insertIndex = separatorIndex !== -1 ? separatorIndex : template.length - 1;
            template.splice(insertIndex, 0, ...createPlexcordMenuItems());
        }

        return originalBuildFromTemplate.call(this, template);
    };
}
