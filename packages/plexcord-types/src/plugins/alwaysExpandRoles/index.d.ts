import { OptionType } from "../../utils/types";
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
            replace: (_: string, rest: string, setExpandedRoles: string) => string;
        }[];
    }[];
    settings: import("../../utils/types").DefinedSettings<{
        hideArrow: {
            type: OptionType.BOOLEAN;
            default: false;
            description: string;
            restartNeeded: true;
        };
    }, import("../../utils/types").SettingsChecks<{
        hideArrow: {
            type: OptionType.BOOLEAN;
            default: false;
            description: string;
            restartNeeded: true;
        };
    }>, {}>;
    start(): void;
    stop(): void;
} & Record<string, any>;
export default _default;
