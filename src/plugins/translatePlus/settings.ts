/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { OptionType } from "@utils/types";

export const settings = definePluginSettings({
    target: {
        label: () => t(plugin.translatePlus.option.target.label),
        type: OptionType.STRING,
        description: () => t(plugin.translatePlus.option.target.description),
        default: "en",
        restartNeeded: true
    },
    toki: {
        label: () => t(plugin.translatePlus.option.toki.label),
        type: OptionType.BOOLEAN,
        description: () => t(plugin.translatePlus.option.toki.description),
        default: true,
        restartNeeded: true
    },
    sitelen: {
        label: () => t(plugin.translatePlus.option.sitelen.label),
        type: OptionType.BOOLEAN,
        description: () => t(plugin.translatePlus.option.sitelen.description),
        default: true,
        restartNeeded: true
    },
    shavian: {
        label: () => t(plugin.translatePlus.option.shavian.label),
        type: OptionType.BOOLEAN,
        description: () => t(plugin.translatePlus.option.shavian.description),
        default: true,
        restartNeeded: true
    }
});
