/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { Button } from "@components/Button";
import ErrorBoundary from "@components/ErrorBoundary";
import { ModalAction, RenderModalProps } from "@plexcord/discord-types";
import { classNameFactory } from "@utils/css";
import { ChannelStore, closeModal, Modal, openModal, showToast, useState } from "@webpack/common";

import { clearAllScheduledMessages, getChannelDisplayInfo, getScheduledMessages, removeScheduledMessage } from "../utils";
import { CalendarIcon, TimerIcon } from "./Icons";

const cl = classNameFactory("pc-scheduled-msg-");

interface ViewScheduledModalProps {
    rootProps: RenderModalProps;
    close: () => void;
}

function ViewScheduledModalInner({ rootProps, close }: ViewScheduledModalProps) {
    const [messages, setMessages] = useState(getScheduledMessages());

    const handleDelete = async (id: string) => {
        await removeScheduledMessage(id);
        setMessages(getScheduledMessages());
        showToast({ text: t(plugin.scheduledMessages.toast.messageRemoved), variant: "success" });
    };

    const handleClearAll = async () => {
        await clearAllScheduledMessages();
        setMessages([]);
        showToast({ text: t(plugin.scheduledMessages.toast.allCleared), variant: "success" });
    };

    const actions: ModalAction[] = [
        {
            text: t(plugin.scheduledMessages.viewModal.close),
            variant: "secondary",
            onClick: close
        }
    ];

    if (messages.length > 0) {
        actions.unshift({
            text: t(plugin.scheduledMessages.viewModal.clearAll),
            variant: "critical-primary",
            onClick: handleClearAll
        });
    }

    return (
        <Modal
            {...rootProps}
            size="md"
            title={t(plugin.scheduledMessages.viewModal.title)}
            actions={actions}
        >
            {!messages.length ? (
                <div className={cl("empty-state")}>
                    <CalendarIcon width={48} height={48} />
                    <span>{t(plugin.scheduledMessages.viewModal.noMessages)}</span>
                </div>
            ) : (
                <div className={cl("message-list")}>
                    {messages.map(msg => {
                        const { name, avatar } = getChannelDisplayInfo(msg.channelId);
                        const channel = ChannelStore.getChannel(msg.channelId);
                        if (!channel) return null;

                        const isDM = channel.isPrivate();
                        const displayContent = msg.content.length > 200
                            ? msg.content.slice(0, 200) + "..."
                            : msg.content;

                        return (
                            <div key={msg.id} className={cl("message-item")}>
                                <div className={cl("message-info")}>
                                    <div className={cl("message-header")}>
                                        {avatar && <img src={avatar} className={cl("message-avatar")} alt="" />}
                                        <span className={cl("message-channel")}>
                                            {isDM ? name : `#${name}`}
                                        </span>
                                    </div>
                                    <div className={cl("message-time")}>
                                        <TimerIcon width={14} height={14} />
                                        <span>{new Date(msg.scheduledTime).toLocaleString()}</span>
                                    </div>
                                    <div className={cl("message-content")}>{displayContent}</div>
                                </div>
                                <Button
                                    size="small"
                                    variant="dangerPrimary"
                                    onClick={() => handleDelete(msg.id)}
                                >
                                    {t(plugin.scheduledMessages.viewModal.delete)}
                                </Button>
                            </div>
                        );
                    })}
                </div>
            )}
        </Modal>
    );
}

export const ViewScheduledModal = ErrorBoundary.wrap(ViewScheduledModalInner, { noop: true });

export function openViewScheduledModal(): void {
    const key = openModal(props => (
        <ViewScheduledModal rootProps={props} close={() => closeModal(key)} />
    ));
}
