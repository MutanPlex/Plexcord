/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { classNameFactory } from "@api/Styles";
import ErrorBoundary from "@components/ErrorBoundary";
import { GuildMember } from "@plexcord/discord-types";
import { ModalCloseButton, ModalContent, ModalHeader, ModalRoot, ModalSize, openModal } from "@utils/modal";
import { Forms, Parser } from "@webpack/common";

const cl = classNameFactory("pc-inrole-");

export function showInRoleModal(members: GuildMember[], roleId: string, channelId: string) {
    openModal(props =>
        <>
            <ErrorBoundary>
                <ModalRoot {...props} size={ModalSize.DYNAMIC} fullscreenOnMobile={true} >
                    <ModalHeader className={cl("header")}>
                        <Forms.FormText style={{ fontSize: "1.2rem", fontWeight: "bold", marginRight: "7px" }}>Members of role {
                            Parser.parse(`<@&${roleId}>`, true, { channelId, viewingChannelId: channelId })
                        } ({members.length})</Forms.FormText>
                        <ModalCloseButton onClick={props.onClose} className={cl("close")} />
                    </ModalHeader>
                    <ModalContent>
                        <div style={{ padding: "13px 20px" }} className={cl("member-list")}>
                            {
                                members.length !== 0 ? members.map(member =>
                                    <>
                                        <Forms.FormText className={cl("modal-member")}>
                                            {Parser.parse(`<@${member.userId}>`, true, { channelId, viewingChannelId: channelId })}
                                        </Forms.FormText>
                                    </>
                                ) : <Forms.FormText>Looks like no online cached members with that role were found. Try scrolling down on your member list to cache more users!</Forms.FormText>
                            }
                        </div>
                    </ModalContent>
                </ModalRoot>
            </ErrorBoundary>
        </>
    );
}
