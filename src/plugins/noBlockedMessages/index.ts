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

import { plugin, t } from "@api/i18n";
import { definePluginSettings, Settings } from "@api/Settings";
import { Message, User } from "@plexcord/discord-types";
import { containsBlockedKeywords } from "@plugins/blockKeywords";
import { Devs, PcDevs } from "@utils/constants";
import { Logger } from "@utils/Logger";
import definePlugin, { OptionType } from "@utils/types";
import { MessageStore, RelationshipStore } from "@webpack/common";
import { findStoreLazy } from "webpack";

const ReferencedMessageStore = findStoreLazy("ReferencedMessageStore");

interface ChannelStreamDividerProps {
    type: "DIVIDER",
    content?: string,
    contentKey?: string,
    unreadId?: string,
}

interface ChannelStreamMessageProps {
    type: "MESSAGE" | "THREAD_STARTER_MESSAGE",
    content: Message,
}

interface ChannelStreamGroupProps {
    type: "MESSAGE_GROUP_BLOCKED" | "MESSAGE_GROUP_IGNORED",
    content: ChannelStreamMessageProps[] | any,
}

const settings = definePluginSettings({
    alsoHideIgnoredUsers: {
        label: () => t(plugin.noBlockedMessages.option.alsoHideIgnoredUsers.label),
        description: () => t(plugin.noBlockedMessages.option.alsoHideIgnoredUsers.description),
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: false
    },
    disableNotifications: {
        label: () => t(plugin.noBlockedMessages.option.disableNotifications.label),
        description: () => t(plugin.noBlockedMessages.option.disableNotifications.description),
        type: OptionType.BOOLEAN,
        default: false,
        restartNeeded: false
    },
    allowAutoModMessages: {
        label: () => t(plugin.noBlockedMessages.option.allowAutoModMessages.label),
        description: () => t(plugin.noBlockedMessages.option.allowAutoModMessages.description),
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: false,
    },
    hideBlockedUserReplies: {
        label: () => t(plugin.noBlockedMessages.option.hideBlockedUserReplies.label),
        description: () => t(plugin.noBlockedMessages.option.hideBlockedUserReplies.description),
        type: OptionType.BOOLEAN,
        default: false,
        restartNeeded: false,
    },
    defaultHideUsers: {
        label: () => t(plugin.noBlockedMessages.option.defaultHideUsers.label),
        description: () => t(plugin.noBlockedMessages.option.defaultHideUsers.description),
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: false,
    },
    overrideUsers: {
        label: () => t(plugin.noBlockedMessages.option.overrideUsers.label),
        description: () => t(plugin.noBlockedMessages.option.overrideUsers.description),
        type: OptionType.STRING,
        restartNeeded: false,
        default: ""
    },
});

