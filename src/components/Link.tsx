/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2022 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import "./Link.css";

import { classes } from "@utils/misc";
import type { AnchorHTMLAttributes, PropsWithChildren } from "react";

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    disabled?: boolean;
}

export function Link({ disabled, className, children, ...restProps }: PropsWithChildren<LinkProps>) {
    return (
        <a
            role="link"
            target="_blank"
            rel="noreferrer noopener"
            className={classes("pc-link", disabled && "pc-link-disabled", className)}
            aria-disabled={disabled}
            {...restProps}
        >
            {children}
        </a>
    );
}
