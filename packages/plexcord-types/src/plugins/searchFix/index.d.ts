declare const _default: {
    name: string;
    description: string;
    settingsAboutComponent: () => import("react").JSX.Element;
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
    main(query: any): void;
} & Record<string, any>;
export default _default;
