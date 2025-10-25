/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { Format } from "@plugins/gifCollections/types";

import { getUrlExtension } from "./getUrlExtension";

const videoExtensions = ["mp4", "ogg", "webm", "avi", "wmv", "flv", "mov", "mkv", "m4v"];

export function getFormat(url: string) {
    const extension = getUrlExtension(url);
    const isTenor = url.startsWith("https://media.tenor.com/") || url.startsWith("https://media.tenor.co/");
    return isTenor || extension == null || videoExtensions.includes(extension) ? Format.VIDEO : Format.IMAGE;
}
