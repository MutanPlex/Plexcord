import "./style.css";
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
    addCopyButton: import("react").FunctionComponent<{
        fileContents: string;
        bytesLeft: number;
    }>;
} & Record<string, any>;
export default _default;
