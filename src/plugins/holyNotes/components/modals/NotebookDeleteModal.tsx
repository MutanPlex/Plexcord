/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import ErrorBoundary from "@components/ErrorBoundary";
import noteHandler from "@plugins/holyNotes/NoteHandler";
import { ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalProps, ModalRoot, ModalSize } from "@utils/modal";
import { Button, React, Text } from "@webpack/common";

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
                <Text tag="h3">Confirm Deletion</Text>
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
                    color={Button.Colors.RED}
                    onClick={handleDelete}
                >
                    DELETE
                </Button>
            </ModalFooter>
        </ModalRoot>
    );
};
