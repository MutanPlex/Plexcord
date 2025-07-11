import { OptionType } from "../../utils/types";
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    dependencies: string[];
    settings: import("../../utils/types").DefinedSettings<{
        oldIcon: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
        };
    }, import("../../utils/types").SettingsChecks<{
        oldIcon: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
        };
    }>, {}>;
    managedStyle: string;
    patches: {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
    }[];
    GameActivityToggleButton: import("react").FunctionComponent<any>;
} & Record<string, any>;
export default _default;
