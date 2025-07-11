import { OptionType } from "../../utils/types";
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    settings: import("../../utils/types").DefinedSettings<{
        zoomMultiplier: {
            type: OptionType.SLIDER;
            description: string;
            markers: number[];
            default: number;
        };
    }, import("../../utils/types").SettingsChecks<{
        zoomMultiplier: {
            type: OptionType.SLIDER;
            description: string;
            markers: number[];
            default: number;
        };
    }>, {}>;
    patches: {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
    }[];
} & Record<string, any>;
export default _default;
