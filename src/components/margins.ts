/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { classNameFactory } from "@utils/css";

const marginCls = classNameFactory("pc-margin-");

const Directions = ["top", "bottom", "left", "right"] as const;
const Sizes = [4, 8, 16, 20, 24, 40, 60] as const;

export type MarginDirection = (typeof Directions)[number];
export type MarginSize = (typeof Sizes)[number];

export const Margins = {} as Record<`${MarginDirection}${MarginSize}` | "reset" | "centerHorz", string>;

export function generateMarginCss() {
    let css = "";

    for (const direction of Directions) {
        for (const size of Sizes) {
            const cl = marginCls(`${direction}-${size}`);
            Margins[`${direction}${size}`] = cl;
            css += `.${cl}{margin-${direction}:${size}px;}`;
        }
    }

    Margins.reset = marginCls("reset");
    css += `.${Margins.reset}{margin:0;}`;

    Margins.centerHorz = marginCls("center-horz");
    css += `.${Margins.centerHorz}{margin-left:auto;margin-right:auto;}`;

    return css;
}
