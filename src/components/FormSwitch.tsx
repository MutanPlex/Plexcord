/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import "./FormSwitch.css";

import { classes } from "@utils/misc";
import type { PropsWithChildren, ReactNode } from "react";

import { Divider } from "./Divider";
import { Span } from "./Span";
import { Switch } from "./Switch";

export interface FormSwitchProps {
    title: ReactNode;
    description?: ReactNode;
    value: boolean;
    onChange(value: boolean): void;

    className?: string;
    disabled?: boolean;
    hideBorder?: boolean;
}

export function FormSwitch({ onChange, title, value, description, disabled, className, hideBorder }: FormSwitchProps) {
    return (
        <label className="pc-form-switch-wrapper">
            <div className={classes("pc-form-switch", className, disabled && "pc-form-switch-disabled")}>
                <div className={"pc-form-switch-text"}>
                    <Span size="md" weight="medium">{title}</Span>
                    {description && <Span size="sm" weight="normal">{description}</Span>}
                </div>

                <Switch checked={value} onChange={onChange} disabled={disabled} />
            </div>
            {!hideBorder && <Divider className="pc-form-switch-border" />}
        </label>
    );
}

// #region Old compatibility

export function FormSwitchCompat({ note, children, ...restProps }: PropsWithChildren<any>) {
    return <FormSwitch title={children ?? ""} description={note} {...restProps} />;
}

// #endregion
