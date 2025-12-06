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
import { PluginOptionSelect } from "@utils/types";
import { React, Select, useState } from "@webpack/common";

import { resolveError, SettingProps, SettingsSection } from "./Common";

export function SelectSetting({ option, pluginSettings, definedSettings, onChange, id }: SettingProps<PluginOptionSelect>) {
    const def = pluginSettings[id] ?? option.options?.find(o => o.default)?.value;

    const [state, setState] = useState<any>(def ?? null);
    const [error, setError] = useState<string | null>(null);

    // Resolve function labels to strings
    const resolvedOptions = React.useMemo(() =>
        option.options.map(opt => ({
            ...opt,
            label: typeof opt.label === "function" ? opt.label() : opt.label
        })),
        [option.options]
    );

    function handleChange(newValue: any) {
        const isValid = option.isValid?.call(definedSettings, newValue) ?? true;

        setState(newValue);
        setError(resolveError(isValid));

        if (isValid === true) {
            onChange(newValue);
        }
    }

    return (
        <SettingsSection name={id} description={option.description} label={option.label} error={error}>
            <Select
                placeholder={(option.placeholder ? (typeof option.placeholder === "function" ? option.placeholder() : option.placeholder) : undefined) ?? t(plugins.placeholder.select)}
                options={resolvedOptions}
                maxVisibleItems={5}
                closeOnSelect={true}
                select={handleChange}
                isSelected={v => v === state}
                serialize={v => String(v)}
                isDisabled={option.disabled?.call(definedSettings) ?? false}
                {...option.componentProps}
            />
        </SettingsSection>
    );
}
