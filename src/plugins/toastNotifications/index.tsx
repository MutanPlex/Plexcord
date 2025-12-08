/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
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
import { showNotification } from "@api/Notifications";
import { definePluginSettings, Settings } from "@api/Settings";
import { Button } from "@components/Button";
import { Channel, Message, User } from "@plexcord/discord-types";
import { MessageType } from "@plexcord/discord-types/enums";
import { Devs, PcDevs } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";
import { findByPropsLazy, findStore } from "@webpack";
import { ChannelStore, GuildRoleStore, NavigationRouter, RelationshipStore, SelectedChannelStore, StreamerModeStore, UserStore } from "@webpack/common";
import { ReactNode } from "react";

import { RelationshipType } from "./types";

interface NotificationData {
    title: string;
    body: string;
    richBody?: ReactNode;
    icon?: string;
    image?: string;
    onClick?(): void;
    onClose?(): void;
    color?: string;
    permanent?: boolean;
    noPersist?: boolean;
    dismissOnClick?: boolean;
    attachments: number;
}

let ignoredUsers: string[] = [];
let notifyFor: string[] = [];

// Functional variables.
const MuteStore = findByPropsLazy("isSuppressEveryoneEnabled");
const SelectedChannelActionCreators = findByPropsLazy("selectPrivateChannel");
const UserUtils = findByPropsLazy("getGlobalName");

// Adjustable variables.
const USER_MENTION_REGEX = /<@!?(\d{17,20})>|<#(\d{17,20})>|<@&(\d{17,20})>/g; // This regex captures user, channel, and role mentions.

export const settings = definePluginSettings({
    determineServerNotifications: {
        label: () => t(plugin.toastNotifications.option.determineServerNotifications.label),
        description: () => t(plugin.toastNotifications.option.determineServerNotifications.description),
        type: OptionType.BOOLEAN,
        default: true
    },
    directMessages: {
        label: () => t(plugin.toastNotifications.option.directMessages.label),
        description: () => t(plugin.toastNotifications.option.directMessages.description),
        type: OptionType.BOOLEAN,
        default: true
    },
    groupMessages: {
        label: () => t(plugin.toastNotifications.option.groupMessages.label),
        description: () => t(plugin.toastNotifications.option.groupMessages.description),
        type: OptionType.BOOLEAN,
        default: true
    },
    friendServerNotifications: {
        label: () => t(plugin.toastNotifications.option.friendServerNotifications.label),
        description: () => t(plugin.toastNotifications.option.friendServerNotifications.description),
        type: OptionType.BOOLEAN,
        default: true
    },
    friendActivity: {
        label: () => t(plugin.toastNotifications.option.friendActivity.label),
        description: () => t(plugin.toastNotifications.option.friendActivity.description),
        type: OptionType.BOOLEAN,
        default: true
    },
    notifyFor: {
        label: () => t(plugin.toastNotifications.option.notifyFor.label),
        description: () => t(plugin.toastNotifications.option.notifyFor.description),
        type: OptionType.STRING,
        onChange: () => { notifyFor = stringToList(settings.store.notifyFor); },
        default: ""
    },
    ignoreUsers: {
        label: () => t(plugin.toastNotifications.option.ignoreUsers.label),
        description: () => t(plugin.toastNotifications.option.ignoreUsers.description),
        type: OptionType.STRING,
        onChange: () => { ignoredUsers = stringToList(settings.store.ignoreUsers); },
        default: ""
    },
    exampleButton: {
        label: () => t(plugin.toastNotifications.option.exampleButton.label),
        description: () => t(plugin.toastNotifications.option.exampleButton.description),
        type: OptionType.COMPONENT,
        component: () =>
            <Button onClick={showExampleNotification}>
                {t(plugin.toastNotifications.option.exampleButton.show)}
            </Button>
    }
});

