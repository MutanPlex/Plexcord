/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2026 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { MessageAttachment } from "@plexcord/discord-types";

const allowedHosts = new Set([
    "cdn.discordapp.com",
    "images-ext-1.discordapp.net",
    "images-ext-2.discordapp.net",
    "media.discordapp.net"
]);

// Discord has very strict CORS rules for which types of assets can be fetched from where (CDN/Media proxy),
// and most binary file types are prohibited by both. This function serves as a simple bypass.
export async function fetchAttachment(_: unknown, attachment: MessageAttachment) {
    const { content_type, filename } = attachment;
    const url = URL.parse(attachment.url);
    if (!url || !allowedHosts.has(url.hostname)) throw new Error("Invalid URL");

    const res = await fetch(url, { headers: { Accept: "*/*" } });
    if (!res.ok) throw new Error("Server error");

    const blob = await res.blob();
    const type = blob.type || content_type || "application/octet-stream";
    const data = await blob.arrayBuffer();

    return { type, data, filename };
}
