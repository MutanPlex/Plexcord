/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2026 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { BaseText } from "@components/BaseText";
import { Button } from "@components/Button";
import { IS_MAC } from "@utils/constants";
import { classNameFactory } from "@utils/css";
import { OptionType } from "@utils/types";
import { useEffect, useState } from "@webpack/common";

import { comboFromEvent, formatCombo, setHotkeysSuspended } from "./ui/keyboard";

const cl = classNameFactory("pc-cmdpal-");

export const DEFAULT_HOTKEY = IS_MAC ? ["meta", "shift", "p"] : ["ctrl", "shift", "p"];

const HOTKEY_SETTING_KEYS = ["hotkey"] as ("hotkey" | "closeAfterExecute")[];

function HotkeyRecorder() {
    const [recording, setRecording] = useState(false);
    const { hotkey } = settings.use(HOTKEY_SETTING_KEYS);

    useEffect(() => {
        if (!recording) return;

        setHotkeysSuspended(true);

        function onKeyDown(e: KeyboardEvent) {
            e.preventDefault();
            e.stopPropagation();

            if (e.key === "Escape") {
                setRecording(false);
                return;
            }

            const combo = comboFromEvent(e);
            if (!combo) return;

            settings.store.hotkey = combo;
            setRecording(false);
        }

        function onBlur() {
            setRecording(false);
        }

        document.addEventListener("keydown", onKeyDown, true);
        window.addEventListener("blur", onBlur);

        return () => {
            setHotkeysSuspended(false);
            document.removeEventListener("keydown", onKeyDown, true);
            window.removeEventListener("blur", onBlur);
        };
    }, [recording]);

    return (
        <div className={cl("hotkey-setting")}>
            <BaseText size="md" weight="semibold">{t(plugin.commandPalette.text.openPaletteHotkey)}</BaseText>
            <Button variant="secondary" onClick={() => setRecording(true)}>
                {recording ? t(plugin.commandPalette.text.pressKeys) : formatCombo(hotkey)}
            </Button>
        </div>
    );
}

export const settings = definePluginSettings({
    hotkey: {
        type: OptionType.COMPONENT,
        default: DEFAULT_HOTKEY,
        component: HotkeyRecorder
    },
    closeAfterExecute: {
        label: () => t(plugin.commandPalette.option.closeAfterExecute.label),
        description: () => t(plugin.commandPalette.option.closeAfterExecute.description),
        type: OptionType.BOOLEAN,
        default: true
    }
});
