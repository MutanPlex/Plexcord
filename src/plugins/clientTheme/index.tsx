/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import "./clientTheme.css";

import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { Devs, PcDevs } from "@utils/constants";
import definePlugin, { OptionType, StartAt } from "@utils/types";

import { ResetThemeColorComponent, ThemeSettingsComponent } from "./components/Settings";
import { disableClientTheme, startClientTheme } from "./utils/styleUtils";

export const settings = definePluginSettings({
    color: {
        label: () => t(plugin.clientTheme.option.color.label),
        type: OptionType.COMPONENT,
        default: "313338",
        component: ThemeSettingsComponent
    },
    resetColor: {
        label: () => t(plugin.clientTheme.option.resetColor.label),
        type: OptionType.COMPONENT,
        component: ResetThemeColorComponent
    }
});

export default definePlugin({
    name: "ClientTheme",
    description: () => t(plugin.clientTheme.description),
    authors: [Devs.Nuckyz, PcDevs.MutanPlex],
    settings,

    startAt: StartAt.DOMContentLoaded,
    start: () => startClientTheme(settings.store.color),
    stop: disableClientTheme
});
