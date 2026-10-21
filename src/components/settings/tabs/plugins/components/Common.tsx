/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugins, t } from "@api/i18n";
import { BaseText } from "@components/BaseText";
import { classNameFactory } from "@utils/css";
import { classes } from "@utils/misc";
import { wordsFromCamel, wordsToTitle } from "@utils/text";
import { DefinedSettings, PluginSettingDefCommon } from "@utils/types";
import { PropsWithChildren } from "react";

export const cl = classNameFactory("pc-plugins-setting-");

interface SettingBaseProps<T> {
    setting: T;
    onChange(newValue: any): void;
    pluginSettings: {
        [setting: string]: any;
        enabled: boolean;
    };
    id: string;
    definedSettings: DefinedSettings;
    closePluginSettings(): void;
}

export type SettingProps<T extends PluginSettingDefCommon> = SettingBaseProps<T>;
export type ComponentSettingProps<T extends Omit<PluginSettingDefCommon, "description" | "placeholder">> = SettingBaseProps<T>;

export function resolveError(isValidResult: boolean | string) {
    if (typeof isValidResult === "string") return isValidResult;

    return isValidResult ? null : t(plugins.invalidInput);
}

interface SettingsSectionProps extends PropsWithChildren {
    name?: string;
    id?: string;
    description: string | (() => string);
    label?: string | (() => string);
    error?: string | null;
    inlineSetting?: boolean;
    tag?: "label" | "div";
}

export function SettingsSection({ tag: Tag = "div", name, id, description, label, error, inlineSetting, children }: SettingsSectionProps) {
    const resolvedLabel = label ? (typeof label === "function" ? label() : label) : undefined;
    const key = id ?? name;
    const title = resolvedLabel || (id && name) || (key && wordsToTitle(wordsFromCamel(key)));
    const resolvedDescription = typeof description === "function" ? description() : description;

    return (
        <Tag className={cl("section")}>
            <div className={classes(cl("content"), inlineSetting && cl("inline"))}>
                <div className={cl("label")}>
                    {title && <BaseText className={cl("title")} size="md" weight="medium">{title}</BaseText>}
                    {resolvedDescription && <BaseText className={cl("description")} size="sm">{resolvedDescription}</BaseText>}
                </div>
                {children}
            </div>
            {error && <BaseText className={cl("error")} size="sm">{error}</BaseText>}
        </Tag>
    );
}
