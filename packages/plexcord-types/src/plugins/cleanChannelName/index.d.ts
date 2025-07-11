import { Channel } from "discord-types/general";
declare const _default: {
    name: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    description: string;
    patches: {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
    }[];
    cleanChannelName(channel?: Channel): Channel | undefined;
} & Record<string, any>;
export default _default;
