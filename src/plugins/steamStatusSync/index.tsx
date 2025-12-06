/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { PcDevs } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";

enum SteamStatus {
    Online = "online",
    Away = "away",
    Invisible = "invisible",
    Offline = "offline",
    None = "none"
}

interface SettingsProto {
    settings: {
        proto: {
            status?: {
                status: {
                    value: String;
                },
                showCurrentGame: {
                    value: Boolean;
                },
            };
        };
    };
}

export const settings = definePluginSettings({
    onlineStatus: {
        label: () => t(plugin.steamStatusSync.option.onlineStatus.label),
        description: () => t(plugin.steamStatusSync.option.onlineStatus.description),
        type: OptionType.SELECT,
        options: [
            { label: () => t(plugin.steamStatusSync.status.online), value: SteamStatus.Online, default: true },
            { label: () => t(plugin.steamStatusSync.status.away), value: SteamStatus.Away },
            { label: () => t(plugin.steamStatusSync.status.invisible), value: SteamStatus.Invisible },
            { label: () => t(plugin.steamStatusSync.status.offline), value: SteamStatus.Offline },
            { label: () => t(plugin.steamStatusSync.status.disabled), value: SteamStatus.None }
        ],
    },
    idleStatus: {
        label: () => t(plugin.steamStatusSync.option.idleStatus.label),
        description: () => t(plugin.steamStatusSync.option.idleStatus.description),
        type: OptionType.SELECT,
        options: [
            { label: () => t(plugin.steamStatusSync.status.online), value: SteamStatus.Online },
            { label: () => t(plugin.steamStatusSync.status.away), value: SteamStatus.Away, default: true },
            { label: () => t(plugin.steamStatusSync.status.invisible), value: SteamStatus.Invisible },
            { label: () => t(plugin.steamStatusSync.status.offline), value: SteamStatus.Offline },
            { label: () => t(plugin.steamStatusSync.status.disabled), value: SteamStatus.None }
        ]
    },
    dndStatus: {
        label: () => t(plugin.steamStatusSync.option.dndStatus.label),
        description: () => t(plugin.steamStatusSync.option.dndStatus.description),
        type: OptionType.SELECT,
        options: [
            { label: () => t(plugin.steamStatusSync.status.online), value: SteamStatus.Online },
            { label: () => t(plugin.steamStatusSync.status.away), value: SteamStatus.Away },
            { label: () => t(plugin.steamStatusSync.status.invisible), value: SteamStatus.Invisible },
            { label: () => t(plugin.steamStatusSync.status.offline), value: SteamStatus.Offline },
            { label: () => t(plugin.steamStatusSync.status.disabled), value: SteamStatus.None, default: true }
        ],
    },
    invisibleStatus: {
        label: () => t(plugin.steamStatusSync.option.invisibleStatus.label),
        description: () => t(plugin.steamStatusSync.option.invisibleStatus.description),
        type: OptionType.SELECT,
        options: [
            { label: () => t(plugin.steamStatusSync.status.online), value: SteamStatus.Online },
            { label: () => t(plugin.steamStatusSync.status.away), value: SteamStatus.Away },
            { label: () => t(plugin.steamStatusSync.status.invisible), value: SteamStatus.Invisible, default: true },
            { label: () => t(plugin.steamStatusSync.status.offline), value: SteamStatus.Offline },
            { label: () => t(plugin.steamStatusSync.status.disabled), value: SteamStatus.None }
        ]
    },
    goInvisibleIfActivityIsHidden: {
        label: () => t(plugin.steamStatusSync.option.goInvisibleIfActivityIsHidden.label),
        description: () => t(plugin.steamStatusSync.option.goInvisibleIfActivityIsHidden.description),
        type: OptionType.BOOLEAN,
    }
});

export default definePlugin({
    name: "SteamStatusSync",
    description: () => t(plugin.steamStatusSync.description),
    authors: [PcDevs.niko],

    settings,

    flux: {
        USER_SETTINGS_PROTO_UPDATE(settingsUpdate: SettingsProto) {
            const protoStatus = settingsUpdate.settings.proto.status;

            if (protoStatus !== undefined) {
                const steamStatus: SteamStatus = settings.store[`${protoStatus.status.value}Status`];

                if (settings.store.goInvisibleIfActivityIsHidden && !protoStatus.showCurrentGame.value) {
                    open(`steam://friends/status/${SteamStatus.Invisible}`);

                    return;
                }
                if (steamStatus === SteamStatus.None) { return; }

                // Open steam protocol URI for status change
                open(`steam://friends/status/${steamStatus}`);
            }
        }
    }
});
