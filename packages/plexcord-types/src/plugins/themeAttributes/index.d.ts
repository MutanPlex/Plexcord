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
    getAvatarStyles(src: string | null): {
        [k: string]: string;
    };
    getMessageProps(props: {
        message: Message;
    }): {
        "data-author-id": string;
        "data-author-username": string;
        "data-is-self": boolean | "";
    };
} & Record<string, any>;
export default _default;
