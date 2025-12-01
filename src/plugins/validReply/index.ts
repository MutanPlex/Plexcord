/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { t } from "@api/i18n";
import { Channel, Message, User } from "@plexcord/discord-types";
import { Devs } from "@utils/constants";
import definePlugin from "@utils/types";
import { findByCodeLazy } from "@webpack";
import { FluxDispatcher, RestAPI } from "@webpack/common";

const enum ReferencedMessageState {
    Loaded,
    NotLoaded,
    Deleted
}

interface Reply {
    baseAuthor: User,
    baseMessage: Message;
    channel: Channel;
    referencedMessage: { state: ReferencedMessageState; };
    compact: boolean;
    isReplyAuthorBlocked: boolean;
}

const fetching = new Map<string, string>();
let ReplyStore: any;

const createMessageRecord = findByCodeLazy(".createFromServer(", ".isBlockedForMessage", "messageReference:");

export default definePlugin({
    name: "ValidReply",
    description: 'Fixes "Message could not be loaded" upon hovering over the reply',
    authors: [Devs.newwares],

    get displayDescription() {
        return t("plugin.validReply.description");
    },

    patches: [
        {
            find: "#{intl::REPLY_QUOTE_MESSAGE_NOT_LOADED}",
            replacement: {
                match: /#{intl::REPLY_QUOTE_MESSAGE_NOT_LOADED}\)/,
                replace: "$&,onMouseEnter:()=>$self.fetchReply(arguments[0])"
            }
        },
        {
            find: "ReferencedMessageStore",
            replacement: {
                match: /constructor\(\)\{\i\(this,"_channelCaches",new Map\)/,
                replace: "$&;$self.setReplyStore(this);"
            }
        }
    ],

    setReplyStore(store: any) {
        ReplyStore = store;
    },

    async fetchReply(reply: Reply) {
        const { channel_id: channelId, message_id: messageId } = reply.baseMessage.messageReference!;

        if (fetching.has(messageId)) {
            return;
        }
        fetching.set(messageId, channelId);

        RestAPI.get({
            url: `/channels/${channelId}/messages`,
            query: {
                limit: 1,
                around: messageId
            },
            retries: 2
        })
            .then(res => {
                const reply: Message | undefined = res?.body?.[0];
                if (!reply) return;

                if (reply.id !== messageId) {
                    ReplyStore.set(channelId, messageId, {
                        state: ReferencedMessageState.Deleted
                    });

                    FluxDispatcher.dispatch({
                        type: "MESSAGE_DELETE",
                        channelId: channelId,
                        message: messageId
                    });
                } else {
                    ReplyStore.set(reply.channel_id, reply.id, {
                        state: ReferencedMessageState.Loaded,
                        message: createMessageRecord(reply)
                    });

                    FluxDispatcher.dispatch({
                        type: "MESSAGE_UPDATE",
                        message: reply
                    });
                }
            })
            .catch(() => { })
            .finally(() => {
                fetching.delete(messageId);
            });
    }
});
