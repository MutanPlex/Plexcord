/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2026 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { BaseText } from "@components/BaseText";
import { Flex } from "@components/Flex";
import { Heading } from "@components/Heading";
import { RenderModalProps } from "@plexcord/discord-types";
import { copyToClipboard } from "@utils/clipboard";
import { Modal, useEffect, useRef, useState } from "@webpack/common";

import { settings } from "../settings";
import { decodeAudio, fetchVoiceMessage } from "../utils/audio";
import { cl, formatTranscript } from "../utils/misc";
import { TranscriptionJob, TranscriptionResult } from "../utils/worker";

export function TranscriptionModal(props: { modalProps: RenderModalProps, src: string, options: { language: string, task: string; }; }) {
    const { modalProps, src, options } = props;
    const [status, setStatus] = useState<string>("initializing");
    const [result, setResult] = useState<TranscriptionResult | null>(null);
    const [showTimestamps, setShowTimestamps] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [copied, setCopied] = useState(false);
    const [retryCount, setRetryCount] = useState(0);

    const jobRef = useRef<TranscriptionJob | null>(null);

    useEffect(() => {
        let active = true;
        (async () => {
            try {
                setStatus("downloading_audio");
                setError(null);

                const blob = await fetchVoiceMessage(src);

                if (!active) return;
                setStatus("processing_audio");
                const audioData = await decodeAudio(blob);

                if (!active) return;
                jobRef.current?.cancel();
                jobRef.current = new TranscriptionJob({
                    onStatus: s => {
                        if (active) setStatus(s);
                    },
                    onComplete: out => {
                        if (active) {
                            setResult(out);
                            setStatus("complete");
                        }
                    },
                    onError: err => {
                        if (active) {
                            setError(String(err));
                            setStatus("error");
                        }
                    },
                    onPartial: partial => {
                        if (active) setResult(partial);
                    }
                });

                const { quantized, selectedModel, useGpu } = settings.store;
                jobRef.current.run(audioData, {
                    model: selectedModel,
                    quantized,
                    useGpu,
                    language: options.language === "auto" ? undefined : options.language,
                    task: options.task
                });
            } catch (err) {
                if (active) {
                    setError(String(err));
                    setStatus("error");
                }
            }
        })();

        return () => {
            active = false;
            jobRef.current?.cancel();
        };
    }, [retryCount]);

    const displayText = formatTranscript(result, showTimestamps);

    const handleCopy = () => {
        if (!displayText) return;
        copyToClipboard(displayText);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <Modal
            {...modalProps}
            size="md"
            title={options.task === "translate" ? t(plugin.voiceMessageTranscriber.text.voiceMessageTranslation) : t(plugin.voiceMessageTranscriber.text.voiceMessageTranscription)}
            actions={[
                ...(error ? [{
                    text: t(plugin.voiceMessageTranscriber.text.retry),
                    variant: "primary" as const,
                    onClick: () => setRetryCount(c => c + 1)
                }] : []),
                ...(result ? [
                    {
                        text: showTimestamps ? t(plugin.voiceMessageTranscriber.text.hideTimestamps) : t(plugin.voiceMessageTranscriber.text.showTimestamps),
                        variant: "secondary" as const,
                        onClick: () => setShowTimestamps(!showTimestamps)
                    },
                    {
                        text: copied ? t(plugin.voiceMessageTranscriber.text.copied) : t(plugin.voiceMessageTranscriber.text.copyText),
                        variant: "secondary" as const,
                        onClick: handleCopy
                    }
                ] : [])
            ]}
        >
            <div className={cl("content")}>
                {error ? (
                    <Flex flexDirection="column" alignItems="center" gap={12} style={{ padding: "32px 16px" }}>
                        <Heading tag="h3" style={{ color: "var(--red-360)" }}>{t(plugin.voiceMessageTranscriber.text.transcriptionFailed)}</Heading>
                        <BaseText size="sm" color="text-muted" style={{ textAlign: "center" }}>
                            {error}
                        </BaseText>
                    </Flex>
                ) : displayText ? (
                    <div className={cl("result")}>
                        <BaseText size="md">{displayText}</BaseText>
                    </div>
                ) : (
                    <Flex flexDirection="column" alignItems="center" justifyContent="center" gap={16} style={{ height: "200px" }}>
                        <Heading tag="h3">
                            {status === "downloading_audio" && t(plugin.voiceMessageTranscriber.text.downloadingAudio)}
                            {status === "processing_audio" && t(plugin.voiceMessageTranscriber.text.processingAudio)}
                            {status === "loading" && t(plugin.voiceMessageTranscriber.text.loadingModel)}
                            {status === "transcribing" && t(plugin.voiceMessageTranscriber.text.transcribing)}
                        </Heading>
                    </Flex>
                )}
            </div>
        </Modal>
    );
}
