declare const _default: {
    name: string;
    tags: string[];
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    patches: {
        find: string;
        group: true;
        replacement: {
            match: RegExp;
            replace: string;
        }[];
    }[];
    renderInvitesLabel: import("react").FunctionComponent<any>;
} & Record<string, any>;
export default _default;
