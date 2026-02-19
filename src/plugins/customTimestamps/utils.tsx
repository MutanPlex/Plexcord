/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import "./style.css";

import { plugin, t } from "@api/i18n";
import ErrorBoundary from "@components/ErrorBoundary";
import { Paragraph } from "@components/Paragraph";
import { findByCodeLazy, findComponentByCodeLazy } from "@webpack";
import { moment, useRef, UserStore, useState } from "@webpack/common";

import customTimestamps from ".";

type TimeFormat = {
    name: () => string;
    description: () => string;
    default: string | (() => string);
    offset: number;
};
const MessagePreview = findComponentByCodeLazy<{
    author: any,
    message: any,
    compact: boolean,
    isGroupStart: boolean,
    className: string,
    hideSimpleEmbedContent: boolean;
}>(/previewGuildId:\i,preview:\i,/);
const createBotMessage = findByCodeLazy('username:"Clyde"');
const populateMessagePrototype = findByCodeLazy("isProbablyAValidSnowflake", "messageReference:");

export const timeFormats: Record<string, TimeFormat> = {
    cozyFormat: {
        name: () => t(plugin.customTimestamps.option.cozyFormat.label),
        description: () => t(plugin.customTimestamps.option.cozyFormat.description),
        default: "[calendar]",
        offset: 0,
    },
    compactFormat: {
        name: () => t(plugin.customTimestamps.option.compactFormat.label),
        description: () => t(plugin.customTimestamps.option.compactFormat.description),
        default: "LT",
        offset: 0,
    },
    tooltipFormat: {
        name: () => t(plugin.customTimestamps.option.tooltipFormat.label),
        description: () => t(plugin.customTimestamps.option.tooltipFormat.description),
        default: "LLLL • [relative]",
        offset: 0,
    },
    ariaLabelFormat: {
        name: () => t(plugin.customTimestamps.option.ariaLabelFormat.label),
        description: () => t(plugin.customTimestamps.option.ariaLabelFormat.description),
        default: "[calendar]",
        offset: 0,
    },
    sameDayFormat: {
        name: () => t(plugin.customTimestamps.option.sameDayFormat.label),
        description: () => t(plugin.customTimestamps.option.sameDayFormat.description),
        default: () => t(plugin.customTimestamps.option.sameDayFormat.default),
        offset: 0,
    },
    lastDayFormat: {
        name: () => t(plugin.customTimestamps.option.lastDayFormat.label),
        description: () => t(plugin.customTimestamps.option.lastDayFormat.description),
        default: () => t(plugin.customTimestamps.option.lastDayFormat.default),
        offset: -1000 * 60 * 60 * 24,
    },
    lastWeekFormat: {
        name: () => t(plugin.customTimestamps.option.lastWeekFormat.label),
        description: () => t(plugin.customTimestamps.option.lastWeekFormat.description),
        default: "ddd DD.MM.YYYY HH:mm:ss",
        offset: -1000 * 60 * 60 * 24 * 6, // setting an offset of a week exactly pushes it into "older date" territory as soon as a second passes
    },
    sameElseFormat: {
        name: () => t(plugin.customTimestamps.option.sameElseFormat.label),
        description: () => t(plugin.customTimestamps.option.sameElseFormat.description),
        default: "ddd DD.MM.YYYY HH:mm:ss",
        offset: -1000 * 60 * 60 * 24 * 31,
    }
};

const DemoMessage = (props: { msgId, compact, message, date: Date | undefined, isGroupStart?: boolean; }) => {
    const message = createBotMessage({ content: props.message, channelId: "1337", embeds: [] });
    message.author = UserStore.getCurrentUser();
    message.id = props.msgId;
    message.timestamp = moment(props.date ?? new Date());
    const user = UserStore.getCurrentUser();
    const populatedMessage = message && populateMessagePrototype(message);
    return populatedMessage ? (
        <div className="pc-cmt-demo-message">
            <MessagePreview
                author={{ ...user, nick: user.globalName || user.username }}
                message={populatedMessage}
                compact={props.compact}
                isGroupStart={props.isGroupStart || false}
                className="pc-cmt-demo-message-preview"
                hideSimpleEmbedContent={true}
            />
        </div>
    ) : <div className="pc-cmt-demo-message">
        <Paragraph>
            {/* @ts-ignore */}
            <b>{t(plugin.customTimestamps.modal.preview)}:</b> {customTimestamps.renderTimestamp(props.date, "cozy")}
        </Paragraph>
    </div>;
};

export const DemoMessageContainer = ErrorBoundary.wrap(() => {
    const [isCompact, setIsCompact] = useState(false);
    const today = useRef<Date>(new Date());
    const yesterday = useRef<Date>(new Date(Date.now() + timeFormats.lastDayFormat.offset));
    const lastWeek = useRef<Date>(new Date(Date.now() + timeFormats.lastWeekFormat.offset));
    const aMonthAgo = useRef<Date>(new Date(Date.now() + timeFormats.sameElseFormat.offset));

    return (
        <div className={"pc-cmt-demo-message-container"} onClick={() => setIsCompact(!isCompact)}>
            <DemoMessage compact={isCompact} msgId={"1337"}
                message={isCompact ? t(plugin.customTimestamps.demo.compact) : t(plugin.customTimestamps.demo.cozy)} isGroupStart={true}
                date={aMonthAgo.current} />
            <DemoMessage compact={isCompact} msgId={"1338"} message={t(plugin.customTimestamps.demo.lastWeek)}
                isGroupStart={true} date={lastWeek.current} />
            <DemoMessage compact={isCompact} msgId={"1339"} message={t(plugin.customTimestamps.demo.hover)}
                isGroupStart={true} date={yesterday.current} />
            <DemoMessage compact={isCompact} msgId={"1340"} message={t(plugin.customTimestamps.demo.edit)} isGroupStart={true}
                date={today.current} />
        </div>
    );
}, { noop: true });
