export interface LogoutEvent {
    type: "LOGOUT";
    isSwitchingAccount: boolean;
}
interface ChannelSelectEvent {
    type: "CHANNEL_SELECT";
    channelId: string | null;
    guildId: string | null;
}
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    patches: {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
    }[];
    flux: {
        LOGOUT(e: LogoutEvent): void;
        CONNECTION_OPEN(): void;
        CHANNEL_SELECT({ guildId, channelId }: ChannelSelectEvent): Promise<void>;
    };
    start(): Promise<void>;
} & Record<string, any>;
export default _default;
