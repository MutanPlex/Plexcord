/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { PcDevs } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";
import { findByPropsLazy } from "@webpack";
import { FluxDispatcher } from "@webpack/common";

const validKeycodes = [
    "Backspace", "Tab", "Enter", "ShiftLeft", "ShiftRight", "ControlLeft", "ControlRight", "AltLeft", "AltRight", "Pause", "CapsLock",
    "Escape", "Space", "PageUp", "PageDown", "End", "Home", "ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown", "PrintScreen", "Insert",
    "Delete", "Digit0", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "KeyA", "KeyB", "KeyC",
    "KeyD", "KeyE", "KeyF", "KeyG", "KeyH", "KeyI", "KeyJ", "KeyK", "KeyL", "KeyM", "KeyN", "KeyO", "KeyP", "KeyQ", "KeyR", "KeyS", "KeyT",
    "KeyU", "KeyV", "KeyW", "KeyX", "KeyY", "KeyZ", "MetaLeft", "MetaRight", "ContextMenu", "Numpad0", "Numpad1", "Numpad2", "Numpad3",
    "Numpad4", "Numpad5", "Numpad6", "Numpad7", "Numpad8", "Numpad9", "NumpadMultiply", "NumpadAdd", "NumpadSubtract", "NumpadDecimal",
    "NumpadDivide", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12", "NumLock", "ScrollLock",
];

const settings = definePluginSettings({
    keyBind: {
        label: () => t(plugin.toggleVideoBind.option.keyBind.label),
        description: () => t(plugin.toggleVideoBind.option.keyBind.description),
        type: OptionType.STRING,
        default: "KeyX",
        isValid: (value: string) => validKeycodes.includes(value),
    },
    reqCtrl: {
        label: () => t(plugin.toggleVideoBind.option.reqCtrl.label),
        description: () => t(plugin.toggleVideoBind.option.reqCtrl.description),
        type: OptionType.BOOLEAN,
        default: true,
    },
    reqShift: {
        label: () => t(plugin.toggleVideoBind.option.reqShift.label),
        description: () => t(plugin.toggleVideoBind.option.reqShift.description),
        type: OptionType.BOOLEAN,
        default: true,
    },
    reqAlt: {
        label: () => t(plugin.toggleVideoBind.option.reqAlt.label),
        description: () => t(plugin.toggleVideoBind.option.reqAlt.description),
        type: OptionType.BOOLEAN,
        default: false,
    },
});

const { isVideoEnabled } = findByPropsLazy("isVideoEnabled");

function handleKeydown({ code, ctrlKey, shiftKey, altKey }: KeyboardEvent) {
    const { keyBind, reqCtrl, reqShift, reqAlt } = settings.store;
    if (keyBind !== code || ctrlKey !== reqCtrl || shiftKey !== reqShift || altKey !== reqAlt) { return; } // please don't think about it

    FluxDispatcher.dispatch({
        type: "MEDIA_ENGINE_SET_VIDEO_ENABLED",
        enabled: !isVideoEnabled(),
    });
}

export default definePlugin({
    name: "ToggleVideoBind",
    description: () => t(plugin.toggleVideoBind.description),
    authors: [PcDevs.mochienya],
    settings,

    start() {
        document.addEventListener("keydown", handleKeydown);
    },
    stop() {
        document.removeEventListener("keydown", handleKeydown);
    },
});
