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
            replace: (_: string, ReactButton: string, PotionButton: string, ButtonComponent: string, showReactButton: string, message: string) => string;
        };
    }[];
} & Record<string, any>;
export default _default;
