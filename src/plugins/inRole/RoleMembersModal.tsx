/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import ErrorBoundary from "@components/ErrorBoundary";
import { Paragraph } from "@components/Paragraph";
import { GuildMember, RenderModalProps } from "@plexcord/discord-types";
import { classNameFactory } from "@utils/css";
import { Modal, openModal, Parser, React } from "@webpack/common";

const cl = classNameFactory("pc-inrole-");

export function showInRoleModal(members: GuildMember[], roleId: string, channelId: string) {
    openModal((props: RenderModalProps) =>
        <ErrorBoundary>
            <Modal
                {...props}
                size="md"
                title={
                    <Paragraph style={{ fontSize: "1.2rem", fontWeight: "bold", marginRight: "7px" }}>
                        {Parser.parse(`<@&${roleId}>`, true, { channelId, viewingChannelId: channelId })}: {t(plugin.inRole.modal.member.title)} ({members.length})
                    </Paragraph>
                }
            >
                <div style={{ padding: "13px 20px" }} className={cl("member-list")}>
                    {
                        members.length !== 0 ? members.map(member =>
                            <React.Fragment key={member.userId}>
                                <Paragraph className={cl("modal-member")}>
                                    {Parser.parse(`<@${member.userId}>`, true, { channelId, viewingChannelId: channelId })}
                                </Paragraph>
                            </React.Fragment>
                        ) : <Paragraph>{t(plugin.inRole.modal.member.noMembers)}</Paragraph>
                    }
                </div>
            </Modal>
        </ErrorBoundary>
    );
}
