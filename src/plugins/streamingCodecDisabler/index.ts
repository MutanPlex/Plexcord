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

interface CodecCapability {
    codec: string;
    decode: boolean;
    encode: boolean;
}

type CodecType = "AV1" | "H265" | "H264";

const CODEC_CONFIGS = {
    AV1: {
        settingKey: "disableAv1Codec" as const,
        method: "setAv1Enabled" as const,
    },
    H265: {
        settingKey: "disableH265Codec" as const,
        method: "setH265Enabled" as const,
    },
    H264: {
        settingKey: "disableH264Codec" as const,
        method: "setH264Enabled" as const,
    },
} as const;

const originalCodecStatuses = new Map<CodecType, boolean>([
    ["AV1", true],
    ["H265", true],
    ["H264", true],
]);

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

    getMediaEngineInstance() {
        return MediaEngineStore.getMediaEngine();
    },

    updateDisabledCodecs() {
        const mediaEngineInstance = this.getMediaEngineInstance();
        const pluginSettings = Settings.plugins.StreamingCodecDisabler;

        for (const [codec, config] of Object.entries(CODEC_CONFIGS)) {
            const codecType = codec as CodecType;
            const originalStatus = originalCodecStatuses.get(codecType) ?? true;
            const isDisabled = pluginSettings[config.settingKey];
            const shouldEnable = originalStatus && !isDisabled;

            mediaEngineInstance[config.method](shouldEnable);
        }
    },

    async start() {
        try {
            const mediaEngineInstance = this.getMediaEngineInstance();
            const capabilities: CodecCapability[] = JSON.parse(
                await new Promise<string>(resolve =>
                    mediaEngineInstance.getCodecCapabilities(resolve)
                )
            );

            capabilities.forEach(({ codec, encode }) => {
                const codecType = codec as CodecType;
                if (originalCodecStatuses.has(codecType)) {
                    originalCodecStatuses.set(codecType, encode);
                }
            });
        } catch (error) {
            console.error("Failed to initialize codec capabilities:", error);
        }
    },

    stop() {
        const mediaEngineInstance = this.getMediaEngineInstance();

        for (const [codec, config] of Object.entries(CODEC_CONFIGS)) {
            const codecType = codec as CodecType;
            const originalStatus = originalCodecStatuses.get(codecType) ?? true;
            mediaEngineInstance[config.method](originalStatus);
        }
    }
});
