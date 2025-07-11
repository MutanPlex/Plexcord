import { CustomEmoji } from "../webpack/common/types";
import type { Channel, Message } from "discord-types/general";
import type { Promisable } from "type-fest";
export interface MessageObject {
    content: string;
    validNonShortcutEmojis: CustomEmoji[];
    invalidEmojis: any[];
    tts: boolean;
}
export interface Upload {
    classification: string;
    currentSize: number;
    description: string | null;
    filename: string;
    id: string;
    isImage: boolean;
    isRemix?: boolean;
    isThumbnail: boolean;
    isVideo: boolean;
    item: {
        file: File;
        platform: number;
    };
    loaded: number;
    mimeType: string;
    preCompressionSize: number;
    responseUrl: string;
    sensitive: boolean;
    showLargeMessageDialog: boolean;
    spoiler: boolean;
    status: "NOT_STARTED" | "STARTED" | "UPLOADING" | "ERROR" | "COMPLETED" | "CANCELLED";
    uniqueId: string;
    uploadedFilename: string;
}
export interface MessageReplyOptions {
    messageReference: Message["messageReference"];
    allowedMentions?: {
        parse: Array<string>;
        users?: Array<string>;
        roles?: Array<string>;
        repliedUser: boolean;
    };
}
export interface MessageExtra {
    stickers?: string[];
    uploads?: Upload[];
    replyOptions: MessageReplyOptions;
    content: string;
    channel: Channel;
    type?: any;
    openWarningPopout: (props: any) => any;
}
export type MessageSendListener = (channelId: string, messageObj: MessageObject, extra: MessageExtra) => Promisable<void | {
    cancel: boolean;
}>;
export type MessageEditListener = (channelId: string, messageId: string, messageObj: MessageObject) => Promisable<void | {
    cancel: boolean;
}>;
export declare function _handlePreSend(channelId: string, messageObj: MessageObject, extra: MessageExtra, replyOptions: MessageReplyOptions): Promise<boolean>;
export declare function _handlePreEdit(channelId: string, messageId: string, messageObj: MessageObject): Promise<boolean>;
/**
 * Note: This event fires off before a message is sent, allowing you to edit the message.
 */
export declare function addMessagePreSendListener(listener: MessageSendListener): MessageSendListener;
/**
 * Note: This event fires off before a message's edit is applied, allowing you to further edit the message.
 */
export declare function addMessagePreEditListener(listener: MessageEditListener): MessageEditListener;
export declare function removeMessagePreSendListener(listener: MessageSendListener): boolean;
export declare function removeMessagePreEditListener(listener: MessageEditListener): boolean;
export type MessageClickListener = (message: Message, channel: Channel, event: MouseEvent) => void;
export declare function _handleClick(message: Message, channel: Channel, event: MouseEvent): void;
export declare function addMessageClickListener(listener: MessageClickListener): MessageClickListener;
export declare function removeMessageClickListener(listener: MessageClickListener): boolean;
