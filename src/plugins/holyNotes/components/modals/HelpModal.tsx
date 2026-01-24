/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { BaseText } from "@components/BaseText";
import { Button } from "@components/Button";
import { Margins } from "@components/margins";
import { Paragraph } from "@components/Paragraph";
import { statusTagGreen } from "@plugins/holyNotes";
import noteHandler from "@plugins/holyNotes/NoteHandler";
import { downloadNotes, uploadNotes } from "@plugins/holyNotes/utils";
import { ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalProps, ModalRoot, ModalSize } from "@utils/modal";

export default ({ onClose, ...modalProps }: ModalProps & { onClose: () => void; }) => {

    return (
        <ModalRoot {...modalProps} className="pc-help-modal" size={ModalSize.LARGE}>
            <ModalHeader className="pc-help-modal-header">
                <BaseText tag="h3" style={{ flexGrow: 1 }}>{t(plugin.holyNotes.modal.help.title)}</BaseText>
                <ModalCloseButton onClick={onClose} />
            </ModalHeader>
            <ModalContent>
                <div className="pc-help-markdown">
                    <BaseText>{t(plugin.holyNotes.modal.help.addingNotes)}</BaseText>
                    <Paragraph>
                        {t(plugin.holyNotes.modal.help.addingNotesText)}

                    </Paragraph>
                    <div className={Margins.top16}>
                        <span className={statusTagGreen}>
                            {t(plugin.holyNotes.modal.help.prototype)}:
                        </span>{" "}
                    </div>
                    <Paragraph className={Margins.top8}>
                        {t(plugin.holyNotes.modal.help.noteMessage)}
                    </Paragraph>
                    <hr />
                    <BaseText>{t(plugin.holyNotes.modal.help.deletingNotes)}</BaseText>
                    <Paragraph>
                        {t(plugin.holyNotes.modal.help.deletingNotesText)}
                    </Paragraph>
                    <hr />
                    <BaseText>{t(plugin.holyNotes.modal.help.movingNotes)}</BaseText>
                    <Paragraph>
                        {t(plugin.holyNotes.modal.help.movingNotesText)}
                    </Paragraph>
                    <hr />
                    <BaseText>{t(plugin.holyNotes.modal.help.jumpToMessage)}</BaseText>
                    <Paragraph>
                        {t(plugin.holyNotes.modal.help.jumpToMessageText)}
                    </Paragraph>
                </div>
            </ModalContent>
            <ModalFooter>
                <div className="pc-help-modal-footer">
                    <Button
                        variant="positive"
                        onClick={() => {
                            noteHandler.refreshAvatars();
                        }}>{t(plugin.holyNotes.button.refresh)}</Button>
                    <Button
                        variant="positive"
                        onClick={() => {
                            uploadNotes();
                        }}>{t(plugin.holyNotes.button.import)}</Button>
                    <Button
                        variant="positive"
                        onClick={() => {
                            downloadNotes();
                        }}>{t(plugin.holyNotes.button.export)}</Button>
                    <Button
                        variant="dangerPrimary"
                        onClick={() => {
                            noteHandler.deleteEverything();
                        }}>{t(plugin.holyNotes.button.deleteAll)}</Button>
                </div>
            </ModalFooter>
        </ModalRoot>
    );
};
