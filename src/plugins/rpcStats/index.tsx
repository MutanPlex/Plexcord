/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { DataStore } from "@api/index";
import { definePluginSettings } from "@api/Settings";
import { Message } from "@plexcord/discord-types";
import { Devs } from "@utils/constants";
import definePlugin, { OptionType, PluginNative } from "@utils/types";
import { ApplicationAssetUtils, FluxDispatcher, UserStore } from "@webpack/common";

export async function getApplicationAsset(key: string): Promise<string> {
    if (/https?:\/\/(cdn|media)\.discordapp\.(com|net)\/attachments\//.test(key)) return "mp:" + key.replace(/https?:\/\/(cdn|media)\.discordapp\.(com|net)\//, "");
    return (await ApplicationAssetUtils.fetchAssetIds("0", [key]))[0];
}

enum StatsDisplay {
    messagesSentToday,
    messagesSentAllTime,
    mostListenedAlbum
}

const settings = definePluginSettings({
    assetURL: {
        label: () => t(plugin.rpcStats.option.assetURL.label),
        description: () => t(plugin.rpcStats.option.assetURL.description),
        type: OptionType.STRING,
        default: "",
        restartNeeded: false,
        onChange: () => { updateData(); }
    },
    RPCTitle: {
        label: () => t(plugin.rpcStats.option.rpcTitle.label),
        description: () => t(plugin.rpcStats.option.rpcTitle.description),
        type: OptionType.STRING,
        default: "RPCStats",
        restartNeeded: false,
        onChange: () => { updateData(); }
    },
    statDisplay: {
        label: () => t(plugin.rpcStats.option.statDisplay.label),
        description: () => t(plugin.rpcStats.option.statDisplay.description),
        type: OptionType.SELECT,
        options: [
            { value: StatsDisplay.messagesSentToday, label: () => t(plugin.rpcStats.option.statDisplay.today), default: true },
            { value: StatsDisplay.messagesSentAllTime, label: () => t(plugin.rpcStats.option.statDisplay.alltime) },
            { value: StatsDisplay.mostListenedAlbum, label: () => t(plugin.rpcStats.option.statDisplay.listened) }
        ],
        restartNeeded: false,
        onChange: () => { updateData(); }
    },
    lastFMApiKey: {
        label: () => t(plugin.rpcStats.option.lastFMApiKey.label),
        description: () => t(plugin.rpcStats.option.lastFMApiKey.description),
        type: OptionType.STRING,
        default: "",
        restartNeeded: false,
        onChange: () => { updateData(); }
    },
    lastFMUsername: {
        label: () => t(plugin.rpcStats.option.lastFMUsername.label),
        description: () => t(plugin.rpcStats.option.lastFMUsername.description),
        type: OptionType.STRING,
        default: "",
        restartNeeded: false,
        onChange: () => { updateData(); }
    },
    albumCoverImage: {
        label: () => t(plugin.rpcStats.option.albumCoverImage.label),
        description: () => t(plugin.rpcStats.option.albumCoverImage.description),
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: false,
        onChange: () => { updateData(); }
    },
    lastFMStatFormat: {
        label: () => t(plugin.rpcStats.option.lastFMStatFormat.label),
        description: () => t(plugin.rpcStats.option.lastFMStatFormat.description),
        type: OptionType.STRING,
        default: "Top album this week: \"$album - $artist\"",
        restartNeeded: false,
        onChange: () => { updateData(); }
    }
});

async function setRpc(disable?: boolean, details?: string, imageURL?: string) {
    if (!disable) {
        if (!settings.store.lastFMApiKey.length && settings.store.statDisplay === StatsDisplay.mostListenedAlbum) {
            FluxDispatcher.dispatch({
                type: "LOCAL_ACTIVITY_UPDATE",
                activity: null,
                socketId: "RPCStats",
            });
        }
    }
    const activity = {
        "application_id": "0",
        "name": settings.store.RPCTitle,
        "details": details || t(plugin.rpcStats.noInfo),
        "type": 0,
        "flags": 1,
        "assets": {
            // i love insanely long statements
            "large_image":
                (imageURL == null || !settings.store.albumCoverImage) ?
                    await getApplicationAsset(settings.store.assetURL.length ? settings.store.assetURL : UserStore.getCurrentUser().getAvatarURL()) :
                    await getApplicationAsset(imageURL)
        }
    };
    FluxDispatcher.dispatch({
        type: "LOCAL_ACTIVITY_UPDATE",
        activity: !disable ? activity : null,
        socketId: "RPCStats",
    });
}

function getCurrentDate(): string {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
}

interface IMessageCreate {
    type: "MESSAGE_CREATE";
    optimistic: boolean;
    isPushNotification: boolean;
    channelId: string;
    message: Message;
}

const Native = PlexcordNative.pluginHelpers.RPCStats as PluginNative<typeof import("./native")>;

async function updateData() {
    switch (settings.store.statDisplay) {
        case StatsDisplay.messagesSentToday:
            let messagesSent;
            if (await DataStore.get("RPCStatsDate") === getCurrentDate()) {
                messagesSent = await DataStore.get("RPCStatsMessages");
            }
            else {
                await DataStore.set("RPCStatsDate", getCurrentDate());
                await DataStore.set("RPCStatsMessages", 0);
                messagesSent = 0;
            }
            setRpc(false, t(plugin.rpcStats.messagesToday, { count: messagesSent }) + "\n");
            break;
        case StatsDisplay.messagesSentAllTime:
            let messagesAllTime = await DataStore.get("RPCStatsAllTimeMessages");
            if (!messagesAllTime) {
                DataStore.set("RPCStatsAllTimeMessages", 0);
                messagesAllTime = 0;
            }
            setRpc(false, t(plugin.rpcStats.messagesAllTime, { count: messagesAllTime }) + "\n");
            break;
        // slightly cursed
        case StatsDisplay.mostListenedAlbum:

            const lastFMDataJson = await Native.fetchTopAlbum(
                {
                    apiKey: settings.store.lastFMApiKey,
                    user: settings.store.lastFMUsername,
                    period: "7day"
                });

            if (lastFMDataJson == null) return;

            const lastFMData = JSON.parse(lastFMDataJson);
            console.log(lastFMData);
            setRpc(false, settings.store.lastFMStatFormat.replace("$album", lastFMData.albumName).replace("$artist", lastFMData.artistName), lastFMData?.albumCoverUrl);
            break;
    }
}

export default definePlugin({
    name: "RPCStats",
    description: () => t(plugin.rpcStats.description),
    authors: [Devs.Samwich],
    async start() {
        updateData();

        setInterval(() => {
            checkForNewDay();
            updateData();
        }, 1000);

    },
    settings,
    stop() {
        setRpc(true);
    },
    flux:
    {
        async MESSAGE_CREATE({ optimistic, type, message }: IMessageCreate) {
            if (optimistic || type !== "MESSAGE_CREATE") return;
            if (message.state === "SENDING") return;
            if (message.author.id !== UserStore.getCurrentUser().id) return;
            await DataStore.set("RPCStatsMessages", await DataStore.get("RPCStatsMessages") + 1);
            await DataStore.set("RPCStatsAllTimeMessages", await DataStore.get("RPCStatsAllTimeMessages") + 1);
            updateData();
        },
    }
});

let lastCheckedDate: string = getCurrentDate();

function checkForNewDay(): void {
    const currentDate = getCurrentDate();
    if (currentDate !== lastCheckedDate) {
        lastCheckedDate = currentDate;
    }
}
