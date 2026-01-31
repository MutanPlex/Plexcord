/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { BaseText } from "@components/BaseText";
import { Button } from "@components/Button";
import { Flex } from "@components/Flex";
import { cl } from "@plugins/holyNotes";
import noteHandler from "@plugins/holyNotes/NoteHandler";
import { downloadNotes, uploadNotes } from "@plugins/holyNotes/utils";
import { CloseButton, ModalContent, ModalFooter, ModalHeader, ModalProps, ModalRoot, ModalSize } from "@utils/modal";

function HelpSection({ title, children }: { title: string; children: React.ReactNode; }) {
    return (
        <>
            <BaseText size="md" weight="semibold" color="text-strong">{title}</BaseText>
            <BaseText size="sm" color="text-default" style={{ marginTop: 4 }}>{children}</BaseText>
            <hr />
        </>
    );
}
export default function HelpModal({ onClose, transitionState }: ModalProps) {
    return (
        <ModalRoot transitionState={transitionState} size={ModalSize.MEDIUM}>
            <ModalHeader separator={false} className={cl("header")}>
                <div className={cl("header-content")}>
                    <BaseText tag="h2" size="lg" weight="semibold" className={cl("title")}>
                        {t(plugin.holyNotes.modal.help.title)}
                    </BaseText>
                    <BaseText size="sm" className={cl("description")}>
                        {t(plugin.holyNotes.modal.help.description)}
                    </BaseText>
                    <div className={cl("header-trailing")}>
                        <CloseButton onClick={onClose} />
                    </div>
                </div>
            </ModalHeader>
            <ModalContent className={cl("content")}>
                <div className="pc-help-markdown">
                    <HelpSection title={t(plugin.holyNotes.modal.help.addingNotes)}>
                        {t(plugin.holyNotes.modal.help.addingNotesText)}
                    </HelpSection>

                    <HelpSection title={t(plugin.holyNotes.modal.help.deletingNotes)}>
                        {t(plugin.holyNotes.modal.help.deletingNotesText)}
                    </HelpSection>

                    <HelpSection title={t(plugin.holyNotes.modal.help.movingNotes)}>
                        {t(plugin.holyNotes.modal.help.movingNotesText)}
                    </HelpSection>

                    <HelpSection title={t(plugin.holyNotes.modal.help.movingNotes)}>
                        {t(plugin.holyNotes.modal.help.movingNotesText)}
                    </HelpSection>
                </div>
            </ModalContent>
            <ModalFooter>
                <Flex style={{ gap: 8, flexWrap: "wrap" }}>
                    <Button size="small" variant="primary" onClick={() => noteHandler.refreshAvatars()}>{t(plugin.holyNotes.button.refresh)}</Button>
                    <Button size="small" variant="secondary" onClick={uploadNotes}>{t(plugin.holyNotes.button.import)}</Button>
                    <Button size="small" variant="secondary" onClick={downloadNotes}>{t(plugin.holyNotes.button.export)}</Button>
                    <Button size="small" variant="dangerPrimary" onClick={() => noteHandler.deleteEverything()}>{t(plugin.holyNotes.button.deleteAll)}</Button>
                </Flex>
            </ModalFooter>
        </ModalRoot>
    );
}
