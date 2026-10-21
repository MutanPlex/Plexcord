/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import "./style.css";

import { plugin, t } from "@api/i18n";
import ErrorBoundary from "@components/ErrorBoundary";
import { Devs, PcDevs } from "@utils/constants";
import definePlugin from "@utils/types";

import { setManaBaseRadioGroup } from "./components/LanguageSelectionModal";
import { VoiceMessageButton } from "./components/VoiceMessageButton";
import { migrateLegacyModel, settings } from "./settings";
import { deleteLegacyCache } from "./utils/cache";
import { terminateWorker } from "./utils/worker";

const VoiceMessageButtonWrapped = ErrorBoundary.wrap(VoiceMessageButton, { noop: true });

export default definePlugin({
    name: "VoiceMessageTranscriber",
    authors: [Devs.TheSun, PcDevs.tt, PcDevs.MutanPlex],
    description: () => t(plugin.voiceMessageTranscriber.description),
    tags: ["chat", "media", "utility", "voice"],
    patches: [
        {
            find: ".VOICE_MESSAGE)),",
            replacement: {
                match: /"source",{src:(\i).{0,700}duration:\i}\),/,
                replace: "$&$self.button($1),"
            }
        },
        {
            find: '"data-mana-component":"BaseRadioGroup"',
            replacement: {
                match: /(?=function (\i)\(\i\)\{.{0,400}"data-mana-component":"BaseRadioGroup")/,
                replace: "$self.ManaBaseRadioGroup=$1;"
            }
        },
    ],
    set ManaBaseRadioGroup(value: Parameters<typeof setManaBaseRadioGroup>[0]) {
        setManaBaseRadioGroup(value);
    },
    settings,

    start() {
        migrateLegacyModel();
        deleteLegacyCache();
    },

    stop() {
        terminateWorker();
    },

    button(src: string) {
        return <VoiceMessageButtonWrapped src={src} />;
    },
});
