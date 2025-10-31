/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { getUserSettingLazy } from "@api/UserSettings";
import { Devs, PcDevs } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";

let savedStatus: string | null;

const StatusSettings = getUserSettingLazy<string>("status", "status")!;

const settings = definePluginSettings({
    statusToSet: {
        get label() {
            return t("plugin.autoDndWhilePlaying.option.statusToSet.label");
        },
        get description() {
            return t("plugin.autoDndWhilePlaying.option.statusToSet.description");
        },
        type: OptionType.SELECT,
        get options() {
            return [
                {
                    label: t("plugin.autoDndWhilePlaying.option.statusToSet.online"),
                    value: "online"
                },
                {
                    label: t("plugin.autoDndWhilePlaying.option.statusToSet.idle"),
                    value: "idle"
                },
                {
                    label: t("plugin.autoDndWhilePlaying.option.statusToSet.dnd"),
                    value: "dnd",
                    default: true
                },
                {
                    label: t("plugin.autoDndWhilePlaying.option.statusToSet.invisible"),
                    value: "invisible"
                }
            ];
        }
    },
    excludeInvisible: {
        get label() {
            return t("plugin.autoDndWhilePlaying.option.excludeInvisible.label");
        },
        get description() {
            return t("plugin.autoDndWhilePlaying.option.excludeInvisible.description");
        },
        type: OptionType.BOOLEAN,
        default: false
    },
});

export default definePlugin({
    name: "AutoDNDWhilePlaying",
    description: "Automatically updates your online status (online, idle, dnd) when launching games",
    authors: [Devs.thororen, PcDevs.MutanPlex],
    settings,

    get displayDescription() {
        return t("plugin.autoDndWhilePlaying.description");
    },

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
