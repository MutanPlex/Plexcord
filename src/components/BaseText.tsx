/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { Text, TextProps, TextTag } from "./Text";
export * from "./Text";

// #region Old compatibility

/** @deprecated use `Text` from `@components/Text` instead */
export const BaseText = Text;
export type BaseTextProps<Tag extends TextTag = "div"> = TextProps<Tag>;

// #endregion
