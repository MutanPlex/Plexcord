import { OptionType } from "../../utils/types";
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    settings: import("../../utils/types").DefinedSettings<{
        notificationVolume: {
            type: OptionType.SLIDER;
            description: string;
            markers: number[];
            default: number;
            stickToMarkers: false;
        };
    }, import("../../utils/types").SettingsChecks<{
        notificationVolume: {
            type: OptionType.SLIDER;
            description: string;
            markers: number[];
            default: number;
            stickToMarkers: false;
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
