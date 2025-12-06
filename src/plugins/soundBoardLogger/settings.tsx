/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { Button } from "@components/Button";
import { Heading } from "@components/Heading";
import { Paragraph } from "@components/Paragraph";
import { OptionType } from "@utils/types";
import { TextInput, useState } from "@webpack/common";

import { openSoundBoardLog } from "./components/SoundBoardLog";

const settings = definePluginSettings({
    savedIds: {
        label: () => t(plugin.soundBoardLogger.option.savedIds.label),
        description: () => t(plugin.soundBoardLogger.option.savedIds.description),
        type: OptionType.COMPONENT,
        component: ({ setValue }) => {
            const value = settings.store.savedIds ?? 50;
            const [state, setState] = useState(`${value}`);
            const [shouldShowWarning, setShouldShowWarning] = useState(false);
            const [errorMessage, setErrorMessage] = useState<string | null>(null);

            function handleChange(newValue) {
                const changed = Number(newValue);

                if (Number.isNaN(changed) || changed % 1 !== 0 || changed < 0) {
                    let errorMsg = "";
                    errorMsg += Number.isNaN(changed) ? t(plugin.soundBoardLogger.option.savedIds.notNumber) + "\n" : "";
                    errorMsg += (changed % 1 !== 0) ? t(plugin.soundBoardLogger.option.savedIds.cantDecimal) + "\n" : "";
                    errorMsg += (changed < 0) ? t(plugin.soundBoardLogger.option.savedIds.cantNegative) + "\n" : "";
                    setErrorMessage(errorMsg);
                    return;
                } else {
                    setErrorMessage(null);
                }


                if (changed < value) {
                    setShouldShowWarning(true);
                } else {
                    setShouldShowWarning(false);
                }
                setState(newValue);
                setValue(changed);
            }


            return (
                <section>
                    <Heading>{t(plugin.soundBoardLogger.option.savedIds.heading)}</Heading>
                    <TextInput
                        type="number"
                        pattern="-?[0-9]+"
                        value={state}
                        onChange={handleChange}
                        placeholder={t(plugin.soundBoardLogger.option.savedIds.placeholder)}
                    />
                    {shouldShowWarning && <Paragraph style={{ color: "var(--text-danger)" }}>{t(plugin.soundBoardLogger.option.savedIds.warning)}</Paragraph>}
                    {errorMessage && <Paragraph style={{ color: "var(--text-danger)" }}>{errorMessage}</Paragraph>}
                </section>
            );
        }

    },
    fileType: {
        label: () => t(plugin.soundBoardLogger.option.fileType.label),
        description: () => t(plugin.soundBoardLogger.option.fileType.description),
        type: OptionType.SELECT,
        options: [
            { label: ".ogg", value: ".ogg", default: true },
            { label: ".mp3", value: ".mp3" },
            { label: ".wav", value: ".wav" },
        ],
    },
    openLogs: {
        label: () => t(plugin.soundBoardLogger.option.openLogs.label),
        description: () => t(plugin.soundBoardLogger.option.openLogs.description),
        type: OptionType.COMPONENT,
        component: () =>
            <Button variant="secondary" size="small" onClick={openSoundBoardLog}>{t(plugin.soundBoardLogger.option.openLogs.button)}</Button>
    },
    soundVolume: {
        label: () => t(plugin.soundBoardLogger.option.soundVolume.label),
        description: () => t(plugin.soundBoardLogger.option.soundVolume.description),
        type: OptionType.SLIDER,
        default: 0.5,
        markers: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
    },
    iconLocation: {
        label: () => t(plugin.soundBoardLogger.option.iconLocation.label),
        description: () => t(plugin.soundBoardLogger.option.iconLocation.description),
        type: OptionType.SELECT,
        get options() {
            return [
                { label: t(plugin.soundBoardLogger.option.iconLocation.toolbar), value: "toolbar", default: true },
                { label: t(plugin.soundBoardLogger.option.iconLocation.chatInput), value: "chat" }
            ];
        },
        restartNeeded: true
    },
});

export default settings;
