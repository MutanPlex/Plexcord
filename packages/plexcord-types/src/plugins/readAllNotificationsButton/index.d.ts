import "./style.css";
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    dependencies: string[];
    renderReadAllButton: import("react").FunctionComponent<any>;
    start(): void;
    stop(): void;
} & Record<string, any>;
export default _default;
