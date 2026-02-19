/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { access, mkdir } from "fs/promises";
import path from "path";

export async function exists(filename: string) {
    try {
        await access(filename);
        return true;
    } catch (error) {
        return false;
    }
}

export async function ensureDirectoryExists(cacheDir: string) {
    if (!await exists(cacheDir))
        await mkdir(cacheDir);
}

export function getAttachmentIdFromFilename(filename: string) {
    return path.parse(filename).name;
}

export const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
