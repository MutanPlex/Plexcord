/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { t } from "@api/i18n";
import { showNotification } from "@api/Notifications";
import { definePluginSettings } from "@api/Settings";
import { PcDevs } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";
import { findStoreLazy } from "@webpack";
import {
    ChannelStore,
    GuildStore,
    NavigationRouter,
    PresenceStore,
    RelationshipStore,
    SelectedChannelStore,
    UserStore
} from "@webpack/common";

const UserGuildSettingsStore = findStoreLazy("UserGuildSettingsStore");

const settings = definePluginSettings({
    friends: {
        get label() {
            return t("plugin.pingNotifications.option.friends.label");
        },
        get description() {
            return t("plugin.pingNotifications.option.friends.description");
        },
        type: OptionType.BOOLEAN,
        default: false
    },
    mentions: {
        get label() {
            return t("plugin.pingNotifications.option.mentions.label");
        },
        get description() {
            return t("plugin.pingNotifications.option.mentions.description");
        },
        type: OptionType.BOOLEAN,
        default: true
    },
    dms: {
        get label() {
            return t("plugin.pingNotifications.option.dms.label");
        },
        get description() {
            return t("plugin.pingNotifications.option.dms.description");
        },
        type: OptionType.BOOLEAN,
        default: true
    },
    showInActive: {
        get label() {
            return t("plugin.pingNotifications.option.showInActive.label");
        },
        get description() {
            return t("plugin.pingNotifications.option.showInActive.description");
        },
        type: OptionType.BOOLEAN,
        default: false
    },
    ignoreMuted: {
        get label() {
            return t("plugin.pingNotifications.option.ignoreMuted.label");
        },
        get description() {
            return t("plugin.pingNotifications.option.ignoreMuted.description");
        },
        type: OptionType.BOOLEAN,
        default: true
    }
});

function formatContent(message) {
    let content = message.content || "";
    message.mentions?.forEach(user => {
        content = content.replace(new RegExp(`<@!?${user.id}>`, "g"), `@${user.username}`);
    });
    return content.slice(0, 200) + (content.length > 200 ? "..." : "");
}

function checkIfMuted(channel) {
    if (!settings.store.ignoreMuted) return false;
    if (!channel) return false;

    if (channel.isMuted?.()) return true;

    const isDM = [1, 3].includes(channel.type);
    if (isDM) {
        const recipientIds = channel.recipients || [];
        for (const userId of recipientIds) {
            if (RelationshipStore.isBlocked(userId)) return true;
        }

        if (UserGuildSettingsStore?.getMutedChannels?.()?.includes?.(channel.id)) return true;
    }

    if (channel.guild_id) {
        const guild = GuildStore.getGuild(channel.guild_id);
        if (UserGuildSettingsStore.isMuted(channel.guild_id)) return true;

        if (UserGuildSettingsStore?.isMuted?.(channel.guild_id)) return true;
        if (UserGuildSettingsStore?.isChannelMuted?.(channel.guild_id, channel.id)) return true;
        if (UserGuildSettingsStore?.isCategoryMuted?.(channel.guild_id, channel.id)) return true;
    }

    return false;
}

function isUserBlocked(userId) {
    return settings.store.ignoreMuted && RelationshipStore.isBlocked?.(userId);
}

export default definePlugin({
    name: "PingNotifications",
    description: "Customizable notifications with improved mention formatting",
    authors: [PcDevs.smuki, PcDevs.MutanPlex],
    settings,

    get displayDescription() {
        return t("plugin.pingNotifications.description");
    },

    flux: {
        MESSAGE_CREATE({ message }) {
            try {
                if (!message?.channel_id || message.state === "SENDING") return;

                const channel = ChannelStore.getChannel(message.channel_id);
                const currentUser = UserStore.getCurrentUser();

                if (!channel || !currentUser) return;
                if (message.author?.id === currentUser.id) return;

                const isDM = [1, 3].includes(channel.type);

                if (checkIfMuted(channel)) return;
                if (isUserBlocked(message.author.id)) return;
                if (!settings.store.showInActive && channel.id === SelectedChannelStore.getChannelId()) return;
                if (PresenceStore.getStatus(currentUser.id) === "dnd") return;

                const author = UserStore.getUser(message.author.id) || { username: t("plugin.pingNotifications.unknown") };
                const channelName = channel.name || (isDM ? t("plugin.pingNotifications.dm") : t("plugin.pingNotifications.groupDM"));
                const body = formatContent(message);

                let shouldNotify = false;

                if (settings.store.mentions && message.mentions?.some(u => u.id === currentUser.id)) {
                    shouldNotify = true;
                } else if (settings.store.friends && RelationshipStore.isFriend(message.author.id) && !isDM) {
                    shouldNotify = true;
                } else if (isDM && settings.store.dms) {
                    shouldNotify = true;
                }

                if (shouldNotify) {
                    showNotification({
                        title: t("plugin.pingNotifications.title", { username: author.username, channelName }),
                        body,
                        icon: author.getAvatarURL?.(undefined, 128),
                        onClick: () => NavigationRouter.transitionTo(
                            `/channels/${channel.guild_id || "@me"}/${channel.id}/${message.id}`
                        )
                    });
                }
            } catch (err) {
                console.error("[PingNotifications] Error:", err);
            }
        }
    }
});
