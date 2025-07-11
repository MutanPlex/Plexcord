import { Message, MessageAttachment, MessageJSON } from "discord-types/general";
export interface LoggedAttachment extends MessageAttachment {
    fileExtension?: string | null;
    path?: string | null;
    blobUrl?: string;
    nativefileSystem?: boolean;
    oldUrl?: string;
    oldProxyUrl?: string;
}
export type RefrencedMessage = LoggedMessageJSON & {
    message_id: string;
};
export interface LoggedMessageJSON extends Omit<LoggedMessage, "timestamp"> {
    mention_everyone?: string;
    guildId?: string;
    guild_id?: string;
    ghostPinged?: boolean;
    timestamp: string;
    ourCache?: boolean;
    referenced_message: RefrencedMessage;
    message_reference: RefrencedMessage;
}
export interface LoggedMessage extends Message {
    attachments: LoggedAttachment[];
    deleted?: boolean;
    deletedTimestamp?: string;
    editHistory?: {
        timestamp: string;
        content: string;
    }[];
}
export interface MessageDeletePayload {
    type: string;
    guildId: string;
    id: string;
    channelId: string;
    mlDeleted?: boolean;
}
export interface MessageDeleteBulkPayload {
    type: string;
    guildId: string;
    ids: string[];
    channelId: string;
}
export interface MessageUpdatePayload {
    type: string;
    guildId: string;
    message: MessageJSON;
}
export interface MessageCreatePayload {
    type: string;
    guildId: string;
    channelId: string;
    message: MessageJSON;
    optimistic: boolean;
    isPushNotification: boolean;
}
export interface LoadMessagePayload {
    type: string;
    channelId: string;
    messages: LoggedMessageJSON[];
    isBefore: boolean;
    isAfter: boolean;
    hasMoreBefore: boolean;
    hasMoreAfter: boolean;
    limit: number;
    isStale: boolean;
}
export interface FetchMessagesResponse {
    ok: boolean;
    headers: Headers;
    body: LoggedMessageJSON[] & {
        extra?: LoggedMessageJSON[];
    };
    text: string;
    status: number;
}
export interface PatchAttachmentItem {
    uniqueId: string;
    originalItem: LoggedAttachment;
    type: string;
    downloadUrl: string;
    height: number;
    width: number;
    spoiler: boolean;
    contentType: string;
}
export interface AttachmentData {
    messageId: string;
    attachmentId: string;
}
export type SavedImages = Record<string, AttachmentData>;
export type LoggedMessageIds = {
    deletedMessages: Record<string, string[]>;
    editedMessages: Record<string, string[]>;
};
export type MessageRecord = {
    message: LoggedMessageJSON;
};
export type LoggedMessages = LoggedMessageIds & {
    [message_id: string]: {
        message?: LoggedMessageJSON;
    };
};
export type GitValue = {
    value: any;
    stderr?: string;
    ok: true;
};
export type GitError = {
    ok: false;
    cmd: string;
    message: string;
    error: any;
};
export type GitResult = GitValue | GitError;
