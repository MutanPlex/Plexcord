export interface VoiceChannelLogEntry {
    userId: string;
    username: string;
    oldChannel: string | null;
    newChannel: string | null;
    timestamp: Date;
}
export declare const vcLogs: Map<string, VoiceChannelLogEntry[]>;
export declare function getVcLogs(channel?: string): VoiceChannelLogEntry[];
export declare function addLogEntry(logEntry: VoiceChannelLogEntry, channel?: string): void;
export declare function clearLogs(channel?: string): void;
export declare function vcLogSubscribe(listener: () => void): () => void;
