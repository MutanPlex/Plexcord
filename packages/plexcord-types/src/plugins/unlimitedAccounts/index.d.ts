import { OptionType } from "../../utils/types";
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    settings: import("../../utils/types").DefinedSettings<{
        maxAccounts: {
            description: string;
            default: number;
            type: OptionType.NUMBER;
            restartNeeded: true;
        };
    }, import("../../utils/types").SettingsChecks<{
        maxAccounts: {
            description: string;
            default: number;
            type: OptionType.NUMBER;
            restartNeeded: true;
        };
    }>, {}>;
    patches: {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
    }[];
    getMaxAccounts(): number;
} & Record<string, any>;
export default _default;
