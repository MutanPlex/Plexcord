/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { showNotification } from "@api/Notifications";
import { definePluginSettings } from "@api/Settings";
import { PcDevs } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";
import { saveFile } from "@utils/web";
import { ChannelStore, Menu, MessageStore, SelectedChannelStore, UserStore } from "@webpack/common";
import { Message } from "discord-types/general";

const settings = definePluginSettings({
    maxMessages: {
        type: OptionType.NUMBER,
        description: "Maximum number of messages to export (0 = unlimited)",
        default: 1000
    },
    includeAttachments: {
        type: OptionType.BOOLEAN,
        description: "Include attachment information in exports",
        default: true
    },
    includeEmbeds: {
        type: OptionType.BOOLEAN,
        description: "Include embed information in exports",
        default: true
    },
    includeReactions: {
        type: OptionType.BOOLEAN,
        description: "Include reaction information in exports",
        default: true
    },
    includeComponents: {
        type: OptionType.BOOLEAN,
        description: "Include component information in exports",
        default: false
    }
});

function sanitizeFilename(filename: string): string {
    return filename
        .replace(/[<>:"/\\|?*]/g, "_")
        .replace(/[\u{1F600}-\u{1F64F}]|[\u{1F300}-\u{1F5FF}]|[\u{1F680}-\u{1F6FF}]|[\u{1F1E0}-\u{1F1FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]/gu, "")
        .replace(/[^\w\s\-_.]/g, "_")
        .replace(/\s+/g, "_")
        .replace(/_+/g, "_")
        .replace(/^_+|_+$/g, "")
        .replace(/\.+$/, "")
        .substring(0, 200)
        || "exported_file";
}

// Cache for formatted timestamps to avoid repeated parsing
const timestampCache = new Map<string, string>();

function formatTimestamp(timestamp: string): string {
    if (timestampCache.has(timestamp)) {
        return timestampCache.get(timestamp)!;
    }
    const formatted = new Date(timestamp).toLocaleString();
    timestampCache.set(timestamp, formatted);
    return formatted;
}

function formatMessage(message: Message): string {
    try {
        const { author } = message;
        if (!author) return "Invalid message - no author";

        const parts: string[] = [];
        const timestamp = formatTimestamp(message.timestamp.toString());
        const isBot = author.bot ? " [BOT]" : "";

        // Main message line
        let userDisplay = author.username || "Unknown User";
        if (author.discriminator && author.discriminator !== "0") {
            userDisplay += `#${author.discriminator}`;
        }
        parts.push(`[${timestamp}] ${userDisplay}${isBot}: ${message.content || ""}`);

        // Bot embed message indicator
        if (!message.content && message.embeds?.length > 0 && author.bot) {
            const embed = message.embeds[0];
            if (embed.rawTitle || embed.rawDescription) {
                parts[0] += "[Bot Embed Message]";
            }
        }

        // Attachments (if enabled)
        if (settings.store.includeAttachments && message.attachments?.length > 0) {
            parts.push("  Attachments:");
            parts.push(...message.attachments.map(attachment =>
                `    - ${attachment.filename || "unknown"} (${attachment.url || "no url"})`
            ));
        }

        // Embeds (if enabled)
        if (settings.store.includeEmbeds && message.embeds?.length > 0) {
            parts.push("  Embeds:");
            message.embeds.forEach((embed, index) => {
                const embedParts = [`    Embed ${index + 1}:`];

                if (embed.rawTitle) embedParts.push(`      Title: ${embed.rawTitle}`);
                if (embed.rawDescription) embedParts.push(`      Description: ${embed.rawDescription}`);
                if (embed.url) embedParts.push(`      URL: ${embed.url}`);

                const embedAny = embed as any;
                if (embedAny.footer?.text) embedParts.push(`      Footer: ${embedAny.footer.text}`);
                if (embedAny.author?.name) embedParts.push(`      Author: ${embedAny.author.name}`);

                if (embedAny.fields?.length > 0) {
                    embedParts.push("      Fields:");
                    embedParts.push(...embedAny.fields.map((field: any) =>
                        `        ${field.name}: ${field.value}`
                    ));
                }

                parts.push(...embedParts);
            });
        }

        // Components (if enabled)
        const messageAny = message as any;
        if (settings.store.includeComponents && messageAny.components?.length > 0) {
            parts.push("  Components:");
            parts.push(...messageAny.components.map((_: any, index: number) =>
                `    Component ${index + 1}: [Interactive Element]`
            ));
        }

        // Reactions (if enabled)
        if (settings.store.includeReactions && messageAny.reactions?.length > 0) {
            const reactionTexts = messageAny.reactions.map((reaction: any) => {
                const emoji = reaction.emoji?.name || reaction.emoji?.id || "?";
                return `${emoji}(${reaction.count})`;
            });
            parts.push(`  Reactions: ${reactionTexts.join(" ")}`);
        }

        return parts.join("\n");
    } catch (error) {
        return `[Error formatting message: ${(error as Error).message || "Unknown error"}]`;
    }
}

async function exportMessage(message: Message) {
    const timestamp = new Date(message.timestamp.toString()).toISOString().split("T")[0];
    const filename = `message-${message.id}-${timestamp}.txt`;

    const content = formatMessage(message);

    try {
        await saveContent(content, filename, 1);
    } catch (error) {
        showNotification({
            title: "Export Messages",
            body: "Failed to export message",
            icon: "https://discord.com/assets/4f584fe7b12fcf02.svg"
        });
    }
}

// Common function to handle message processing and export
async function processAndExportMessages(
    channelId: string,
    filterFn?: (message: Message) => boolean,
    titlePrefix?: string,
    filenamePrefix?: string,
    userOrChannel?: { username?: string; name?: string; }
) {
    try {
        const channel = ChannelStore.getChannel(channelId);
        if (!channel) {
            throw new Error("Channel not found");
        }

        const messageStore = MessageStore.getMessages(channelId);
        if (!messageStore || !messageStore._array) {
            throw new Error("Could not access messages for this channel");
        }

        const allMessages = messageStore._array as Message[];

        // Filter and sort messages efficiently
        const messages = filterFn ? allMessages.filter(filterFn) : allMessages;

        // Sort by timestamp (convert once and cache)
        messages.sort((a, b) => {
            const timeA = new Date(a.timestamp.toString()).getTime();
            const timeB = new Date(b.timestamp.toString()).getTime();
            return timeA - timeB;
        });

        if (messages.length === 0) {
            const noMessagesText = filterFn ?
                "No messages found from this user in this channel" :
                "No messages found in this channel";

            showNotification({
                title: "Export Messages",
                body: noMessagesText,
                icon: "https://discord.com/assets/c263a344ff649ead.svg"
            });
            return;
        }

        const { maxMessages } = settings.store;
        const messagesToExport = maxMessages > 0 ? messages.slice(-maxMessages) : messages;

        // Generate filename and content
        const timestamp = new Date().toISOString().split("T")[0];
        const displayName = userOrChannel?.username || userOrChannel?.name || "Unknown";
        const cleanDisplayName = sanitizeFilename(displayName);
        const cleanChannelName = sanitizeFilename(channel.name || "DM");

        const filename = filenamePrefix
            ? `${filenamePrefix}-${cleanDisplayName}-${cleanChannelName}-${timestamp}.txt`
            : `channel-${cleanChannelName}-${timestamp}.txt`;

        // Build content efficiently using array join
        const headerParts = [
            `${titlePrefix || "Messages from"} ${displayName} in ${channel.name || "Direct Messages"}`,
            `Exported on: ${new Date().toLocaleString()}`,
            `Total messages: ${messagesToExport.length}`,
            "=" + "=".repeat(50),
            ""
        ];

        const contentParts = [
            headerParts.join("\n"),
            ...messagesToExport.map(message => formatMessage(message))
        ];

        const content = contentParts.join("\n\n");
        await saveContent(content, filename, messagesToExport.length);

    } catch (error) {
        console.error("Export messages error:", error);
        showNotification({
            title: "Export Messages",
            body: `Failed to export messages: ${(error as Error).message || "Unknown error"}`,
            icon: "https://discord.com/assets/4f584fe7b12fcf02.svg"
        });
    }
}

async function exportUserMessages(userId: string, channelId: string) {
    const user = UserStore.getUser(userId);
    if (!user) {
        showNotification({
            title: "Export Messages",
            body: "User not found",
            icon: "https://discord.com/assets/4f584fe7b12fcf02.svg"
        });
        return;
    }

    await processAndExportMessages(
        channelId,
        (msg: Message) => msg.author?.id === userId,
        "Messages from",
        "messages",
        user
    );
}

async function exportChannelMessages(channelId: string) {
    const channel = ChannelStore.getChannel(channelId);
    await processAndExportMessages(
        channelId,
        undefined,
        "Messages from",
        undefined,
        channel
    );
}

// Helper function to show export completion notification
function showExportSuccessNotification(filename: string, messageCount?: number) {
    const countText = messageCount ? ` (${messageCount} messages)` : "";
    const displayName = filename.split("\\").pop() || filename.split("/").pop() || filename;

    showNotification({
        title: "Export Complete",
        body: `File ${IS_DISCORD_DESKTOP ? "saved" : "downloaded"}: ${displayName}${countText}`,
        icon: "https://discord.com/assets/43b7ead1fb91b731.svg"
    });
}

// Helper function to save file content
async function saveFileContent(content: string, filename: string): Promise<string | null> {
    if (IS_DISCORD_DESKTOP) {
        const data = new TextEncoder().encode(content);
        return await DiscordNative.fileManager.saveWithDialog(data, filename);
    } else {
        const file = new File([content], filename, { type: "text/plain" });
        saveFile(file);
        return filename;
    }
}

async function saveContent(content: string, filename: string, messageCount?: number) {
    try {
        console.log("Attempting to save file:", filename);

        const result = await saveFileContent(content, filename);
        if (result) {
            showExportSuccessNotification(result, messageCount);
        }
    } catch (error) {
        console.error("Error saving file:", error);
        console.error("Problematic filename:", filename);

        const errorMessage = (error as Error).message || "";

        if (errorMessage.includes("cancelled") || errorMessage.includes("abort")) {
            console.log("User cancelled, not trying fallback");
            return;
        }

        if (errorMessage.includes("invalid") || errorMessage.includes("character")) {
            const fallbackFilename = `export-${Date.now()}.txt`;
            console.log("Trying fallback filename due to invalid characters:", fallbackFilename);

            try {
                const result = await saveFileContent(content, fallbackFilename);
                if (result) {
                    showExportSuccessNotification(result, messageCount);
                }
            } catch (fallbackError) {
                console.error("Fallback save also failed:", fallbackError);
                throw fallbackError;
            }
        } else {
            throw error;
        }
    }
}

// SVG Icon constants for better performance and consistency
const ExportIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
    </svg>
);

const UserExportIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z" />
    </svg>
);

const ChannelExportIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6Z" />
    </svg>
);

