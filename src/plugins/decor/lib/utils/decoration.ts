/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { AvatarDecoration } from "@plugins/decor";
import { Decoration } from "@plugins/decor/lib/api";
import { SKU_ID } from "@plugins/decor/lib/constants";

export function decorationToAsset(decoration: Decoration) {
    return `${decoration.animated ? "a_" : ""}${decoration.hash}`;
}

export function decorationToAvatarDecoration(decoration: Decoration): AvatarDecoration {
    return { asset: decorationToAsset(decoration), skuId: SKU_ID };
}
