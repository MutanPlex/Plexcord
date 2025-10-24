/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { OptionType } from "@utils/types";

export const enum RenderType {
    BLOCK,
    FOREGROUND,
    BACKGROUND,
}

export const enum BlockDisplayType {
    LEFT,
    RIGHT,
    BOTH
}

export const settings = definePluginSettings({
    renderType: {
        get label() {
            return t("plugin.messageColors.option.renderType.label");
        },
        get description() {
            return t("plugin.messageColors.option.renderType.description");
        },
        type: OptionType.SELECT,
        get options() {
            return [
                {
                    label: t("plugin.messageColors.option.renderType.textColor"),
                    value: RenderType.FOREGROUND,
                    default: true,
                },
                {
                    label: t("plugin.messageColors.option.renderType.block"),
                    value: RenderType.BLOCK,
                },
                {
                    label: t("plugin.messageColors.option.renderType.backgroundColor"),
                    value: RenderType.BACKGROUND
                },
            ];
        }
    },
    enableShortHexCodes: {
        get label() {
            return t("plugin.messageColors.option.enableShortHexCodes.label");
        },
        get description() {
            return t("plugin.messageColors.option.enableShortHexCodes.description");
        },
        type: OptionType.BOOLEAN,
        default: true,
        // Regex are created on the start, so without restart nothing would change
        restartNeeded: true
    },
    blockView: {
        get label() {
            return t("plugin.messageColors.option.blockView.label");
        },
        get description() {
            return t("plugin.messageColors.option.blockView.description");
        },
        type: OptionType.SELECT,
        disabled: () => settings.store.renderType !== RenderType.BLOCK,
        get options() {
            return [
                {
                    label: t("plugin.messageColors.option.blockView.right"),
                    value: BlockDisplayType.RIGHT,
                    default: true
                },
                {
                    label: t("plugin.messageColors.option.blockView.left"),
                    value: BlockDisplayType.LEFT
                },
                {
                    label: t("plugin.messageColors.option.blockView.both"),
                    value: BlockDisplayType.BOTH
                }
            ];
        }
    }
});

export const enum ColorType {
    RGB,
    RGBA,
    HEX,
    HSL
}

// It's sooo hard to read regex without this, it makes it at least somewhat bearable
export const replaceRegexp = (reg: string) => {
    const n = new RegExp(reg
        // \c - 'comma'
        // \v - 'value'
        // \f - 'float'
        .replaceAll("\\f", "[+-]?([0-9]*[.])?[0-9]+")
        .replaceAll("\\c", "(?:,|\\s)")
        .replaceAll("\\v", "\\s*?\\d+?\\s*?"), "g");

    return n;
};

export const regex = [
    { reg: /rgb\(\v\c\v\c\v\)/g, type: ColorType.RGB },
    { reg: /rgba\(\v\c\v\c\v(\c|\/?)\s*\f\)/g, type: ColorType.RGBA },
    { reg: /hsl\(\v°?\c\s*?\d+%?\s*?\c\s*?\d+%?\s*?\)/g, type: ColorType.HSL },
].map(v => { v.reg = replaceRegexp(v.reg.source); return v; });
