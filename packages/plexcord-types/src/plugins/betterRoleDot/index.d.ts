import { OptionType } from "../../utils/types";
declare const _default: {
    name: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    description: string;
    patches: ({
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
        all?: undefined;
        noWarn?: undefined;
        predicate?: undefined;
    } | {
        find: string;
        all: true;
        noWarn: true;
        predicate: () => any;
        replacement: {
            match: RegExp;
            replace: string;
        };
    })[];
    options: {
        bothStyles: {
            type: OptionType.BOOLEAN;
            description: string;
            restartNeeded: true;
            default: false;
        };
        copyRoleColorInProfilePopout: {
            type: OptionType.BOOLEAN;
            description: string;
            restartNeeded: true;
            default: false;
        };
    };
    copyToClipBoard(color: string): void;
} & Record<string, any>;
export default _default;
