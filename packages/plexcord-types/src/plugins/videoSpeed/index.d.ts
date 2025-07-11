import { OptionType } from "../../utils/types";
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    settings: import("../../utils/types").DefinedSettings<{
        preservePitch: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
            restartNeeded: true;
        };
    }, import("../../utils/types").SettingsChecks<{
        preservePitch: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
            restartNeeded: true;
        };
    }>, {}>;
    patches: {
        find: RegExp;
        replacement: {
            match: RegExp;
            replace: string;
        };
    }[];
    SpeedButton: import("react").FunctionComponent<any>;
} & Record<string, any>;
export default _default;
