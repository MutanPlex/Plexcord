/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { t } from "@api/i18n";
import noteHandler from "@plugins/holyNotes/NoteHandler";
import { ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalProps, ModalRoot, ModalSize } from "@utils/modal";
import { Button, React, Text, TextInput } from "@webpack/common";

export default (props: ModalProps & { onClose: () => void; }) => {
    const [notebookName, setNotebookName] = React.useState("");

    const handleCreateNotebook = React.useCallback(() => {
        if (notebookName !== "") noteHandler.newNoteBook(notebookName);
        props.onClose();
    }, [notebookName]);

    return (
        <div>
            <ModalRoot className="pc-create-notebook" size={ModalSize.SMALL} {...props}>
                <ModalHeader className="pc-notebook-header">
                    <Text tag="h3">{t("plugin.holyNotes.modal.create.title")}</Text>
                    <ModalCloseButton onClick={props.onClose} />
                </ModalHeader>
                <ModalContent>
                    <TextInput
                        value={notebookName}
                        placeholder={t("plugin.holyNotes.modal.create.placeholder")}
                        onChange={value => setNotebookName(value)}
                        style={{ marginBottom: "10px" }} />
                </ModalContent>
                <ModalFooter>
                    <Button onClick={handleCreateNotebook} color={Button.Colors.GREEN}>{t("plugin.holyNotes.button.create")}</Button>
                </ModalFooter>
            </ModalRoot>
        </div>
    );
};
