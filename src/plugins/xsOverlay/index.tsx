/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { Button } from "@components/Button";
import type { Channel, Embed, GuildMember, MessageAttachment, User } from "@plexcord/discord-types";
import { Devs } from "@utils/constants";
import definePlugin, { makeRange, OptionType, PluginNative, ReporterTestable } from "@utils/types";
import { findByCodeLazy, findLazy } from "@webpack";
import { ChannelStore, GuildRoleStore, GuildStore, UserStore } from "@webpack/common";

const ChannelTypes = findLazy(m => m.ANNOUNCEMENT_THREAD === 10);

interface Message {
    guild_id: string,
    attachments: MessageAttachment[],
    author: User,
    channel_id: string,
    components: any[],
    content: string,
    edited_timestamp: string,
    embeds: Embed[],
    sticker_items?: Sticker[],
    flags: number,
    id: string,
    member: GuildMember,
    mention_everyone: boolean,
    mention_roles: string[],
    mentions: Mention[],
    nonce: string,
    pinned: false,
    referenced_message: any,
    timestamp: string,
    tts: boolean,
    type: number;
}

interface Mention {
    avatar: string,
    avatar_decoration_data: any,
    discriminator: string,
    global_name: string,
    id: string,
    public_flags: number,
    username: string;
}

interface Sticker {
    t: "Sticker";
    description: string;
    format_type: number;
    guild_id: string;
    id: string;
    name: string;
    tags: string;
    type: number;
}

interface Call {
    channel_id: string,
    guild_id: string,
    message_id: string,
    region: string,
    ringing: string[];
}

interface ApiObject {
    sender: string,
    target: string,
    command: string,
    jsonData: string,
    rawData: string | null,
}

interface NotificationObject {
    type: number;
    timeout: number;
    height: number;
    opacity: number;
    volume: number;
    audioPath: string;
    title: string;
    content: string;
    useBase64Icon: boolean;
    icon: string;
    sourceApp: string;
}

const notificationsShouldNotify = findByCodeLazy(".SUPPRESS_NOTIFICATIONS))return!1");

const settings = definePluginSettings({
    webSocketPort: {
        label: () => t(plugin.xSOverlay.option.webSocketPort.label),
        description: () => t(plugin.xSOverlay.option.webSocketPort.description),
        type: OptionType.NUMBER,
        default: 42070,
        async onChange() {
            await start();
        }
    },
    preferUDP: {
        label: () => t(plugin.xSOverlay.option.preferUDP.label),
        description: () => t(plugin.xSOverlay.option.preferUDP.description),
        type: OptionType.BOOLEAN,
        default: false,
        disabled: () => IS_WEB
    },
    botNotifications: {
        label: () => t(plugin.xSOverlay.option.botNotifications.label),
        description: () => t(plugin.xSOverlay.option.botNotifications.description),
        type: OptionType.BOOLEAN,
        default: false
    },
    serverNotifications: {
        label: () => t(plugin.xSOverlay.option.serverNotifications.label),
        description: () => t(plugin.xSOverlay.option.serverNotifications.description),
        type: OptionType.BOOLEAN,
        default: true
    },
    dmNotifications: {
        label: () => t(plugin.xSOverlay.option.dmNotifications.label),
        description: () => t(plugin.xSOverlay.option.dmNotifications.description),
        type: OptionType.BOOLEAN,
        default: true
    },
    groupDmNotifications: {
        label: () => t(plugin.xSOverlay.option.groupDmNotifications.label),
        description: () => t(plugin.xSOverlay.option.groupDmNotifications.description),
        type: OptionType.BOOLEAN,
        default: true
    },
    callNotifications: {
        label: () => t(plugin.xSOverlay.option.callNotifications.label),
        description: () => t(plugin.xSOverlay.option.callNotifications.description),
        type: OptionType.BOOLEAN,
        default: true
    },
    pingColor: {
        label: () => t(plugin.xSOverlay.option.pingColor.label),
        description: () => t(plugin.xSOverlay.option.pingColor.description),
        type: OptionType.STRING,
        default: "#7289da"
    },
    channelPingColor: {
        label: () => t(plugin.xSOverlay.option.channelPingColor.label),
        description: () => t(plugin.xSOverlay.option.channelPingColor.description),
        type: OptionType.STRING,
        default: "#8a2be2"
    },
    soundPath: {
        label: () => t(plugin.xSOverlay.option.soundPath.label),
        description: () => t(plugin.xSOverlay.option.soundPath.description),
        type: OptionType.STRING,
        default: "default"
    },
    timeout: {
        label: () => t(plugin.xSOverlay.option.timeout.label),
        description: () => t(plugin.xSOverlay.option.timeout.description),
        type: OptionType.NUMBER,
        default: 3,
    },
    lengthBasedTimeout: {
        label: () => t(plugin.xSOverlay.option.lengthBasedTimeout.label),
        description: () => t(plugin.xSOverlay.option.lengthBasedTimeout.description),
        type: OptionType.BOOLEAN,
        default: true
    },
    opacity: {
        label: () => t(plugin.xSOverlay.option.opacity.label),
        description: () => t(plugin.xSOverlay.option.opacity.description),
        type: OptionType.SLIDER,
        default: 1,
        markers: makeRange(0, 1, 0.1)
    },
    volume: {
        label: () => t(plugin.xSOverlay.option.volume.label),
        description: () => t(plugin.xSOverlay.option.volume.description),
        type: OptionType.SLIDER,
        default: 0.2,
        markers: makeRange(0, 1, 0.1)
    },
});

