declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    commands: {
        options: import("../../api/Commands").Option[];
        execute: (opts: import("../../api/Commands").Argument[]) => {
            content: string;
        };
        name: string;
        description: string;
    }[];
} & Record<string, any>;
export default _default;
