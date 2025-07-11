import { PluginNative } from "../../../utils/types";
import { DBMessageStatus } from "../db";
import { LoggedMessageJSON } from "../types";
export declare function getGuildIdByChannel(channel_id: string): string;
export declare const isGhostPinged: (message?: LoggedMessageJSON) => boolean | undefined;
export declare const hasPingged: (message?: LoggedMessageJSON | {
    mention_everyone: boolean;
    mentions: any[];
}) => boolean | undefined;
export declare const getMessageStatus: (message: LoggedMessageJSON) => DBMessageStatus;
export declare const discordIdToDate: (id: string) => Date;
export declare const sortMessagesByDate: (timestampA: string, timestampB: string) => 0 | 1 | -1;
export declare function findLastIndex<T>(array: T[], predicate: (e: T, t: number, n: T[]) => boolean): number;
export declare const mapTimestamp: (m: any) => any;
export declare const messageJsonToMessageClass: {
    (log: {
        message: LoggedMessageJSON;
    }): any;
    clear(): void;
};
export declare function parseJSON(json?: string | null): any;
export declare function doesBlobUrlExist(url: string): Promise<boolean>;
export declare function getNative(): PluginNative<typeof import("../native")>;
