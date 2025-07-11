declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    required: true;
    patches: {
        find: string;
        replacement: {
            match: RegExp;
            replace: (m: string, mod: string) => string;
        };
    }[];
} & Record<string, any>;
export default _default;