function stringToList(str: string): string[] {
    if (str !== "") {
        const array: string[] = [];
        const string = str.replace(/\s/g, "");
        const splitArray = string.split(",");
        splitArray.forEach(id => {
            array.push(id);
        });

        return array;
    }
    return [];
}

function limitMessageLength(body: string, hasAttachments: boolean): string {
    if (hasAttachments) {
        if (body?.length > 30) {
            return body.substring(0, 27) + "...";
        }
    }

    if (body?.length > 165) {
        return body.substring(0, 162) + "...";
    }

    return body;
}

function getName(user: User): string {
    return RelationshipStore.getNickname(user.id) ?? UserUtils.getName(user);
}

const addMention = (id: string, type: string, guildId?: string): ReactNode => {
    let name;
    if (type === "user")
        name = `@${UserStore.getUser(id)?.username || "unknown-user"}`;
    else if (type === "channel")
        name = `#${ChannelStore.getChannel(id)?.name || "unknown-channel"}`;
    else if (type === "role" && guildId)
        name = `@${GuildRoleStore.getRole(guildId, id)?.name || "unknown-role"}`;

    // Return the mention as a styled span.
    return (
        <span key={`${type}-${id}`} className={"toastnotifications-mention-class"}>
            {name}
        </span>
    );
};

