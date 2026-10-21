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
import { NotificationData, showNotification } from "@api/Notifications";
import { definePluginSettings, Settings } from "@api/Settings";
import { Button } from "@components/Button";
import { Channel, Message, User } from "@plexcord/discord-types";
import { MessageType, RelationshipType, UserNotificationSetting } from "@plexcord/discord-types/enums";
import { Devs, PcDevs } from "@utils/constants";
import { openPrivateChannel } from "@utils/discord";
import definePlugin, { OptionType } from "@utils/types";
import { findByPropsLazy, findStore } from "@webpack";
import { ChannelStore, IconUtils, MessageStore, NavigationRouter, PresenceStore, RelationshipStore, SelectedChannelStore, StreamerModeStore, UserGuildSettingsStore, UserStore } from "@webpack/common";

let ignoredUsers: string[] = [];
let notifyFor: string[] = [];

const SelectedChannelActionCreators = findByPropsLazy("selectPrivateChannel");
const ChannelRTCActions = findByPropsLazy("updateChatOpen", "toggleParticipants");
const UserUtils = findByPropsLazy("getGlobalName");

// Adjustable variables.
const ID_REGEX = /^\d{17,20}$/;
const EMOJI_REGEX = /<a?:(\w+):\d+>/g;

export const settings = definePluginSettings({
    determineServerNotifications: {
        label: () => t(plugin.toastNotifications.option.determineServerNotifications.label),
        description: () => t(plugin.toastNotifications.option.determineServerNotifications.description),
        type: OptionType.BOOLEAN,
        default: true
    },
    respectDoNotDisturb: {
        label: () => t(plugin.toastNotifications.option.respectDoNotDisturb.label),
        description: () => t(plugin.toastNotifications.option.respectDoNotDisturb.description),
        type: OptionType.BOOLEAN,
        default: false
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
        onChange: () => { notifyFor = parseIdList(settings.store.notifyFor); },
        default: "",
        placeholder: "000000000000000000,111111111111111111,222222222222222222"
    },
    ignoreUsers: {
        label: () => t(plugin.toastNotifications.option.ignoreUsers.label),
        description: () => t(plugin.toastNotifications.option.ignoreUsers.description),
        type: OptionType.STRING,
        onChange: () => { ignoredUsers = parseIdList(settings.store.ignoreUsers); },
        default: "",
        placeholder: "000000000000000000,111111111111111111,222222222222222222"
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

export default definePlugin({
    name: "ToastNotifications",
    description: () => t(plugin.toastNotifications.description),
    authors: [PcDevs.Skully, Devs.Ethan, PcDevs.Buzzy],
    tags: ["notifications", "chat", "friends"],
    settings,

    flux: {
        MESSAGE_CREATE({ message }: { message: Message; }) {
            const channel: Channel = ChannelStore.getChannel(message.channel_id);
            if (!channel) return;

            const currentUser = UserStore.getCurrentUser();
            const isStreaming = findStore("ApplicationStreamingStore").getAnyStreamForUser(currentUser?.id);

            // Check global conditions for all message types.
            if (
                (message.author.id === currentUser.id) // If message is from the user.
                || (channel.id === SelectedChannelStore.getChannelId()) // If the user is currently in the channel.
                || (ignoredUsers.includes(message.author.id)) // If the user is ignored.
                || (settings.store.respectDoNotDisturb && PresenceStore.getStatus(currentUser.id) === "dnd") // If notifications are disabled while in DND.
                || (Settings.notifications.disableInStreamerMode && StreamerModeStore.enabled) // If notifications are disabled in streamer mode.
                || (isStreaming && Settings.notifications.streamingTreatment === "ignore") // If notifications are disabled while streaming.
            ) return;

            // Channel type checks.
            if (channel.guild_id) {
                if (!shouldNotifyForGuildMessage(message, channel)) return;
            } else {
                if (
                    (!settings.store.directMessages && channel.isDM()) // If DM notifications are disabled.
                    || (!settings.store.groupMessages && channel.isGroupDM()) // If group DM notifications are disabled.
                    || UserGuildSettingsStore.isChannelMuted(null, channel.id) // If the user has muted the DM/group channel.
                ) return;
            }

            const notification: NotificationData = {
                title: getNotificationTitle(message, channel),
                body: getNotificationBody(message),
                icon: Settings.notifications.renderImages ? IconUtils.getUserAvatarURL(message.author) : undefined,
                permanent: false,
                onClick: () => channel.guild_id
                    ? navigateToChannel(channel)
                    : SelectedChannelActionCreators.selectPrivateChannel(channel.id)
            };

            // Hide the message content while streaming.
            if (isStreaming && Settings.notifications.streamingTreatment === "no-content") {
                notification.body = t(plugin.toastNotifications.notification.redacted);
                showNotification(notification);
                return;
            }

            // Retrieve the message record so the actual message component can be rendered.
            const mockedMessage: Message | undefined = MessageStore.getMessages(message.channel_id)?.receiveMessage(message)?.get(message.id);
            if (mockedMessage) {
                notification.message = message;
                notification.mockedMessage = mockedMessage;
                notification.channel = channel;
            } else {
                console.error(`[ToastNotifications] Failed to retrieve mocked message from MessageStore for message ID ${message.id}!`);
            }

            showNotification(notification);
        },

        RELATIONSHIP_ADD({ relationship }) {
            if (ignoredUsers.includes(relationship.user.id)) return;
            relationshipAdd(relationship.user, relationship.type);
        }
    },

    start() {
        ignoredUsers = parseIdList(settings.store.ignoreUsers);
        notifyFor = parseIdList(settings.store.notifyFor);
    },

    stop() {
        ignoredUsers = [];
        notifyFor = [];
    }
});

/**
 * Splits a comma-separated string into a list of valid Discord snowflake IDs.
 */
function parseIdList(str: string): string[] {
    if (!str) return [];
    return str.replace(/\s/g, "").split(",").filter(id => ID_REGEX.test(id));
}

function getName(user: User): string {
    return RelationshipStore.getNickname(user.id) ?? UserUtils.getName(user);
}

function limitMessageLength(body: string, hasAttachments: boolean): string {
    if (hasAttachments && body?.length > 30) return body.substring(0, 27) + "...";
    if (body?.length > 165) return body.substring(0, 162) + "...";
    return body;
}

/**
 * Builds the title used for desktop notifications and the Notification Log.
 */
function getNotificationTitle(message: Message, channel: Channel): string {
    if (channel.isGroupDM()) {
        const channelName = channel.name?.trim() || channel.rawRecipients.slice(0, 3).map(e => e.username).join(", ");
        const truncatedChannelName = channelName.length > 20 ? channelName.substring(0, 20) + "..." : channelName;
        return `${getName(message.author)} (${truncatedChannelName})`;
    }

    if (channel.guild_id) return `${getName(message.author)} (#${channel.name})`;

    return getName(message.author);
}

/**
 * Builds a plain text body used for desktop notifications and the Notification Log.
 */
function getNotificationBody(message: Message): string {
    let body = message.content ?? "";

    switch (message.type) {
        case MessageType.CALL:
            body = t(plugin.toastNotifications.notification.call);
            break;
        case MessageType.RECIPIENT_ADD:
        case MessageType.RECIPIENT_REMOVE: {
            const actor = UserStore.getUser(message.author.id);
            const targetUser = UserStore.getUser((message.mentions[0] as any)?.id);
            if (!actor || !targetUser) break;

            if (message.type === MessageType.RECIPIENT_ADD)
                body = t(plugin.toastNotifications.notification.recipient.add, { target: getName(targetUser), actor: getName(actor) });
            else if (actor.id !== targetUser.id)
                body = t(plugin.toastNotifications.notification.recipient.remove, { target: getName(targetUser), actor: getName(actor) });
            else
                body = t(plugin.toastNotifications.notification.recipient.left);
            break;
        }
        case MessageType.CHANNEL_NAME_CHANGE:
            body = t(plugin.toastNotifications.notification.channel.change.name, { name: message.content });
            break;
        case MessageType.CHANNEL_ICON_CHANGE:
            body = t(plugin.toastNotifications.notification.channel.change.icon);
            break;
        case MessageType.CHANNEL_PINNED_MESSAGE:
            body = t(plugin.toastNotifications.notification.channel.pinned);
            break;
    }

    if (!body) {
        if (message.attachments?.length) body = `[${t(plugin.toastNotifications.notification.sent.attachment)} ${message.attachments[0].filename}]`;
        else if ((message as any).sticker_items?.length) body = t(plugin.toastNotifications.notification.sent.sticker);
        else if (message.embeds?.length) body = t(plugin.toastNotifications.notification.sent.embed);
    }

    return limitMessageLength(body.replace(EMOJI_REGEX, ":$1:"), message.attachments?.length > 0);
}

/**
 * Navigates the client to the given channel, opening the chat panel for voice channels.
 */
function navigateToChannel(channel: Channel) {
    if (!ChannelStore.hasChannel(channel.id)) return;
    NavigationRouter.transitionTo(`/channels/${channel.guild_id ?? "@me"}/${channel.id}/`);
    if (channel.isGuildVocal?.()) ChannelRTCActions.updateChatOpen(channel.id, true);
}

/**
 * Decides whether a guild message should trigger a notification based on the
 * channel allowlist, friend-server-notifications setting, channel/guild mutes,
 * and the user's configured notification level for the channel/guild.
 */
function shouldNotifyForGuildMessage(message: Message, channel: Channel): boolean {
    // Allowlist always wins.
    if (notifyFor.includes(channel.id)) return true;

    // Friend-in-server toggle.
    if (settings.store.friendServerNotifications && RelationshipStore.isFriend(message.author.id)) return true;

    if (!settings.store.determineServerNotifications) return false;

    // Respect the user's mute state for the guild/category/channel.
    if (UserGuildSettingsStore.isGuildOrCategoryOrChannelMuted(channel.guild_id, channel.id)) return false;

    // Resolve the user's configured notification level for the channel/guild.
    const userGuildSettings = UserGuildSettingsStore.getAllSettings().userGuildSettings[channel.guild_id];
    if (!userGuildSettings) return false;

    const channelOverride = userGuildSettings.channel_overrides?.[channel.id];
    const level: UserNotificationSetting = (channelOverride && typeof channelOverride === "object" && "message_notifications" in channelOverride)
        ? channelOverride.message_notifications
        : (typeof userGuildSettings.message_notifications === "number" ? userGuildSettings.message_notifications : UserNotificationSetting.NO_MESSAGES);

    if (level === UserNotificationSetting.NO_MESSAGES) return false;
    if (level === UserNotificationSetting.ALL_MESSAGES) return true;

    // Otherwise we only notify if the user was mentioned.
    return message.content.includes(`<@${UserStore.getCurrentUser().id}>`);
}

async function relationshipAdd(user: User, type: Number) {
    user = UserStore.getUser(user.id);
    if (!settings.store.friendActivity) return;

    const notification: NotificationData = {
        title: "",
        body: "",
        icon: Settings.notifications.renderImages ? IconUtils.getUserAvatarURL(user) : undefined
    };

    if (type === RelationshipType.FRIEND) {
        notification.title = t(plugin.toastNotifications.notification.friend.accept, { user: user.username });
        notification.body = t(plugin.toastNotifications.notification.friend.acceptBody);
        notification.onClick = () => openPrivateChannel(user.id);
    } else if (type === RelationshipType.INCOMING_REQUEST) {
        notification.title = t(plugin.toastNotifications.notification.friend.request, { user: user.username });
        notification.body = t(plugin.toastNotifications.notification.friend.requestBody);
        notification.onClick = () => NavigationRouter.transitionTo("/channels/@me");
    } else return;

    await showNotification(notification);
}

function showExampleNotification(): Promise<void> {
    return showNotification({
        title: t(plugin.toastNotifications.notification.example.title),
        body: t(plugin.toastNotifications.notification.example.body),
        icon: Settings.notifications.renderImages ? IconUtils.getUserAvatarURL(UserStore.getCurrentUser()) : undefined,
        permanent: false
    });
}
