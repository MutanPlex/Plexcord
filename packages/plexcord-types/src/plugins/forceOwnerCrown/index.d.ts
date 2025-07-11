import { Channel, User } from "discord-types/general";
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
    isGuildOwner(props: {
        user: User;
        channel: Channel;
        isOwner: boolean;
        guildId?: string;
    }): boolean;
} & Record<string, any>;
export default _default;
