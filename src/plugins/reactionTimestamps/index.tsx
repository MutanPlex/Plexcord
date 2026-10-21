/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2026 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import "./style.css";

import { plugin, t } from "@api/i18n";
import ErrorBoundary from "@components/ErrorBoundary";
import type { ReactionEmoji } from "@plexcord/discord-types";
import { PcDevs } from "@utils/constants";
import definePlugin from "@utils/types";

interface ReactionEvent {
    optimistic?: boolean;
    channelId: string;
    messageId: string;
    userId: string;
    emoji: ReactionEmoji;
}

interface ReactionUserRowProps {
    user?: {
        id: string;
        username?: string;
        globalName?: string;
        global_name?: string;
        displayName?: string;
    };
    channelId?: string;
    messageId?: string;
    message?: {
        id: string;
        channel_id?: string;
        channelId?: string;
    };
    emoji?: ReactionEmoji;
    reaction?: {
        emoji?: ReactionEmoji;
    };
}

const MAX_TIMESTAMPS = 2000;

const timestamps = new Map<string, number>();
const formatter = new Intl.DateTimeFormat(undefined, {
    dateStyle: "medium",
    timeStyle: "medium"
});

function getEmojiKey(emoji: ReactionEmoji) {
    return `${emoji.name}:${emoji.id ?? ""}`;
}

function getKey(channelId: string, messageId: string, userId: string, emoji: ReactionEmoji) {
    return `${channelId}:${messageId}:${userId}:${getEmojiKey(emoji)}`;
}

function rememberTimestamp(channelId: string, messageId: string, userId: string, emoji: ReactionEmoji) {
    timestamps.set(getKey(channelId, messageId, userId, emoji), Date.now());

    if (timestamps.size <= MAX_TIMESTAMPS) return;

    const oldestKey = timestamps.keys().next().value;
    if (oldestKey) timestamps.delete(oldestKey);
}

function getTimestamp(props: ReactionUserRowProps) {
    const userId = props.user?.id;
    const channelId = props.channelId ?? props.message?.channel_id ?? props.message?.channelId;
    const messageId = props.messageId ?? props.message?.id;
    const emoji = props.emoji ?? props.reaction?.emoji;
    if (!userId || !channelId || !messageId || !emoji) return;

    const timestamp = timestamps.get(getKey(channelId, messageId, userId, emoji));
    return timestamp ? formatter.format(timestamp) : undefined;
}

function ReactionName(props: ReactionUserRowProps) {
    const timestamp = getTimestamp(props);
    const { user } = props;
    if (!user) return null;

    const name = user.displayName ?? user.globalName ?? user.global_name ?? user.username;
    if (!name) return null;

    return (
        <div className="pc-reaction-timestamps-name">
            <span>{name}</span>
            {timestamp ? <span className="pc-reaction-timestamps-time">
                {t(plugin.reactionTimestamps.text.userAtTime, { user: user.username ?? user.id, time: timestamp })}
            </span> : null}
        </div>
    );
}

export default definePlugin({
    name: "ReactionTimestamps",
    description: () => t(plugin.reactionTimestamps.description),
    authors: [PcDevs.Kurt, PcDevs.MutanPlex],
    tags: ["reactions", "chat"],
    patches: [
        {
            find: ".MESSAGE,userId:",
            replacement: {
                match: /(?<=Child,{className:\i\.\i,children:)/,
                replace: "$self.renderReactionName(arguments[0])??"
            }
        }
    ],

    flux: {
        MESSAGE_REACTION_ADD(event: ReactionEvent) {
            if (event.optimistic) return;

            rememberTimestamp(event.channelId, event.messageId, event.userId, event.emoji);
        },

        MESSAGE_REACTION_REMOVE(event: ReactionEvent) {
            timestamps.delete(getKey(event.channelId, event.messageId, event.userId, event.emoji));
        }
    },

    renderReactionName: ErrorBoundary.wrap(ReactionName, { noop: true }),

    stop() {
        timestamps.clear();
    }
});
