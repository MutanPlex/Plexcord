/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { BaseText, type BaseTextProps } from "./BaseText";

export type SpanProps = BaseTextProps<"span">;

export function Span({ children, ...restProps }: SpanProps) {
    return (
        <BaseText tag="span" size="sm" weight="normal" {...restProps}>
            {children}
        </BaseText>
    );
}
