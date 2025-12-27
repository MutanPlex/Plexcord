/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { addMessagePreSendListener, removeMessagePreSendListener } from "@api/MessageEvents";
import { definePluginSettings } from "@api/Settings";
import { Devs, PcDevs } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";

const settings = definePluginSettings({
    replace: {
        label: t(plugin.questionMarkReplacement.option.replace.label),
        description: t(plugin.questionMarkReplacement.option.replace.description),
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
    description: () => t(plugin.questionMarkReplacement.description),
    authors: [Devs.nyx, PcDevs.MutanPlex],
    settings,

    start() {
        this.preSend = addMessagePreSendListener((_, msg) => {
            msg.content = replaceQuestionMarks(msg.content);
        });
    },

    stop() {
        removeMessagePreSendListener(this.preSend);
    }
});
