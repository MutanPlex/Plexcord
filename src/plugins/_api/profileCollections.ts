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
            find: /\.POPOUT,onClose:\i}\),nicknameIcons:.+?\.isProvisional/,
            replacement: {
                match: /user:\i,widgets:.{0,100}?\}\),/,
                replace: "$&Plexcord.Api.ProfileCollections.renderProfileCollections(arguments[0]),",
            }
        },
        {
            find: '"UserProfileAccountPopout"',
            replacement: {
                match: /user:\i,widgets:.{0,100}}\),/,
                replace: "$&Plexcord.Api.ProfileCollections.renderProfileCollections(arguments[0]),",
            },
        },
        {
            find: ".SIDEBAR,disableToolbar:",
            replacement: {
                match: /user:(\i),widgets:.{0,100}?\}\),/,
                replace: "$&Plexcord.Api.ProfileCollections.renderProfileCollections({...arguments[0],isSideBar:true}),"
            }
        }
    ]
});
