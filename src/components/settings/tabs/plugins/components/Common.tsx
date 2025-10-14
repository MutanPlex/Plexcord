/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { classNameFactory } from "@api/Styles";
import { BaseText } from "@components/BaseText";
import { classes } from "@utils/misc";
import { wordsFromCamel, wordsToTitle } from "@utils/text";
import { DefinedSettings, PluginOptionBase } from "@utils/types";
import { PropsWithChildren } from "react";

export const cl = classNameFactory("pc-plugins-setting-");

interface SettingBaseProps<T> {
    option: T;
    onChange(newValue: any): void;
    pluginSettings: {
        [setting: string]: any;
        enabled: boolean;
    };
    id: string;
    definedSettings?: DefinedSettings;
}

export type SettingProps<T extends PluginOptionBase> = SettingBaseProps<T>;
export type ComponentSettingProps<T extends Omit<PluginOptionBase, "description" | "placeholder">> = SettingBaseProps<T>;

export function resolveError(isValidResult: boolean | string) {
    if (typeof isValidResult === "string") return isValidResult;

    return isValidResult ? null : "Invalid input provided";
}

interface SettingsSectionProps extends PropsWithChildren {
    name: string;
    description: string;
    label?: string;
    error?: string | null;
    inlineSetting?: boolean;
    tag?: "label" | "div";
}

export function SettingsSection({ tag: Tag = "div", name, description, label, error, inlineSetting, children }: SettingsSectionProps) {
    return (
        <Tag className={cl("section")}>
            <div className={classes(cl("content"), inlineSetting && cl("inline"))}>
                <div className={cl("label")}>
                    {name && <BaseText size="md" weight="medium" className={cl("title")}>{label || wordsToTitle(wordsFromCamel(name))}</BaseText>}
                    {description && <BaseText size="sm" weight="normal" className={cl("description")}>{description}</BaseText>}
                </div>
                {children}
            </div>
            {error && <BaseText size="sm" weight="normal" className={cl("error")}>{error}</BaseText>}
        </Tag>
    );
}
