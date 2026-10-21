/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2026 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { RenderModalProps } from "@plexcord/discord-types";

export type SetAliasSaveResult = { ok: true; } | { ok: false; error: string; };

export interface SetAliasModalProps {
    modalProps: RenderModalProps;
    emojiDisplayName: string;
    initialAlias: string;
    getValidationError: (input: string) => string | null;
    isDuplicateAlias: (input: string) => boolean;
    onSave: (input: string) => Promise<SetAliasSaveResult>;
}

export interface ClearAliasesConfirmModalProps {
    modalProps: RenderModalProps;
    onConfirm: () => Promise<void>;
}
