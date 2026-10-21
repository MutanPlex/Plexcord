/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { getUserSettingLazy } from "@api/UserSettings";
import { Devs } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";
import { UserSettingsProtoStore } from "@webpack/common";

let savedStatus: string | null;

const StatusSettings = getUserSettingLazy<string>("status", "status")!;

const settings = definePluginSettings({
    statusToSet: {
        label: () => t(plugin.autoDNDWhilePlaying.option.statusToSet.label),
        description: () => t(plugin.autoDNDWhilePlaying.option.statusToSet.description),
        type: OptionType.SELECT,
        options: [
            {
                label: () => t(plugin.autoDNDWhilePlaying.option.statusToSet.online),
                value: "online"
            },
            {
                label: () => t(plugin.autoDNDWhilePlaying.option.statusToSet.idle),
                value: "idle"
            },
            {
                label: () => t(plugin.autoDNDWhilePlaying.option.statusToSet.dnd),
                value: "dnd",
                default: true
            },
            {
                label: () => t(plugin.autoDNDWhilePlaying.option.statusToSet.invisible),
                value: "invisible"
            }
        ]
    }
});

let lastStatus: string | null = null;

function handleUserSettingsChange() {
    const status = StatusSettings.getSetting();
    if (status !== lastStatus) {
        lastStatus = status;

        savedStatus = null;
    }
}

async function setStatus(status: string) {
    lastStatus = status;
    await StatusSettings.updateSetting(status);
}

export default definePlugin({
    name: "AutoDNDWhilePlaying",
    description: () => t(plugin.autoDNDWhilePlaying.description),
    tags: ["activity", "notifications"],
    authors: [Devs.thororen],
    settings,

    flux: {
        async RUNNING_GAMES_CHANGE({ games }) {
            const status = StatusSettings.getSetting();

            if (games.length > 0) {
                if (status !== settings.store.statusToSet && status !== "invisible") {
                    savedStatus = status;
                    await setStatus(settings.store.statusToSet);
                }
            } else if (savedStatus) {
                const toRestore = savedStatus;
                savedStatus = null;

                if (status !== toRestore) {
                    await setStatus(toRestore);
                }
            }
        }
    },

    start() {
        lastStatus = StatusSettings.getSetting();
        UserSettingsProtoStore.addChangeListener(handleUserSettingsChange);
    },

    stop() {
        UserSettingsProtoStore.removeChangeListener(handleUserSettingsChange);
    }
});