export default definePlugin({
    name: "NoBlockedMessages",
    description: () => t(plugin.noBlockedMessages.description),
    authors: [Devs.rushii, Devs.Samu, Devs.jamesbt365, PcDevs.MutanPlex],
    settings,

    patches: [
        ...[
            '"MessageStore"',
            '"ReadStateStore"'
        ].map(find => ({
            find,
            replacement: [
                {
                    match: /(?<=function (\i)\((\i)\){)(?=.*MESSAGE_CREATE:\1)/,
                    replace: (_, _funcName, props) => `if($self.disableNotification(${props}.message)){return;};`
                }
            ]
        })),
        {
            find: "`forum-post-action-bar-",
            replacement: [
                {
                    match: /(?<=\);)(let \i=null,\i=\[\],\i=(\i))/,
                    replace: "$2=$self.filterStream($2);$1"
                }
            ]
        },
    ],

    // true = keep message
    // false = hide message
    keepSuppressedMessage(userId: string) {
        const overrideUsers = settings.store.overrideUsers.split(",").map(id => id.trim()).filter(id => id.length > 0);

        if (settings.store.defaultHideUsers) {
            // If hidden by default, overriding shows messages as collapsed.
            return overrideUsers.includes(userId);
        } else {
            // If collapsed by default, overriding hides messages.
            return !overrideUsers.includes(userId);
        }
    },

    shouldKeepMessage(message: Message) {
        const suppressed = this.isSuppressed(message);
        const replyToSuppressed = this.isReplyToSuppressed(message);

        if (message.type === 24 && settings.store.allowAutoModMessages) return [true, suppressed];
        if (suppressed.suppressed) return [!suppressed.hide, true];
        if (replyToSuppressed.suppressed) return [!replyToSuppressed.hide, true];

        // [Message Visible, Author Blocked/Ignored]
        return [true, false];
    },

    disableNotification(message: Message) {
        if (!message) return false;
        const messageFilteredData = this.shouldKeepMessage(message);
        const messageHidden = !messageFilteredData[0];
        const messageSuppressed = messageFilteredData[1];
        // Always disable notifications for completely hidden messages as not doing so will
        // cause the client to scroll up into the loaded messages in search of an
        // unread message which it can't find because it was filtered.
        return messageHidden || (messageSuppressed && settings.store.disableNotifications);
    },

    filterStream(channelStream: [ChannelStreamGroupProps | ChannelStreamMessageProps | ChannelStreamDividerProps]) {
        const {
            alsoHideIgnoredUsers,
            disableNotifications,
            hideBlockedUserReplies,
            allowAutoModMessages,
            defaultHideUsers,
            overrideUsers
        } = settings.use([
            "alsoHideIgnoredUsers",
            "disableNotifications",
            "hideBlockedUserReplies",
            "allowAutoModMessages",
            "defaultHideUsers",
            "overrideUsers"
        ]);

        const newChannelStream: [ChannelStreamGroupProps | ChannelStreamMessageProps | ChannelStreamDividerProps] = [] as any;

        channelStream.forEach(item => {
            const isBlockedGroup = item.type === "MESSAGE_GROUP_BLOCKED";
            const isIgnoredGroup = item.type === "MESSAGE_GROUP_IGNORED";
            const isThreadStarter = item.type === "THREAD_STARTER_MESSAGE";
            const hasThreadStarter = (isBlockedGroup || isIgnoredGroup) && item.content?.[0]?.type === "THREAD_STARTER_MESSAGE";
            const threadCreatorMessage = (isThreadStarter && (item.content as Message)) || (hasThreadStarter && (item.content?.[0]?.content as Message)) || null;
            const actualStarterMessage = (threadCreatorMessage?.messageReference && ReferencedMessageStore.getMessageByReference(threadCreatorMessage.messageReference)?.message) || null;
            let skipStarter = false;

            if (hasThreadStarter && threadCreatorMessage && actualStarterMessage) {
                // Discord attributes the thread starter message to whoever starts the thread, even if the thread was
                // started with a different user's message. To ensure the correct message is used when determining whether
                // to show or hide, we get the reference and use that.
                //
                // Additionally, if a blocked or ignored user is the one that started the thread, but the actual message author
                // is not blocked or ignored, Discord incorrectly groups the message with the others. To fix this, we render the
                // message on its own and skip rendering it as part of the group.
                const relationship = this.getRelationshipStatus(actualStarterMessage.author);
                const isSuppressedRelationship = relationship.ignored || relationship.blocked;

                if (!isSuppressedRelationship) {
                    newChannelStream.push(item.content[0]);
                    skipStarter = true;
                }
            }

            if (isBlockedGroup || (isIgnoredGroup && alsoHideIgnoredUsers)) {
                const filteredContent: [Message | ChannelStreamDividerProps] = item.content.filter((subItem, index) => {
                    const isMessage = ["MESSAGE", "THREAD_STARTER_MESSAGE"].includes(subItem.type);
                    const isThreadStarter = index === 0 && subItem.type === "THREAD_STARTER_MESSAGE";
                    const message = (isMessage && (isThreadStarter ? actualStarterMessage : subItem.content)) || null;
                    return !(isThreadStarter && skipStarter) && (!message || this.shouldKeepMessage(message)[0]);
                });

                const shouldKeep = filteredContent.length;
                shouldKeep && newChannelStream.push({ ...item, content: filteredContent });
            } else {
                const isMessage = ["MESSAGE", "THREAD_STARTER_MESSAGE"].includes(item.type);
                const message = (isMessage && (isThreadStarter ? actualStarterMessage : item.content)) || null;
                const shouldKeep = !isMessage || !message || this.shouldKeepMessage(message)[0];
                shouldKeep && newChannelStream.push(item);
            }
        });

        let lastItem = newChannelStream[newChannelStream.length - 1];

        // Remove the NEW Message and Date dividers if they are the last
        // item, implying the messages they were separating got filtered.
        while (lastItem && lastItem.type === "DIVIDER") {
            newChannelStream.pop();
            lastItem = newChannelStream[newChannelStream.length - 1];
        }

        return newChannelStream;
    },

    isReplyToSuppressed(message: Message): { suppressed: boolean, hide: boolean; } {
        if (!settings.store.hideBlockedUserReplies) return { suppressed: false, hide: false };

        try {
            // Messages received from the non-focused channel may have a referenced_message property.
            let repliedMessage: Message | null = (message as any).referenced_message || null;

            if (!repliedMessage) {
                const messageReference = message.messageReference || (message as any).message_reference;
                repliedMessage = messageReference ? MessageStore.getMessage(messageReference.channel_id, messageReference.message_id) : null;
            }

            return repliedMessage ? this.isSuppressed(repliedMessage) : { suppressed: false, hide: false };
        } catch (e) {
            new Logger("NoBlockedMessages").error("Failed to check if referenced message is blocked or ignored:", e);
            return { suppressed: false, hide: false };
        }
    },

    isSuppressed(message: Message): { suppressed: boolean, hide: boolean; } {
        try {
            const { BlockKeywords } = Settings.plugins;
            const blockedContent = BlockKeywords?.enabled && BlockKeywords?.ignoreBlockedMessages && containsBlockedKeywords(message);
            const authorRelationship = this.getRelationshipStatus(message.author);
            const interactionUserRelationship = message.interaction && this.getRelationshipStatus((message.interaction as any).user);
            const prefixCMDReferenceData = message.author.bot && (message.messageReference || (message as any).message_reference);
            const prefixCMDReference = prefixCMDReferenceData && MessageStore.getMessage(prefixCMDReferenceData.channel_id, prefixCMDReferenceData.message_id);
            const prefixCMDUserRelationship = prefixCMDReference && this.getRelationshipStatus(prefixCMDReference.author);
            const suppressed = (
                blockedContent || authorRelationship.blocked || (
                    authorRelationship.ignored && settings.store.alsoHideIgnoredUsers
                ) || (
                    interactionUserRelationship && (interactionUserRelationship.blocked || (
                        interactionUserRelationship.ignored && settings.store.alsoHideIgnoredUsers
                    ))
                ) || (
                    prefixCMDUserRelationship && (prefixCMDUserRelationship.blocked || (
                        prefixCMDUserRelationship.ignored && settings.store.alsoHideIgnoredUsers
                    ))
                )
            );
            const hide = !this.keepSuppressedMessage(message.author.id) || (
                message.interaction && !this.keepSuppressedMessage((message.interaction as any).user.id)
            ) || (
                    prefixCMDReference && !this.keepSuppressedMessage(prefixCMDReference.author.id)
                );
            return { suppressed, hide };
        } catch (e) {
            new Logger("NoBlockedMessages").error("Failed to check if message is blocked or ignored:", e);
            return { suppressed: false, hide: false };
        }
    },

    getRelationshipStatus(user: User): { ignored: boolean, blocked: boolean; } {
        const isBlocked = RelationshipStore.isBlocked(user.id);
        const isIgnored = RelationshipStore.isIgnored(user.id);
        return { ignored: isIgnored, blocked: isBlocked };
    }
});
