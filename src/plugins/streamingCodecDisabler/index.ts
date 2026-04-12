/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { definePluginSettings, Settings } from "@api/Settings";
import { PcDevs } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";
import { MediaEngineStore } from "@webpack/common";

interface Codecs {
    AV1: boolean;
    H265: boolean,
    H264: boolean;
    VP8: boolean;
    VP9: boolean;
}

const originalCodecStatuses: Codecs = {
    AV1: true,
    H265: true,
    H264: true,
    VP8: true,
    VP9: true,
};

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
    authors: [PcDevs.davidkra230],
    settings,

    patches: [
        {
            find: "setVideoBroadcast(this.shouldConnectionBroadcastVideo",
            replacement: {
                match: /setGoLiveSource\(.,.\)\{/,
                replace: "$&$self.updateDisabledCodecs();"
            },
        }
    ],

    async updateDisabledCodecs() {
        const mediaEngine = MediaEngineStore.getMediaEngine();
        const options = Object.keys(originalCodecStatuses);
        const CodecCapabilities = JSON.parse(await new Promise(res => mediaEngine.getCodecCapabilities(res)));
        CodecCapabilities.forEach((codec: { codec: string; encode: boolean; }) => {
            if (options.includes(codec.codec)) {
                originalCodecStatuses[codec.codec] = codec.encode;
            }
        });

        mediaEngine.setAv1Enabled(originalCodecStatuses.AV1 && !Settings.plugins.StreamingCodecDisabler.disableAv1Codec);
        mediaEngine.setH265Enabled(originalCodecStatuses.H265 && !Settings.plugins.StreamingCodecDisabler.disableH265Codec);
        mediaEngine.setH264Enabled(originalCodecStatuses.H264 && !Settings.plugins.StreamingCodecDisabler.disableH264Codec);
    },
});
