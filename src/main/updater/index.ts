/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2022 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

import { IpcEvents } from "@shared/IpcEvents";
import { ipcMain } from "electron";

import gitRemote from "~git-remote";

import { serializeErrors } from "./common";

export type UpdateData = Record<"hash" | "message" | "author", string>;

export interface Updater {
    getRepo(): Promise<string>;
    listUpdates(): Promise<UpdateData[]>;
    fetchUpdate(): Promise<boolean>;
    applyUpdate(): Promise<boolean>;
}

const updater: Updater = IS_UPDATER_DISABLED
    ? {
        getRepo: async () => `https://github.com/${gitRemote}`,
        listUpdates: async () => [],
        fetchUpdate: async () => false,
        applyUpdate: async () => false,
    }
    : require(IS_STANDALONE ? "./http" : "./git").default;

ipcMain.handle(IpcEvents.UPDATER_GET_REPO, serializeErrors(updater.getRepo));
ipcMain.handle(IpcEvents.UPDATER_LIST_UPDATES, serializeErrors(updater.listUpdates));
ipcMain.handle(IpcEvents.UPDATER_FETCH_UPDATE, serializeErrors(updater.fetchUpdate));
ipcMain.handle(IpcEvents.UPDATER_APPLY_UPDATE, serializeErrors(updater.applyUpdate));

export default updater;
