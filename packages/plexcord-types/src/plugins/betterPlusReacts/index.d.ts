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
        }[];
    }[];
    message: null;
    getMsgReference(): null;
    setMsgReference(plusses: string, channelId: string): void;
} & Record<string, any>;
export default _default;
