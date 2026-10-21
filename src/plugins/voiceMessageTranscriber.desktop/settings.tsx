/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2026 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { OptionType } from "@utils/types";

import { DeleteCacheButton } from "./components/DeleteCacheButton";
import { cl } from "./utils/misc";

const MODEL_SIZES: Record<string, { quantized: string; full: string; gpu: string; }> = {
    "onnx-community/whisper-tiny": { quantized: "~40 MB", full: "~150 MB", gpu: "~75 MB" },
    "onnx-community/whisper-base": { quantized: "~77 MB", full: "~290 MB", gpu: "~145 MB" },
    "onnx-community/whisper-small": { quantized: "~250 MB", full: "~970 MB", gpu: "~490 MB" },
    "onnx-community/whisper-large-v3-turbo": { quantized: "~1.1 GB", full: "~3.2 GB", gpu: "~1.6 GB" },
};

const LEGACY_MODELS: Record<string, string> = {
    "Xenova/whisper-tiny": "onnx-community/whisper-tiny",
    "Xenova/whisper-base": "onnx-community/whisper-base",
    "Xenova/whisper-small": "onnx-community/whisper-small",
    "Xenova/whisper-medium": "onnx-community/whisper-large-v3-turbo",
};

export function migrateLegacyModel() {
    const migrated = LEGACY_MODELS[settings.store.selectedModel];
    if (migrated) settings.store.selectedModel = migrated;
}

function renderModelOption(option?: { label: string; value: string; }) {
    if (!option) return null;
    return <ModelOption option={option} />;
}

function ModelOption({ option }: { option: { label: string; value: string; }; }) {
    const { quantized, useGpu } = settings.use(["quantized", "useGpu"]);
    const size = MODEL_SIZES[option.value]?.[useGpu ? "gpu" : quantized ? "quantized" : "full"];

    return (
        <div className={cl("model-option")}>
            <span>{option.label}</span>
            {size && (
                <span className={cl("model-size")}>
                    {size}
                </span>
            )}
        </div>
    );
}

export const settings = definePluginSettings({
    embed: {
        label: () => t(plugin.voiceMessageTranscriber.option.embed.label),
        type: OptionType.BOOLEAN,
        description: () => t(plugin.voiceMessageTranscriber.option.embed.description),
        default: false,
        restartNeeded: false
    },
    maintainHorizontal: {
        label: () => t(plugin.voiceMessageTranscriber.option.maintainHorizontal.label),
        type: OptionType.BOOLEAN,
        description: () => t(plugin.voiceMessageTranscriber.option.maintainHorizontal.description),
        default: false,
        restartNeeded: false
    },
    selectedModel: {
        type: OptionType.SELECT,
        description: () => t(plugin.voiceMessageTranscriber.option.selectedModel.description),
        options: [
            {
                label: () => t(plugin.voiceMessageTranscriber.option.selectedModel.onnxcommunitywhispertiny),
                value: "onnx-community/whisper-tiny",
            },
            {
                label: () => t(plugin.voiceMessageTranscriber.text.baseRecommended),
                value: "onnx-community/whisper-base",
                default: true
            },
            {
                label: () => t(plugin.voiceMessageTranscriber.text.small),
                value: "onnx-community/whisper-small"
            },
            {
                label: () => t(plugin.voiceMessageTranscriber.text.largeV3TurboBest),
                value: "onnx-community/whisper-large-v3-turbo"
            }
        ],
        componentProps: {
            renderOptionLabel: (option: { label: string; value: string; }) => renderModelOption(option),
            renderOptionValue: (options: { label: string; value: string; }[]) => renderModelOption(options?.[0]),
        },
        restartNeeded: false
    },
    useGpu: {
        label: () => t(plugin.voiceMessageTranscriber.option.useGpu.label),
        type: OptionType.BOOLEAN,
        description: () => t(plugin.voiceMessageTranscriber.option.useGpu.description),
        default: true,
        restartNeeded: false
    },
    quantized: {
        label: () => t(plugin.voiceMessageTranscriber.option.quantized.label),
        type: OptionType.BOOLEAN,
        description: () => t(plugin.voiceMessageTranscriber.option.quantized.description),
        default: true,
        restartNeeded: false
    },
    deleteModalFiles: {
        label: () => t(plugin.voiceMessageTranscriber.option.deleteModalFiles.label),
        type: OptionType.COMPONENT,
        description: () => t(plugin.voiceMessageTranscriber.option.deleteModalFiles.description),
        component: DeleteCacheButton
    }
});
