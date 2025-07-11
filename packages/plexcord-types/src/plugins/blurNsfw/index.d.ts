import { OptionType } from "../../utils/types";
declare function setCss(): void;
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
        }[];
    }[];
    options: {
        blurAmount: {
            type: OptionType.NUMBER;
            description: string;
            default: number;
            onChange: typeof setCss;
        };
    };
    start(): void;
    stop(): void;
} & Record<string, any>;
export default _default;