export default definePlugin({
    name: "ToastNotifications",
    description: () => t(plugin.toastNotifications.description),
    authors: [PcDevs.Skully, Devs.Ethan, PcDevs.Buzzy],
    settings,

    flux: {
        async MESSAGE_CREATE({ message }: { message: Message; }) {

            const channel: Channel = ChannelStore.getChannel(message.channel_id);
            const currentUser = UserStore.getCurrentUser();

            const isStreaming = findStore("ApplicationStreamingStore").getAnyStreamForUser(UserStore.getCurrentUser()?.id);

            const streamerMode = Settings.notifications.disableInStreamerMode;
            const currentUserStreamerMode = StreamerModeStore.enabled;

            if (streamerMode && currentUserStreamerMode) return;
            if (isStreaming && Settings.notifications.streamingTreatment === "ignore") return;

            if (
                (
                    (message.author.id === currentUser.id) // If message is from the user.
                    || (channel.id === SelectedChannelStore.getChannelId()) // If the user is currently in the channel.
                    || (ignoredUsers.includes(message.author.id)) // If the user is ignored.
                )
            ) return;

            if (channel.guild_id) { // If this is a guild message and not a private message.
                handleGuildMessage(message);
                return;
            }

            if (!settings.store.directMessages && channel.isDM() || !settings.store.groupMessages && channel.isGroupDM() || MuteStore.isChannelMuted(null, channel.id)) return;

            // Prepare the notification.
            const Notification: NotificationData = {
                title: getName(message.author),
                icon: `https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.png?size=128`,
                body: message.content,
                attachments: message.attachments?.length,
                richBody: null,
                permanent: false,
                onClick() { SelectedChannelActionCreators.selectPrivateChannel(message.channel_id); }
            };

            const notificationText = message.content?.length > 0 ? message.content : false;
            const richBodyElements: ReactNode[] = [];

            // If this channel is a group DM, include the channel name.
            if (channel.isGroupDM()) {
                let channelName = channel.name?.trim() ?? false;
                if (!channelName) { // If the channel doesn't have a set name, use the first 3 recipients.
                    channelName = channel.rawRecipients.slice(0, 3).map(e => e.username).join(", ");
                }

                // Finally, truncate the channel name if it's too long.
                const truncatedChannelName = channelName?.length > 20 ? channelName.substring(0, 20) + "..." : channelName;
                Notification.title = `${message.author.username} (${truncatedChannelName})`;
            }
            else if (channel.guild_id) // If this is a guild message and not a private message.
            {
                Notification.title = `${getName(message.author)} (#${channel.name})`;
            }

            // Handle specific message types.
            switch (message.type) {
                case MessageType.CALL: {
                    Notification.body = t(plugin.toastNotifications.notification.call);
                    break;
                }
                case MessageType.RECIPIENT_ADD: {
                    const actor = UserStore.getUser(message.author.id);
                    const user = message.mentions[0];
                    const targetUser = UserStore.getUser((user as any).id);

                    Notification.body = t(plugin.toastNotifications.notification.recipient.add, { target: getName(targetUser), actor: getName(actor) });
                    break;
                }
                case MessageType.RECIPIENT_REMOVE: {
                    const actor = UserStore.getUser(message.author.id);
                    const user = message.mentions[0];
                    const targetUser = UserStore.getUser((user as any).id);

                    if (actor.id !== targetUser.id) {
                        Notification.body = t(plugin.toastNotifications.notification.recipient.remove, { target: getName(targetUser), actor: getName(actor) });
                    } else {
                        Notification.body = t(plugin.toastNotifications.notification.recipient.left);
                    }
                    break;
                }
                case MessageType.CHANNEL_NAME_CHANGE: {
                    Notification.body = t(plugin.toastNotifications.notification.channel.change.name, { name: message.content });
                    break;
                }
                case MessageType.CHANNEL_ICON_CHANGE: {
                    Notification.body = t(plugin.toastNotifications.notification.channel.change.icon);
                    break;
                }
                case MessageType.CHANNEL_PINNED_MESSAGE: {
                    Notification.body = t(plugin.toastNotifications.notification.channel.pinned);
                    break;
                }
            }

            // Message contains an embed.
            if (message.embeds?.length !== 0) {
                Notification.body = notificationText || t(plugin.toastNotifications.notification.sent.embed);
            }

            // Message contains a sticker.
            const stickerItems = (message as any).sticker_items;
            if (stickerItems && stickerItems.length > 0) {
                const sticker = stickerItems[0];
                const stickerUrl = `https://cdn.discordapp.com/stickers/${sticker.id}.png?size=160&lossless=true`;
                Notification.body = notificationText || t(plugin.toastNotifications.notification.sent.sticker);
                Notification.image = stickerUrl;
            }

            // Message contains an attachment.
            if (message.attachments?.length !== 0) {
                const images = message.attachments.filter(e => typeof e?.content_type === "string" && e?.content_type.startsWith("image"));
                // Label the notification with the attachment type.
                if (images?.length !== 0) {
                    Notification.body = notificationText || ""; // Dont show any body
                    Notification.image = images[0].url;
                } else {
                    Notification.body += ` [${t(plugin.toastNotifications.notification.sent.attachment)} ${message.attachments[0].filename}]`;
                }
            }

            // TODO: Format emotes properly.
            const matches = Notification.body.match(new RegExp("(<a?:\\w+:\\d+>)", "g"));
            if (matches) {
                for (const match of matches) {
                    Notification.body = Notification.body.replace(new RegExp(`${match}`, "g"), `:${match.split(":")[1]}:`);
                }
            }

            // Replace any mention of users, roles and channels.
            if (message.mentions?.length !== 0 || message.mentionRoles?.length > 0) {
                let lastIndex = 0;
                Notification.body.replace(USER_MENTION_REGEX, (match, userId, channelId, roleId, offset) => {
                    richBodyElements.push(Notification.body.slice(lastIndex, offset));

                    // Add the mention itself as a styled span.
                    if (userId) {
                        richBodyElements.push(addMention(userId, "user"));
                    } else if (channelId) {
                        richBodyElements.push(addMention(channelId, "channel"));
                    } else if (roleId) {
                        richBodyElements.push(addMention(roleId, "role", channel.guild_id));
                    }

                    lastIndex = offset + match?.length;
                    return match; // This value is not used but is necessary for the replace function
                });
            }

            if (richBodyElements?.length > 0) {
                const MyRichBodyComponent = () => <>{richBodyElements}</>;
                Notification.richBody = <MyRichBodyComponent />;
            }

            Notification.body = limitMessageLength(Notification.body, Notification.attachments > 0);

            if (isStreaming && Settings.notifications.streamingTreatment === "no-content") {
                Notification.body = t(plugin.toastNotifications.notification.redacted);
            }

            if (!Settings.notifications.renderImages) {
                Notification.icon = undefined;
            }

            showNotification(Notification);
        },

        async RELATIONSHIP_ADD({ relationship }) {
            if (ignoredUsers.includes(relationship.user.id)) return;
            relationshipAdd(relationship.user, relationship.type);
        }
    },

    start() {
        ignoredUsers = stringToList(settings.store.ignoreUsers);
        notifyFor = stringToList(settings.store.notifyFor);
    }
});

