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
    FriendsSinceComponent: import("react").FunctionComponent<{
        userId: string;
        isSidebar: boolean;
    }>;
} & Record<string, any>;
export default _default;
