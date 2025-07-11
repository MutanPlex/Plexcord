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
            replace: (_: string, event: string) => string;
        };
    }[];
    reveal(event: MouseEvent): void;
} & Record<string, any>;
export default _default;
