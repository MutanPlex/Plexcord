import { DBMessageRecord } from "../db";
import { LogTabs } from "./LogsModal";
export declare function useMessages(query: string, currentTab: LogTabs, sortNewest: boolean, numDisplayedMessages: number): {
    messages: DBMessageRecord[];
    statusTotal: number;
    total: number;
    pending: boolean;
    reset: () => void;
};
