/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2022 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { disableStyle, enableStyle } from "@api/Styles";
import { Devs, PcDevs } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";

import clanBadges from "./styles.css?managed";

const settings = definePluginSettings({
    hideTags: {
        label: () => t(plugin.guildTagSettings.option.hideTags.label),
        description: () => t(plugin.guildTagSettings.option.hideTags.description),
        type: OptionType.BOOLEAN,
        default: false,
        onChange: value => {
            if (value) enableStyle(clanBadges);
            else disableStyle(clanBadges);
        }
    },
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
    ],
    start() {
        if (settings.store.hideTags) enableStyle(clanBadges);
    },
    stop() {
        if (settings.store.hideTags) disableStyle(clanBadges);
    }
});
