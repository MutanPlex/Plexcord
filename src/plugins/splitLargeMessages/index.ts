/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { MessageSendListener } from "@api/MessageEvents";
import { definePluginSettings } from "@api/Settings";
import type { Channel } from "@plexcord/discord-types";
import { PcDevs } from "@utils/constants";
import { copyWithToast, getCurrentChannel, insertTextIntoChatInputBox, sendMessage } from "@utils/discord";
import { Logger } from "@utils/Logger";
import { sleep } from "@utils/misc";
import definePlugin, { makeRange, OptionType } from "@utils/types";
import { ChannelStore, ComponentDispatch, PermissionsBits, PermissionStore, showToast, UserStore } from "@webpack/common";

import { splitMessage, type SplitMode } from "./splitMessage";

const MESSAGE_LIMIT = 2000;
const NITRO_MESSAGE_LIMIT = 4000;
const SLOWMODE_BUFFER_MS = 250;
const logger = new Logger("SplitLargeMessages");
const splitModes = new Set<SplitMode>(["characters", "spaces", "newlines"]);

const settings = definePluginSettings({

    sendDelay: {
        label: () => t(plugin.splitLargeMessages.option.sendDelay.label),
        description: () => t(plugin.splitLargeMessages.option.sendDelay.description),
        type: OptionType.SLIDER,
        markers: makeRange(0.5, 10, 0.5),
        default: 1,
        stickToMarkers: true,
    },
    splitMode: {
        label: () => t(plugin.splitLargeMessages.option.splitMode.label),
        type: OptionType.SELECT,
        description: () => t(plugin.splitLargeMessages.option.splitMode.description),
        options: [
            { value: "newlines", label: t(plugin.splitLargeMessages.text.newlines), default: true },
            { value: "spaces", label: t(plugin.splitLargeMessages.text.spaces) },
            { value: "characters", label: t(plugin.splitLargeMessages.text.strictCharacterLimit) },
        ],
    },
    splitInSlowmode: {
        label: () => t(plugin.splitLargeMessages.option.splitInSlowmode.label),
        description: () => t(plugin.splitLargeMessages.option.splitInSlowmode.description),
        type: OptionType.BOOLEAN,
        default: false,
    },
    slowmodeMax: {
        type: OptionType.SLIDER,
        label: () => t(plugin.splitLargeMessages.option.slowmodeMax.label),
        description: () => t(plugin.splitLargeMessages.option.slowmodeMax.description),
        markers: makeRange(1, 30, 1),
        default: 5,
        stickToMarkers: true,
    },
});

function getMessageLimit() {
    return UserStore.getCurrentUser()?.premiumType === 2 ? NITRO_MESSAGE_LIMIT : MESSAGE_LIMIT;
}

function getSplitMode(value: unknown): SplitMode {
    return typeof value === "string" && splitModes.has(value as SplitMode)
        ? value as SplitMode
        : "newlines";
}

function canBypassSlowmode(channel: Channel) {
    return PermissionStore.can(PermissionsBits.MANAGE_MESSAGES, channel)
        || PermissionStore.can(PermissionsBits.MANAGE_CHANNELS, channel);
}

function getSendDelay(channel: Channel) {
    const configuredDelay = settings.store.sendDelay * 1000;
    const slowmodeDelay = channel.rateLimitPerUser * 1000;

    return canBypassSlowmode(channel)
        ? configuredDelay
        : Math.max(configuredDelay, slowmodeDelay + SLOWMODE_BUFFER_MS);
}

function canSplitInChannel(channel: Channel | undefined) {
    if (!channel) return false;
    if (!channel.rateLimitPerUser || canBypassSlowmode(channel)) return true;

    return settings.store.splitInSlowmode
        && channel.rateLimitPerUser <= settings.store.slowmodeMax;
}

async function sendChunks(channelId: string, chunks: string[], delay: number) {
    let sent = 0;

    try {
        for (const [index, chunk] of chunks.entries()) {
            await sendMessage(channelId, { content: chunk }, true);
            sent++;

            if (index < chunks.length - 1) await sleep(delay);
        }
    } catch (error) {
        logger.error(`Failed after sending ${sent}/${chunks.length} message parts.`, error);
        return sent;
    }

    return sent;
}

function restoreUnsentContent(channelId: string, chunks: string[], sent: number) {
    const unsentContent = chunks.slice(sent).join("");
    if (!unsentContent) return;

    if (getCurrentChannel()?.id === channelId) {
        insertTextIntoChatInputBox(unsentContent);
    } else {
        copyWithToast(unsentContent, t(plugin.splitLargeMessages.toast.unsentCopied));
    }
}

const listener: MessageSendListener = async (channelId, message) => {
    const limit = getMessageLimit();
    if (message.content.length <= limit) return;

    const channel = ChannelStore.getChannel(channelId);
    if (!canSplitInChannel(channel)) {
        showToast({ text: t(plugin.splitLargeMessages.toast.cannotSplitThisMessage), variant: "critical" });
        return { cancel: true };
    }

    const chunks = splitMessage(message.content, limit, getSplitMode(settings.store.splitMode));
    ComponentDispatch.dispatchToLastSubscribed("CLEAR_TEXT");

    const sent = await sendChunks(channelId, chunks, getSendDelay(channel));
    if (sent !== chunks.length) {
        restoreUnsentContent(channelId, chunks, sent);
        showToast({ text: t(plugin.splitLargeMessages.toast.onlySentLengthMessage, { sent, length: chunks.length }), variant: "critical" });
    }

    return { cancel: true };
};

export default definePlugin({
    name: "SplitLargeMessages",
    description: () => t(plugin.splitLargeMessages.description),
    dependencies: ["MessageEventsAPI"],
    tags: ["chat", "utility"],
    authors: [PcDevs.Reycko, PcDevs.justjxke],
    settings,

    patches: [
        {
            find: 'type:"MESSAGE_LENGTH_UPSELL"', // bypass message length check
            replacement: {
                match: /if\(\i.length>\i/,
                replace: "if(false",
            },
        },
        {
            find: ".onHideAutocomplete?", // disable file conversion
            replacement: {
                match: /(?<=getData\(\i\.type\);)if\(\i.length>\i\)/,
                replace: "if(false)",
            },
        },
    ],
});
