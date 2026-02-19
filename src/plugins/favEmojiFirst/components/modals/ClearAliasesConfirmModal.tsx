/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2026 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { Button } from "@components/Button";
import { Heading } from "@components/Heading";
import { Paragraph } from "@components/Paragraph";
import { ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalRoot, ModalSize } from "@utils/modal";

import { ClearAliasesConfirmModalProps } from "./types";

export function ClearAliasesConfirmModal({ modalProps, onConfirm }: ClearAliasesConfirmModalProps) {
    return (
        <ModalRoot {...modalProps} size={ModalSize.SMALL}>
            <ModalHeader>
                <Heading style={{ flexGrow: 1 }}>{t(plugin.favoriteEmojiFirst.modal.clear.title)}</Heading>
                <ModalCloseButton onClick={modalProps.onClose} />
            </ModalHeader>
            <ModalContent>
                <Paragraph>{t(plugin.favoriteEmojiFirst.modal.clear.description)}</Paragraph>
            </ModalContent>
            <ModalFooter>
                <Button
                    variant="dangerPrimary"
                    style={{ marginLeft: "auto" }}
                    onClick={async () => {
                        await onConfirm();
                        modalProps.onClose();
                    }}
                >
                    {t(plugin.favoriteEmojiFirst.modal.clear.confirm)}
                </Button>
            </ModalFooter>
        </ModalRoot>
    );
}