let socket: WebSocket;

async function start() {
    if (socket) socket.close();
    socket = new WebSocket(`ws://127.0.0.1:${settings.store.webSocketPort ?? 42070}/?client=Plexcord`);
    return new Promise((resolve, reject) => {
        socket.onopen = resolve;
        socket.onerror = reject;
        setTimeout(reject, 3000);
    });
}

const Native = PlexcordNative.pluginHelpers.XSOverlay as PluginNative<typeof import("./native")>;

export default definePlugin({
    name: "XSOverlay",
    description: () => t(plugin.xSOverlay.description),
    authors: [Devs.Nyako],
    tags: ["vr", "notify"],
    reporterTestable: ReporterTestable.None,
    settings,

    flux: {
        CALL_UPDATE({ call }: { call: Call; }) {
            if (call?.ringing?.includes(UserStore.getCurrentUser().id) && settings.store.callNotifications) {
                const channel = ChannelStore.getChannel(call.channel_id);
                sendOtherNotif(t(plugin.xSOverlay.notification.call.title), t(plugin.xSOverlay.notification.call.content, { user: channel.name }));
            }
        },
        MESSAGE_CREATE({ message, optimistic }: { message: Message; optimistic: boolean; }) {
            if (optimistic) return;
            const channel = ChannelStore.getChannel(message.channel_id);
            if (!shouldNotify(message, message.channel_id)) return;

            const pingColor = settings.store.pingColor.replaceAll("#", "").trim();
            const channelPingColor = settings.store.channelPingColor.replaceAll("#", "").trim();
            let finalMsg = message.content;
            let titleString = "";

            if (channel.guild_id) {
                const guild = GuildStore.getGuild(channel.guild_id);
                titleString = `${message.author.username} (${guild.name}, #${channel.name})`;
            }


            switch (channel.type) {
                case ChannelTypes.DM:
                    titleString = message.author.username.trim();
                    break;
                case ChannelTypes.GROUP_DM:
                    const channelName = channel.name.trim() ?? channel.rawRecipients.map(e => e.username).join(", ");
                    titleString = `${message.author.username} (${channelName})`;
                    break;
            }

            if (message.referenced_message) {
                titleString += t(plugin.xSOverlay.notification.message.reply);
            }

            if (message.embeds.length > 0) {
                finalMsg += t(plugin.xSOverlay.notification.message.embed);
                if (message.content === "") {
                    finalMsg = t(plugin.xSOverlay.notification.message.onlyEmbed);
                }
            }

            if (message.sticker_items) {
                finalMsg += t(plugin.xSOverlay.notification.message.sticker);
                if (message.content === "") {
                    finalMsg = t(plugin.xSOverlay.notification.message.onlySticker);
                }
            }

            const images = message.attachments.filter(e =>
                typeof e?.content_type === "string"
                && e?.content_type.startsWith("image")
            );


            images.forEach(img => {
                finalMsg += ` [${t(plugin.xSOverlay.notification.message.image)}: ${img.filename}] `;
            });

            message.attachments.filter(a => a && !a.content_type?.startsWith("image")).forEach(a => {
                finalMsg += ` [${t(plugin.xSOverlay.notification.message.attachment)}: ${a.filename}] `;
            });

            // make mentions readable
            if (message.mentions.length > 0) {
                finalMsg = finalMsg.replace(/<@!?(\d{17,20})>/g, (_, id) => `<color=#${pingColor}><b>@${UserStore.getUser(id)?.username || "unknown-user"}</color></b>`);
            }

            // color role mentions (unity styling btw lol)
            if (message.mention_roles.length > 0) {
                for (const roleId of message.mention_roles) {
                    const role = GuildRoleStore.getRole(channel.guild_id, roleId);
                    if (!role) continue;
                    const roleColor = role.colorString ?? `#${pingColor}`;
                    finalMsg = finalMsg.replace(`<@&${roleId}>`, `<b><color=${roleColor}>@${role.name}</color></b>`);
                }
            }

            // make emotes and channel mentions readable
            const emoteMatches = finalMsg.match(new RegExp("(<a?:\\w+:\\d+>)", "g"));
            const channelMatches = finalMsg.match(new RegExp("<(#\\d+)>", "g"));

            if (emoteMatches) {
                for (const eMatch of emoteMatches) {
                    finalMsg = finalMsg.replace(new RegExp(`${eMatch}`, "g"), `:${eMatch.split(":")[1]}:`);
                }
            }

            // color channel mentions
            if (channelMatches) {
                for (const cMatch of channelMatches) {
                    let channelId = cMatch.split("<#")[1];
                    channelId = channelId.substring(0, channelId.length - 1);
                    finalMsg = finalMsg.replace(new RegExp(`${cMatch}`, "g"), `<b><color=#${channelPingColor}>#${ChannelStore.getChannel(channelId).name}</color></b>`);
                }
            }

            if (shouldIgnoreForChannelType(channel)) return;
            sendMsgNotif(titleString, finalMsg, message);
        }
    },

    start,

    stop() {
        socket.close();
    },

    settingsAboutComponent: () => (
        <>
            <Button onClick={() => sendOtherNotif(t(plugin.xSOverlay.notification.test.content), t(plugin.xSOverlay.notification.test.title))}>
                {t(plugin.xSOverlay.notification.test.button)}
            </Button>
        </>
    )
});

