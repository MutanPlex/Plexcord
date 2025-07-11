import { MessageAttachment } from "discord-types/general";
import { LoggedAttachment, LoggedMessage, LoggedMessageJSON } from "../../types";
export declare function getFileExtension(str: string): string | null;
export declare function isAttachmentGoodToCache(attachment: MessageAttachment, fileExtension: string): boolean;
export declare function cacheMessageImages(message: LoggedMessage | LoggedMessageJSON): Promise<void>;
export declare function deleteMessageImages(message: LoggedMessage | LoggedMessageJSON): Promise<void>;
export declare const getAttachmentBlobUrl: {
    (attachment: LoggedAttachment): Promise<string | null>;
    clear(): void;
};
