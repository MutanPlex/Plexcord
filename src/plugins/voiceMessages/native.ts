/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { app } from "electron";
import { readFile } from "fs/promises";
import { basename, normalize } from "path";

export async function readRecording(_: any, filePath: string) {
    filePath = normalize(filePath);
    const filename = basename(filePath);
    const userDataDir = normalize(app.getPath("userData") + "/");

    if (!filename.endsWith("recording.ogg") || !filePath.startsWith(userDataDir)) return null;

    try {
        const buf = await readFile(filePath);
        return new Uint8Array(buf.buffer);
    } catch {
        return null;
    }
}
