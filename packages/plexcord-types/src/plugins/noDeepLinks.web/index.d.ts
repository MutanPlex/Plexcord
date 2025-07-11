declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    required: true;
    noop: () => void;
    patches: {
        find: RegExp;
        replacement: {
            match: RegExp;
            replace: string;
        };
    }[];
} & Record<string, any>;
export default _default;
