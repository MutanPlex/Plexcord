/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { Heading } from "@components/Heading";
import { SelectOption } from "@plexcord/discord-types";
import { identity } from "@utils/misc";
import { Select, useMemo } from "@webpack/common";

interface Props {
    label: string;
    name: string;
    options: {
        name: string;
        label: string;
        value: string;
    }[];
    default: string;
    themeSettings: Record<string, string>;
}

export function SettingSelectComponent({ label, name, options, default: def, themeSettings }: Props) {
    function handleChange(value: string) {
        themeSettings[name] = value;
    }

    const opts = useMemo(() => options.map(option => ({
        disabled: false,

        key: option.name,
        value: option.value,
        default: def === option.name,
        label: option.label
    } satisfies SelectOption)), [options, def]);

    return (
        <section>
            <Heading>{label}</Heading>
            <Select
                placeholder={label}
                key={name}
                options={opts}
                closeOnSelect={true}

                select={handleChange}
                isSelected={v => v === themeSettings[name]}
                serialize={identity}
            />
        </section>
    );
}
