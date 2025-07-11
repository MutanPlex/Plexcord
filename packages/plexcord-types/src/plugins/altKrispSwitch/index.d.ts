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
    shouldCancelSuppression([enableKrisp, options]: [any, any]): boolean | undefined;
} & Record<string, any>;
export default _default;
