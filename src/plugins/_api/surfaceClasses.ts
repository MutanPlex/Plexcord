/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2026 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugins, t } from "@api/i18n";
import { PcDevs } from "@utils/constants";
import definePlugin from "@utils/types";

export default definePlugin({
    name: "SurfaceClassesAPI",
    description: () => t(plugins.metadata.api.description.surfaceClasses),
    authors: [PcDevs.benjii],

    patches: [
        {
            find: "AnnouncementsSpoilerIcon:",
            replacement: [
                {
                    match: /"data-fullscreen":\i.{0,150},\{isSidebarOpen:/,
                    replace: '...Plexcord.Api.SurfaceClasses._useSurfaceProps("base"),$&'
                },
                {
                    match: /"data-collapsed":\i,.{0,130}themeOverride/,
                    replace: '...Plexcord.Api.SurfaceClasses._useSurfaceProps("sidebar"),$&'
                },
                {
                    match: /\.CHANNEL_SIDEBAR_RESIZED,\{.{0,100}\i=\{/,
                    replace: '$&...Plexcord.Api.SurfaceClasses._useSurfaceProps("channelList"),'
                },
                {
                    match: /ref:\i.{0,70}#{intl::vTl6Lk::raw}\),/,
                    replace: "...Plexcord.Api.SurfaceClasses._useSurfaceProps('userArea'),$&"
                }
            ]
        },
        {
            find: "#{intl::GUILDS_BAR_A11Y_LABEL}",
            replacement: [
                {
                    match: /"aria-label":.{0,50}#{intl::GUILDS_BAR_A11Y_LABEL}\),children:/,
                    replace: '...Plexcord.Api.SurfaceClasses._useSurfaceProps("guildBar"),$&'
                },
            ]
        },
        {
            find: "#{intl::MEMBERS_LIST_LANDMARK_LABEL}",
            replacement: {
                match: /"aria-labelledby":.{0,130}#{intl::MEMBERS_LIST_LANDMARK_LABEL}/,
                replace: '...(Plexcord.Api.SurfaceClasses._trackSurfaceInstance("membersList",this),Plexcord.Api.SurfaceClasses._getSurfaceProps("membersList")),$&'
            }
        },
        {
            find: '?"refresh-title-bar-small":',
            replacement: {
                match: /"data-window-chrome":"true"/,
                replace: '...Plexcord.Api.SurfaceClasses._useSurfaceProps("headerBar"),$&'
            }
        },
        {
            find: ".Masks.HEADER_BAR_BADGE_TOP:",
            replacement: {
                match: /"aria-label":\i.{0,25}role:\i,ref:\i/,
                replace: '...Plexcord.Api.SurfaceClasses._useSurfaceProps("titleBar"),$&'
            }
        }
    ]
});
