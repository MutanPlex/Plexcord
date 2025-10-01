/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { t, tJsx } from "@api/i18n";
import { showNotification } from "@api/Notifications";
import { definePluginSettings } from "@api/Settings";
import { Message } from "@plexcord/discord-types";
import { PcDevs } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";
import { saveFile } from "@utils/web";
import { ChannelStore, Menu, MessageStore, SelectedChannelStore, UserStore } from "@webpack/common";

const settings = definePluginSettings({
    maxMessages: {
        get label() {
            return t("plugin.exportMessages.option.maxMessages.label");
        },
        get description() {
            return t("plugin.exportMessages.option.maxMessages.description");
        },
        type: OptionType.NUMBER,
        default: 1000
    },
    includeAttachments: {
        get label() {
            return t("plugin.exportMessages.option.includeAttachments.label");
        },
        get description() {
            return t("plugin.exportMessages.option.includeAttachments.description");
        },
        type: OptionType.BOOLEAN,
        default: true
    },
    includeEmbeds: {
        get label() {
            return t("plugin.exportMessages.option.includeEmbeds.label");
        },
        get description() {
            return t("plugin.exportMessages.option.includeEmbeds.description");
        },
        type: OptionType.BOOLEAN,
        default: true
    },
    includeReactions: {
        get label() {
            return t("plugin.exportMessages.option.includeReactions.label");
        },
        get description() {
            return t("plugin.exportMessages.option.includeReactions.description");
        },
        type: OptionType.BOOLEAN,
        default: true
    },
    includeComponents: {
        get label() {
            return t("plugin.exportMessages.option.includeComponents.label");
        },
        get description() {
            return t("plugin.exportMessages.option.includeComponents.description");
        },
        type: OptionType.BOOLEAN,
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
        if (!author) return t("plugin.exportMessages.message.invalid");

        const parts: string[] = [];
        const timestamp = formatTimestamp(message.timestamp.toString());
        const isBot = author.bot ? " [BOT]" : "";

        // Main message line
        let userDisplay = author.username || t("plugin.exportMessages.message.unknownUser");
        if (author.discriminator && author.discriminator !== "0") {
            userDisplay += `#${author.discriminator}`;
        }
        parts.push(`[${timestamp}] ${userDisplay}${isBot}: ${message.content || ""}`);

        // Bot embed message indicator
        if (!message.content && message.embeds?.length > 0 && author.bot) {
            const embed = message.embeds[0];
            if (embed.rawTitle || embed.rawDescription) {
                parts[0] += `${t("plugin.exportMessages.message.botEmbed")}`;
            }
        }

        // Attachments (if enabled)
        if (settings.store.includeAttachments && message.attachments?.length > 0) {
            parts.push(`  ${t("plugin.exportMessages.message.attachments")}:`);
            parts.push(...message.attachments.map(attachment =>
                `    - ${attachment.filename || t("plugin.exportMessages.message.unknown")} (${attachment.url || t("plugin.exportMessages.message.noUrl")})`
            ));
        }

        // Embeds (if enabled)
        if (settings.store.includeEmbeds && message.embeds?.length > 0) {
            parts.push(`  ${t("plugin.exportMessages.message.embeds")}:`);
            message.embeds.forEach((embed, index) => {
                const embedParts = [`    ${t("plugin.exportMessages.message.embeds")} ${index + 1}:`];

                if (embed.rawTitle) embedParts.push(`      ${t("plugin.exportMessages.message.title")}: ${embed.rawTitle}`);
                if (embed.rawDescription) embedParts.push(`      ${t("plugin.exportMessages.message.description")}: ${embed.rawDescription}`);
                if (embed.url) embedParts.push(`      ${t("plugin.exportMessages.message.url")}: ${embed.url}`);

                const embedAny = embed as any;
                if (embedAny.footer?.text) embedParts.push(`      ${t("plugin.exportMessages.message.footer")}: ${embedAny.footer.text}`);
                if (embedAny.author?.name) embedParts.push(`      ${t("plugin.exportMessages.message.author")}: ${embedAny.author.name}`);

                if (embedAny.fields?.length > 0) {
                    embedParts.push(`      ${t("plugin.exportMessages.message.fields")}:`);
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
            parts.push(`  ${t("plugin.exportMessages.message.components")}:`);
            parts.push(...messageAny.components.map((_: any, index: number) =>
                `    ${t("plugin.exportMessages.message.component")} ${index + 1}: [${t("plugin.exportMessages.message.interactiveElement")}]`
            ));
        }

        // Reactions (if enabled)
        if (settings.store.includeReactions && messageAny.reactions?.length > 0) {
            const reactionTexts = messageAny.reactions.map((reaction: any) => {
                const emoji = reaction.emoji?.name || reaction.emoji?.id || "?";
                return `${emoji}(${reaction.count})`;
            });
            parts.push(`  ${t("plugin.exportMessages.message.reactions")}: ${reactionTexts.join(" ")}`);
        }

        return parts.join("\n");
    } catch (error) {
        return `[${t("plugin.exportMessages.message.errorFormatting")}: ${(error as Error).message || t("plugin.exportMessages.message.unknownError")}]`;
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
            title: t("plugin.exportMessages.toast.export.title"),
            body: t("plugin.exportMessages.toast.export.body"),
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
                t("plugin.exportMessages.toast.noMessages.notFoundUser") :
                t("plugin.exportMessages.toast.noMessages.notFoundChannel");

            showNotification({
                title: t("plugin.exportMessages.toast.noMessages.title"),
                body: noMessagesText,
                icon: "https://discord.com/assets/c263a344ff649ead.svg"
            });
            return;
        }

        const { maxMessages } = settings.store;
        const messagesToExport = maxMessages > 0 ? messages.slice(-maxMessages) : messages;

        // Generate filename and content
        const timestamp = new Date().toISOString().split("T")[0];
        const displayName = userOrChannel?.username || userOrChannel?.name || t("plugin.exportMessages.message.unknown");
        const cleanDisplayName = sanitizeFilename(displayName);
        const cleanChannelName = sanitizeFilename(channel.name || "DM");

        const filename = filenamePrefix
            ? `${filenamePrefix}-${cleanDisplayName}-${cleanChannelName}-${timestamp}.txt`
            : `channel-${cleanChannelName}-${timestamp}.txt`;

        // Build content efficiently using array join
        const headerParts = [
            tJsx("plugin.exportMessages.message.header", {
                titlePrefix: titlePrefix || t("plugin.exportMessages.message.from"),
                displayName,
                channelName: channel.name || t("plugin.exportMessages.message.direct")
            }),
            `${t("plugin.exportMessages.message.exported")}: ${new Date().toLocaleString()}`,
            `${t("plugin.exportMessages.message.total")}: ${messagesToExport.length}`,
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
            title: t("plugin.exportMessages.toast.failed.title"),
            body: `${t("plugin.exportMessages.toast.failed.body")}: ${(error as Error).message || "Unknown error"}`,
            icon: "https://discord.com/assets/4f584fe7b12fcf02.svg"
        });
    }
}

async function exportUserMessages(userId: string, channelId: string) {
    const user = UserStore.getUser(userId);
    if (!user) {
        showNotification({
            title: t("plugin.exportMessages.toast.userNotFound.title"),
            body: t("plugin.exportMessages.toast.userNotFound.body"),
            icon: "https://discord.com/assets/4f584fe7b12fcf02.svg"
        });
        return;
    }

    await processAndExportMessages(
        channelId,
        (msg: Message) => msg.author?.id === userId,
        t("plugin.exportMessages.message.from"),
        "messages",
        user
    );
}

async function exportChannelMessages(channelId: string) {
    const channel = ChannelStore.getChannel(channelId);
    await processAndExportMessages(
        channelId,
        undefined,
        t("plugin.exportMessages.message.from"),
        undefined,
        channel
    );
}

// Helper function to show export completion notification
function showExportSuccessNotification(filename: string, messageCount?: number) {
    const countText = messageCount ? ` (${messageCount} ${t("plugin.exportMessages.toast.complete.messages")})` : "";
    const displayName = filename.split("\\").pop() || filename.split("/").pop() || filename;

    showNotification({
        title: t("plugin.exportMessages.toast.complete.title"),
        body: `${IS_DISCORD_DESKTOP ? t("plugin.exportMessages.toast.complete.saved") : t("plugin.exportMessages.toast.complete.downloaded")}: ${displayName}${countText}`,
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
                label={t("plugin.exportMessages.context.exportMessage")}
                icon={ExportIcon}
                action={() => exportMessage(message)}
            />
            <Menu.MenuItem
                id="export-user-messages"
                label={t("plugin.exportMessages.context.exportAll", { user: message.author?.username || t("plugin.exportMessages.context.user") })}
                icon={UserExportIcon}
                action={() => exportUserMessages(message.author?.id, currentChannelId)}
            />
            <Menu.MenuItem
                id="export-channel-messages"
                label={t("plugin.exportMessages.context.exportAllChannel")}
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
            label={t("plugin.exportMessages.context.exportAll", { user: user.username })}
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
            label={t("plugin.exportMessages.context.exportAllChannel")}
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

    get displayDescription() {
        return t("plugin.exportMessages.description");
    },

    contextMenus: {
        "message": messageContextMenuPatch,
        "user-context": userContextMenuPatch,
        "channel-context": channelContextMenuPatch
    }
});
