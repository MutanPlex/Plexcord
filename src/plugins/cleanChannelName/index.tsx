/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { findGroupChildrenByChildId, NavContextMenuPatchCallback } from "@api/ContextMenu";
import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { Channel } from "@plexcord/discord-types";
import { Devs, PcDevs } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";
import { ChannelStore, Menu } from "@webpack/common";

const SMALL_CAPS: Record<string, string> = {
    "ᴀ": "a", "ʙ": "b", "ᴄ": "c", "ᴅ": "d", "ᴇ": "e", "ꜰ": "f", "ɢ": "g", "ʜ": "h", "ɪ": "i", "ᴊ": "j",
    "ᴋ": "k", "ʟ": "l", "ᴍ": "m", "ɴ": "n", "ᴏ": "o", "ᴘ": "p", "ǫ": "q", "ʀ": "r", "ꜱ": "s", "ᴛ": "t",
    "ᴜ": "u", "ᴠ": "v", "ᴡ": "w", "x": "x", "ʏ": "y", "ᴢ": "z",
};

const ORIGINAL_NAME = Symbol("cleanChannelName.original");

let editingChannelId: string | null = null;

const settings = definePluginSettings({
    ignoredChannels: {
        label: () => t(plugin.cleanChannelName.option.ignoredChannels.label),
        type: OptionType.STRING,
        description: () => t(plugin.cleanChannelName.option.ignoredChannels.description),
        default: "",
    },
});

let ignoredRaw = "";
let ignored: string[] = [];

function getIgnored() {
    if (settings.plain.ignoredChannels !== ignoredRaw) {
        ignoredRaw = settings.plain.ignoredChannels;
        ignored = ignoredRaw.split(",").map(id => id.trim()).filter(Boolean);
    }
    return ignored;
}

const patchChannelContextMenu: NavContextMenuPatchCallback = (children, { channel }: { channel: Channel; }) => {
    const list = getIgnored();
    const isIgnored = list.includes(channel.id);

    const group = findGroupChildrenByChildId("mark-channel-read", children) ?? children;
    group.push(
        <Menu.MenuCheckboxItem
            id="pc-clean-channel-name-ignore"
            label={t(plugin.cleanChannelName.text.keepOriginalName)}
            checked={isIgnored}
            action={() => {
                settings.store.ignoredChannels = (isIgnored ? list.filter(id => id !== channel.id) : [...list, channel.id]).join(",");
                ChannelStore.emitChange();
            }}
        />
    );
};

function computeClean(name: string, type: number): string {
    const separator = [2, 4].includes(type) ? " " : "-";
    const cleaned = name
        .normalize("NFKC")
        .replace(/[ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀꜱᴛᴜᴠᴡxʏᴢ]/g, m => SMALL_CAPS[m])
        .replace(/[^ -~]?\p{Extended_Pictographic}[^ -~]?/ug, "")
        .replace(/-?\|-?/g, separator)
        .replace(/-?[^\p{Letter} -~]-?/ug, separator)
        .replace(/-+/g, "-")
        .replace(/(^-|-$)/g, "");
    return cleaned || name;
}

export default definePlugin({
    name: "CleanChannelName",
    description: () => t(plugin.cleanChannelName.description),
    authors: [Devs.AutumnVN, PcDevs.MutanPlex],
    tags: ["servers", "appearance"],
    settings,
    patches: [
        {
            find: "loadAllGuildAndPrivateChannelsFromDisk(){",
            replacement: {
                match: /(?<=getChannel\(\i\)\{if\(null!=\i\)return )\i\(\i\)/,
                replace: "$self.cleanChannelName($&)",
            }
        }
    ],

    contextMenus: {
        "channel-context": patchChannelContextMenu,
        "thread-context": patchChannelContextMenu,
    },

    flux: {
        CHANNEL_SETTINGS_INIT({ channelId }: { channelId: string; }) {
            editingChannelId = channelId;
            ChannelStore.emitChange();
        },
        CHANNEL_SETTINGS_CLOSE() {
            editingChannelId = null;
            ChannelStore.emitChange();
        },
    },

    cleanChannelName(channel?: Channel) {
        if (channel == null) return channel;
        const c = channel as any;

        if (c[ORIGINAL_NAME] !== undefined) return channel;

        c[ORIGINAL_NAME] = channel.name;

        Object.defineProperty(channel, "name", {
            configurable: true,
            enumerable: true,
            get() {
                if (editingChannelId === channel.id || getIgnored().includes(channel.id)) return c[ORIGINAL_NAME];
                return computeClean(c[ORIGINAL_NAME], channel.type);
            },
            set(value: string) {
                c[ORIGINAL_NAME] = value;
            },
        });

        return channel;
    }
});
