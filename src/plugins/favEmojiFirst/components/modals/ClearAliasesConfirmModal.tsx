/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2026 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { Paragraph } from "@components/Paragraph";
import { Modal } from "@webpack/common";

import { ClearAliasesConfirmModalProps } from "./types";

export function ClearAliasesConfirmModal({ modalProps, onConfirm }: ClearAliasesConfirmModalProps) {
    return (
        <Modal
            {...modalProps}
            size="sm"
            title={t(plugin.favoriteEmojiFirst.modal.clear.title)}
            actions={[
                {
                    text: t(plugin.favoriteEmojiFirst.modal.clear.confirm),
                    variant: "critical-primary",
                    onClick: async () => {
                        await onConfirm();
                        modalProps.onClose();
                    }
                }
            ]}
        >
            <Paragraph>{t(plugin.favoriteEmojiFirst.modal.clear.description)}</Paragraph>
        </Modal>
    );
}
