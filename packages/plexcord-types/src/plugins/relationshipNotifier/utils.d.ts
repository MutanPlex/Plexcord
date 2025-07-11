import { FluxStore } from "../../webpack/common/types";
import { SimpleGroupChannel, SimpleGuild } from "./types";
export declare const GuildAvailabilityStore: FluxStore & {
    totalGuilds: number;
    totalUnavailableGuilds: number;
    unavailableGuilds: string[];
    isUnavailable(guildId: string): boolean;
};
export declare function syncAndRunChecks(): Promise<void>;
export declare function notify(text: string, icon?: string, onClick?: () => void): void;
export declare function getGuild(id: string): SimpleGuild | undefined;
export declare function deleteGuild(id: string): void;
export declare function syncGuilds(): Promise<void>;
export declare function getGroup(id: string): SimpleGroupChannel | undefined;
export declare function deleteGroup(id: string): void;
export declare function syncGroups(): Promise<void>;
export declare function syncFriends(): Promise<void>;
