/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { BaseText } from "@components/BaseText";
import { Button } from "@components/Button";
import { cl } from "@plugins/holyNotes";
import noteHandler from "@plugins/holyNotes/NoteHandler";
import { CloseButton, ModalContent, ModalFooter, ModalHeader, ModalProps, ModalRoot, ModalSize } from "@utils/modal";
import { React, TextInput, useState } from "@webpack/common";

export default function NotebookCreateModal({ onClose, transitionState }: ModalProps) {
    const [name, setName] = useState("");

    const handleCreate = () => {
        if (!name.trim()) return;
        noteHandler.newNoteBook(name.trim());
        onClose();
    };

    return (
        <div>
            <ModalRoot transitionState={transitionState} size={ModalSize.SMALL} className={cl("create-modal")}>
                <ModalHeader separator={false} className={cl("header")}>
                    <div className={cl("header-content")}>
                        <BaseText tag="h2" size="lg" weight="semibold" className={cl("title")}>{t(plugin.holyNotes.modal.create.title)}</BaseText>
                        <BaseText size="sm" className={cl("description")}>{t(plugin.holyNotes.modal.create.description)}</BaseText>
                    </div>
                    <div className={cl("header-trailing")}>
                        <CloseButton onClick={onClose} />
                    </div>
                </ModalHeader>
                <ModalContent className={cl("content")}>
                    <TextInput
                        value={name}
                        placeholder={t(plugin.holyNotes.modal.create.placeholder)}
                        onChange={value => setName(value)} />
                </ModalContent>
                <ModalFooter>
                    <Button variant="primary" onClick={handleCreate}>{t(plugin.holyNotes.button.create)}</Button>
                    <Button variant="secondary" onClick={onClose}>{t(plugin.holyNotes.button.cancel)}</Button>
                </ModalFooter>
            </ModalRoot>
        </div>
    );
}
