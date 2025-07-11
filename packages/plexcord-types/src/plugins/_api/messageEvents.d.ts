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
            replace: (m: string, parsedMessage: string, channel: string, replyOptions: string, extra: string) => string;
        };
    }[];
} & Record<string, any>;
export default _default;
