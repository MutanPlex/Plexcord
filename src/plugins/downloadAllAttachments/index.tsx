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
import { ChannelStore, showToast } from "@webpack/common";

const logger = new Logger("DownloadAllAttachments");

const settings = definePluginSettings({
    downloadAllFileTypes: {
        label: () => t(plugin.downloadAllAttachments.option.downloadAllFileTypes.label),
        type: OptionType.BOOLEAN,
        description: () => t(plugin.downloadAllAttachments.option.downloadAllFileTypes.description),
        default: false
    }
});

async function downloadAll(attachments: MessageAttachment[]) {
    const usedNames = new Map<string, number>();

    function uniqueName(original: string): string {
        const count = usedNames.get(original) ?? 0;
        usedNames.set(original, count + 1);
        if (count === 0) return original;
        const dot = original.lastIndexOf(".");
        return dot === -1
            ? `${original}_${count}`
            : `${original.slice(0, dot)}_${count}${original.slice(dot)}`;
    }

    const results = await Promise.allSettled(attachments.map(async attachment => {
        const filename = uniqueName(attachment.filename);
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

        const blob = await res.blob();
        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = filename;
        a.click();
        setTimeout(() => URL.revokeObjectURL(url), 10_000);
    }));

    const failed = results.filter(r => {
        if (r.status === "rejected") {
            logger.warn("Failed to download attachment:", r.reason);
            return true;
        }
        return false;
    }).length;

    const succeeded = attachments.length - failed;

    if (failed === 0)
        showToast({ text: t(plugin.downloadAllAttachments.toast.downloadedPluralizeSucceededAttachment, { pluralize_succeeded_attachment: pluralize(succeeded, "attachment") }), variant: "success" });
    else
        showToast({ text: t(plugin.downloadAllAttachments.toast.downloadedSucceededOfLength, { succeeded, length: attachments.length, failed }), variant: "critical" });
}

export default definePlugin({
    name: "DownloadAllAttachments",
    description: () => t(plugin.downloadAllAttachments.description),
    tags: ["utility", "chat"],
    authors: [PcDevs.dhopcs, PcDevs.MutanPlex],
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
                onClick: () => downloadAll(message.attachments)
            };
        }
    }
});
