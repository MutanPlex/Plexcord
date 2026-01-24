/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import "./styles.css";

import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import ErrorBoundary from "@components/ErrorBoundary";
import { Devs } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";
import { Tooltip } from "@webpack/common";

const settings = definePluginSettings({
    loop: {
        label: () => t(plugin.pictureInPicture.option.loop.label),
        description: () => t(plugin.pictureInPicture.option.loop.description),
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: false
    }
});

export default definePlugin({
    name: "PictureInPicture",
    description: () => t(plugin.pictureInPicture.description),
    authors: [Devs.Lumap],

    settings,
    patches: [
        {
            find: '["VIDEO","CLIP","AUDIO"]',
            replacement: {
                match: /(\[\i>0&&\i\.length>0.{0,150}?children:)(\i.slice\(\i\))(?<=showDownload:(\i).+?isVisualMediaType:(\i).+?)/,
                replace: (_, rest, origChildren, showDownload, isVisualMediaType) => `${rest}[${showDownload}&&${isVisualMediaType}&&$self.PictureInPictureButton(),...${origChildren}]`
            }
        }
    ],

    PictureInPictureButton: ErrorBoundary.wrap(() => {
        return (
            <Tooltip text={t(plugin.pictureInPicture.tooltip)}>
                {tooltipProps => (
                    <div
                        {...tooltipProps}
                        className="pc-pip-button"
                        role="button"
                        style={{
                            cursor: "pointer",
                            paddingTop: "4px",
                            paddingLeft: "4px",
                            paddingRight: "4px",
                        }}
                        onClick={e => {
                            const video = e.currentTarget.parentNode!.parentNode!.querySelector("video")!;
                            const videoClone = document.body.appendChild(video.cloneNode(true)) as HTMLVideoElement;

                            videoClone.loop = settings.store.loop;
                            videoClone.style.display = "none";
                            videoClone.onleavepictureinpicture = () => videoClone.remove();

                            function launchPiP() {
                                videoClone.currentTime = video.currentTime;
                                videoClone.requestPictureInPicture();
                                video.pause();
                                videoClone.play();
                            }

                            if (videoClone.readyState === 4 /* HAVE_ENOUGH_DATA */)
                                launchPiP();
                            else
                                videoClone.onloadedmetadata = launchPiP;
                        }}
                    >
                        <svg width="24px" height="24px" viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M21 3a1 1 0 0 1 1 1v7h-2V5H4v14h6v2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18zm0 10a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h8zm-1 2h-6v4h6v-4z"
                            />
                        </svg>
                    </div>
                )}
            </Tooltip>
        );
    }, { noop: true })
});
