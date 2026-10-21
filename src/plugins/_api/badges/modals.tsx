/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugins, t } from "@api/i18n";
import ErrorBoundary from "@components/ErrorBoundary";
import { Flex } from "@components/Flex";
import { Heading } from "@components/Heading";
import { Heart } from "@components/Heart";
import { Paragraph } from "@components/Paragraph";
import { DonateButton } from "@components/settings";
import { Margins } from "@utils/margins";
import { Modal, openModal } from "@webpack/common";

export function openDonorModal() {
    openModal(props => (
        <ErrorBoundary noop onError={() => {
            props.onClose();
            PlexcordNative.native.openExternal("https://github.com/sponsors/MutanPlex");
        }}>
            <Modal
                {...props}
                title={
                    <Heading
                        tag="h2"
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
                    </Heading>
                }
            >
                <div>
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
                </div>
                <div>
                    <Flex justifyContent="center" style={{ width: "100%" }}>
                        <DonateButton />
                    </Flex>
                </div>
            </Modal>
        </ErrorBoundary>
    ));
}
