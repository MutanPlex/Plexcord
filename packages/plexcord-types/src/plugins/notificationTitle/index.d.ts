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
    makeTitle(result: any, channel: any, message: any, user: any): any;
} & Record<string, any>;
export default _default;
