/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { PcDevs } from "@utils/constants";
import { Logger } from "@utils/Logger";
import definePlugin, { OptionType } from "@utils/types";
import { VoiceStateStore } from "@webpack/common";

const logger = new Logger("IdleAutoRestart");
let lastActivity = 0;
let intervalId: ReturnType<typeof setInterval> | null = null;

const settings = definePluginSettings({
    isEnabled: {
        label: () => t(plugin.idleAutoRestart.option.isEnabled.label),
        description: () => t(plugin.idleAutoRestart.option.isEnabled.description),
        type: OptionType.BOOLEAN,
        default: true,
    },
    idleMinutes: {
        label: () => t(plugin.idleAutoRestart.option.idleMinutes.label),
        description: () => t(plugin.idleAutoRestart.option.idleMinutes.description),
        type: OptionType.SLIDER,
        markers: [5, 10, 15, 30, 60, 120],
        default: 30,
        stickToMarkers: false,
    },
});

function onActivity() {
    lastActivity = Date.now();
}

export default definePlugin({
    name: "IdleAutoRestart",
    description: () => t(plugin.idleAutoRestart.description),
    authors: [PcDevs.SteelTech, PcDevs.MutanPlex],
    tags: ["utility"],
    settings,

    toolboxActions: () => ({
        [settings.store.isEnabled ? t(plugin.idleAutoRestart.toolbox.disable) : t(plugin.idleAutoRestart.toolbox.enable)]() {
            settings.store.isEnabled = !settings.store.isEnabled;
        }
    }),

    start() {
        lastActivity = Date.now();

        document.addEventListener("mousemove", onActivity);
        document.addEventListener("keydown", onActivity);
        document.addEventListener("mousedown", onActivity);
        document.addEventListener("wheel", onActivity, { passive: true });

        if (intervalId) clearInterval(intervalId);
        intervalId = setInterval(() => {
            if (!settings.store.isEnabled || VoiceStateStore.isCurrentClientInVoiceChannel()) return;

            const idleMs = settings.store.idleMinutes * 60_000;
            if (Date.now() - lastActivity >= idleMs) {
                logger.info("Idle timeout reached, reloading client");
                location.reload();
            }
        }, 30_000);
    },

    stop() {
        if (intervalId) {
            clearInterval(intervalId);
            intervalId = null;
        }

        document.removeEventListener("mousemove", onActivity);
        document.removeEventListener("keydown", onActivity);
        document.removeEventListener("mousedown", onActivity);
        document.removeEventListener("wheel", onActivity);
    },
});
