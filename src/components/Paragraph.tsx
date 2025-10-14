/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { BaseText, type BaseTextProps } from "./BaseText";

export type ParagraphProps = BaseTextProps<"p">;

export function Paragraph({ children, size = "sm", weight = "normal", ...restProps }: ParagraphProps) {
    return (
        <BaseText tag="p" size={size} weight={weight} {...restProps}>
            {children}
        </BaseText>
    );
}
