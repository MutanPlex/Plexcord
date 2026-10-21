/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2026 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { Paragraph } from "@components/Paragraph";
import { RenderModalProps } from "@plexcord/discord-types";
import { Modal } from "@webpack/common";

interface ConfirmModalProps extends RenderModalProps {
    title: string;
    message: string;
    confirmText: string;
    cancelText: string;
    onConfirm: () => void;
    onCancel: () => void;
}

interface ImportProfilesModalProps extends RenderModalProps {
    title: string;
    message: string;
    onOverride: () => void;
    onMerge: () => void;
    onCancel: () => void;
}

export function ConfirmModal({ title, message, confirmText, cancelText, onConfirm, onCancel, ...props }: ConfirmModalProps) {
    const closeAfter = (action: () => void) => () => {
        action();
        props.onClose();
    };

    return (
        <Modal
            {...props}
            size="sm"
            title={title}
            actions={[
                {
                    text: confirmText,
                    variant: "primary",
                    onClick: closeAfter(onConfirm)
                },
                {
                    text: cancelText,
                    variant: "secondary",
                    onClick: closeAfter(onCancel)
                }
            ]}
        >
            <Paragraph>{message}</Paragraph>
        </Modal>
    );
}

export function ImportProfilesModal({ title, message, onOverride, onMerge, onCancel, ...props }: ImportProfilesModalProps) {
    const closeAfter = (action: () => void) => () => {
        action();
        props.onClose();
    };

    return (
        <Modal
            {...props}
            size="sm"
            title={title}
            actions={[
                {
                    text: t(plugin.profileSets.modal.override),
                    variant: "primary",
                    onClick: closeAfter(onOverride)
                },
                {
                    text: t(plugin.profileSets.modal.merge),
                    variant: "primary",
                    onClick: closeAfter(onMerge)
                },
                {
                    text: t(plugin.profileSets.modal.cancel),
                    variant: "secondary",
                    onClick: closeAfter(onCancel)
                }
            ]}
        >
            <Paragraph>{message}</Paragraph>
        </Modal>
    );
}
