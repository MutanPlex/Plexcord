/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugins, t } from "@api/i18n";
import ErrorBoundary from "@components/ErrorBoundary";
import { Flex } from "@components/Flex";
import { HeadingPrimary } from "@components/Heading";
import { Heart } from "@components/Heart";
import { Paragraph } from "@components/Paragraph";
import { DonateButton } from "@components/settings";
import { Margins } from "@utils/margins";
import { closeModal, ModalContent, ModalFooter, ModalHeader, ModalRoot, openModal } from "@utils/modal";

export function openDonorModal() {
    const modalKey = openModal(props => (
        <ErrorBoundary noop onError={() => {
            closeModal(modalKey);
            PlexcordNative.native.openExternal("https://github.com/sponsors/MutanPlex");
        }}>
            <ModalRoot {...props}>
                <ModalHeader>
                    <HeadingPrimary
                        style={{
                            width: "100%",
                            textAlign: "center",
                            margin: 0
                        }}
                    >
                        <Flex justifyContent="center" alignItems="center" gap="0.5em">
                            <Heart />
                            {t(plugins.metadata.badges.modal.title)}
                        </Flex>
                    </HeadingPrimary>
                </ModalHeader>
                <ModalContent>
                    <Flex>
                        <img
                            role="presentation"
                            src="https://cdn.discordapp.com/emojis/1026533070955872337.png"
                            alt=""
                            style={{ margin: "auto" }}
                        />
                        <img
                            role="presentation"
                            src="https://cdn.discordapp.com/emojis/1026533090627174460.png"
                            alt=""
                            style={{ margin: "auto" }}
                        />
                    </Flex>
                    <div style={{ padding: "1em", textAlign: "center" }}>
                        <Paragraph>
                            {t(plugins.metadata.badges.modal.special)}
                        </Paragraph>
                        <Paragraph className={Margins.top20}>
                            {t(plugins.metadata.badges.modal.description)}
                        </Paragraph>
                    </div>
                </ModalContent>
                <ModalFooter>
                    <Flex justifyContent="center" style={{ width: "100%" }}>
                        <DonateButton />
                    </Flex>
                </ModalFooter>
            </ModalRoot>
        </ErrorBoundary>
    ));
}
