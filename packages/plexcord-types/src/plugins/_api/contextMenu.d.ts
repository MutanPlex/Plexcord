declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    required: true;
    patches: ({
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
        all?: undefined;
        noWarn?: undefined;
    } | {
        find: string;
        all: true;
        noWarn: true;
        replacement: {
            match: RegExp;
            replace: (m: string, rest: string) => string;
        }[];
    })[];
} & Record<string, any>;
export default _default;
