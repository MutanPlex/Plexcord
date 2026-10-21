/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2022 Vendicated and contributors
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

import { plugins, t } from "@api/i18n";
import { isSettingDisabled } from "@api/PluginManager";
import { PluginSettingStringDef } from "@utils/types";
import { React, TextArea, TextInput, useState } from "@webpack/common";

import { resolveError, SettingProps, SettingsSection } from "./Common";

export function TextSetting({ setting, pluginSettings, definedSettings, id, onChange }: SettingProps<PluginSettingStringDef>) {
    const [state, setState] = useState(pluginSettings[id] ?? setting.default ?? null);
    const [error, setError] = useState<string | null>(null);

    function handleChange(newValue: string) {
        const isValid = setting.isValid?.call(definedSettings, newValue) ?? true;

        setState(newValue);
        setError(resolveError(isValid));

        if (isValid === true) {
            onChange(newValue);
        }
    }

    return (
        <SettingsSection name={id} description={setting.description} label={setting.label} error={error}>
            {setting.multiline
                ? <TextArea
                    placeholder={(setting.placeholder ? (typeof setting.placeholder === "function" ? setting.placeholder() : setting.placeholder) : undefined) ?? t(plugins.placeholder.text)}
                    value={state}
                    onChange={handleChange}
                    disabled={isSettingDisabled(definedSettings, setting)}
                    {...setting.componentProps} />
                : <TextInput
                    type="text"
                    placeholder={(setting.placeholder ? (typeof setting.placeholder === "function" ? setting.placeholder() : setting.placeholder) : undefined) ?? t(plugins.placeholder.text)}
                    value={state}
                    onChange={handleChange}
                    maxLength={null}
                    disabled={isSettingDisabled(definedSettings, setting)}
                    {...setting.componentProps}
                />
            }
        </SettingsSection>
    );
}
