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

import { ApplicationCommandInputType, sendBotMessage } from "@api/Commands";
import { plugin, t } from "@api/i18n";
import { Devs } from "@utils/constants";
import definePlugin from "@utils/types";
import { findByPropsLazy } from "@webpack";

const FriendInvites = findByPropsLazy("createFriendInvite");

export default definePlugin({
    name: "FriendInvites",
    description: () => t(plugin.friendInvites.description),
    authors: [Devs.afn, Devs.Dziurwa],

    commands: [
        {
            name: "create friend invite",
            description: () => t(plugin.friendInvites.command.create.description),
            inputType: ApplicationCommandInputType.BUILT_IN,
            execute: async (args, ctx) => {
                const invite = await FriendInvites.createFriendInvite();

                sendBotMessage(ctx.channel.id, {
                    author: {
                        username: "Plexcord"
                    },
                    content: t(plugin.friendInvites.command.create.message, {
                        code: invite.code,
                        expiration: new Date(invite.expires_at).getTime() / 1000,
                        uses: invite.max_uses
                    })
                });
            }
        },
        {
            name: "view friend invites",
            description: () => t(plugin.friendInvites.command.view.description),
            inputType: ApplicationCommandInputType.BUILT_IN,
            execute: async (_, ctx) => {
                const invites = await FriendInvites.getAllFriendInvites();
                const friendInviteList = invites.map(i =>
                    t(plugin.friendInvites.command.view.message, {
                        code: i.code,
                        uses: i.uses,
                        maxUses: i.max_uses,
                        expiration: new Date(i.expires_at).getTime() / 1000
                    })
                );

                sendBotMessage(ctx.channel.id, {
                    author: {
                        username: "Plexcord"
                    },
                    content: friendInviteList.join("\n") || t(plugin.friendInvites.command.view.noInvites)
                });
            },
        },
        {
            name: "revoke friend invites",
            description: () => t(plugin.friendInvites.command.revoke.description),
            inputType: ApplicationCommandInputType.BUILT_IN,
            execute: async (_, ctx) => {
                await FriendInvites.revokeFriendInvites();

                sendBotMessage(ctx.channel.id, {
                    author: {
                        username: "Plexcord"
                    },
                    content: t(plugin.friendInvites.command.revoke.message)
                });
            },
        },
    ]
});