function switchChannels(guildId: string | null, channelId: string) {
    if (!ChannelStore.hasChannel(channelId)) return;
    NavigationRouter.transitionTo(`/channels/${guildId ?? "@me"}/${channelId}/`);
}

enum NotificationLevel {
    ALL_MESSAGES = 0,
    ONLY_MENTIONS = 1,
    NO_MESSAGES = 2
}

function findNotificationLevel(channel: Channel): NotificationLevel {
    const store = findStore("UserGuildSettingsStore");
    const userGuildSettings = store.getAllSettings().userGuildSettings[channel.guild_id];

    if (!settings.store.determineServerNotifications || MuteStore.isGuildOrCategoryOrChannelMuted(channel.guild_id, channel.id)) {
        return NotificationLevel.NO_MESSAGES;
    }

    if (userGuildSettings) {
        const channelOverrides = userGuildSettings.channel_overrides?.[channel.id];
        const guildDefault = userGuildSettings.message_notifications;

        // Check if channel overrides exist and are in the expected format
        if (channelOverrides && typeof channelOverrides === "object" && "message_notifications" in channelOverrides) {
            return channelOverrides.message_notifications;
        }

        // Check if guild default is in the expected format
        if (typeof guildDefault === "number") {
            return guildDefault;
        }
    }

    // Return a default value if no valid overrides or guild default is found
    return NotificationLevel.NO_MESSAGES;
}

