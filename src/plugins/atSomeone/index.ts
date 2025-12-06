/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { addMessagePreSendListener, removeMessagePreSendListener } from "@api/MessageEvents";
import { Devs, PcDevs } from "@utils/constants";
import definePlugin from "@utils/types";
import { ChannelStore, GuildMemberStore, SelectedChannelStore, SelectedGuildStore } from "@webpack/common";

export default definePlugin({
    name: "AtSomeone",
    description: () => t(plugin.atSomeone.description),
    authors: [Devs.Joona, PcDevs.MutanPlex],

    patches: [
        {
            find: ".LAUNCHABLE_APPLICATIONS;",
            replacement: [
                {
                    match: /&(\i)\(\)\((\i),\i\(\)\.test\)&&(\i)\.push\(\i\(\)\)/g,
                    replace: "$&,$1()($2,/someone/.test)&&$3.push({text:'@someone',description:t(plugin.atSomeone.description)})"
                },
            ],
        },
        {
            find: "inQuote:",
            replacement: {
                match: /\|here/,
                replace: "$&|someone"
            }
        }
    ],
    start() {
        this.preSend = addMessagePreSendListener((_, msg) => {
            msg.content = msg.content.replace(/@someone/g, () => `<@${randomUser()}>`);
        });
    },

    stop() {
        removeMessagePreSendListener(this.preSend);
    }
});

const randomUser = () => {
    const guildId = SelectedGuildStore.getGuildId();
    if (guildId === null) {
        const dmUsers = ChannelStore.getChannel(SelectedChannelStore.getChannelId()).recipients;
        return dmUsers[~~(dmUsers.length * Math.random())];
    }
    const members = GuildMemberStore.getMembers(guildId);
    return members[~~(members.length * Math.random())].userId;
};
