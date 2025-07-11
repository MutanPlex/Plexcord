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
            replace: (_: string, hasFolderButtonContentClass: string) => string;
        }[];
    }[];
} & Record<string, any>;
export default _default;
