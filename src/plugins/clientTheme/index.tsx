/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import "./clientTheme.css";

import { t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { Devs, PcDevs } from "@utils/constants";
import definePlugin, { OptionType, StartAt } from "@utils/types";

import { ResetThemeColorComponent, ThemeSettingsComponent } from "./components/Settings";
import { disableClientTheme, startClientTheme } from "./utils/styleUtils";

export const settings = definePluginSettings({
    color: {
        get label() {
            return t("plugin.clientTheme.option.color.label");
        },
        type: OptionType.COMPONENT,
        default: "313338",
        component: ThemeSettingsComponent
    },
    resetColor: {
        get label() {
            return t("plugin.clientTheme.option.resetColor.label");
        },
        type: OptionType.COMPONENT,
        component: ResetThemeColorComponent
    }
});

export default definePlugin({
    name: "ClientTheme",
    authors: [Devs.Nuckyz, PcDevs.MutanPlex],
    description: "Recreation of the old client theme experiment. Add a color to your Discord client theme",
    settings,

    get displayDescription() {
        return t("plugin.clientTheme.description");
    },

    startAt: StartAt.DOMContentLoaded,
    start: () => startClientTheme(settings.store.color),
    stop: disableClientTheme
});
