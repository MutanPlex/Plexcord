import { OptionType } from "../../utils/types";
export declare const jumper: any;
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    start(): void;
    stop(): void;
    options: {
        includePings: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
            restartNeeded: false;
        };
        includeAuthor: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
            restartNeeded: false;
        };
        hideButtonIfNoReply: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
            restartNeeded: true;
        };
    };
} & Record<string, any>;
export default _default;
