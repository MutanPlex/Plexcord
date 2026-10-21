/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2026 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { PcDevs } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";
import { MessageActions, MessageStore, PendingReplyStore, UserStore } from "@webpack/common";

const sedRegex = /^s(?<sep>[/|$#@!])(?<match>(?!\1)(?:(?![^\\]\1).)*.|)\1(?<replace>(?!\1)(?:(?![^\\]\1).)*.|)\1?(?<modes>[rgmisudyv]*)$/;
const settings = definePluginSettings({
    regexByDefault: {
        label: () => t(plugin.sedEnhanced.option.regexByDefault.label),
        description: () => t(plugin.sedEnhanced.option.regexByDefault.description),
        type: OptionType.BOOLEAN,
        default: false
    }
});

export default definePlugin({
    name: "SedEnhanced",
    description: () => t(plugin.sedEnhanced.description),
    authors: [PcDevs.dawn, PcDevs.Willow, PcDevs.kat, PcDevs.MutanPlex],
    tags: ["chat"],
    patches: [
        {
            find: ".SLASH_COMMAND_USED,{",
            replacement: {
                match: /searchReplace:\{match:(\i\(\)\.anyScopeRegex).{500,600}content:""\}\}\}/,
                replace: "searchReplace:{match:$1($self.sedRegex),action:$self.searchReplace}"
            }
        }
    ],
    settings,
    sedRegex,
    searchReplace(content, { isEdit, channel }) {
        if (isEdit) return;

        const pendingReply = PendingReplyStore.getPendingReply(channel.id)?.message;
        const toEdit = pendingReply ?? MessageStore.getLastEditableMessage(channel.id);
        if (pendingReply && pendingReply.author.id !== UserStore.getCurrentUser()?.id || toEdit?.id == null) return { content: "" };

        const groups = content.match(sedRegex)?.groups;
        if (groups?.match == null || groups?.replace == null || groups?.modes == null) return;

        let { match: pattern, replace, modes } = groups;
        const flags = modes.split("");
        const isRegex = flags.includes("r") !== settings.store.regexByDefault;

        if (!isRegex) {
            const escapeChars = /\\([*?+/])/g;
            pattern = pattern.replace(escapeChars, (_, x) => x);
            replace = replace.replace(escapeChars, (_, x) => x);
        }

        let find: string | RegExp = pattern;
        if (isRegex) {
            try {
                const regexFlags = flags.filter(f => "gmisudyv".includes(f)).join("");
                find = new RegExp(pattern, regexFlags);
            } catch {
                return { content: "" };
            }
        }

        const replaced = flags.includes("g") ? toEdit.content.replaceAll(find, replace) : toEdit.content.replace(find, replace);
        if (!replaced.trim() && toEdit.attachments.length === 0) {
            MessageActions.deleteMessage(channel.id, toEdit.id);
        } else if (replaced !== toEdit.content) {
            MessageActions.editMessage(channel.id, toEdit.id, { content: replaced });
        }

        return { content: "" };
    }
});
