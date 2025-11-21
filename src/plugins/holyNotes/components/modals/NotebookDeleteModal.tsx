/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { t } from "@api/i18n";
import { BaseText } from "@components/BaseText";
import { Button } from "@components/Button";
import ErrorBoundary from "@components/ErrorBoundary";
import noteHandler from "@plugins/holyNotes/NoteHandler";
import { ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalProps, ModalRoot, ModalSize } from "@utils/modal";
import { React } from "@webpack/common";

import Error from "./Error";
import { RenderMessage } from "./RenderMessage";

export default ({ onClose, notebook, onChangeTab, ...props }: ModalProps & { onClose: () => void; notebook: string; onChangeTab: (notebook: string) => void; }) => {
    const notes = noteHandler.getNotes(notebook);

    const handleDelete = () => {
        onClose();
        onChangeTab("Main");
        noteHandler.deleteNotebook(notebook);
    };

    return (
        <ModalRoot
            {...props}
            className="pc-delete-notebook"
            size={ModalSize.LARGE}>
            <ModalHeader>
                <BaseText tag="h3">{t("plugin.holyNotes.modal.delete.title")}</BaseText>
                <ModalCloseButton onClick={onClose} />
            </ModalHeader>
            <ModalContent>
                <ErrorBoundary>
                    {notes && Object.keys(notes).length > 0 ? (
                        Object.values(notes).map(note => (
                            <RenderMessage
                                key={notebook}
                                note={note}
                                notebook={notebook}
                                fromDeleteModal={true} />
                        ))
                    ) : (
                        <Error />
                    )}
                </ErrorBoundary>
            </ModalContent>
            <ModalFooter>
                <Button
                    variant="dangerPrimary"
                    onClick={handleDelete}
                >
                    {t("plugin.holyNotes.modal.delete.button")}
                </Button>
            </ModalFooter>
        </ModalRoot>
    );
};
