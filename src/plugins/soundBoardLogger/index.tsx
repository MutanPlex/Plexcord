/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { HeaderBarButton } from "@api/HeaderBar";
import { plugin, t } from "@api/i18n";
import { disableStyle, enableStyle } from "@api/Styles";
import { Devs, PcDevs } from "@utils/constants";
import definePlugin from "@utils/types";
import { FluxDispatcher } from "@webpack/common";

import { ChatBarIcon, LogIcon } from "./components/Icons";
import { openSoundBoardLog } from "./components/SoundBoardLog";
import settings from "./settings";
import { updateLoggedSounds } from "./store";
import styles from "./styles.css?managed";
import { getListeners } from "./utils";

function SoundBoardLoggerButton() {
    return (
        <HeaderBarButton
            tooltip={t(plugin.soundBoardLogger.tooltip)}
            icon={LogIcon}
            onClick={() => openSoundBoardLog()}
        />
    );
}

export default definePlugin({
    name: "SoundBoardLogger",
    authors: [Devs.Moxxie, PcDevs.Fres, Devs.thororen, PcDevs.MutanPlex],
    description: () => t(plugin.soundBoardLogger.description),
    dependencies: ["HeaderBarAPI", "AudioPlayerAPI", "ChatInputButtonAPI"],

    settings,

    headerBarButton: {
        icon: LogIcon,
        render: SoundBoardLoggerButton,
        priority: 500
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
