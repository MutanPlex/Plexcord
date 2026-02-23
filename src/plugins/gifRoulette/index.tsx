/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { Devs, PcDevs } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";
import { UserSettingsActionCreators } from "@webpack/common";

function getMessage(opts, other) {
    const frecencyStore = UserSettingsActionCreators.FrecencyUserSettingsActionCreators.getCurrentValue();

    const gifsArray = Object.keys(frecencyStore.favoriteGifs.gifs);

    const chosenGifUrl = gifsArray[Math.floor(Math.random() * gifsArray.length)];

    let ownerPing = "";

    if (other.guild != null) {
        if (other.guild.ownerId != null && settings.store.pingOwnerChance && Math.random() <= 0.1) {
            ownerPing = `<@${other.guild.ownerId}>`;
        }
    }

    return `${chosenGifUrl} ${ownerPing}`;
}

const settings = definePluginSettings({
    pingOwnerChance: {
        label: () => t(plugin.gifRoulette.option.pingOwnerChance.label),
        description: () => t(plugin.gifRoulette.option.pingOwnerChance.description),
        type: OptionType.BOOLEAN,
        default: true
    }
});

export default definePlugin({
    name: "GifRoulette",
    description: () => t(plugin.gifRoulette.description),
    authors: [Devs.Samwich, PcDevs.MutanPlex],
    settings,
    commands: [
        {
            name: "gifroulette",
            description: () => t(plugin.gifRoulette.command.gifRoulette.description),
            execute: (opts, other) => ({
                content: getMessage(opts, other)
            }),
        }
    ]
});
