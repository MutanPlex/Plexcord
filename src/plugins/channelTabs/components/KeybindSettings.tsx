/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { Button } from "@components/Button";
import { Divider } from "@components/Divider";
import ErrorBoundary from "@components/ErrorBoundary";
import { Heading } from "@components/Heading";
import { Paragraph } from "@components/Paragraph";
import { settings } from "@plugins/channelTabs/util";
import { IS_MAC } from "@utils/constants";
import { React, useEffect, useRef, useState } from "@webpack/common";
import { JSX } from "react";

interface KeybindInputProps {
    label: string;
    description: string;
    settingKey: "closeTabKeybind" | "newTabKeybind" | "cycleTabForwardKeybind" | "cycleTabBackwardKeybind";
    enabledKey?: "enableCloseTabShortcut" | "enableNewTabShortcut" | "enableTabCycleShortcut";
}

function KeybindInput({ label, description, settingKey, enabledKey }: KeybindInputProps) {
    const settingsValues = settings.use([settingKey]);
    const currentKeybind = settingsValues[settingKey];
    const [isListening, setIsListening] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (!isListening) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            event.preventDefault();
            event.stopPropagation();

            // Ignore if only modifier keys are pressed
            if (["Control", "Shift", "Alt", "Meta"].includes(event.key)) {
                return;
            }

            // Build keybind string
            const keys: string[] = [];
            if (IS_MAC && event.ctrlKey) {
                if (event.ctrlKey) keys.push("CONTROL");
                if (event.metaKey) keys.push("CTRL");
            } else if (event.ctrlKey) {
                keys.push("CTRL");
            }
            if (event.shiftKey) keys.push("SHIFT");
            if (event.altKey) keys.push("ALT");

            // Normalize the key name
            let mainKey = event.key.toUpperCase();
            if (mainKey === " ") mainKey = "SPACE";
            if (mainKey === "ESCAPE") mainKey = "ESC";

            keys.push(mainKey);

            const keybindString = keys.join("+");

            // Check for conflicts with other keybinds
            const allKeybinds = {
                closeTabKeybind: settings.store.closeTabKeybind,
                newTabKeybind: settings.store.newTabKeybind,
                cycleTabForwardKeybind: settings.store.cycleTabForwardKeybind,
                cycleTabBackwardKeybind: settings.store.cycleTabBackwardKeybind
            };

            // Check if this keybind is already used by another setting
            const conflictKey = Object.entries(allKeybinds).find(
                ([key, value]) => key !== settingKey && value === keybindString
            );

            if (conflictKey) {
                setError(`This keybind is already used by: ${conflictKey[0]}`);
                setTimeout(() => setError(null), 3000);
                setIsListening(false);
                return;
            }

            settings.store[settingKey] = keybindString;
            setError(null);
            setIsListening(false);
        };

        const handleBlur = () => {
            setIsListening(false);
        };

        document.addEventListener("keydown", handleKeyDown, true);
        window.addEventListener("blur", handleBlur);

        buttonRef.current?.focus();

        return () => {
            document.removeEventListener("keydown", handleKeyDown, true);
            window.removeEventListener("blur", handleBlur);
        };
    }, [isListening, settingKey]);

    const handleReset = () => {
        const defaults = {
            closeTabKeybind: "CTRL+W",
            newTabKeybind: "CTRL+T",
            cycleTabForwardKeybind: "CTRL+TAB",
            cycleTabBackwardKeybind: "CTRL+SHIFT+TAB"
        };
        settings.store[settingKey] = defaults[settingKey];
        setError(null);
    };

    const isEnabled = enabledKey ? settings.use([enabledKey])[enabledKey] : true;

    return (
        <div className="channelTabs-keybind-input">
            <div className="channelTabs-keybind-info">
                <Paragraph size="md" weight="semibold">{label}</Paragraph>
                <Paragraph size="sm" weight="normal" style={{ color: "var(--text-muted)" }}>
                    {description}
                </Paragraph>
                {!isEnabled && (
                    <Paragraph size="xs" weight="normal" style={{ color: "var(--text-feedback-critical)" }}>
                        This shortcut is currently disabled
                    </Paragraph>
                )}
                {error && (
                    <Paragraph size="xs" weight="normal" className="channelTabs-keybind-conflict">
                        {error}
                    </Paragraph>
                )}
            </div>
            <div className="channelTabs-keybind-controls">
                <button
                    ref={buttonRef}
                    className={`channelTabs-keybind-button ${isListening ? "listening" : ""}`}
                    onClick={() => setIsListening(true)}
                    disabled={!isEnabled}
                >
                    {isListening ? "Press any key..." : formatKeybind(currentKeybind)}
                </button>
                <Button
                    size="small"
                    variant="primary"
                    onClick={handleReset}
                    disabled={!isEnabled}
                >
                    Reset
                </Button>
            </div>
        </div>
    );
}

