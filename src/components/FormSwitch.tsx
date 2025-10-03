/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import "./FormSwitch.css";

import { classes } from "@utils/misc";
import { Text } from "@webpack/common";
import type { PropsWithChildren, ReactNode } from "react";

import { FormDivider } from "./FormDivider";
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
        <div className="pc-form-switch-wrapper">
            <div className={classes("pc-form-switch", className, disabled && "pc-form-switch-disabled")}>
                <div className={"pc-form-switch-text"}>
                    <Text variant="text-md/medium">{title}</Text>
                    {description && <Text variant="text-sm/normal">{description}</Text>}
                </div>

                <Switch checked={value} onChange={onChange} disabled={disabled} />
            </div>
            {!hideBorder && <FormDivider className="pc-form-switch-border" />}
        </div>
    );
}

/** Compatibility with Discord's old FormSwitch */
export function FormSwitchCompat(props: PropsWithChildren<any>) {
    return <FormSwitch {...props} title={props.children ?? ""} description={props.note} />;
}
