/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { t, tJsx } from "@api/i18n";
import { classNameFactory } from "@api/Styles";
import ErrorBoundary from "@components/ErrorBoundary";
import { Paragraph } from "@components/Paragraph";
import { GuildMember } from "@plexcord/discord-types";
import { ModalCloseButton, ModalContent, ModalHeader, ModalRoot, ModalSize, openModal } from "@utils/modal";
import { Parser } from "@webpack/common";

const cl = classNameFactory("pc-inrole-");

export function showInRoleModal(members: GuildMember[], roleId: string, channelId: string) {
    openModal(props =>
        <>
            <ErrorBoundary>
                <ModalRoot {...props} size={ModalSize.DYNAMIC} fullscreenOnMobile={true} >
                    <ModalHeader className={cl("header")}>
                        <Paragraph style={{ fontSize: "1.2rem", fontWeight: "bold", marginRight: "7px" }}>{
                            Parser.parse(`<@&${roleId}>`, true, { channelId, viewingChannelId: channelId })
                        }: {tJsx("plugin.inRole.modal.member.title")} ({members.length})</Paragraph>
                        <ModalCloseButton onClick={props.onClose} className={cl("close")} />
                    </ModalHeader>
                    <ModalContent>
                        <div style={{ padding: "13px 20px" }} className={cl("member-list")}>
                            {
                                members.length !== 0 ? members.map(member =>
                                    <>
                                        <Paragraph className={cl("modal-member")}>
                                            {Parser.parse(`<@${member.userId}>`, true, { channelId, viewingChannelId: channelId })}
                                        </Paragraph>
                                    </>
                                ) : <Paragraph>{t("plugin.inRole.modal.member.noMembers")}</Paragraph>
                            }
                        </div>
                    </ModalContent>
                </ModalRoot>
            </ErrorBoundary>
        </>
    );
}
