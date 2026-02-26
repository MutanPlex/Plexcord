/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { Button } from "@components/Button";
import ErrorBoundary from "@components/ErrorBoundary";
import { Heading } from "@components/Heading";
import { classNameFactory } from "@utils/css";
import { closeModal, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalProps, ModalRoot, openModal } from "@utils/modal";
import { ChannelStore, showToast, Toasts, useState } from "@webpack/common";

import { clearAllScheduledMessages, getChannelDisplayInfo, getScheduledMessages, removeScheduledMessage } from "../utils";
import { CalendarIcon, TimerIcon } from "./Icons";

const cl = classNameFactory("pc-scheduled-msg-");

interface ViewScheduledModalProps {
    rootProps: ModalProps;
    close: () => void;
}

function ViewScheduledModalInner({ rootProps, close }: ViewScheduledModalProps) {
    const [messages, setMessages] = useState(getScheduledMessages());

    const handleDelete = async (id: string) => {
        await removeScheduledMessage(id);
        setMessages(getScheduledMessages());
        showToast(t(plugin.scheduledMessages.toast.messageRemoved), Toasts.Type.SUCCESS);
    };

    const handleClearAll = async () => {
        await clearAllScheduledMessages();
        setMessages([]);
        showToast(t(plugin.scheduledMessages.toast.allCleared), Toasts.Type.SUCCESS);
    };

    return (
        <ModalRoot {...rootProps}>
            <ModalHeader className={cl("modal-header")}>
                <Heading tag="h2" className={cl("modal-title")}>{t(plugin.scheduledMessages.viewModal.title)}</Heading>
                {messages.length > 0 && (
                    <Button size="small" variant="dangerPrimary" onClick={handleClearAll}>
                        {t(plugin.scheduledMessages.viewModal.clearAll)}
                    </Button>
                )}
                <ModalCloseButton onClick={close} />
            </ModalHeader>

            <ModalContent className={cl("modal-content")}>
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
            </ModalContent>

            <ModalFooter className={cl("modal-footer")}>
                <Button onClick={close} variant="secondary">{t(plugin.scheduledMessages.viewModal.close)}</Button>
            </ModalFooter>
        </ModalRoot>
    );
}

export const ViewScheduledModal = ErrorBoundary.wrap(ViewScheduledModalInner, { noop: true });

export function openViewScheduledModal(): void {
    const key = openModal(props => (
        <ViewScheduledModal rootProps={props} close={() => closeModal(key)} />
    ));
}
