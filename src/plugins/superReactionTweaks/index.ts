/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated, ant0n, FieryFlames and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { Devs } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";
import { OverridePremiumTypeStore } from "@webpack/common";

export const settings = definePluginSettings({
    superReactByDefault: {
        label: () => t(plugin.superReactionTweaks.option.superReactByDefault.label),
        description: () => t(plugin.superReactionTweaks.option.superReactByDefault.description),
        type: OptionType.BOOLEAN,
        default: true,
    },
    unlimitedSuperReactionPlaying: {
        label: () => t(plugin.superReactionTweaks.option.unlimitedSuperReactionPlaying.label),
        description: () => t(plugin.superReactionTweaks.option.unlimitedSuperReactionPlaying.description),
        type: OptionType.BOOLEAN,
        default: false,
    },
    superReactionPlayingLimit: {
        label: () => t(plugin.superReactionTweaks.option.superReactionPlayingLimit.label),
        description: () => t(plugin.superReactionTweaks.option.superReactionPlayingLimit.description),
        type: OptionType.SLIDER,
        default: 20,
        markers: [0, 5, 10, 20, 40, 60, 80, 100],
        stickToMarkers: true,
    },
}, {
    superReactionPlayingLimit: {
        disabled() { return this.store.unlimitedSuperReactionPlaying; },
    }
});

export default definePlugin({
    name: "SuperReactionTweaks",
    description: () => t(plugin.superReactionTweaks.description),
    authors: [Devs.FieryFlames, Devs.ant0n],

    patches: [
        {
            find: ",BURST_REACTION_EFFECT_PLAY",
            replacement: [
                {
                    // if (inlinedCalculatePlayingCount(a,b) >= limit) return;
                    match: /(BURST_REACTION_EFFECT_PLAY:\i=>{.+?if\()(\(\(\i,\i\)=>.+?\(\i,\i\))>=5+?(?=\))/,
                    replace: (_, rest, playingCount) => `${rest}!$self.shouldPlayBurstReaction(${playingCount})`
                },
                // FIXME(Bundler agressive inline): Remove the non used compability once enough time has passed
                {
                    match: /((\i)=5.+?)if\((.{0,20}?)>=\2\)return;/,
                    replace: (_, rest, playingCount) => `${rest}if(!$self.shouldPlayBurstReaction(${playingCount}))return;`,
                    noWarn: true
                }
            ]
        },
        {
            find: ".EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_HORIZONTAL)",
            replacement: {
                match: /(openPopoutType:void 0(?=.+?isBurstReaction:(\i).+?(\i===\i\.\i.REACTION)).+?\[\2,\i\]=\i\.useState\().+?\)/,
                replace: (_, rest, _isBurstReactionVariable, isReactionIntention) => `${rest}$self.shouldSuperReactByDefault&&${isReactionIntention})`
            }
        }
    ],
    settings,

    shouldPlayBurstReaction(playingCount: number) {
        if (settings.store.unlimitedSuperReactionPlaying) return true;
        if (settings.store.superReactionPlayingLimit > playingCount) return true;
        return false;
    },

    get shouldSuperReactByDefault() {
        return settings.store.superReactByDefault && (OverridePremiumTypeStore.getState().premiumTypeActual != null);
    }
});
