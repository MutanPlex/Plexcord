/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { OptionType } from "@utils/types";

export const settings = definePluginSettings({
    showChatButton: {
        get label() {
            return t("plugin.voiceButtons.option.showChatButton.label");
        },
        get description() {
            return t("plugin.voiceButtons.option.showChatButton.description");
        },
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: true,
    },
    showMuteButton: {
        get label() {
            return t("plugin.voiceButtons.option.showMuteButton.label");
        },
        get description() {
            return t("plugin.voiceButtons.option.showMuteButton.description");
        },
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: true,
    },
    showDeafenButton: {
        get label() {
            return t("plugin.voiceButtons.option.showDeafenButton.label");
        },
        get description() {
            return t("plugin.voiceButtons.option.showDeafenButton.description");
        },
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: true,
    },
    muteSoundboard: {
        get label() {
            return t("plugin.voiceButtons.option.muteSoundboard.label");
        },
        get description() {
            return t("plugin.voiceButtons.option.muteSoundboard.description");
        },
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: false,
    },
    disableVideo: {
        get label() {
            return t("plugin.voiceButtons.option.disableVideo.label");
        },
        get description() {
            return t("plugin.voiceButtons.option.disableVideo.description");
        },
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: false,
    },
    useServer: {
        get label() {
            return t("plugin.voiceButtons.option.useServer.label");
        },
        get description() {
            return t("plugin.voiceButtons.option.useServer.description");
        },
        type: OptionType.BOOLEAN,
        default: false,
        restartNeeded: false,
    },
    serverSelf: {
        get label() {
            return t("plugin.voiceButtons.option.serverSelf.label");
        },
        get description() {
            return t("plugin.voiceButtons.option.serverSelf.description");
        },
        type: OptionType.BOOLEAN,
        default: false,
        restartNeeded: false,
    },
    showButtonsSelf: {
        get label() {
            return t("plugin.voiceButtons.option.showButtonsSelf.label");
        },
        get description() {
            return t("plugin.voiceButtons.option.showButtonsSelf.description");
        },
        type: OptionType.SELECT,
        default: "display",
        restartNeeded: true,
        get options() {
            return [
                { label: t("plugin.voiceButtons.option.showButtonsSelf.display"), value: "display" },
                { label: t("plugin.voiceButtons.option.showButtonsSelf.hide"), value: "hide" },
                { label: t("plugin.voiceButtons.option.showButtonsSelf.disable"), value: "disable" },
            ];
        },
    },
    whichNameToShow: {
        get label() {
            return t("plugin.voiceButtons.option.whichNameToShow.label");
        },
        get description() {
            return t("plugin.voiceButtons.option.whichNameToShow.description");
        },
        type: OptionType.SELECT,
        default: "both",
        restartNeeded: false,
        get options() {
            return [
                { label: t("plugin.voiceButtons.option.whichNameToShow.global"), value: "global" },
                { label: t("plugin.voiceButtons.option.whichNameToShow.username"), value: "username" },
                { label: t("plugin.voiceButtons.option.whichNameToShow.both"), value: "both" },
            ];
        },
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
