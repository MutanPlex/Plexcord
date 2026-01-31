/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { BaseText } from "@components/BaseText";
import { Button } from "@components/Button";
import ErrorBoundary from "@components/ErrorBoundary";
import { cl } from "@plugins/holyNotes";
import noteHandler from "@plugins/holyNotes/NoteHandler";
import { CloseButton, ModalContent, ModalFooter, ModalHeader, ModalProps, ModalRoot, ModalSize } from "@utils/modal";
import { React } from "@webpack/common";

import EmptyNotebook from "./Error";
import { RenderMessage } from "./RenderMessage";

interface Props extends ModalProps {
    notebook: string;
    onChangeTab: React.Dispatch<React.SetStateAction<string>>;
}

export default function NotebookDeleteModal({ onClose, transitionState, notebook, onChangeTab }: Props) {
    const notes = noteHandler.getNotes(notebook);

    const handleDelete = () => {
        onClose();
        onChangeTab("Main");
        noteHandler.deleteNotebook(notebook);
    };

    const noteList = notes ? Object.values(notes) : [];

    return (
        <ModalRoot transitionState={transitionState} size={ModalSize.LARGE}>
            <ModalHeader separator={false} className={cl("header")}>
                <div className={cl("header-content")}>
                    <BaseText tag="h2" size="lg" weight="semibold" className={cl("title")}>{t(plugin.holyNotes.modal.delete.title, { notebook })}</BaseText>
                    <BaseText size="sm" className={cl("description")}>{t(plugin.holyNotes.modal.delete.description, { noteCount: noteList.length, s: noteList.length !== 1 ? "s" : "" })}</BaseText>
                </div>
                <div className={cl("header-trailing")}>
                    <CloseButton onClick={onClose} />
                </div>
            </ModalHeader>
            <ModalContent className={cl("content")}>
                <ErrorBoundary>
                    {noteList.length ? noteList.map(note => (
                        <RenderMessage
                            key={note.id}
                            note={note}
                            notebook={notebook}
                            fromDeleteModal
                        />
                    )) : <EmptyNotebook />}
                </ErrorBoundary>
            </ModalContent>
            <ModalFooter>
                <Button variant="dangerPrimary" onClick={handleDelete}>
                    {t(plugin.holyNotes.modal.delete.button)}
                </Button>
            </ModalFooter>
        </ModalRoot>
    );
}
