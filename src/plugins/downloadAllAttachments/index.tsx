/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2026 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { CloudDownloadIcon } from "@components/Icons";
import { Message, MessageAttachment } from "@plexcord/discord-types";
import { PcDevs } from "@utils/constants";
import { Logger } from "@utils/Logger";
import { pluralize } from "@utils/misc";
import definePlugin, { OptionType } from "@utils/types";
import { saveFile } from "@utils/web";
import { ChannelStore, showToast } from "@webpack/common";
import { zipSync } from "fflate";
import pLimit from "p-limit";

const logger = new Logger("DownloadAllAttachments");

const settings = definePluginSettings({
    downloadAllFileTypes: {
        label: () => t(plugin.downloadAllAttachments.option.downloadAllFileTypes.label),
        type: OptionType.BOOLEAN,
        description: () => t(plugin.downloadAllAttachments.option.downloadAllFileTypes.description),
        default: false
    }
});

const MAX_ZIP_BYTES = 1024 ** 3;

function uniqueFilenames(originals: string[]) {
    const used = new Set<string>();

    return originals.map(original => {
        const dot = original.lastIndexOf(".");
        const base = dot > 0 ? original.slice(0, dot) : original;
        const ext = dot > 0 ? original.slice(dot) : "";

        let name = original;
        for (let i = 1; used.has(name.toLowerCase()); i++) name = `${base}_${i}${ext}`;
        used.add(name.toLowerCase());
        return name;
    });
}

async function fetchAttachment(attachment: MessageAttachment) {
    const sources = [attachment.proxy_url];
    if (settings.store.downloadAllFileTypes) sources.push(attachment.url);
    if (!sources.some(Boolean)) throw new Error("Missing attachment URL");

    let res: Response | undefined;
    for (const source of sources) {
        if (!source) continue;
        res = await fetch(source).catch(() => undefined);
        if (res?.ok) break;
    }
    if (!res?.ok) throw new Error(res ? `HTTP ${res.status}` : "Network error");

    return new Uint8Array(await res.arrayBuffer());
}

async function downloadAll(message: Message) {
    const { id, attachments } = message;
    if (attachments.reduce((sum, a) => sum + a.size, 0) > MAX_ZIP_BYTES)
        return showToast({ text: t(plugin.downloadAllAttachments.toast.tooLarge), variant: "critical" });

    const names = uniqueFilenames(attachments.map(a => a.filename));
    const limit = pLimit(4);
    const results = await Promise.allSettled(attachments.map(a => limit(() => fetchAttachment(a))));

    const files: Record<string, Uint8Array> = {};
    results.forEach((result, i) => {
        if (result.status === "fulfilled") files[names[i]] = result.value;
        else logger.warn("Failed to download attachment:", result.reason);
    });

    const saved = Object.keys(files);
    const failed = attachments.length - saved.length;
    if (!saved.length)
        return showToast({ text: t(plugin.downloadAllAttachments.toast.noneDownloaded), variant: "critical" });

    saveFile(saved.length === 1
        ? new File([files[saved[0]] as BlobPart], saved[0])
        : new File([zipSync(files, { level: 0 }) as BlobPart], `attachments-${id}.zip`, { type: "application/zip" }));

    if (failed === 0)
        showToast({ text: t(plugin.downloadAllAttachments.toast.downloadedPluralizeSucceededAttachment, { pluralize_succeeded_attachment: pluralize(saved.length, "attachment") }), variant: "success" });
    else
        showToast({ text: t(plugin.downloadAllAttachments.toast.downloadedSucceededOfLength, { succeeded: saved.length, length: attachments.length, failed }), variant: "critical" });
}

export default definePlugin({
    name: "DownloadAllAttachments",
    description: () => t(plugin.downloadAllAttachments.description),
    tags: ["utility", "chat"],
    authors: [PcDevs.dhopcs, PcDevs.ShaunLWM, PcDevs.MutanPlex],
    dependencies: ["MessagePopoverAPI"],
    settings,
    messagePopoverButton: {
        icon: CloudDownloadIcon,
        render(message: Message) {
            if (!message.attachments.length) return null;
            return {
                label: t(plugin.downloadAllAttachments.button),
                icon: CloudDownloadIcon,
                message,
                channel: ChannelStore.getChannel(message.channel_id),
                onClick: () => downloadAll(message)
            };
        }
    }
});
