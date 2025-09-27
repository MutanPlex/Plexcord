/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { definePluginSettings } from "@api/Settings";
import { getUserSettingLazy } from "@api/UserSettings";
import { Devs, PcDevs } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";
import { PresenceStore, UserStore } from "@webpack/common";

let savedStatus = "";
const StatusSettings = getUserSettingLazy("status", "status");
const settings = definePluginSettings({
    statusToSet: {
        type: OptionType.SELECT,
        description: "Status to set while playing a game",
        options: [
            {
                label: "Online",
                value: "online",
            },
            {
                label: "Idle",
                value: "idle",
            },
            {
                label: "Do Not Disturb",
                value: "dnd",
                default: true
            },
            {
                label: "Invisible",
                value: "invisible",
            }
        ]
    }
});

export default definePlugin({
    name: "StatusWhilePlaying",
    description: "Automatically updates your online status (online, idle, dnd) when launching games",
    authors: [Devs.thororen, PcDevs.MutanPlex],
    settings,
    flux: {
        RUNNING_GAMES_CHANGE({ games }) {
            const userId = UserStore.getCurrentUser().id;
            const status = PresenceStore.getStatus(userId);

            if (games.length > 0) {
                if (status !== settings.store.statusToSet) {
                    savedStatus = status;
                    StatusSettings?.updateSetting(settings.store.statusToSet);
                }
            } else if (savedStatus !== "" && savedStatus !== settings.store.statusToSet) {
                StatusSettings?.updateSetting(savedStatus);
            }
        }
    }
});
