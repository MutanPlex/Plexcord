import { OptionType } from "../../utils/types";
export declare const settings: import("../../utils/types").DefinedSettings<{
    noiseSuppression: {
        type: OptionType.BOOLEAN;
        description: string;
        default: true;
    };
    echoCancellation: {
        type: OptionType.BOOLEAN;
        description: string;
        default: true;
    };
}, import("../../utils/types").SettingsChecks<{
    noiseSuppression: {
        type: OptionType.BOOLEAN;
        description: string;
        default: true;
    };
    echoCancellation: {
        type: OptionType.BOOLEAN;
        description: string;
        default: true;
    };
}>, {}>;