function formatKeybind(keybind: string): string {
    const isMac = navigator.platform.toUpperCase().includes("MAC");

    if (!isMac) {
        return keybind;
    }

    // special case: CTRL+TAB must stay as CTRL on Mac (⌘+TAB is system app switcher)
    if (keybind.includes("CTRL+TAB") || keybind.includes("CTRL+SHIFT+TAB")) {
        return keybind.replace("CTRL", "^"); // Show control symbol on Mac
    }

    // for other shortcuts, replace CTRL with CMD symbol on Mac
    return keybind.replace("CTRL", "⌘");
    // this is such a bad way to do this but i dont know man
}

export function KeybindSettings(): JSX.Element {
    const handleResetAll = () => {
        settings.store.closeTabKeybind = "CTRL+W";
        settings.store.newTabKeybind = "CTRL+T";
        settings.store.cycleTabForwardKeybind = "CTRL+TAB";
        settings.store.cycleTabBackwardKeybind = "CTRL+SHIFT+TAB";
    };

    return (
        <ErrorBoundary>
            <Divider />
            <div className="channelTabs-keybind-settings">
                <Heading>{t(plugin.channelTabs.option.keybindsSection.title)}</Heading>
                <Paragraph>
                    {t(plugin.channelTabs.option.keybindsSection.description)}
                </Paragraph>

                <KeybindInput
                    label={t(plugin.channelTabs.option.keybindsSection.closeTab.label)}
                    description={t(plugin.channelTabs.option.keybindsSection.closeTab.description)}
                    settingKey="closeTabKeybind"
                    enabledKey="enableCloseTabShortcut"
                />

                <KeybindInput
                    label={t(plugin.channelTabs.option.keybindsSection.newTab.label)}
                    description={t(plugin.channelTabs.option.keybindsSection.newTab.description)}
                    settingKey="newTabKeybind"
                    enabledKey="enableNewTabShortcut"
                />

                <KeybindInput
                    label={t(plugin.channelTabs.option.keybindsSection.cycleTabsForward.label)}
                    description={t(plugin.channelTabs.option.keybindsSection.cycleTabsForward.description)}
                    settingKey="cycleTabForwardKeybind"
                    enabledKey="enableTabCycleShortcut"
                />

                <KeybindInput
                    label={t(plugin.channelTabs.option.keybindsSection.cycleTabsBackward.label)}
                    description={t(plugin.channelTabs.option.keybindsSection.cycleTabsBackward.description)}
                    settingKey="cycleTabBackwardKeybind"
                    enabledKey="enableTabCycleShortcut"
                />

                <div style={{ marginTop: "16px" }}>
                    <Button
                        variant="dangerPrimary"
                        onClick={handleResetAll}
                    >
                        {t(plugin.channelTabs.option.keybindsSection.reset)}
                    </Button>
                </div>
            </div>
        </ErrorBoundary>
    );
}
