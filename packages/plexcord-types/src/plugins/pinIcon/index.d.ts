import { Message } from "discord-types/general";
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
    PinnedIcon({ pinned }: Message): import("react").JSX.Element | null;
} & Record<string, any>;
export default _default;
