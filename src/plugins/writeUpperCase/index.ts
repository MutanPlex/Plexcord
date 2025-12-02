/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { t } from "@api/i18n";
import { addMessagePreSendListener, MessageSendListener, removeMessagePreSendListener } from "@api/MessageEvents";
import { definePluginSettings } from "@api/Settings";
import { Devs, PcDevs } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";

const settings = definePluginSettings({
    blockedWords: {
        get label() {
            return t("plugin.writeUpperCase.option.blockedWords.label");
        },
        get description() {
            return t("plugin.writeUpperCase.option.blockedWords.description");
        },
        type: OptionType.STRING,
        default: "http, https, ok"
    }
});

const presendObject: MessageSendListener = (_, msg) => {
    const blockedWordsArray: string[] = settings.store.blockedWords.split(", ");
    const sentences = msg.content.split(/(?<=[.!?]+['")\]]*)(\s+)/);

    msg.content = sentences.map((element, i) => {
        if (i % 2 === 1) return element;

        if (!blockedWordsArray.some(word => element.toLowerCase().startsWith(word.toLocaleLowerCase()))) {
            return element.charAt(0).toUpperCase() + element.slice(1);
        } else {
            return element;
        }
    }).join("");
};

export default definePlugin({
    name: "WriteUpperCase",
    description: "Changes the first Letter of each Sentence in Message Inputs to Uppercase",
    authors: [Devs.Samwich, PcDevs.KrystalSkull],
    settings,

    get displayDescription() {
        return t("plugin.writeUpperCase.description");
    },

    start() {
        addMessagePreSendListener(presendObject);
    },
    stop() {
        removeMessagePreSendListener(presendObject);
    }
});
