declare const _default: {
    name: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    description: string;
    enabledByDefault: true;
    patches: {
        find: string;
        replacement: ({
            match: RegExp;
            replace: string;
        } | {
            match: string;
            replace: string;
        })[];
    }[];
} & Record<string, any>;
export default _default;
