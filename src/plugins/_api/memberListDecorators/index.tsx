/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2022 Vendicated and contributors
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

import { Devs } from "@utils/constants";
import definePlugin from "@utils/types";

import managedStyle from "./style.css?managed";

export default definePlugin({
    name: "MemberListDecoratorsAPI",
    description: "API to add decorators to member list (both in servers and DMs)",
    authors: [Devs.TheSun, Devs.Ven],

    managedStyle,

    patches: [
        {
            find: ".lostPermission)",
            replacement: [
                {
                    match: /children:\[(?=.{0,300},lostPermissionTooltipText:)/,
                    replace: "children:[Plexcord.Api.MemberListDecorators.__getDecorators(arguments[0],'guild'),"
                }
            ]
        },
        {
            find: "PrivateChannel.renderAvatar",
            replacement: {
                match: /decorators:(\i\.isSystemDM\(\)\?.+?:null)/,
                replace: "decorators:[Plexcord.Api.MemberListDecorators.__getDecorators(arguments[0],'dm'),$1]"
            }
        }
    ]
});
