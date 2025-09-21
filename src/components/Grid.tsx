/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { CSSProperties, HTMLAttributes } from "react";

interface Props {
    columns: number;
    gap?: string;
    inline?: boolean;
}

export function Grid(props: Props & HTMLAttributes<HTMLDivElement>) {
    const style: CSSProperties = {
        display: props.inline ? "inline-grid" : "grid",
        gridTemplateColumns: `repeat(${props.columns}, 1fr)`,
        gap: props.gap,
        ...props.style
    };

    return (
        <div {...props} style={style}>
            {props.children}
        </div>
    );
}
