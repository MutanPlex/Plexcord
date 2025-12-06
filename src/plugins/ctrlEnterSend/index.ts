/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { Devs, IS_MAC } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";

const settings = definePluginSettings({
    submitRule: {
        label: () => t(plugin.ctrlEnterSend.option.submitRule.label),
        description: () => t(plugin.ctrlEnterSend.option.submitRule.description),
        type: OptionType.SELECT,
        options: [
            {
                label: () => t(plugin.ctrlEnterSend.option.submitRule.ctrlEnter),
                value: "ctrl+enter"
            },
            {
                label: () => t(plugin.ctrlEnterSend.option.submitRule.shiftEnter),
                value: "shift+enter"
            },
            {
                label: () => t(plugin.ctrlEnterSend.option.submitRule.enter),
                value: "enter"
            }
        ],
        default: "ctrl+enter"
    },
    sendMessageInTheMiddleOfACodeBlock: {
        label: () => t(plugin.ctrlEnterSend.option.sendMessageInTheMiddleOfACodeBlock.label),
        description: () => t(plugin.ctrlEnterSend.option.sendMessageInTheMiddleOfACodeBlock.description),
        type: OptionType.BOOLEAN,
        default: true,
    }
});


export default definePlugin({
    name: "CtrlEnterSend",
    description: () => t(plugin.ctrlEnterSend.description),
    authors: [Devs.UlyssesZhan],
    settings,

    patches: [
        // Only one of the two patches will be at effect; Discord often updates to switch between them.
        // See: https://discord.com/channels/1015060230222131221/1032770730703716362/1261398512017477673
        {
            find: ".selectPreviousCommandOption(",
            replacement: {
                match: /(?<=(\i)\.which!==\i\.\i.ENTER\|\|).{0,100}(\(0,\i\.\i\)\(\i\)).{0,100}(?=\|\|\(\i\.preventDefault)/,
                replace: "!$self.shouldSubmit($1,$2)"
            }
        },
        {
            find: "!this.hasOpenCodeBlock()",
            replacement: {
                match: /!(\i).shiftKey&&!(this.hasOpenCodeBlock\(\))&&\(.{0,100}?\)/,
                replace: "$self.shouldSubmit($1, $2)"
            }
        }
    ],
    shouldSubmit(event: KeyboardEvent, codeblock: boolean): boolean {
        let result = false;
        switch (settings.store.submitRule) {
            case "shift+enter":
                result = event.shiftKey;
                break;
            case "ctrl+enter":
                result = IS_MAC ? event.metaKey : event.ctrlKey;
                break;
            case "enter":
                result = !event.shiftKey && !event.ctrlKey;
                break;
        }
        if (!settings.store.sendMessageInTheMiddleOfACodeBlock) {
            result &&= !codeblock;
        }
        return result;
    }
});
