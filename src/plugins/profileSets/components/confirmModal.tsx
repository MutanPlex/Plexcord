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
import { ModalContent, ModalFooter, ModalHeader, ModalProps, ModalRoot } from "@utils/modal";
interface ConfirmModalProps extends ModalProps {
    title: string;
    message: string;
    confirmText: string;
    cancelText: string;
    onConfirm: () => void;
    onCancel: () => void;
}

interface ImportProfilesModalProps extends ModalProps {
    title: string;
    message: string;
    onOverride: () => void;
    onMerge: () => void;
    onCancel: () => void;
}

export function ConfirmModal({ title, message, confirmText, cancelText, onConfirm, onCancel, onClose, transitionState }: ConfirmModalProps) {
    const closeAfter = (action: () => void) => () => {
        action();
        onClose();
    };

    return (
        <ModalRoot transitionState={transitionState}>
            <ModalHeader>
                <Heading tag="h2">{title}</Heading>
            </ModalHeader>
            <ModalContent>
                <Paragraph>{message}</Paragraph>
            </ModalContent>
            <ModalFooter>
                <Button onClick={closeAfter(onConfirm)}>
                    {confirmText}
                </Button>
                <Button variant="secondary" onClick={closeAfter(onCancel)}>
                    {cancelText}
                </Button>
            </ModalFooter>
        </ModalRoot>
    );
}

export function ImportProfilesModal({ title, message, onOverride, onMerge, onCancel, onClose, transitionState }: ImportProfilesModalProps) {
    const closeAfter = (action: () => void) => () => {
        action();
        onClose();
    };

    return (
        <ModalRoot transitionState={transitionState}>
            <ModalHeader>
                <Heading tag="h2">{title}</Heading>
            </ModalHeader>
            <ModalContent>
                <Paragraph>{message}</Paragraph>
            </ModalContent>
            <ModalFooter>
                <Button onClick={closeAfter(onOverride)}>
                    {t(plugin.profileSets.modal.override)}
                </Button>
                <Button onClick={closeAfter(onMerge)}>
                    {t(plugin.profileSets.modal.merge)}
                </Button>
                <Button variant="secondary" onClick={closeAfter(onCancel)}>
                    {t(plugin.profileSets.modal.cancel)}
                </Button>
            </ModalFooter>
        </ModalRoot>
    );
}
