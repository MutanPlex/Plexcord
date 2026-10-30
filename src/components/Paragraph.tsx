/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { Text, type TextProps } from "./Text";

export type ParagraphProps = TextProps<"p">;

export function Paragraph({ children, size = "sm", weight = "normal", ...restProps }: ParagraphProps) {
    return (
        <Text tag="p" size={size} weight={weight} {...restProps}>
            {children}
        </Text>
    );
}
