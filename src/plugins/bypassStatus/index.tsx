/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { playAudio } from "@api/AudioPlayer";
import { type NavContextMenuPatchCallback } from "@api/ContextMenu";
import { plugin, t } from "@api/i18n";
import { Notifications } from "@api/index";
import { definePluginSettings } from "@api/Settings";
import type { Message } from "@plexcord/discord-types";
import { Devs } from "@utils/constants";
import { getCurrentChannel } from "@utils/discord";
import { Logger } from "@utils/Logger";
import definePlugin, { OptionType } from "@utils/types";
import { ChannelActionCreators, ChannelStore, Menu, MessageStore, NavigationRouter, PresenceStore, UserStore, WindowStore } from "@webpack/common";
import { JSX } from "react";

interface IMessageCreate {
    channelId: string;
    guildId: string;
    message: Message;
}

function Icon(enabled?: boolean): JSX.Element {
    return <svg
        width="18"
        height="18"
    >
        <circle cx="9" cy="9" r="8" fill={!enabled ? "var(--status-danger)" : "currentColor"} />
        <circle cx="9" cy="9" r="3.75" fill={!enabled ? "white" : "black"} />
    </svg>;
}

function processIds(value: string): string {
    return value.replace(/\s/g, "").split(",").filter(id => id.trim() !== "").join(", ");
}

async function showNotification(message: Message, guildId: string | undefined): Promise<void> {
    try {
        const channel = ChannelStore.getChannel(message.channel_id);
        const channelRegex = /<#(\d{19})>/g;
        const userRegex = /<@(\d{18})>/g;

        message.content = message.content.replace(channelRegex, (match: any, channelId: string) => {
            return `#${ChannelStore.getChannel(channelId)?.name}`;
        });

        message.content = message.content.replace(userRegex, (match: any, userId: string) => {
            return `@${(UserStore.getUser(userId) as any).globalName}`;
        });

        await Notifications.showNotification({
            title: `${(message.author as any).globalName} ${guildId ? `(#${channel?.name}, ${ChannelStore.getChannel(channel?.parent_id)?.name})` : ""}`,
            body: message.content,
            icon: UserStore.getUser(message.author.id).getAvatarURL(undefined, undefined, false),
            onClick: function (): void {
                NavigationRouter.transitionTo(`/channels/${guildId ?? "@me"}/${message.channel_id}/${message.id}`);
            }
        });

        if (settings.store.notificationSound) {
            playAudio("message1");
        }
    } catch (error) {
        new Logger("BypassStatus").error("Failed to notify user: ", error);
    }
}

function ContextCallback(name: "guild" | "user" | "channel"): NavContextMenuPatchCallback {
    return (children, props) => {
        const type = props[name];
        if (!type) return;
        const enabled = settings.store[`${name}s`].split(", ").includes(type.id);
        if (name === "user" && type.id === UserStore.getCurrentUser().id) return;
        children.splice(-1, 0, (
            <Menu.MenuGroup>
                <Menu.MenuItem
                    id={`status-${name}-bypass`}
                    label={`${enabled ? t(plugin.bypassStatus.context.remove) : t(plugin.bypassStatus.context.add)}`}
                    icon={() => Icon(enabled)}
                    action={() => {
                        let bypasses: string[] = settings.store[`${name}s`].split(", ");
                        if (enabled) bypasses = bypasses.filter(id => id !== type.id);
                        else bypasses.push(type.id);
                        settings.store[`${name}s`] = bypasses.filter(id => id.trim() !== "").join(", ");
                    }}
                />
            </Menu.MenuGroup>
        ));
    };
}

const settings = definePluginSettings({
    guilds: {
        label: () => t(plugin.bypassStatus.option.guilds.label),
        description: () => t(plugin.bypassStatus.option.guilds.description),
        type: OptionType.STRING,
        default: "",
        placeholder: () => t(plugin.bypassStatus.option.guilds.placeholder),
        onChange: value => settings.store.guilds = processIds(value)
    },
    channels: {
        label: () => t(plugin.bypassStatus.option.channels.label),
        description: () => t(plugin.bypassStatus.option.channels.description),
        type: OptionType.STRING,
        default: "",
        placeholder: () => t(plugin.bypassStatus.option.channels.placeholder),
        onChange: value => settings.store.channels = processIds(value)
    },
    users: {
        label: () => t(plugin.bypassStatus.option.users.label),
        description: () => t(plugin.bypassStatus.option.users.description),
        type: OptionType.STRING,
        default: "",
        placeholder: () => t(plugin.bypassStatus.option.users.placeholder),
        onChange: value => settings.store.users = processIds(value)
    },
    allowOutsideOfDms: {
        label: () => t(plugin.bypassStatus.option.allowOutsideOfDms.label),
        description: () => t(plugin.bypassStatus.option.allowOutsideOfDms.description),
        type: OptionType.BOOLEAN,
    },
    notificationSound: {
        label: () => t(plugin.bypassStatus.option.notificationSound.label),
        description: () => t(plugin.bypassStatus.option.notificationSound.description),
        type: OptionType.BOOLEAN,
        default: true,
    },
    statusToUse: {
        label: () => t(plugin.bypassStatus.option.statusToUse.label),
        description: () => t(plugin.bypassStatus.option.statusToUse.description),
        type: OptionType.SELECT,
        options: [
            {
                label: () => t(plugin.bypassStatus.option.statusToUse.online),
                value: "online",
            },
            {
                label: () => t(plugin.bypassStatus.option.statusToUse.idle),
                value: "idle",
            },
            {
                label: () => t(plugin.bypassStatus.option.statusToUse.dnd),
                value: "dnd",
                default: true
            },
            {
                label: () => t(plugin.bypassStatus.option.statusToUse.invisible),
                value: "invisible",
            }
        ]
    }
});

export default definePlugin({
    name: "BypassStatus",
    description: () => t(plugin.bypassStatus.description),
    authors: [Devs.Inbestigator],
    dependencies: ["AudioPlayerAPI"],

    flux: {
        async MESSAGE_CREATE({ message, guildId, channelId }: IMessageCreate): Promise<void> {
            try {
                const currentUser = UserStore.getCurrentUser();
                const userStatus = await PresenceStore.getStatus(currentUser.id);
                const currentChannelId = getCurrentChannel()?.id ?? "0";
                if (message.state === "SENDING" || message.content === "" || message.author.id === currentUser.id || (channelId === currentChannelId && WindowStore.isFocused()) || userStatus !== settings.store.statusToUse) {
                    return;
                }
                const mentioned = MessageStore.getMessage(channelId, message.id)?.mentioned;
                if ((settings.store.guilds.split(", ").includes(guildId) || settings.store.channels.split(", ").includes(channelId)) && mentioned) {
                    await showNotification(message, guildId);
                } else if (settings.store.users.split(", ").includes(message.author.id)) {
                    const userChannelId = await ChannelActionCreators.getOrEnsurePrivateChannel(message.author.id);
                    if (channelId === userChannelId || (mentioned && settings.store.allowOutsideOfDms === true)) {
                        await showNotification(message, guildId);
                    }
                }
            } catch (error) {
                new Logger("BypassStatus").error("Failed to handle message: ", error);
            }
        }
    },
    settings,
    contextMenus: {
        "guild-context": ContextCallback("guild"),
        "channel-context": ContextCallback("channel"),
        "user-context": ContextCallback("user"),
    }
});
