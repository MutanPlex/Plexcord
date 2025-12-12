/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { BaseText } from "@components/BaseText";
import { Button } from "@components/Button";
import { Flex } from "@components/Flex";
import { Link } from "@components/Link";
import { Paragraph } from "@components/Paragraph";
import { settings } from "@plugins/decor/settings";
import { cl, DecorationModalStyles, requireAvatarDecorationModal } from "@plugins/decor/ui";
import { ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalProps, ModalRoot, ModalSize, openModal } from "@utils/modal";

import { openCreateDecorationModal } from "./CreateDecorationModal";

function GuidelinesModal(props: ModalProps) {
    return <ModalRoot
        {...props}
        size={ModalSize.SMALL}
        className={DecorationModalStyles.modal}
    >
        <ModalHeader separator={false} className={cl("modal-header")}>
            <BaseText size="lg" weight="semibold" color="text-strong" tag="h1" style={{ flexGrow: 1 }}>
                {t(plugin.decor.guidelines.hold)}
            </BaseText>
            <ModalCloseButton onClick={props.onClose} />
        </ModalHeader>
        <ModalContent
            scrollbarType="none"
        >
            <Paragraph>
                {t(plugin.decor.guidelines.suspended, {
                    guidelines: <Link
                        href="https://github.com/decor-discord/.github/blob/main/GUIDELINES.md"
                    >
                        {t(plugin.decor.create.guidelines)}
                    </Link>
                })
                }
            </Paragraph>
        </ModalContent>
        <ModalFooter className={cl("modal-footer")}>
            <Flex style={{ gap: "4px" }}>
                <Button
                    onClick={() => {
                        settings.store.agreedToGuidelines = true;
                        props.onClose();
                        openCreateDecorationModal();
                    }}
                >
                    {t(plugin.decor.button.continue)}
                </Button>
                <Button
                    onClick={props.onClose}
                    variant="none"
                >
                    {t(plugin.decor.button.back)}
                </Button>
            </Flex>
        </ModalFooter>
    </ModalRoot>;
}

export const openGuidelinesModal = () =>
    requireAvatarDecorationModal().then(() => openModal(props => <GuidelinesModal {...props} />));
