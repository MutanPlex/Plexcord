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
    start(): Promise<void>;
    stop(): void;
    decodeError(code: number, ...args: any): string | undefined;
} & Record<string, any>;
export default _default;
