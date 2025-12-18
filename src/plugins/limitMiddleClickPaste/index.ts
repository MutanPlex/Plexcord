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
import definePlugin, { makeRange, OptionType } from "@utils/types";


const settings = definePluginSettings({
    limitTo: {
        label: () => t(plugin.limitMiddleClickPaste.option.limitTo.label),
        description: () => t(plugin.limitMiddleClickPaste.option.limitTo.description),
        type: OptionType.SELECT,
        options: [
            {
                label: () => t(plugin.limitMiddleClickPaste.option.limitTo.active),
                value: "active",
                default: true
            },
            {
                label: () => t(plugin.limitMiddleClickPaste.option.limitTo.direct),
                value: "direct"
            },
            {
                label: () => t(plugin.limitMiddleClickPaste.option.limitTo.never),
                value: "never"
            }
        ]
    },
    reenableDelay: {
        label: () => t(plugin.limitMiddleClickPaste.option.reenableDelay.label),
        description: () => t(plugin.limitMiddleClickPaste.option.reenableDelay.description),
        type: OptionType.SLIDER,
        markers: makeRange(0, 1000, 500),
        default: 500,
    },
});

let containerEl;

export default definePlugin({
    name: "LimitMiddleClickPaste",
    description: () => t(plugin.limitMiddleClickPaste.description),
    authors: [PcDevs.nobody, PcDevs.MutanPlex],
    settings: settings,

    start() {
        // Discord adds it's paste listeners to #app-mount. We can intercept them
        // by attaching listeners a child element.
        containerEl = document.querySelector("[class*=appAsidePanelWrapper]")!;
        containerEl?.addEventListener("paste", blockPastePropogation);

        // Also add them to body to intercept the event listeners on document
        document?.body?.addEventListener("paste", blockPastePropogation);

        document?.body?.addEventListener("mousedown", disablePasteOnMousedown);
    },

    stop() {
        containerEl?.removeEventListener("paste", blockPastePropogation);

        document?.body?.removeEventListener("paste", blockPastePropogation);

        document?.body?.removeEventListener("mousedown", disablePasteOnMousedown);
        pasteDisabled = false;
    },
});

let pasteDisabled: boolean = false;
let timeoutID: number | undefined;

function blockPastePropogation(e: ClipboardEvent) {
    if (pasteDisabled) {
        e.stopImmediatePropagation();
    }
}

function disablePasteOnMousedown(e: MouseEvent) {
    if (e.button !== 1) return;
    let testEl: HTMLElement | null = null;
    switch (settings.store.limitTo) {
        case "active":
            testEl = document.activeElement as HTMLElement;
            break;
        case "direct":
            testEl = e.target as HTMLElement;
            break;
        case "never":
            testEl = null;
            break;
    }
    if (settings.store.limitTo !== "never" && maybeEditable(testEl)) return;
    window.clearTimeout(timeoutID);
    pasteDisabled = true;
    timeoutID = window.setTimeout(() => {
        pasteDisabled = false;
    }, settings.store.reenableDelay);
}

function maybeEditable(el: HTMLElement | null): boolean {
    if (!el) return false;
    if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") return true;
    let parent: HTMLElement | null;
    for (parent = el; parent; parent = parent.parentElement) {
        if (parent.isContentEditable) return true;
    }
    return false;
}
