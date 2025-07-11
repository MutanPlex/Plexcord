import { OptionType } from "../../utils/types";
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    settings: import("../../utils/types").DefinedSettings<{
        hide: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
            restartNeeded: true;
        };
        noSpellCheck: {
            type: OptionType.BOOLEAN;
            description: string;
            disabled: () => any;
            default: false;
        };
    }, import("../../utils/types").SettingsChecks<{
        hide: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
            restartNeeded: true;
        };
        noSpellCheck: {
            type: OptionType.BOOLEAN;
            description: string;
            disabled: () => any;
            default: false;
        };
    }>, {}>;
    patches: ({
        find: string;
        all: true;
        noWarn: true;
        predicate: () => boolean;
        replacement: {
            match: RegExp;
            replace: (m: string, rest: string) => string;
        };
    } | {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
        all?: undefined;
        noWarn?: undefined;
        predicate?: undefined;
    })[];
    readonly noSpellCheck: boolean;
} & Record<string, any>;
export default _default;
