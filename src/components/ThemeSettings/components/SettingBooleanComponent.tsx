/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import "./styles.css";

import { FormSwitch } from "@components/FormSwitch";
import { classNameFactory } from "@utils/css";

interface Props {
    label: string;
    name: string;
    themeSettings: Record<string, string>;
}

const cl = classNameFactory("pc-settings-boolean-");

export function SettingBooleanComponent({ label, name, themeSettings }: Props) {
    function handleChange(value: boolean) {
        const corrected = value ? "1" : "0";

        themeSettings[name] = corrected;
    }

    return (
        <section>
            <FormSwitch
                title={label}
                key={name}
                className={cl("switch")}
                value={themeSettings[name] === "1"}
                onChange={handleChange}
                hideBorder
            />
        </section>
    );
}
