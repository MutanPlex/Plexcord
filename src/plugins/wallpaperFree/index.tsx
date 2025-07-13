/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import "./styles.css";

import { definePluginSettings } from "@api/Settings";
import { ErrorBoundary } from "@components/index";
import { Channel } from "@plexcord/discord-types";
import { Devs } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";
import { useStateFromStores } from "@webpack/common";

import { ChannelContextPatch, GuildContextPatch, UserContextPatch } from "./components/ctxmenu";
import { GlobalDefaultComponent, TipsComponent } from "./components/util";
import { WallpaperFreeStore } from "./store";


export const settings = definePluginSettings({
    globalDefault: {
        description: "Set a global default wallpaper for all channels.",
        type: OptionType.COMPONENT,
        component: GlobalDefaultComponent
    },
    stylingTips: {
        description: "",
        type: OptionType.COMPONENT,
        component: TipsComponent,
    }
});

export default definePlugin({
    name: "WallpaperFree",
    authors: [Devs.Joona],
    description: "Recreation of the old DM wallpaper experiment; Set a background image for any channel or server.",
    patches: [
        {
            find: ".handleSendMessage,onResize",
            group: true,
            replacement: [
                {
                    match: /return.{1,150},(?=keyboardModeEnabled)/,
                    replace: "const pcWallpaperFreeUrl=$self.WallpaperState(arguments[0].channel);$&pcWallpaperFreeUrl,"
                },
                {
                    match: /}\)]}\)](?=.{1,30}messages-)/,
                    replace: "$&.toSpliced(0,0,$self.Wallpaper({url:this.props.pcWallpaperFreeUrl}))"
                }
            ]
        }
    ],
    settings,
    contextMenus: {
        "user-context": UserContextPatch,
        "channel-context": ChannelContextPatch,
        "thread-context": ChannelContextPatch,
        "guild-context": GuildContextPatch,
        "gdm-context": ChannelContextPatch,
    },
    Wallpaper({ url }: { url: string; }) {
        // no we cant place the hook here
        if (!url) return null;

        return <ErrorBoundary noop>
            <div className="wallpaperContainer pc-wpfree-wp-container" style={{
                backgroundImage: `url(${url})`,
            }}></div>
        </ErrorBoundary>;
    },
    WallpaperState(channel: Channel) {
        return useStateFromStores([WallpaperFreeStore], () => WallpaperFreeStore.getUrl(channel));
    }
});
