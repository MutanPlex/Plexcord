/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugins, t } from "@api/i18n";
import { Devs, PcDevs } from "@utils/constants";
import definePlugin from "@utils/types";

export default definePlugin({
    name: "ProfileCollectionsAPI",
    description: () => t(plugins.metadata.api.description.profileCollections),
    authors: [Devs.thororen, PcDevs.MutanPlex],
    tags: ["appearance", "friends", "utility"],
    patches: [
        {
            // message and member list popouts
            find: '"UserProfilePopout");',
            replacement: {
                match: /user:\i,widgets:.{0,100}?\}\),/,
                replace: "$&Plexcord.Api.ProfileCollections.renderProfileCollections(arguments[0]),",
            }
        },
        // user panel popout
        {
            find: '"UserProfileAccountPopout"',
            replacement: {
                match: /user:\i,widgets:.{0,100}}\),/,
                replace: "$&Plexcord.Api.ProfileCollections.renderProfileCollections(arguments[0]),",
            },
        },
        // dm sidebar
        {
            find: ".SIDEBAR,disableToolbar:",
            replacement: [
                {
                    match: /user:\i,widgets:.{0,100}?\}\),(?=.{0,100}user:\i,currentUser:\i)/,
                    replace: "$&arguments[0]?.isRedesignEnabled&&Plexcord.Api.ProfileCollections.renderProfileCollections({...arguments[0],isSideBar:true}),"
                },
                {
                    match: /user:\i,widgets:.{0,100}?\}\),(?=.{0,100}unownedWishlistItems:\i,wishlistId:\i)/,
                    replace: "$&!arguments[0]?.isRedesignEnabled&&Plexcord.Api.ProfileCollections.renderProfileCollections({...arguments[0],isSideBar:true}),"
                }
            ]
        }
    ]
});
