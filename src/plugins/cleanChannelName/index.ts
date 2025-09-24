/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { t } from "@api/i18n";
import { Channel } from "@plexcord/discord-types";
import { Devs, PcDevs } from "@utils/constants";
import definePlugin from "@utils/types";

export default definePlugin({
    name: "CleanChannelName",
    authors: [Devs.AutumnVN, PcDevs.MutanPlex],
    description: "Remove all emoji and decor shit from channel names",
    get displayDescription() {
        return t("plugin.cleanChannelName.description");
    },
    patches: [
        {
            find: "loadAllGuildAndPrivateChannelsFromDisk(){",
            replacement: {
                match: /(?<=getChannel\(\i\)\{if\(null!=\i\)return )\i\(\i\)/,
                replace: "$self.cleanChannelName($&)",
            }
        }
    ],

    cleanChannelName(channel?: Channel) {
        if (channel) {
            channel.name = channel.name
                .normalize("NFKC")
                .replace(/[ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀꜱᴛᴜᴠᴡxʏᴢ]/g, match => {
                    const smallCapsToNormal = {
                        "ᴀ": "a", "ʙ": "b", "ᴄ": "c", "ᴅ": "d", "ᴇ": "e", "ꜰ": "f", "ɢ": "g", "ʜ": "h", "ɪ": "i", "ᴊ": "j",
                        "ᴋ": "k", "ʟ": "l", "ᴍ": "m", "ɴ": "n", "ᴏ": "o", "ᴘ": "p", "ǫ": "q", "ʀ": "r", "ꜱ": "s", "ᴛ": "t",
                        "ᴜ": "u", "ᴠ": "v", "ᴡ": "w", "x": "x", "ʏ": "y", "ᴢ": "z"
                    };
                    return smallCapsToNormal[match];
                })
                .replace(/[^\u0020-\u007E]?\p{Extended_Pictographic}[^\u0020-\u007E]?/ug, "")
                .replace(/-?[^\p{Letter}\u0020-\u007E]-?/ug, [2, 4].includes(channel.type) ? " " : "-")
                .replace(/(^-|-$)/g, "")
                .replace(/-+/g, "-");
        }
        return channel;
    }
});
