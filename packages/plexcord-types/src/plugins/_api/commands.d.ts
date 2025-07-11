declare const _default: {
    name: string;
    authors: {
        name: string;
        id: bigint;
        badge: false;
    }[];
    description: string;
    patches: ({
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        }[];
    } | {
        find: string;
        replacement: {
            match: RegExp;
            replace: (_: string, cmd: string, args: string, ctx: string) => string;
        };
    } | {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
    })[];
} & Record<string, any>;
export default _default;
