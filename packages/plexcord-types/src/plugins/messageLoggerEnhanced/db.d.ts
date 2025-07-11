import { DBSchema, IDBPDatabase } from "idb";
import { LoggedMessageJSON } from "./types";
export declare enum DBMessageStatus {
    DELETED = "DELETED",
    EDITED = "EDITED",
    GHOST_PINGED = "GHOST_PINGED"
}
export interface DBMessageRecord {
    message_id: string;
    channel_id: string;
    status: DBMessageStatus;
    message: LoggedMessageJSON;
}
export interface MLIDB extends DBSchema {
    messages: {
        key: string;
        value: DBMessageRecord;
        indexes: {
            by_channel_id: string;
            by_status: DBMessageStatus;
            by_timestamp: string;
            by_timestamp_and_message_id: [string, string];
        };
    };
}
export declare let db: IDBPDatabase<MLIDB>;
export declare const cachedMessages: Map<string, LoggedMessageJSON>;
export declare function initIDB(): Promise<void>;
export declare function hasMessageIDB(message_id: string): Promise<boolean>;
export declare function countMessagesIDB(): Promise<number>;
export declare function countMessagesByStatusIDB(status: DBMessageStatus): Promise<number>;
export declare function getAllMessagesIDB(): Promise<DBMessageRecord[]>;
export declare function getMessagesForChannelIDB(channel_id: string): Promise<DBMessageRecord[]>;
export declare function getMessageIDB(message_id: string): Promise<DBMessageRecord | null | undefined>;
export declare function getMessagesByStatusIDB(status: DBMessageStatus): Promise<DBMessageRecord[]>;
export declare function getOldestMessagesIDB(limit: number): Promise<DBMessageRecord[]>;
export declare function getDateStortedMessagesByStatusIDB(newest: boolean, limit: number, status: DBMessageStatus): Promise<DBMessageRecord[]>;
export declare function getMessagesByChannelAndAfterTimestampIDB(channel_id: string, start: string): Promise<DBMessageRecord[]>;
export declare function addMessageIDB(message: LoggedMessageJSON, status: DBMessageStatus): Promise<void>;
export declare function addMessagesBulkIDB(messages: LoggedMessageJSON[], status?: DBMessageStatus): Promise<void>;
export declare function deleteMessageIDB(message_id: string): Promise<void>;
export declare function deleteMessagesBulkIDB(message_ids: string[]): Promise<void>;
export declare function clearMessagesIDB(): Promise<void>;