function shouldIgnoreForChannelType(channel: Channel) {
    if (channel.type === ChannelTypes.DM && settings.store.dmNotifications) return false;
    if (channel.type === ChannelTypes.GROUP_DM && settings.store.groupDmNotifications) return false;
    else return !settings.store.serverNotifications;
}

function sendMsgNotif(titleString: string, content: string, message: Message) {
    fetch(`https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.png?size=128`)
        .then(response => response.blob())
        .then(blob => new Promise<string>(resolve => {
            const r = new FileReader();
            r.onload = () => resolve((r.result as string).split(",")[1]);
            r.readAsDataURL(blob);
        })).then(result => {
            const msgData: NotificationObject = {
                type: 1,
                timeout: settings.store.lengthBasedTimeout ? calculateTimeout(content) : settings.store.timeout,
                height: calculateHeight(content),
                opacity: settings.store.opacity,
                volume: settings.store.volume,
                audioPath: settings.store.soundPath,
                title: titleString,
                content: content,
                useBase64Icon: true,
                icon: result,
                sourceApp: "Plexcord"
            };

            sendToOverlay(msgData);
        });
}

function sendOtherNotif(content: string, titleString: string) {
    const msgData: NotificationObject = {
        type: 1,
        timeout: settings.store.lengthBasedTimeout ? calculateTimeout(content) : settings.store.timeout,
        height: calculateHeight(content),
        opacity: settings.store.opacity,
        volume: settings.store.volume,
        audioPath: settings.store.soundPath,
        title: titleString,
        content: content,
        useBase64Icon: false,
        icon: "default",
        sourceApp: "Plexcord"
    };
    sendToOverlay(msgData);
}

async function sendToOverlay(notif: NotificationObject) {
    if (!IS_WEB && settings.store.preferUDP) {
        Native.sendToOverlay(notif);
        return;
    }
    const apiObject: ApiObject = {
        sender: "Plexcord",
        target: "xsoverlay",
        command: "SendNotification",
        jsonData: JSON.stringify(notif),
        rawData: null
    };
    if (socket.readyState !== socket.OPEN) await start();
    socket.send(JSON.stringify(apiObject));
}

function shouldNotify(message: Message, channel: string) {
    const currentUser = UserStore.getCurrentUser();
    if (message.author.id === currentUser.id) return false;
    if (message.author.bot && !settings.store.botNotifications) return false;
    return notificationsShouldNotify(message, channel);
}

function calculateHeight(content: string) {
    if (content.length <= 100) return 100;
    if (content.length <= 200) return 150;
    if (content.length <= 300) return 200;
    return 250;
}

function calculateTimeout(content: string) {
    if (content.length <= 100) return 3;
    if (content.length <= 200) return 4;
    if (content.length <= 300) return 5;
    return 6;
}
