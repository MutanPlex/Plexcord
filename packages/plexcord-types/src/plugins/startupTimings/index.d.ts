declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    patches: {
        find: string;
        replacement: ({
            match: RegExp;
            replace: (_: string, commaOrSemi: string, settings: string, elements: string) => string;
            noWarn: true;
        } | {
            match: RegExp;
            replace: (_: string, commaOrSemi: string, settings: string, elements: string) => string;
            noWarn?: undefined;
        })[];
    }[];
    StartupTimingPage: import("react").FunctionComponent<any>;
} & Record<string, any>;
export default _default;
