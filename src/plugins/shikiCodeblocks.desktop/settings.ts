/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
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

import { t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { disableStyle, enableStyle } from "@api/Styles";
import { parseUrl } from "@utils/misc";
import { wordsFromPascal, wordsToTitle } from "@utils/text";
import { OptionType } from "@utils/types";

import { shiki } from "./api/shiki";
import { themes } from "./api/themes";
import deviconStyle from "./devicon.css?managed";
import { DeviconSetting, HljsSetting } from "./types";

const themeNames = Object.keys(themes) as (keyof typeof themes)[];

export type ShikiSettings = typeof settings.store;
export const settings = definePluginSettings({
    theme: {
        get label() {
            return t("plugin.shikiCodeblocks.option.theme.label");
        },
        get description() {
            return t("plugin.shikiCodeblocks.option.theme.description");
        },
        type: OptionType.SELECT,
        options: themeNames.map(themeName => ({
            label: wordsToTitle(wordsFromPascal(themeName)),
            value: themes[themeName],
            default: themes[themeName] === themes.DarkPlus,
        })),
        onChange: shiki.setTheme,
    },
    customTheme: {
        get label() {
            return t("plugin.shikiCodeblocks.option.customTheme.label");
        },
        get description() {
            return t("plugin.shikiCodeblocks.option.customTheme.description");
        },
        type: OptionType.STRING,
        placeholder: themes.MaterialCandy,
        onChange: value => {
            shiki.setTheme(value || settings.store.theme);
        },
    },
    tryHljs: {
        get label() {
            return t("plugin.shikiCodeblocks.option.tryHljs.label");
        },
        get description() {
            return t("plugin.shikiCodeblocks.option.tryHljs.description");
        },
        type: OptionType.SELECT,
        get options() {
            return [
                {
                    label: t("plugin.shikiCodeblocks.option.tryHljs.never"),
                    value: HljsSetting.Never,
                },
                {
                    label: t("plugin.shikiCodeblocks.option.tryHljs.secondary"),
                    value: HljsSetting.Secondary,
                    default: true,
                },
                {
                    label: t("plugin.shikiCodeblocks.option.tryHljs.primary"),
                    value: HljsSetting.Primary,
                },
                {
                    label: t("plugin.shikiCodeblocks.option.tryHljs.always"),
                    value: HljsSetting.Always,
                },
            ];
        },
    },
    useDevIcon: {
        get label() {
            return t("plugin.shikiCodeblocks.option.useDevIcon.label");
        },
        get description() {
            return t("plugin.shikiCodeblocks.option.useDevIcon.description");
        },
        type: OptionType.SELECT,
        get options() {
            return [
                {
                    label: t("plugin.shikiCodeblocks.option.useDevIcon.disabled"),
                    value: DeviconSetting.Disabled,
                },
                {
                    label: t("plugin.shikiCodeblocks.option.useDevIcon.colorless"),
                    value: DeviconSetting.Greyscale,
                    default: true,
                },
                {
                    label: t("plugin.shikiCodeblocks.option.useDevIcon.colored"),
                    value: DeviconSetting.Color,
                },
            ];
        },
        onChange: (newValue: DeviconSetting) => {
            if (newValue === DeviconSetting.Disabled) disableStyle(deviconStyle);
            else enableStyle(deviconStyle);
        },
    },
    bgOpacity: {
        get label() {
            return t("plugin.shikiCodeblocks.option.bgOpacity.label");
        },
        get description() {
            return t("plugin.shikiCodeblocks.option.bgOpacity.description");
        },
        type: OptionType.SLIDER,
        markers: [0, 20, 40, 60, 80, 100],
        default: 100,
        stickToMarkers: false,
        componentProps: {
            onValueRender: null, // Defaults to percentage
        },
    },
}, {
    theme: {
        disabled() { return !!this.store.customTheme; },
    },
    customTheme: {
        isValid(value) {
            if (!value) return true;
            const url = parseUrl(value);
            if (!url) return t("plugin.shikiCodeblocks.option.customTheme.mustURL");

            if (!url.pathname.endsWith(".json")) return t("plugin.shikiCodeblocks.option.customTheme.mustJSON");

            return true;
        },
    }
});
