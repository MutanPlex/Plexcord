/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { Button } from "@components/Button";
import { Paragraph } from "@components/Paragraph";
import { Channel, RenderModalProps } from "@plexcord/discord-types";
import { classNameFactory } from "@utils/css";
import { findByPropsLazy, findComponentByCodeLazy } from "@webpack";
import { Avatar, ChannelStore, MessageStore, Modal, React, UserStore } from "@webpack/common";

const cl = classNameFactory("pc-boo-");

function formatMessageDate(timestamp: string | Date): string {
    const date = new Date(timestamp);
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const year = String(date.getFullYear()).slice(-2);
    return `${month}/${day}/${year}`;
}

const GroupDmsRecipientsIcon = findComponentByCodeLazy('["aria-hidden"],"aria-label":');
const SelectedChannelActionCreators = findByPropsLazy("selectPrivateChannel");

function GroupDmsIcon({ channel }: { channel: Channel; }) {
    return channel.icon ? <Avatar
        src={`https://cdn.discordapp.com/channel-icons/${channel.id}/${channel.icon}.png`}
        size="SIZE_40"
        aria-label={channel?.name || t(plugin.ghosted.modal.unnamedGroup)}
    /> : <GroupDmsRecipientsIcon
        recipients={channel?.recipients ?? []}
        channel={channel}
        size="SIZE_40"
        isTyping={null}
    />;
}

interface GhostedUsersModalProps {
    modalProps: RenderModalProps;
    ghostedChannels: string[];
    onClearGhost: (channelId: string) => void;
}

export function getChannelDisplayName(channelId: string): string {
    const channel = ChannelStore.getChannel(channelId);
    if (!channel) return t(plugin.ghosted.modal.unknown);

    if (channel.isGroupDM()) {
        return channel?.name || t(plugin.ghosted.modal.unnamedGroup);
    }

    // 1-on-1 DM
    const recipientId = channel?.recipients?.[0] ?? "";
    const user = UserStore.getUser(recipientId);
    return user?.username || t(plugin.ghosted.modal.unknownUser);
}

export function GhostedUsersModal({ modalProps, ghostedChannels: initialChannels, onClearGhost }: GhostedUsersModalProps) {
    const [ghostedChannels, setGhostedChannels] = React.useState(initialChannels);

    const handleChannelClick = (channelId: string) => {
        const channel = ChannelStore.getChannel(channelId);
        if (channel) {
            SelectedChannelActionCreators.selectPrivateChannel(channelId);
            modalProps.onClose();
        }
    };

    const handleClearClick = (e: React.MouseEvent, channelId: string) => {
        e.stopPropagation();
        onClearGhost(channelId);
        // update local state to remove the cleared channel
        setGhostedChannels(prev => prev.filter(id => id !== channelId));
    };

    const handleClearAll = () => {
        for (const channelId of initialChannels) {
            onClearGhost(channelId);
        }
        setGhostedChannels([]);
    };

    return (
        <Modal
            {...modalProps}
            size="md"
            title={`${t(plugin.ghosted.modal.title)} (${ghostedChannels.length})`}
            actions={ghostedChannels.length > 0 ? [
                {
                    text: t(plugin.ghosted.modal.clearAll),
                    variant: "primary",
                    onClick: handleClearAll
                }
            ] : []}
        >
            <div className={cl("modal-content")}>
                {ghostedChannels.length === 0 ? (
                    <Paragraph size="md">{t(plugin.ghosted.modal.noGhost)}</Paragraph>
                ) : (
                    ghostedChannels.map(channelId => {
                        const channel = ChannelStore.getChannel(channelId);
                        if (!channel) return null;

                        const lastMessage = MessageStore.getMessages(channelId)?.last();
                        const lastMessageDate = lastMessage?.timestamp ? formatMessageDate(lastMessage.timestamp) : "";

                        const displayName = getChannelDisplayName(channel.id);
                        const userId = channel?.recipients?.[0] ?? "";
                        return (
                            <div
                                key={channelId}
                                onClick={() => handleChannelClick(channelId)}
                                className={cl("ghosted-entry")}
                            >
                                {channel.isGroupDM() ?
                                    <GroupDmsIcon
                                        channel={channel}
                                    /> : <Avatar
                                        src={UserStore.getUser(userId)?.getAvatarURL(undefined, 128, true)}
                                        size="SIZE_40"
                                        aria-label={displayName}
                                    />}
                                <div className={cl("user-info")}>
                                    <Paragraph size="md">
                                        {displayName}
                                    </Paragraph>
                                    {lastMessageDate && (
                                        <Paragraph size="xs" className={cl("modal-text")}>
                                            {lastMessageDate}
                                        </Paragraph>
                                    )}
                                </div>
                                <Button
                                    size="small"
                                    variant="primary"
                                    onClick={e => handleClearClick(e, channelId)}
                                >
                                    {t(plugin.ghosted.modal.clear)}
                                </Button>
                            </div>
                        );
                    })
                )}
            </div>
        </Modal>
    );
}
