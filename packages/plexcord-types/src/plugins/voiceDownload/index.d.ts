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
    renderDownload(src: string): import("react").JSX.Element;
    Icon: () => import("react").JSX.Element;
} & Record<string, any>;
export default _default;
