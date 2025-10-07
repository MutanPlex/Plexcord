/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { t } from "@api/i18n";
import noteHandler from "@plugins/holyNotes/NoteHandler";
import { downloadNotes, uploadNotes } from "@plugins/holyNotes/utils";
import { ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalProps, ModalRoot, ModalSize } from "@utils/modal";
import { findByProps } from "@webpack";
import { Button, Forms, Text } from "@webpack/common";

export default ({ onClose, ...modalProps }: ModalProps & { onClose: () => void; }) => {
    const { statusTagGreen } = findByProps("statusTagGreen");

    return (
        <ModalRoot {...modalProps} className="pc-help-modal" size={ModalSize.LARGE}>
            <ModalHeader className="notebook-header">
                <Text tag="h3">{t("plugin.holyNotes.modal.help.title")}</Text>
                <ModalCloseButton onClick={onClose} />
            </ModalHeader>
            <ModalContent>
                <div className="pc-help-markdown">
                    <Text>{t("plugin.holyNotes.modal.help.addingNotes")}</Text>
                    <Forms.FormText>
                        {t("plugin.holyNotes.modal.help.addingNotesText")}
                        <br />
                        <span style={{ fontWeight: "bold" }} className={statusTagGreen}>
                            {t("plugin.holyNotes.modal.help.prototype")}:
                        </span>{" "}
                        {t("plugin.holyNotes.modal.help.noteMessage")}
                    </Forms.FormText>
                    <hr />
                    <Text>{t("plugin.holyNotes.modal.help.deletingNotes")}</Text>
                    <Forms.FormText>
                        {t("plugin.holyNotes.modal.help.deletingNotesText")}
                    </Forms.FormText>
                    <hr />
                    <Text>{t("plugin.holyNotes.modal.help.movingNotes")}</Text>
                    <Forms.FormText>
                        {t("plugin.holyNotes.modal.help.movingNotesText")}
                    </Forms.FormText>
                    <hr />
                    <Text>{t("plugin.holyNotes.modal.help.jumpToMessage")}</Text>
                    <Forms.FormText>
                        {t("plugin.holyNotes.modal.help.jumpToMessageText")}
                    </Forms.FormText>
                </div>
            </ModalContent>
            <ModalFooter>
                <div className="pc-notebook-display-left">
                    <Button
                        look={Button.Looks.FILLED}
                        color={Button.Colors.GREEN}
                        style={{ marginRight: "10px" }}
                        onClick={() => {
                            noteHandler.refreshAvatars();
                        }}>{t("plugin.holyNotes.button.refresh")}</Button>
                    <Button
                        look={Button.Looks.FILLED}
                        color={Button.Colors.GREEN}
                        style={{ marginRight: "10px" }}
                        onClick={() => {
                            uploadNotes();
                        }}>{t("plugin.holyNotes.button.import")}</Button>
                    <Button
                        look={Button.Looks.FILLED}
                        color={Button.Colors.GREEN}
                        style={{ marginRight: "10px" }}
                        onClick={() => {
                            downloadNotes();
                        }}>{t("plugin.holyNotes.button.export")}</Button>
                    <Button
                        look={Button.Looks.FILLED}
                        color={Button.Colors.RED}
                        onClick={() => {
                            noteHandler.deleteEverything();
                        }}>{t("plugin.holyNotes.button.deleteAll")}</Button>
                </div>
            </ModalFooter>
        </ModalRoot>
    );
};
