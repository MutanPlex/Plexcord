/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import * as t from "@plexcord/discord-types";

import { Text } from "./components";

// TODO: replace with our own component soon
export const FormText: t.FormText = function FormText(props) {
    const variant = props.variant || "text-sm/normal";
    return (
        <Text
            variant={variant}
            {...props}
        >
            {props.children}
        </Text>
    );
} as any;

// @ts-expect-error
FormText.Types = {};
