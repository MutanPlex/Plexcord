/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2026 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { BaseText } from "@components/BaseText";
import { Button } from "@components/Button";
import { Heading } from "@components/Heading";
import { Paragraph } from "@components/Paragraph";
import { ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalRoot, ModalSize } from "@utils/modal";
import { TextInput, useState } from "@webpack/common";

import { SetAliasModalProps } from "./types";

export function SetAliasModal({
    modalProps,
    emojiDisplayName,
    initialAlias,
    getValidationError,
    isDuplicateAlias,
    onSave
}: SetAliasModalProps) {
    const [input, setInput] = useState(initialAlias);
    const [error, setError] = useState<string | null>(null);

    const validationError = getValidationError(input);
    const duplicateAlias = isDuplicateAlias(input);
    const finalError = duplicateAlias ? t(plugin.favoriteEmojiFirst.modal.set.error) : error ?? validationError;
    const canSave = !validationError && !duplicateAlias;

    return (
        <ModalRoot {...modalProps} size={ModalSize.SMALL}>
            <ModalHeader>
                <Heading style={{ flexGrow: 1 }}>{t(plugin.favoriteEmojiFirst.modal.set.title)}</Heading>
                <ModalCloseButton onClick={modalProps.onClose} />
            </ModalHeader>

            <ModalContent style={{ overflowY: "hidden" }}>
                <Paragraph style={{ margin: 0, marginBottom: 8 }}>{t(plugin.favoriteEmojiFirst.modal.set.description, { emoji: emojiDisplayName })}</Paragraph>
                <TextInput
                    value={input}
                    onChange={value => {
                        setInput(value);
                        setError(null);
                    }}
                    placeholder={t(plugin.favoriteEmojiFirst.modal.set.placeholder)}
                />
                {finalError && (
                    <BaseText style={{ color: "var(--text-feedback-critical)", marginTop: 8 }}>
                        {finalError}
                    </BaseText>
                )}
            </ModalContent>

            <ModalFooter>
                <Button
                    variant="primary"
                    disabled={!canSave}
                    onClick={async () => {
                        const result = await onSave(input);
                        if (!result.ok) {
                            setError(result.error);
                            return;
                        }
                        modalProps.onClose();
                    }}
                >
                    {t(plugin.favoriteEmojiFirst.modal.set.save)}
                </Button>
            </ModalFooter>
        </ModalRoot>
    );
}
