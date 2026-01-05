/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { t, themes } from "@api/i18n";
import { Settings, useSettings } from "@api/Settings";
import { BaseText } from "@components/BaseText";
import { Flex } from "@components/Flex";
import { CopyIcon, PasteIcon, ResetIcon } from "@components/Icons";
import { copyWithToast } from "@utils/discord";
import { ModalCloseButton, ModalContent, ModalHeader, ModalProps, ModalRoot } from "@utils/modal";
import { showToast, Toasts, Tooltip } from "@webpack/common";
import { type ReactNode } from "react";
import { UserstyleHeader } from "usercss-meta";

import { SettingBooleanComponent, SettingColorComponent, SettingNumberComponent, SettingRangeComponent, SettingSelectComponent, SettingTextComponent } from "./components";

interface UserCSSSettingsModalProps {
    modalProps: ModalProps;
    theme: UserstyleHeader;
    onSettingsReset: () => void;
}

function ExportButton({ themeSettings }: { themeSettings: Settings["userCssVars"][""]; }) {
    return <Tooltip text={t(themes.copy.settings)}>
        {({ onMouseLeave, onMouseEnter }) => (
            <div
                style={{ cursor: "pointer" }}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}

                onClick={() => {
                    copyWithToast(JSON.stringify(themeSettings), t(themes.copy.copiedSettings));
                }}>
                <CopyIcon />
            </div>
        )}
    </Tooltip>;
}

function ImportButton({ themeSettings }: { themeSettings: Settings["userCssVars"][""]; }) {
    return <Tooltip text={t(themes.paste.settings)}>
        {({ onMouseLeave, onMouseEnter }) => (
            <div
                style={{ cursor: "pointer" }}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}

                onClick={async () => {
                    const clip = (await navigator.clipboard.read())[0];

                    if (!clip) return showToast(t(themes.paste.empty), Toasts.Type.FAILURE);

                    if (!clip.types.includes("text/plain"))
                        return showToast(t(themes.paste.invalid), Toasts.Type.FAILURE);

                    try {
                        var potentialSettings: Record<string, string> =
                            JSON.parse(await clip.getType("text/plain").then(b => b.text()));
                    } catch (e) {
                        return showToast(t(themes.paste.invalid), Toasts.Type.FAILURE);
                    }

                    for (const [key, value] of Object.entries(potentialSettings)) {
                        if (Object.prototype.hasOwnProperty.call(themeSettings, key))
                            themeSettings[key] = value;
                    }

                    showToast(t(themes.paste.pasted), Toasts.Type.SUCCESS);
                }}>
                <PasteIcon />
            </div>
        )}
    </Tooltip>;
}

interface ResetButtonProps {
    themeSettings: Settings["userCssVars"];
    themeId: string;
    close: () => void;
    onReset: () => void;
}

function ResetButton({ themeSettings, themeId, close, onReset }: ResetButtonProps) {
    return <Tooltip text={t(themes.reset)}>
        {({ onMouseLeave, onMouseEnter }) => (
            <div
                style={{ cursor: "pointer" }}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}

                onClick={() => {
                    close(); // close the modal first to stop rendering
                    delete themeSettings[themeId];
                    onReset();
                }}>
                <ResetIcon />
            </div>
        )}
    </Tooltip>;
}

export function UserCSSSettingsModal({ modalProps, theme, onSettingsReset }: UserCSSSettingsModalProps) {
    // @ts-expect-error UseSettings<> can't determine this is a valid key
    const { userCssVars } = useSettings(["userCssVars"], false);

    const themeVars = userCssVars[theme.id];

    const controls: ReactNode[] = [];

    for (const [name, varInfo] of Object.entries(theme.vars)) {
        switch (varInfo.type) {
            case "text": {
                controls.push(
                    <SettingTextComponent
                        label={varInfo.label}
                        name={name}
                        themeSettings={themeVars}
                    />
                );
                break;
            }

            case "checkbox": {
                controls.push(
                    <SettingBooleanComponent
                        label={varInfo.label}
                        name={name}
                        themeSettings={themeVars}
                    />
                );
                break;
            }

            case "color": {
                controls.push(
                    <SettingColorComponent
                        label={varInfo.label}
                        name={name}
                        themeSettings={themeVars}
                    />
                );
                break;
            }

            case "number": {
                controls.push(
                    <SettingNumberComponent
                        label={varInfo.label}
                        name={name}
                        themeSettings={themeVars}
                    />
                );
                break;
            }

            case "select": {
                controls.push(
                    <SettingSelectComponent
                        label={varInfo.label}
                        name={name}
                        options={varInfo.options}
                        default={varInfo.default}
                        themeSettings={themeVars}
                    />
                );
                break;
            }

            case "range": {
                controls.push(
                    <SettingRangeComponent
                        label={varInfo.label}
                        name={name}
                        default={varInfo.default}
                        min={varInfo.min}
                        max={varInfo.max}
                        step={varInfo.step}
                        themeSettings={themeVars}
                    />
                );
                break;
            }
        }
    }

    return (
        <ModalRoot {...modalProps}>
            <ModalHeader separator={false}>
                <BaseText size="lg" weight="semibold" style={{ flexGrow: 1 }}>{t(themes.settings.for, { themeName: theme.name })}</BaseText>
                <Flex style={{ gap: 4, marginRight: 4 }} className="pc-settings-usercss-ie-buttons">
                    <ExportButton themeSettings={themeVars} />
                    <ImportButton themeSettings={themeVars} />
                    <ResetButton themeSettings={userCssVars} themeId={theme.id} close={modalProps.onClose} onReset={onSettingsReset} />
                </Flex>
                <ModalCloseButton onClick={modalProps.onClose} />
            </ModalHeader>
            <ModalContent>
                <Flex flexDirection="column" style={{ gap: 12, marginBottom: 16 }}>
                    {controls}
                </Flex>
            </ModalContent>
        </ModalRoot>
    );
}
