/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import "./styles.css";

import { t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { classNameFactory } from "@api/Styles";
import ErrorBoundary from "@components/ErrorBoundary";
import { Devs, PcDevs } from "@utils/constants";
import definePlugin, { makeRange, OptionType } from "@utils/types";
import { ContextMenuApi, FluxDispatcher, Menu, React, Tooltip, useEffect } from "@webpack/common";
import { RefObject } from "react";

import SpeedIcon from "./components/SpeedIcon";

const cl = classNameFactory("pc-media-playback-speed-");

const min = 0.25;
const max = 3.5;
const speeds = makeRange(min, max, 0.25);

const settings = definePluginSettings({
    defaultVoiceMessageSpeed: {
        get label() {
            return t("plugin.mediaPlaybackSpeed.option.defaultVoiceMessageSpeed.label");
        },
        get description() {
            return t("plugin.mediaPlaybackSpeed.option.defaultVoiceMessageSpeed.description");
        },
        type: OptionType.SLIDER,
        default: 1,
        markers: speeds,
    },
    defaultVideoSpeed: {
        get label() {
            return t("plugin.mediaPlaybackSpeed.option.defaultVideoSpeed.label");
        },
        get description() {
            return t("plugin.mediaPlaybackSpeed.option.defaultVideoSpeed.description");
        },
        type: OptionType.SLIDER,
        default: 1,
        markers: speeds,
    },
    defaultAudioSpeed: {
        get label() {
            return t("plugin.mediaPlaybackSpeed.option.defaultAudioSpeed.label");
        },
        get description() {
            return t("plugin.mediaPlaybackSpeed.option.defaultAudioSpeed.description");
        },
        type: OptionType.SLIDER,
        default: 1,
        markers: speeds,
    },
});

type MediaRef = RefObject<HTMLMediaElement> | undefined;

export default definePlugin({
    name: "MediaPlaybackSpeed",
    description: "Allows changing the (default) playback speed of media embeds",
    authors: [Devs.D3SOX, PcDevs.MutanPlex],

    get displayDescription() {
        return t("plugin.mediaPlaybackSpeed.description");
    },

    settings,

    renderPlaybackSpeedComponent: ErrorBoundary.wrap(({ mediaRef }: { mediaRef: MediaRef; }) => {
        const changeSpeed = (speed: number) => {
            const media = mediaRef?.current;
            if (media) {
                media.playbackRate = speed;
            }
        };

        useEffect(() => {
            const media = mediaRef?.current;
            if (!media) return;
            if (media.tagName === "AUDIO") {
                const isVoiceMessage = media.className.includes("audioElement_");
                if (isVoiceMessage) {
                    // Workaround because Discord seems to override it somewhere
                    media.addEventListener("play", () => { changeSpeed(settings.store.defaultVoiceMessageSpeed); }, { once: true });
                } else {
                    changeSpeed(settings.store.defaultAudioSpeed);
                }
            } else if (media.tagName === "VIDEO") {
                changeSpeed(settings.store.defaultVideoSpeed);
            }
        }, [mediaRef]);

        return (
            <Tooltip text={t("plugin.mediaPlaybackSpeed.playbackSpeed")}>
                {tooltipProps => (
                    <button
                        {...tooltipProps}
                        className={cl("icon")}
                        onClick={e => {
                            ContextMenuApi.openContextMenu(e, () =>
                                <Menu.Menu
                                    navId="pc-playback-speed"
                                    onClose={() => FluxDispatcher.dispatch({ type: "CONTEXT_MENU_CLOSE" })}
                                    aria-label={t("plugin.mediaPlaybackSpeed.context.label")}
                                >
                                    <Menu.MenuGroup
                                        label={t("plugin.mediaPlaybackSpeed.playbackSpeed")}
                                    >
                                        {speeds.map(speed => (
                                            <Menu.MenuItem
                                                key={speed}
                                                id={"speed-" + speed}
                                                label={`${speed}x`}
                                                action={() => changeSpeed(speed)}
                                            />
                                        ))}
                                    </Menu.MenuGroup>
                                </Menu.Menu>
                            );
                        }}>
                        <SpeedIcon />
                    </button>
                )}
            </Tooltip>
        );
    }),

    patches: [
        // replace voice message embed speed control because ours provides more speeds
        {
            find: "\"--:--\"",
            replacement: {
                match: /\(0,\i\.jsxs?\)\(.{0,50}\.playbackRateContainer.+?}\)}\)(?<=playbackCacheKey:\i\}=\i,(\i).+?)/,
                replace: "$self.renderPlaybackSpeedComponent({mediaRef:$1})"
            }
        },
        // audio & video embeds
        {
            // need to pass media ref via props to make it easily accessible from inside controls
            find: "renderControls(){",
            replacement: {
                match: /onToggleMuted:this.toggleMuted,/,
                replace: "$&mediaRef:this.mediaRef,"
            }
        },
        {
            find: "AUDIO:\"AUDIO\"",
            replacement: {
                match: /\i.volumeSliderWrapper\}\)\}\),/,
                replace: "$&$self.renderPlaybackSpeedComponent({mediaRef:this?.props?.mediaRef}),"
            }
        }
    ]
});