async function handleGuildMessage(message: Message) {
    const c = ChannelStore.getChannel(message.channel_id);
    const notificationLevel: number = findNotificationLevel(c);
    let isAllOrFriend = false;
    // 0: All messages 1: Only mentions 2: No messages
    // todo: check if the user who sent it is a friend
    const all = notifyFor.includes(message.channel_id);
    const friend = settings.store.friendServerNotifications && RelationshipStore.isFriend(message.author.id);



    if (!all && !friend) {
        isAllOrFriend = true;
        const isMention: boolean = message.content.includes(`<@${UserStore.getCurrentUser().id}>`);
        const meetsMentionCriteria = notificationLevel !== NotificationLevel.ALL_MESSAGES && !isMention;

        if (notificationLevel === NotificationLevel.NO_MESSAGES || meetsMentionCriteria) return;
    }

    const channel: Channel = ChannelStore.getChannel(message.channel_id);

    const notificationText = message.content.length > 0 ? message.content : false;
    const richBodyElements: React.ReactNode[] = [];

    // Prepare the notification.
    const Notification: NotificationData = {
        title: `${getName(message.author)} (#${channel.name})`,
        icon: `https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.png?size=128`,
        body: message.content,
        attachments: message.attachments?.length,
        richBody: null,
        permanent: false,
        onClick() { switchChannels(channel.guild_id, channel.id); }
    };

    if (message.embeds?.length !== 0) {
        Notification.body = notificationText || t(plugin.toastNotifications.notification.sent.embed);
    }

    // Message contains a sticker.
    const stickerItems = (message as any).sticker_items;
    if (stickerItems && stickerItems.length > 0) {
        const sticker = stickerItems[0];
        const stickerUrl = `https://cdn.discordapp.com/stickers/${sticker.id}.png?size=160&lossless=true`;
        Notification.body = notificationText || t(plugin.toastNotifications.notification.sent.sticker);
        Notification.image = stickerUrl;
    }

    // Message contains an attachment.
    if (message.attachments?.length !== 0) {
        const images = message.attachments.filter(e => typeof e?.content_type === "string" && e?.content_type.startsWith("image"));
        // Label the notification with the attachment type.
        if (images?.length !== 0) {
            Notification.body = notificationText || ""; // Dont show any body
            Notification.image = images[0].url;
        } else {
            Notification.body += ` [${t(plugin.toastNotifications.notification.sent.attachment)} ${message.attachments[0].filename}]`;
        }
    }

    // TODO: Format emotes properly.
    const matches = Notification.body.match(new RegExp("(<a?:\\w+:\\d+>)", "g"));
    if (matches) {
        for (const match of matches) {
            Notification.body = Notification.body.replace(new RegExp(`${match}`, "g"), `:${match.split(":")[1]}:`);
        }
    }

    // Replace any mention of users, roles and channels.
    if (message.mentions?.length !== 0 || message.mentionRoles?.length > 0) {
        let lastIndex = 0;
        Notification.body.replace(USER_MENTION_REGEX, (match, userId, channelId, roleId, offset) => {
            richBodyElements.push(Notification.body.slice(lastIndex, offset));

            // Add the mention itself as a styled span.
            if (userId) {
                richBodyElements.push(addMention(userId, "user"));
            } else if (channelId) {
                richBodyElements.push(addMention(channelId, "channel"));
            } else if (roleId) {
                richBodyElements.push(addMention(roleId, "role", channel.guild_id));
            }

            lastIndex = offset + match?.length;
            return match; // This value is not used but is necessary for the replace function
        });
    }

    if (richBodyElements?.length > 0) {
        const MyRichBodyComponent = () => <>{richBodyElements}</>;
        Notification.richBody = <MyRichBodyComponent />;
    }

    Notification.body = limitMessageLength(Notification.body, Notification.attachments > 0);

    const isStreaming = findStore("ApplicationStreamingStore").getAnyStreamForUser(UserStore.getCurrentUser()?.id);

    if (isStreaming && Settings.notifications.streamingTreatment === "no-content") {
        Notification.body = t(plugin.toastNotifications.notification.redacted);
    }

    if (!Settings.notifications.renderImages) {
        Notification.icon = undefined;
    }

    console.log("noti that went through: " + isAllOrFriend);
    await showNotification(Notification);

}

async function relationshipAdd(user: User, type: Number) {
    user = UserStore.getUser(user.id);
    if (!settings.store.friendActivity) return;

    const Notification: NotificationData = {
        title: "",
        icon: user.getAvatarURL(),
        body: "",
        attachments: 0,
    };

    if (!Settings.notifications.renderImages) {
        Notification.icon = undefined;
    }

    if (type === RelationshipType.FRIEND) {
        Notification.title = t(plugin.toastNotifications.notification.friend.accept, { user: user.username });
        Notification.body = t(plugin.toastNotifications.notification.friend.acceptBody);
        Notification.onClick = () => switchChannels(null, user.id);


        await showNotification(Notification);

    } else if (type === RelationshipType.INCOMING_REQUEST) {

        Notification.title = t(plugin.toastNotifications.notification.friend.request, { user: user.username });
        Notification.body = t(plugin.toastNotifications.notification.friend.requestBody);
        Notification.onClick = () => switchChannels(null, "");

        await showNotification(Notification);
    }
}

function showExampleNotification(): Promise<void> {
    const Notification: NotificationData = {
        title: t(plugin.toastNotifications.notification.example.title),
        icon: `https://cdn.discordapp.com/avatars/${UserStore.getCurrentUser().id}/${UserStore.getCurrentUser().avatar}.png?size=128`,
        body: t(plugin.toastNotifications.notification.example.body),
        attachments: 0,
        permanent: false
    };

    if (!Settings.notifications.renderImages) {
        Notification.icon = undefined;
    }
    return showNotification(Notification);
}
