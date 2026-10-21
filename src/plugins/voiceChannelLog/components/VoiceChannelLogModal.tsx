/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { Channel, RenderModalProps } from "@plexcord/discord-types";
import { getVcLogs, vcLogSubscribe } from "@plugins/voiceChannelLog/logs";
import { classes } from "@utils/misc";
import { AccessibilityStore, Modal, openModal, React, ScrollerThin } from "@webpack/common";

import { cl } from "..";
import { VoiceChannelLogEntryComponent } from "./VoiceChannelLogEntryComponent";

export function openVoiceChannelLog(channel: Channel) {
    return openModal(props => (
        <VoiceChannelLogModal
            props={props}
            channel={channel}
        />
    ));
}

export function VoiceChannelLogModal({ channel, props }: { channel: Channel; props: RenderModalProps; }) {
    React.useSyncExternalStore(vcLogSubscribe, () => getVcLogs(channel.id));
    const vcLogs = getVcLogs(channel.id);
    const logElements: (React.ReactNode)[] = [];

    if (vcLogs.length > 0) {
        for (let i = 0; i < vcLogs.length; i++) {
            const logEntry = vcLogs[i];
            if (i === 0 || logEntry.timestamp.toDateString() !== vcLogs[i - 1].timestamp.toDateString()) {
                logElements.push(<div className={classes(cl("date-separator"))} role="separator" aria-label={logEntry.timestamp.toDateString()}>
                    <span>
                        {logEntry.timestamp.toDateString()}
                    </span>
                </div>);
            } else {
                logElements.push(<VoiceChannelLogEntryComponent logEntry={logEntry} channel={channel} />);
            }
        }
    } else {
        logElements.push(<div className={cl("empty")}>{t(plugin.voiceChannelLog.modal.noLogs)}</div>);
    }

    return (
        <Modal
            {...props}
            size="lg"
            title={t(plugin.voiceChannelLog.modal.logs, { channel: channel.name })}
        >
            <ScrollerThin fade className={classes(cl("scroller"), `group-spacing-${AccessibilityStore.messageGroupSpacing}`)}>
                {logElements}
            </ScrollerThin>
        </Modal>
    );
}
