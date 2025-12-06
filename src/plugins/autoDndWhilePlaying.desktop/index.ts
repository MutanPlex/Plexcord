/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { getUserSettingLazy } from "@api/UserSettings";
import { Devs, PcDevs } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";

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
    },
    excludeInvisible: {
        label: () => t(plugin.autoDNDWhilePlaying.option.excludeInvisible.label),
        description: () => t(plugin.autoDNDWhilePlaying.option.excludeInvisible.description),
        type: OptionType.BOOLEAN,
        default: false
    },
});

export default definePlugin({
    name: "AutoDNDWhilePlaying",
    description: () => t(plugin.autoDNDWhilePlaying.description),
    authors: [Devs.thororen, PcDevs.MutanPlex],
    settings,

    flux: {
        RUNNING_GAMES_CHANGE({ games }) {
            const status = StatusSettings.getSetting();

            if (settings.store.excludeInvisible && (savedStatus ?? status) === "invisible") return;

            if (games.length > 0) {
                if (status !== settings.store.statusToSet) {
                    savedStatus = status;
                    StatusSettings.updateSetting(settings.store.statusToSet);
                }
            } else if (savedStatus && savedStatus !== settings.store.statusToSet) {
                StatusSettings.updateSetting(savedStatus);
            }
        }
    }
});