const messageContextMenuPatch = (children: Array<React.ReactElement<any> | null>, props: { message: Message; }) => {
    const { message } = props;

    if (!message) return;

    const currentChannelId = SelectedChannelStore.getChannelId();

    children.push(
        <Menu.MenuGroup>
            <Menu.MenuItem
                id="export-single-message"
                label="Export This Message"
                icon={ExportIcon}
                action={() => exportMessage(message)}
            />
            <Menu.MenuItem
                id="export-user-messages"
                label={`Export All Messages from ${message.author?.username || "User"}`}
                icon={UserExportIcon}
                action={() => exportUserMessages(message.author?.id, currentChannelId)}
            />
            <Menu.MenuItem
                id="export-channel-messages"
                label="Export All Channel Messages"
                icon={ChannelExportIcon}
                action={() => exportChannelMessages(currentChannelId)}
            />
        </Menu.MenuGroup>
    );
};

const userContextMenuPatch = (children: Array<React.ReactElement<any> | null>, props: { user?: { id: string; username: string; }; }) => {
    const { user } = props;

    if (!user) return;

    const currentChannelId = SelectedChannelStore.getChannelId();

    if (!currentChannelId) return;

    children.push(
        <Menu.MenuItem
            id="export-user-messages-from-context"
            label={`Export All Messages from ${user.username}`}
            icon={ExportIcon}
            action={() => exportUserMessages(user.id, currentChannelId)}
        />
    );
};

const channelContextMenuPatch = (children: Array<React.ReactElement<any> | null>, props: { channel?: { id: string; name?: string; type?: number; }; }) => {
    const { channel } = props;

    if (!channel) return;

    children.push(
        <Menu.MenuItem
            id="export-channel-messages-from-context"
            label="Export All Channel Messages"
            icon={ExportIcon}
            action={() => exportChannelMessages(channel.id)}
        />
    );
};

export default definePlugin({
    name: "ExportMessages",
    description: "Allows you to export messages to files - single message, all messages from a user, or all channel messages",
    authors: [PcDevs.MutanPlex],
    settings,
    contextMenus: {
        "message": messageContextMenuPatch,
        "user-context": userContextMenuPatch,
        "channel-context": channelContextMenuPatch
    }
});
