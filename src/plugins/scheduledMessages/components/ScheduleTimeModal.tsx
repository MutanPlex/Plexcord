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
import { findByPropsLazy } from "@webpack";
import { ChannelStore, DraftType, showToast, TextInput, Toasts, UploadManager, useState } from "@webpack/common";

import { ScheduledAttachment } from "../types";
import { addScheduledMessage, getChannelDisplayInfo } from "../utils";
import { ErrorIcon } from "./Icons";

const cl = classNameFactory("pc-scheduled-msg-");
const ComponentDispatch = findByPropsLazy("dispatchToLastSubscribed");

function ScheduleTimeModalInner({ channelId, content, attachments, rootProps, close }: {
    channelId: string;
    content: string;
    attachments?: ScheduledAttachment[];
    rootProps: ModalProps;
    close: () => void;
}) {
    const [scheduleType, setScheduleType] = useState<"delay" | "time">("delay");
    const [delayMinutes, setDelayMinutes] = useState("5");
    const [scheduledDateTime, setScheduledDateTime] = useState("");
    const [error, setError] = useState("");

    const { name, avatar } = getChannelDisplayInfo(channelId);
    const channel = ChannelStore.getChannel(channelId);
    if (!channel) return null;

    const isDM = channel.isPrivate();

    const handleSchedule = async () => {
        let scheduledTime: number;

        if (scheduleType === "delay") {
            const minutes = parseInt(delayMinutes, 10);
            if (isNaN(minutes) || minutes < 1) {
                setError(t(plugin.scheduledMessages.scheduleModal.error.invalidDelay));
                return;
            }
            scheduledTime = Date.now() + minutes * 60 * 1000;
        } else {
            const dateTime = new Date(scheduledDateTime).getTime();
            if (isNaN(dateTime) || dateTime <= Date.now()) {
                setError(t(plugin.scheduledMessages.scheduleModal.error.invalidDateTime));
                return;
            }
            scheduledTime = dateTime;
        }

        const result = await addScheduledMessage(channelId, content, scheduledTime, attachments);

        if (result.success) {
            ComponentDispatch.dispatchToLastSubscribed("CLEAR_TEXT");
            UploadManager.clearAll(channelId, DraftType.ChannelMessage);
            showToast(t(plugin.scheduledMessages.toast.messageScheduled), Toasts.Type.SUCCESS);
            close();
        } else {
            setError(result.error ?? t(plugin.scheduledMessages.toast.messageFailed));
        }
    };

    return (
        <ModalRoot {...rootProps}>
            <ModalHeader className={cl("modal-header")}>
                <Heading tag="h2" className={cl("modal-title")}>{t(plugin.scheduledMessages.scheduleModal.title)}</Heading>
                <ModalCloseButton onClick={close} />
            </ModalHeader>

            <ModalContent className={cl("modal-content")}>
                <div className={cl("channel-info")}>
                    {avatar && <img src={avatar} className={cl("channel-avatar")} alt="" />}
                    <span className={cl("channel-text")}>
                        {t(plugin.scheduledMessages.scheduleModal.schedulingFor, { channel: isDM ? name : `#${name}` })}
                    </span>
                </div>

                <Heading tag="h5" className={cl("field-label")}>{t(plugin.scheduledMessages.scheduleModal.scheduleType)}</Heading>
                <div className={cl("schedule-type-buttons")}>
                    <Button
                        size="small"
                        variant={scheduleType === "delay" ? "primary" : "secondary"}
                        onClick={() => setScheduleType("delay")}
                    >
                        {t(plugin.scheduledMessages.scheduleModal.delay)}
                    </Button>
                    <Button
                        size="small"
                        variant={scheduleType === "time" ? "primary" : "secondary"}
                        onClick={() => setScheduleType("time")}
                    >
                        {t(plugin.scheduledMessages.scheduleModal.specificTime)}
                    </Button>
                </div>

                {scheduleType === "delay" ? (
                    <>
                        <Heading tag="h5" className={cl("field-label")}>{t(plugin.scheduledMessages.scheduleModal.delayMinutes)}</Heading>
                        <TextInput
                            value={delayMinutes}
                            onChange={setDelayMinutes}
                            placeholder="5"
                            type="number"
                        />
                    </>
                ) : (
                    <>
                        <Heading tag="h5" className={cl("field-label")}>{t(plugin.scheduledMessages.scheduleModal.dateTime)}</Heading>
                        <input
                            type="datetime-local"
                            className={cl("datetime-input")}
                            value={scheduledDateTime}
                            onChange={e => setScheduledDateTime(e.target.value)}
                            min={new Date().toISOString().slice(0, 16)}
                        />
                    </>
                )}

                {error && (
                    <div className={cl("error")}>
                        <ErrorIcon />
                        <span>{error}</span>
                    </div>
                )}
            </ModalContent>

            <ModalFooter className={cl("modal-footer")}>
                <Button onClick={handleSchedule} variant="positive">{t(plugin.scheduledMessages.scheduleModal.schedule)}</Button>
                <Button variant="secondary" onClick={close}>{t(plugin.scheduledMessages.scheduleModal.cancel)}</Button>
            </ModalFooter>
        </ModalRoot>
    );
}

export const ScheduleTimeModal = ErrorBoundary.wrap(ScheduleTimeModalInner, { noop: true });

export function openScheduleTimeModal(channelId: string, content: string, attachments?: ScheduledAttachment[]): void {
    const key = openModal(props => (
        <ScheduleTimeModal
            channelId={channelId}
            content={content}
            attachments={attachments}
            rootProps={props}
            close={() => closeModal(key)}
        />
    ));
}
