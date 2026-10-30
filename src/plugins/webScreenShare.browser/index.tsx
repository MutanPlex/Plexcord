/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { getUserSettingLazy } from "@api/UserSettings";
import {
    Divider,
    Heading,
    Paragraph,
    Span,
} from "@components/index";
import { Devs, PcDevs } from "@utils/constants";
import { classNameFactory } from "@utils/css";
import { Logger } from "@utils/Logger";
import definePlugin, { OptionType } from "@utils/types";
import { Checkbox, closeModal, Modal, openModal } from "@webpack/common";

import managedStyle from "./styles.css?managed";

const cl = classNameFactory("pc-screen-picker-");

class NotAllowedError extends Error {
    name = "NotAllowedError";
}

const logger = new Logger("PlexcordScreenShare");

const getDisplayMedia = navigator.mediaDevices.getDisplayMedia.bind(navigator.mediaDevices);

function openScreenSharePicker(options: DisplayMediaStreamOptions) {
    return new Promise<MediaStream>((resolve, reject) => {
        const key = openModal(
            props => (
                <ModalComponent
                    modalProps={props}
                    submit={resolve}
                    options={options}
                    close={() => {
                        props.onClose();
                        reject(new NotAllowedError("Permission denied by user"));
                    }}
                />
            ),
            {
                onCloseRequest() {
                    closeModal(key);
                    reject(new NotAllowedError("Permission denied by user"));
                },
                onCloseCallback() {
                    reject(new NotAllowedError("Permission denied by user"));
                }
            }
        );
    });
}

function OptionRadio<Settings extends object, Key extends keyof Settings, Options extends ReadonlyArray<string>>(props: {
    options: Options;
    labels?: Array<string>;
    settings: Settings;
    settingsKey: Key;
    onChange: (option: Options[number]) => void;
}) {
    const { options, settings, settingsKey, labels, onChange } = props;

    return (
        <div className={cl("padding")}>
            <div className={cl("option-radios")}>
                {options.map((option, idx) => (
                    <label className={cl("option-radio")} data-checked={settings[settingsKey] === option} key={option}>
                        <Span weight="bold">{labels?.[idx] ?? option}</Span>
                        <input
                            type="radio"
                            name={settingsKey.toString()}
                            value={option}
                            checked={settings[settingsKey] === option}
                            onChange={() => onChange(option)}
                        />
                    </label>
                ))}
            </div>
        </div>
    );
}

function ModalComponent({ modalProps, submit, close, options }: {
    modalProps: any;
    submit: (data: Promise<MediaStream>) => void;
    close: () => void;
    options: DisplayMediaStreamOptions;
}) {
    const liveSettings = settings.use();
    const disableStreamPreviewsValue = disableStreamPreviews.useSetting();

    async function stream() {
        try {
            const frameRate = Number(liveSettings.frameRate);
            const height = Number(liveSettings.resolution);

            // const conn = [...MediaEngineStore.getMediaEngine().connections].find(
            //     connection => connection.userId === UserStore.getCurrentUser().id
            // );

            const videoOptions = typeof options?.video !== "boolean" && !!options.video ? options.video : {};
            const audioOptions = typeof options?.audio !== "boolean" && !!options.audio ? options.audio : {};
            // allow browser to constrain itself
            delete videoOptions.width;

            submit(
                getDisplayMedia({
                    video: {
                        ...videoOptions,
                        frameRate,
                        height,
                    },
                    audio: {
                        ...audioOptions,
                        restrictOwnAudio: true,
                    },
                    surfaceSwitching: "include",
                    systemAudio: liveSettings.systemAudio ? "exclude" : "include"
                }).then(t => {
                    // w3c says this can fail, they don't say why, so just to be safe
                    try {
                        const video = t.getVideoTracks()?.[0];
                        if (video) video.contentHint = liveSettings.contentHint;
                    } catch { }
                    return t;
                })
            );
        } catch (error) {
            logger.error("Error while submitting stream.", error);
        } finally {
            close();
        }
    }

    return (
        <div className={cl("modal")}>
            <Modal
                {...modalProps}

                size="lg"
                actionBarInput={
                    <div className={cl("summary")}>
                        <Paragraph size="md" weight="semibold" style={{ color: "var(--text-strong, var(--text-default))" }} className={cl("source-or-preset-name")}>{liveSettings.contentHint === "motion" ? t(plugin.webScreenShare.text.gaming) : liveSettings.contentHint === "detail" ? t(plugin.webScreenShare.text.screenshare) : t(plugin.webScreenShare.text.custom)}</Paragraph>
                        <Paragraph size="xs" weight="medium" style={{ color: "var(--text-muted, var(--text-default))" }} className={cl("summary-detail")}>
                            <span>{liveSettings.contentHint === "motion" ? t(plugin.webScreenShare.text.smootherVideo) : liveSettings.contentHint === "detail" ? t(plugin.webScreenShare.text.cleanerText) : t(plugin.webScreenShare.text.userPreset)}</span>
                            <span className={cl("ellipsis")}>•</span>
                            <span>{liveSettings.resolution}p</span>
                            <span className={cl("ellipsis")}>•</span>
                            <span>{liveSettings.frameRate}fps</span>
                            {liveSettings.systemAudio ? <span className={cl("ellipsis")}>•</span> : ""}
                            {liveSettings.systemAudio ? <span>{t(plugin.webScreenShare.text.streamMuted)}</span> : ""}
                        </Paragraph>
                    </div>
                }
                actions={[
                    {
                        variant: "primary",
                        text: t(plugin.webScreenShare.text.stream),
                        onClick: stream
                    }
                ]}
            >

                <div>
                    <div className={cl("flex", "padding")}>
                        <section className={cl("quality-section")}>
                            <Heading tag="h2">{t(plugin.webScreenShare.option.resolution.description)}</Heading>
                            <OptionRadio
                                options={StreamResolution}
                                settings={liveSettings}
                                settingsKey="resolution"
                                onChange={value => (liveSettings.resolution = value)}
                            />
                        </section>

                        <section className={cl("quality-section")}>
                            <Heading tag="h2">{t(plugin.webScreenShare.option.frameRate.description)}</Heading>
                            <OptionRadio
                                options={StreamFps}
                                settings={liveSettings}
                                settingsKey="frameRate"
                                onChange={value => (liveSettings.frameRate = value)}
                            />
                        </section>
                    </div>
                    <div>
                        <Heading tag="h2">{t(plugin.webScreenShare.text.streamMode)}</Heading>
                        <div>
                            <OptionRadio
                                options={StreamContentHint}
                                labels={[t(plugin.webScreenShare.text.smootherVideo), t(plugin.webScreenShare.text.cleanerText), t(plugin.webScreenShare.text.custom)]}
                                settings={liveSettings}
                                settingsKey="contentHint"
                                onChange={option => (liveSettings.contentHint = option)}
                            />
                        </div>
                    </div>
                    <Divider />
                    <div className={cl("padding", "pointer")}>
                        <Checkbox
                            value={!!liveSettings.systemAudio}
                            onChange={(_e, value) => (liveSettings.systemAudio = value)}
                            shape="box"
                            reverse={true}>
                            <div className={cl("control-content")}>
                                <Heading tag="h2">{t(plugin.webScreenShare.text.muteStreamAudio)}</Heading>
                                <Paragraph style={{ color: "var(--text-subtle, var(--text-default))" }}>{t(plugin.webScreenShare.text.preventsSystemAudioFrom)}</Paragraph>
                            </div>
                        </Checkbox>
                    </div>
                    <div className={cl("padding", "pointer")}>
                        <Checkbox
                            value={!disableStreamPreviewsValue}
                            onChange={(_e, value) => disableStreamPreviews.updateSetting(() => !value)}
                            shape="box"
                            reverse={true}>
                            <div className={cl("control-content")}>
                                <Heading tag="h2">{t(plugin.webScreenShare.text.showStreamPreviews)}</Heading>
                                <Paragraph style={{ color: "var(--text-subtle, var(--text-default))" }}>{t(plugin.webScreenShare.text.allowsOthersToSee)}</Paragraph>
                            </div>
                        </Checkbox>
                    </div>
                    <Divider />
                </div>
            </Modal>
        </div>
    );
}

