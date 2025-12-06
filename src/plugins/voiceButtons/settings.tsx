/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { OptionType } from "@utils/types";

export const settings = definePluginSettings({
    showChatButton: {
        label: () => t(plugin.voiceButtons.option.showChatButton.label),
        description: () => t(plugin.voiceButtons.option.showChatButton.description),
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: true,
    },
    showMuteButton: {
        label: () => t(plugin.voiceButtons.option.showMuteButton.label),
        description: () => t(plugin.voiceButtons.option.showMuteButton.description),
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: true,
    },
    showDeafenButton: {
        label: () => t(plugin.voiceButtons.option.showDeafenButton.label),
        description: () => t(plugin.voiceButtons.option.showDeafenButton.description),
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: true,
    },
    muteSoundboard: {
        label: () => t(plugin.voiceButtons.option.muteSoundboard.label),
        description: () => t(plugin.voiceButtons.option.muteSoundboard.description),
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: false,
    },
    disableVideo: {
        label: () => t(plugin.voiceButtons.option.disableVideo.label),
        description: () => t(plugin.voiceButtons.option.disableVideo.description),
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: false,
    },
    useServer: {
        label: () => t(plugin.voiceButtons.option.useServer.label),
        description: () => t(plugin.voiceButtons.option.useServer.description),
        type: OptionType.BOOLEAN,
        default: false,
        restartNeeded: false,
    },
    serverSelf: {
        label: () => t(plugin.voiceButtons.option.serverSelf.label),
        description: () => t(plugin.voiceButtons.option.serverSelf.description),
        type: OptionType.BOOLEAN,
        default: false,
        restartNeeded: false,
    },
    showButtonsSelf: {
        label: () => t(plugin.voiceButtons.option.showButtonsSelf.label),
        description: () => t(plugin.voiceButtons.option.showButtonsSelf.description),
        type: OptionType.SELECT,
        default: "display",
        restartNeeded: true,
        options: [
            { label: () => t(plugin.voiceButtons.option.showButtonsSelf.display), value: "display" },
            { label: () => t(plugin.voiceButtons.option.showButtonsSelf.hide), value: "hide" },
            { label: () => t(plugin.voiceButtons.option.showButtonsSelf.disable), value: "disable" },
        ],
    },
    whichNameToShow: {
        label: () => t(plugin.voiceButtons.option.whichNameToShow.label),
        description: () => t(plugin.voiceButtons.option.whichNameToShow.description),
        type: OptionType.SELECT,
        default: "both",
        restartNeeded: false,
        options: [
            { label: () => t(plugin.voiceButtons.option.whichNameToShow.global), value: "global" },
            { label: () => t(plugin.voiceButtons.option.whichNameToShow.username), value: "username" },
            { label: () => t(plugin.voiceButtons.option.whichNameToShow.both), value: "both" },
        ]
    }
}, {
    useServer: {
        disabled() {
            return !this.store.showMuteButton && !this.store.showDeafenButton;
        },
    },
    serverSelf: {
        disabled() {
            return !this.store.useServer && !this.store.showMuteButton && !this.store.showDeafenButton;
        },
    }
});
