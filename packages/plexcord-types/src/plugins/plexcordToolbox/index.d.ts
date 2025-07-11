import "./index.css";
import type { ReactNode } from "react";
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
    ToolboxFragmentWrapper: import("react").FunctionComponent<{
        children: ReactNode[];
    }>;
} & Record<string, any>;
export default _default;
