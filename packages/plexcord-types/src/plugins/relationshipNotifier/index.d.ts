import { onChannelDelete, onGuildDelete } from "./functions";
import { syncAndRunChecks, syncFriends, syncGroups, syncGuilds } from "./utils";
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
        badge: false;
    }[];
    settings: import("../../utils/types").DefinedSettings<{
        notices: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
            default: false;
        };
        offlineRemovals: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        friends: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        friendRequestCancels: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        servers: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        groups: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
            default: true;
        };
    }, import("../../utils/types").SettingsChecks<{
        notices: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
            default: false;
        };
        offlineRemovals: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        friends: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        friendRequestCancels: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        servers: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        groups: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
            default: true;
        };
    }>, {}>;
    patches: {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
    }[];
    flux: {
        GUILD_CREATE: typeof syncGuilds;
        GUILD_DELETE: typeof onGuildDelete;
        CHANNEL_CREATE: typeof syncGroups;
        CHANNEL_DELETE: typeof onChannelDelete;
        RELATIONSHIP_ADD: typeof syncFriends;
        RELATIONSHIP_UPDATE: typeof syncFriends;
        RELATIONSHIP_REMOVE(e: any): void;
        CONNECTION_OPEN: typeof syncAndRunChecks;
    };
    start(): Promise<void>;
    removeFriend: (id: string) => string;
    removeGroup: (id: string) => string;
    removeGuild: (id: string) => string;
} & Record<string, any>;
export default _default;
