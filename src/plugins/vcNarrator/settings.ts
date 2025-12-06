/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { Logger } from "@utils/Logger";
import { OptionType } from "@utils/types";

import { VoiceSettingSection } from "./VoiceSetting";

export const getDefaultVoice = () => window.speechSynthesis?.getVoices().find(v => v.default);

export function getCurrentVoice(voices = window.speechSynthesis?.getVoices()) {
    if (!voices) return undefined;

    if (settings.store.voice) {
        const voice = voices.find(v => v.voiceURI === settings.store.voice);
        if (voice) return voice;

        new Logger("VcNarrator").error(`Voice "${settings.store.voice}" not found. Resetting to default.`);
    }

    const voice = voices.find(v => v.default);
    settings.store.voice = voice?.voiceURI;
    return voice;
}

export const settings = definePluginSettings({
    voice: {
        label: () => t(plugin.vcNarrator.option.voice.label),
        type: OptionType.COMPONENT,
        component: VoiceSettingSection,
        get default() {
            return getDefaultVoice()?.voiceURI;
        }
    },
    volume: {
        label: () => t(plugin.vcNarrator.option.volume.label),
        description: () => t(plugin.vcNarrator.option.volume.description),
        type: OptionType.SLIDER,
        default: 1,
        markers: [0, 0.25, 0.5, 0.75, 1],
        stickToMarkers: false
    },
    rate: {
        label: () => t(plugin.vcNarrator.option.rate.label),
        description: () => t(plugin.vcNarrator.option.rate.description),
        type: OptionType.SLIDER,
        default: 1,
        markers: [0.1, 0.5, 1, 2, 5, 10],
        stickToMarkers: false
    },
    sayOwnName: {
        label: () => t(plugin.vcNarrator.option.sayOwnName.label),
        description: () => t(plugin.vcNarrator.option.sayOwnName.description),
        type: OptionType.BOOLEAN,
        default: false
    },
    latinOnly: {
        label: () => t(plugin.vcNarrator.option.latinOnly.label),
        description: () => t(plugin.vcNarrator.option.latinOnly.description),
        type: OptionType.BOOLEAN,
        default: false
    },
    joinMessage: {
        label: () => t(plugin.vcNarrator.option.joinMessage.label),
        description: () => t(plugin.vcNarrator.option.joinMessage.description),
        type: OptionType.STRING,
        default: "{{USER}} joined"
    },
    leaveMessage: {
        label: () => t(plugin.vcNarrator.option.leaveMessage.label),
        description: () => t(plugin.vcNarrator.option.leaveMessage.description),
        type: OptionType.STRING,
        default: "{{USER}} left"
    },
    moveMessage: {
        label: () => t(plugin.vcNarrator.option.moveMessage.label),
        description: () => t(plugin.vcNarrator.option.moveMessage.description),
        type: OptionType.STRING,
        default: "{{USER}} moved to {{CHANNEL}}"
    },
    muteMessage: {
        label: () => t(plugin.vcNarrator.option.muteMessage.label),
        description: () => t(plugin.vcNarrator.option.muteMessage.description),
        type: OptionType.STRING,
        default: "{{USER}} muted"
    },
    unmuteMessage: {
        label: () => t(plugin.vcNarrator.option.unmuteMessage.label),
        description: () => t(plugin.vcNarrator.option.unmuteMessage.description),
        type: OptionType.STRING,
        default: "{{USER}} unmuted"
    },
    deafenMessage: {
        label: () => t(plugin.vcNarrator.option.deafenMessage.label),
        description: () => t(plugin.vcNarrator.option.deafenMessage.description),
        type: OptionType.STRING,
        default: "{{USER}} deafened"
    },
    undeafenMessage: {
        label: () => t(plugin.vcNarrator.option.undeafenMessage.label),
        description: () => t(plugin.vcNarrator.option.undeafenMessage.description),
        type: OptionType.STRING,
        default: "{{USER}} undeafened"
    }
});
