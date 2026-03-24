/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2022 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { Devs, PcDevs } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";

const settings = definePluginSettings({
    disableAdoptTagPrompt: {
        label: () => t(plugin.guildTagSettings.option.disableAdoptTagPrompt.label),
        description: () => t(plugin.guildTagSettings.option.disableAdoptTagPrompt.description),
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: true
    }
});

export default definePlugin({
    name: "GuildTagSettings",
    description: () => t(plugin.guildTagSettings.description),
    authors: [Devs.thororen, PcDevs.MutanPlex],
    settings,
    patches: [
        {
            find: "GuildTagAvailableCoachmark",
            replacement: {
                match: /return.{0,100}shouldShow/g,
                replace: "return null;$&"
            },
            predicate: () => settings.store.disableAdoptTagPrompt
        }
    ]
});
