/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { definePluginSettings } from "@api/Settings";
import { OptionType } from "@utils/types";
import { React } from "@webpack/common";

export const settings = definePluginSettings({
    memberList: {
        type: OptionType.BOOLEAN,
        description: "Show activity icons in the member list",
        default: true,
        restartNeeded: true,
    },
    iconSize: {
        type: OptionType.SLIDER,
        description: "Size of the activity icons",
        markers: [10, 15, 20],
        default: 15,
        stickToMarkers: false,
    },
    specialFirst: {
        type: OptionType.BOOLEAN,
        description: "Show special activities first (Currently Spotify and Twitch)",
        default: true,
        restartNeeded: false,
    },
    renderGifs: {
        type: OptionType.BOOLEAN,
        description: "Allow rendering GIFs",
        default: true,
        restartNeeded: false,
    },
    divider: {
        type: OptionType.COMPONENT,
        description: "",
        component: () => (
            <div style={{
                width: "100%",
                height: 1,
                borderTop: "thin solid var(--background-modifier-accent)",
                paddingTop: 5,
                paddingBottom: 5
            }} />
        ),
    },
    userPopout: {
        type: OptionType.BOOLEAN,
        description: "Show all activities in the profile popout/sidebar",
        default: true,
        restartNeeded: true,
    },
    allActivitiesStyle: {
        type: OptionType.SELECT,
        description: "Style for showing all activities",
        options: [
            {
                default: true,
                label: "Carousel",
                value: "carousel",
            },
            {
                label: "List",
                value: "list",
            },
        ]
    }
});
