declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    tags: string[];
    patches: {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
    }[];
    renderMention(RoleMention: any, UserMention: any, data: any, parse: any, props: any): import("react").JSX.Element;
} & Record<string, any>;
export default _default;
