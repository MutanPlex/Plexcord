/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2026 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugins, t } from "@api/i18n";
import { Devs, PcDevs } from "@utils/constants";
import definePlugin from "@utils/types";

export default definePlugin({
    name: "ProfileSectionsAPI",
    description: () => t(plugins.metadata.api.description.profileSections),
    authors: [Devs.thororen, PcDevs.MutanPlex],
    patches: [
        // dm user sidebar
        {
            find: ".SIDEBAR,disableToolbar:",
            replacement: {
                match: /(#{intl::USER_PROFILE_MEMBER_SINCE}\),.{0,100}userId:(\i\.id)\}\)\}\))(?=.{0,100}unownedWishlistItems:\i,wishlistId:\i)/,
                replace: "$1,Plexcord.Api.ProfileSections.renderProfileSections({userId:$2,isSideBar:true})",
            }
        },
        // user profile modal
        {
            find: ",applicationRoleConnection:",
            replacement: {
                match: /(#{intl::USER_PROFILE_MEMBER_SINCE}\),.{0,100}userId:(\i\.id),.{0,100}}\)}\)),/,
                replace: "$1,Plexcord.Api.ProfileSections.renderProfileSections({userId:$2,isSideBar:false}),",
            }
        },
        // user profile modal v2
        {
            find: ".MODAL_V2,onClose:",
            replacement: {
                match: /(#{intl::USER_PROFILE_MEMBER_SINCE}\),.{0,100}userId:(\i\.id),.{0,100}}\)}\)),/,
                replace: "$1,Plexcord.Api.ProfileSections.renderProfileSections({userId:$2,isSideBar:false}),",
            }
        }
    ]
});
