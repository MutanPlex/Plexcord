/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2026 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { OptionType } from "@utils/types";

import { SettingsPresetList } from "./SettingsPresetList";

// 0 FPS freezes (obviously) and anything less than 3p doesn't work
export const COOLDOWN_MS = 1000;
export const MIN_FPS = 1;
export const MIN_RESOLUTION = 3;

export const settings = definePluginSettings({
    maxFPS: {
        label: () => t(plugin.limitlessScreenshare.option.maxFPS.label),
        description: () => t(plugin.limitlessScreenshare.option.maxFPS.description),
        default: 120,
        type: OptionType.NUMBER,
        isValid: (value: number) => value >= MIN_FPS
    },
    fpsComponent: {
        type: OptionType.COMPONENT,
        component: () => SettingsPresetList(false)
    },
    maxResolution: {
        label: () => t(plugin.limitlessScreenshare.option.maxResolution.label),
        description: () => t(plugin.limitlessScreenshare.option.maxResolution.description),
        default: 1080,
        type: OptionType.NUMBER,
        isValid: (value: number) => {
            if (value < MIN_RESOLUTION) return t(plugin.limitlessScreenshare.text.maxResolutionTooLow, { value: MIN_RESOLUTION });
            if (value % (settings.store.roundResolution ? 10 : 1) !== 0) return t(plugin.limitlessScreenshare.text.maxResolutionRound);
            return true;
        }
    },
    resolutionComponent: {
        type: OptionType.COMPONENT,
        component: () => SettingsPresetList(true)
    },
    roundResolution: {
        label: () => t(plugin.limitlessScreenshare.option.roundResolution.label),
        description: () => t(plugin.limitlessScreenshare.option.roundResolution.description),
        default: false,
        type: OptionType.BOOLEAN
    },
    resolutions: {
        label: () => t(plugin.limitlessScreenshare.option.resolutions.label),
        type: OptionType.CUSTOM,
        description: "",
        hidden: true,
        default: [{ label: "480p", value: 480 }, { label: "720p", value: 720 }, { label: "1080p", value: 1080 }, { label: "1440p", value: 1440 }, { label: "Source", value: 0 }],
    },
    fpss: {
        label: () => t(plugin.limitlessScreenshare.option.fpss.label),
        type: OptionType.CUSTOM,
        description: "",
        hidden: true,
        default: [{ label: "15fps", value: 15 }, { label: "30fps", value: 30 }, { label: "60fps", value: 60 }],
    },
});
