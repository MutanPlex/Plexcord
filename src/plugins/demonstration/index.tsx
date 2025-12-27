/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { playAudio } from "@api/AudioPlayer";
import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { BaseText } from "@components/BaseText";
import { Button } from "@components/Button";
import { FormSwitch } from "@components/FormSwitch";
import { Paragraph } from "@components/Paragraph";
import { Devs, PcDevs } from "@utils/constants";
import { classNameFactory } from "@utils/css";
import { closeModal, ModalCloseButton, ModalContent, ModalHeader, ModalRoot, openModal } from "@utils/modal";
import definePlugin, { OptionType } from "@utils/types";

// definitely not stolen from glide :P
async function injectCSS() {
    var elementToRemove = document.getElementById("DemonstrationStyle");
    if (elementToRemove) {
        elementToRemove.remove();
    }
    const styleElement = document.createElement("style");
    styleElement.id = "DemonstrationStyle";
    const content = await fetch("https://raw.githubusercontent.com/MutanPlex/random-files/refs/heads/main/plexcord-themes/demonstration/Demonstration.theme.css").then(e => e.text());
    styleElement.textContent = content;
    document.documentElement.appendChild(styleElement);
}

const validKeycodes = [
    "Backspace", "Tab", "Enter", "ShiftLeft", "ShiftRight", "ControlLeft", "ControlRight", "AltLeft", "AltRight", "Pause", "CapsLock",
    "Escape", "Space", "PageUp", "PageDown", "End", "Home", "ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown", "PrintScreen", "Insert",
    "Delete", "Digit0", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "KeyA", "KeyB", "KeyC",
    "KeyD", "KeyE", "KeyF", "KeyG", "KeyH", "KeyI", "KeyJ", "KeyK", "KeyL", "KeyM", "KeyN", "KeyO", "KeyP", "KeyQ", "KeyR", "KeyS", "KeyT",
    "KeyU", "KeyV", "KeyW", "KeyX", "KeyY", "KeyZ", "MetaLeft", "MetaRight", "ContextMenu", "Numpad0", "Numpad1", "Numpad2", "Numpad3",
    "Numpad4", "Numpad5", "Numpad6", "Numpad7", "Numpad8", "Numpad9", "NumpadMultiply", "NumpadAdd", "NumpadSubtract", "NumpadDecimal",
    "NumpadDivide", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12", "NumLock", "ScrollLock"
];

const settings = definePluginSettings({
    keyBind: {
        label: () => t(plugin.demonstration.option.keyBind.label),
        description: () => t(plugin.demonstration.option.keyBind.description),
        type: OptionType.STRING,
        default: "F6",
        isValid: (value: string) => {
            if (validKeycodes.includes(value)) {
                return true;
            }
            return false;
        }
    },
    soundVolume: {
        label: () => t(plugin.demonstration.option.soundVolume.label),
        description: () => t(plugin.demonstration.option.soundVolume.description),
        type: OptionType.SLIDER,
        default: 0.5,
        markers: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
    },
    showConfirmationModal: {
        label: () => t(plugin.demonstration.option.showConfirmationModal.label),
        description: () => t(plugin.demonstration.option.showConfirmationModal.description),
        type: OptionType.BOOLEAN,
        default: true,
    }
});

function ToggleModal() {
    const value = !settings.use(["showConfirmationModal"]).showConfirmationModal;
    return (
        <FormSwitch
            description={t(plugin.demonstration.switch.note)}
            value={value}
            onChange={v => { settings.store.showConfirmationModal = !v; }}
            title={t(plugin.demonstration.switch.disable)} />
    );
}

function handleToggle() {
    console.log("Toggling demonstration mode");
    const style = document.getElementById("DemonstrationStyle");
    if (style != null) {
        style.remove();
        playSound("https://github.com/MutanPlex/random-files/raw/main/sounds/demonstration/off.wav");
    }
    else {
        if (settings.store.showConfirmationModal) {
            const cl = classNameFactory("pc-demonstration-modal");

            const key = openModal(props => (
                <ModalRoot {...props}>
                    <ModalHeader className={cl("header")}>
                        <BaseText size="lg" weight="semibold" style={{ flexGrow: 1 }} >Demonstration</BaseText>
                        <ModalCloseButton onClick={() => closeModal(key)}></ModalCloseButton>
                    </ModalHeader>
                    <ModalContent className={cl("content")}>
                        <Paragraph>
                            {t(plugin.demonstration.shortcut)}
                        </Paragraph>
                        <BaseText size="xl" weight="bold" style={{ textAlign: "center", width: "100%", paddingTop: "20px", paddingBottom: "20px" }}>
                            {settings.store.keyBind}
                        </BaseText>
                        <ToggleModal />
                    </ModalContent>
                    <Button
                        onClick={() => {
                            closeModal(key);
                            injectCSS();
                            playSound("https://github.com/MutanPlex/random-files/raw/main/sounds/demonstration/on.wav");
                        }}
                    >{t(plugin.demonstration.okay)}</Button>
                </ModalRoot>
            ));
        } else {
            injectCSS();
            playSound("https://github.com/MutanPlex/random-files/raw/main/sounds/demonstration/on.wav");
        }
    }
}

function handleKeydown(event: KeyboardEvent) {
    if (event.code !== settings.store.keyBind) { return; }
    handleToggle();
}

async function playSound(url: string) {
    playAudio(url, {
        volume: settings.store.soundVolume * 100,
        onError: error => {
            console.error("Error playing sound:", error);
        }
    });
}

export default definePlugin({
    name: "Demonstration",
    description: () => t(plugin.demonstration.description),
    authors: [Devs.Samwich, PcDevs.Panniku, PcDevs.MutanPlex],
    dependencies: ["AudioPlayerAPI"],
    settings,

    toolboxActions: () => ({
        [t(plugin.demonstration.toolbox.toggle)]() {
            handleToggle();
        }
    }),

    settingsAboutComponent: () => {
        return (
            <>
                <BaseText>{t(plugin.demonstration.keycode, {
                    keycode: <a href="https://www.toptal.com/developers/keycode" target="_blank" rel="noreferrer noopener">{t(plugin.demonstration.this)}</a>
                })}</BaseText>
            </>
        );
    },
    start() {
        document.addEventListener("keydown", handleKeydown);
    },
    stop() {
        document.removeEventListener("keydown", handleKeydown);
    }
});
