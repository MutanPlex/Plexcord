/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { PcDevs } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";

const MIDDLE_CLICK = 1;

let lastMiddleClickUp = 0;

const settings = definePluginSettings({
    scope: {
        label: () => t(plugin.limitMiddleClickPaste.option.scope.label),
        description: () => t(plugin.limitMiddleClickPaste.option.scope.description),
        type: OptionType.SELECT,
        options: [
            {
                label: () => t(plugin.limitMiddleClickPaste.option.scope.always),
                value: "always",
                default: true
            },
            {
                label: () => t(plugin.limitMiddleClickPaste.option.scope.focus),
                value: "focus"
            },
        ]
    },
    threshold: {
        label: () => t(plugin.limitMiddleClickPaste.option.threshold.label),
        description: () => t(plugin.limitMiddleClickPaste.option.threshold.description),
        type: OptionType.NUMBER,
        default: 100,
        onChange(newValue) { if (newValue < 1) { settings.store.threshold = 1; } },
    },
});

export default definePlugin({
    name: "LimitMiddleClickPaste",
    description: () => t(plugin.limitMiddleClickPaste.description),
    authors: [PcDevs.nobody, PcDevs.MutanPlex],
    settings: settings,

    isPastingDisabled(isInput: boolean) {
        const pasteBlocked = Date.now() - lastMiddleClickUp < Math.max(settings.store.threshold, 1);
        const { scope } = settings.store;

        if (!pasteBlocked) return false;
        if (scope === "always") return true;
        if (scope === "focus" && !isInput) return true;

        return false;
    },

    onMouseUp: (e: MouseEvent) => {
        if (e.button === MIDDLE_CLICK) lastMiddleClickUp = Date.now();
    },

    start() {
        document.addEventListener("mouseup", this.onMouseUp);
    },

    stop() {
        document.removeEventListener("mouseup", this.onMouseUp);
    },

    patches: [
        {
            // Detects paste events triggered by the "browser" outside of input fields.
            find: "document.addEventListener(\"paste\",",
            replacement: {
                match: /(?<=paste",(\i)=>{)/,
                replace: "if($1.target.tagName===\"BUTTON\"||$self.isPastingDisabled(false)){$1.preventDefault?.();$1.stopPropagation?.();return;};"
            }
        },
        {
            // Detects paste events triggered inside of Discord's text input.
            find: ",origin:\"clipboard\"});",
            replacement: {
                match: /(?<=handlePaste=(\i)=>{)(?=let)/,
                replace: "if($self.isPastingDisabled(true)){$1.preventDefault?.();$1.stopPropagation?.();return;}"
            }
        },
        {
            // Detects paste events triggered inside of Discord's search box.
            find: "props.handlePastedText&&",
            replacement: {
                match: /(?<=clipboardData\);)/,
                replace: "if($self.isPastingDisabled(true)){arguments[1].preventDefault?.();arguments[1].stopPropagation?.();return;};"
            }
        },
    ],
});
