/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

// brutally ripped out of usercss
// (remove when usercss is merged)

import "./colorStyles.css";

import { classNameFactory } from "@api/Styles";
import { findComponentByCodeLazy } from "@webpack";
import { Forms } from "@webpack/common";

interface ColorPickerProps {
    color: number | null;
    showEyeDropper?: boolean;
    onChange(value: number | null): void;
}

const ColorPicker = findComponentByCodeLazy<ColorPickerProps>(".BACKGROUND_PRIMARY).hex");

const cl = classNameFactory("pc-remix-settings-color-");

interface Props {
    name: string;
    color: number;
    onChange(value: string): void;
}

function hexToColorString(color: number): string {
    return `#${color.toString(16).padStart(6, "0")}`;
}

export function SettingColorComponent({ name, onChange, color }: Props) {
    function handleChange(newColor: number) {
        onChange(hexToColorString(newColor));
    }

    return (
        <Forms.FormSection>
            <div className={cl("swatch-row")}>
                <ColorPicker
                    key={name}
                    color={color}
                    onChange={handleChange}
                />
            </div>
        </Forms.FormSection>
    );
}
