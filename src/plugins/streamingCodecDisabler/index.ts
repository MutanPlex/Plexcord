/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { CodecInfo } from "@plexcord/discord-types";
import { PcDevs } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";

const settings = definePluginSettings({
    disableAv1Codec: {
        label: () => t(plugin.streamingCodecDisabler.option.disableAv1Codec.label),
        description: () => t(plugin.streamingCodecDisabler.option.disableAv1Codec.description),
        type: OptionType.BOOLEAN,
        default: false,
    },
    disableH265Codec: {
        label: () => t(plugin.streamingCodecDisabler.option.disableH265Codec.label),
        description: () => t(plugin.streamingCodecDisabler.option.disableH265Codec.description),
        type: OptionType.BOOLEAN,
        default: false,
    },
    disableH264Codec: {
        label: () => t(plugin.streamingCodecDisabler.option.disableH264Codec.label),
        description: () => t(plugin.streamingCodecDisabler.option.disableH264Codec.description),
        type: OptionType.BOOLEAN,
        default: false,
    },
    disableVP8Codec: {
        label: () => t(plugin.streamingCodecDisabler.option.disableVP8Codec.label),
        description: () => t(plugin.streamingCodecDisabler.option.disableVP8Codec.description),
        type: OptionType.BOOLEAN,
        default: false,
    },
    disableVP9Codec: {
        label: () => t(plugin.streamingCodecDisabler.option.disableVP9Codec.label),
        description: () => t(plugin.streamingCodecDisabler.option.disableVP9Codec.description),
        type: OptionType.BOOLEAN,
        default: false,
    },
});

export default definePlugin({
    name: "StreamingCodecDisabler",
    description: () => t(plugin.streamingCodecDisabler.description),
    tags: ["voice", "utility"],
    authors: [PcDevs.davidkra230],
    settings,

    patches: [
        {
            find: "lastOverrideCodecDenylist.length",
            replacement: {
                match: /(let \i=)(\i\(\i\))(?=,\i=this\.lastOverrideCodecDenylist\.length)/,
                replace: "$1$self.filterCodecs($2)"
            },
        }
    ],

    filterCodecs(codecs: CodecInfo[]) {
        const disabled: Record<string, boolean> = {
            AV1: settings.store.disableAv1Codec,
            H265: settings.store.disableH265Codec,
            H264: settings.store.disableH264Codec,
            VP8: settings.store.disableVP8Codec,
            VP9: settings.store.disableVP9Codec,
        };
        return codecs.map(c => disabled[c.name] ? { ...c, encode: false } : c);
    },
});
