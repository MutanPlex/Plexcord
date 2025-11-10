/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { t } from "@api/i18n";
import { addMessagePreSendListener, removeMessagePreSendListener } from "@api/MessageEvents";
import { definePluginSettings } from "@api/Settings";
import { Devs, PcDevs } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";

const settings = definePluginSettings({
    replace: {
        get label() {
            return t("plugin.questionMarkReplacement.option.replace.label");
        },
        get description() {
            return t("plugin.questionMarkReplacement.option.replace.description");
        },
        type: OptionType.STRING,
        default: ":face_with_monocle:"
    },
});


function replaceQuestionMarks(content: string): string {
    const allQuestionMarks = content.split("").every(char => char === "?");

    if (allQuestionMarks) {
        return content.replace(/\?/g, settings.store.replace);
    } else {
        return content;
    }
}

export default definePlugin({
    name: "QuestionMarkReplacement",
    description: "Replace all question marks with chosen string, if message only contains question marks.",
    authors: [Devs.nyx, PcDevs.MutanPlex],
    settings,

    get displayDescription() {
        return t("plugin.questionMarkReplacement.description");
    },

    start() {
        this.preSend = addMessagePreSendListener((_, msg) => {
            msg.content = replaceQuestionMarks(msg.content);
        });
    },

    stop() {
        removeMessagePreSendListener(this.preSend);
    }
});
