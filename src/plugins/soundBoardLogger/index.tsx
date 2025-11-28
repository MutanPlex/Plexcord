/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { t } from "@api/i18n";
import { disableStyle, enableStyle } from "@api/Styles";
import { Button } from "@components/Button";
import { Devs, PcDevs } from "@utils/constants";
import definePlugin from "@utils/types";
import { FluxDispatcher, Tooltip } from "@webpack/common";

import { ChatBarIcon, LogIcon } from "./components/Icons";
import { openSoundBoardLog } from "./components/SoundBoardLog";
import settings from "./settings";
import { updateLoggedSounds } from "./store";
import styles from "./styles.css?managed";
import { getListeners } from "./utils";

export default definePlugin({
    name: "SoundBoardLogger",
    authors: [Devs.Moxxie, PcDevs.Fres, Devs.thororen, PcDevs.MutanPlex],
    description: "Logs all soundboards that are played in a voice chat and allows you to download them",
    dependencies: ["AudioPlayerAPI", "ChatInputButtonAPI"],

    get displayDescription() {
        return t("plugin.soundBoardLogger.description");
    },

    patches: [
        {
            predicate: () => settings.store.iconLocation === "toolbar",
            find: '?"BACK_FORWARD_NAVIGATION":',
            replacement: {
                match: /canShowReminder:.+?className:(\i).*?\}\),/,
                replace: "$& $self.renderSoundBoardLoggerButton(),"
            },
        },
    ],
    settings,

    renderSoundBoardLoggerButton() {
        return (
            <Tooltip text="SoundBoardLogger">
                {tooltipProps => (
                    <Button style={{ backgroundColor: "transparent", border: "none" }}
                        {...tooltipProps}
                        size="small"
                        className={"pc-soundboard-log-icon"}
                        onClick={() => openSoundBoardLog()}
                    >
                        <LogIcon />
                    </Button>
                )}
            </Tooltip>
        );
    },

    chatBarButton: {
        icon: LogIcon,
        render: ChatBarIcon
    },

    start() {
        enableStyle(styles);
        FluxDispatcher.subscribe("VOICE_CHANNEL_EFFECT_SEND", async sound => {
            if (!sound?.soundId) return;
            await updateLoggedSounds(sound);
            getListeners().forEach(cb => cb());
        });
    },

    stop() {
        disableStyle(styles);
    }
});
