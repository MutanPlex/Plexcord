/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import "./style.css";

import { definePluginSettings } from "@api/Settings";
import { getUserSettingLazy } from "@api/UserSettings";
import ErrorBoundary from "@components/ErrorBoundary";
import { Devs, PcDevs } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";
import { findComponentByCodeLazy } from "@webpack";
import { ChannelStore, Constants, MessageStore, RestAPI, Tooltip, useEffect, useState, useStateFromStores } from "@webpack/common";
import type { ComponentType } from "react";

const MessageDisplayCompact = getUserSettingLazy("textAndImages", "messageDisplayCompact")!;

const ChannelMessage = findComponentByCodeLazy("isFirstMessageInForumPost", "trackAnnouncementViews") as ComponentType<any>;

const settings = definePluginSettings({
    onLink: {
        description: "Show tooltip when hovering over message links",
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: true,
    },
    onReply: {
        description: "Show tooltip when hovering over message replies",
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: true,
    },
    onForward: {
        description: "Show tooltip when hovering over forwarded messages",
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: true,
    },
    display: {
        description: "Display style",
        type: OptionType.SELECT,
        options: [
            {
                label: "Same as message",
                value: "auto",
                default: true
            },
            {
                label: "Compact",
                value: "compact"
            },
            {
                label: "Cozy",
                value: "cozy"
            },
        ]
    },
});

export default definePlugin({
    name: "MessageLinkTooltip",
    description: "Like MessageLinkEmbed but without taking space",
    authors: [Devs.Kyuuhachi, PcDevs.MutanPlex],

    settings,

    patches: [
        {
            find: ',className:"channelMention",children:[',
            replacement: {
                match: /(?<=\.jsxs\)\()(\i\.\i),\{(?=role:"link")/,
                replace: "$self.MentionTooltip,{Component:$1,pcProps:arguments[0],"
            },
            predicate: () => settings.store.onLink,
        },
        {
            find: "#{intl::REPLY_QUOTE_MESSAGE_NOT_LOADED}",
            replacement: {
                // Should match two places
                match: /(\i\.\i),\{(?=className:\i\(\)\(\i\.repliedTextPreview,\i\.clickable)/g,
                replace: "$self.ReplyTooltip,{Component:$1,pcProps:arguments[0],"
            },
            predicate: () => settings.store.onReply,
        },
        {
            find: "#{intl::MESSAGE_FORWARDED}",
            replacement: {
                match: /(\i\.\i),\{(?=className:\i\.footerContainer)/g,
                replace: "$self.ForwardTooltip,{Component:$1,pcProps:arguments[0],"
            },
            predicate: () => settings.store.onForward,
        },
    ],

    MentionTooltip({ Component, pcProps, ...props }) {
        return withTooltip(Component, props, pcProps.messageId, pcProps.channelId);
    },

    ReplyTooltip({ Component, pcProps, ...props }) {
        const mess = pcProps.baseMessage.messageReference;
        return withTooltip(Component, props, mess?.message_id, mess?.channel_id);
    },

    ForwardTooltip({ Component, pcProps, ...props }) {
        const mess = pcProps.message.messageReference;
        return withTooltip(Component, props, mess?.message_id, mess?.channel_id);
    },
});

function withTooltip(Component, props, messageId, channelId) {
    if (!messageId) return <Component {...props} />;
    return <Tooltip
        tooltipClassName="c98-message-link-tooltip"
        text={
            <ErrorBoundary>
                <MessagePreview
                    channelId={channelId}
                    messageId={messageId}
                />
            </ErrorBoundary>
        }>
        {({ onMouseEnter, onMouseLeave }) => (
            <Component {...props} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
        )}
    </Tooltip>;
}

function MessagePreview({ channelId, messageId }) {
    const channel = ChannelStore.getChannel(channelId);
    const message = useMessage(channelId, messageId);
    const rawCompact = MessageDisplayCompact.useSetting();

    const compact = settings.store.display === "compact" ? true : settings.store.display === "cozy" ? false : rawCompact;

    if (!message) {
        return <span>Loading...</span>;
    }

    return <ChannelMessage
        id={`message-link-tooltip-${messageId}`}
        message={message}
        channel={channel}
        subscribeToComponentDispatch={false}
        compact={compact}
    />;
}

function useMessage(channelId, messageId) {
    const cachedMessage = useStateFromStores(
        [MessageStore],
        () => MessageStore.getMessage(channelId, messageId)
    );
    const [message, setMessage] = useState(cachedMessage);
    useEffect(() => {
        if (message == null)
            (async () => {
                const res = await RestAPI.get({
                    url: Constants.Endpoints.MESSAGES(channelId),
                    query: {
                        limit: 1,
                        around: messageId,
                    },
                    retries: 2,
                });
                const rawMessage = res.body[0];
                const message = MessageStore.getMessages(channelId)
                    .receiveMessage(rawMessage)
                    .get(messageId);
                setMessage(message);
            })();
    });
    return message;
}