// this is kinda shit and it really should be done via videoQualityManager
const StreamResolution = ["480", "720", "1080", "1440", "2160"] as const;
const StreamFps = ["15", "30", "60", "120"] as const;
const StreamContentHint = ["motion", "detail", ""] as const;

const settings = definePluginSettings({
    resolution: {
        label: () => t(plugin.webScreenShare.option.resolution.label),
        type: OptionType.SELECT,
        description: () => t(plugin.webScreenShare.option.resolution.description),
        hidden: true,
        options: StreamResolution.map(res => ({ label: res, value: res, default: res === "1080" }))
    },
    frameRate: {
        label: () => t(plugin.webScreenShare.option.frameRate.label),
        type: OptionType.SELECT,
        description: () => t(plugin.webScreenShare.option.frameRate.description),
        hidden: true,
        options: StreamFps.map(fps => ({ label: fps, value: fps, default: fps === "60" }))
    },
    contentHint: {
        label: () => t(plugin.webScreenShare.option.contentHint.label),
        type: OptionType.SELECT,
        description: () => t(plugin.webScreenShare.option.contentHint.description),
        hidden: true,
        options: StreamContentHint.map(hint => ({ label: hint, value: hint, default: hint === "motion" }))
    },
    systemAudio: {
        label: () => t(plugin.webScreenShare.option.systemAudio.label),
        type: OptionType.BOOLEAN,
        description: () => t(plugin.webScreenShare.option.systemAudio.description),
        hidden: true
    }
});

const disableStreamPreviews = getUserSettingLazy<boolean>("voiceAndVideo", "disableStreamPreviews")!;

export default definePlugin({
    name: "WebScreenShare",
    authors: [Devs.ThaUnknown, PcDevs.MutanPlex],
    description: () => t(plugin.webScreenShare.description),
    tags: ["voice", "utility"],
    enabledByDefault: true,
    settings,
    managedStyle,

    start() {
        navigator.mediaDevices.getDisplayMedia = openScreenSharePicker;
    },
    stop() {
        navigator.mediaDevices.getDisplayMedia = getDisplayMedia;
    },

    patches: [
        {
            find: "this.getDefaultGoliveQuality()",
            replacement: {
                match: /this\.getDefaultGoliveQuality\(\)/,
                replace: "$self.getGoliveMaxQuality($&)"
            }
        }
    ],
    // this is a maximum, not a true default, this is later constrained properly in GDM anyways
    // and this way we don't pre-emptively neuter the max stream quality
    getGoliveMaxQuality(opts: any) {
        const framerate = 120;
        const height = 2160;
        const width = 3840;

        Object.assign(opts, {
            bitrateMin: 500000,
            bitrateMax: 8000000,
            bitrateTarget: 600000
        });
        if (opts?.encode) {
            Object.assign(opts.encode, {
                framerate,
                width,
                height,
                pixelCount: height * width
            });
        }
        Object.assign(opts.capture, {
            framerate,
            width,
            height,
            pixelCount: height * width
        });
        return opts;
    }
});
