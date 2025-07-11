import { OptionType } from "../../utils/types";
export declare const enum PronounsFormat {
    Lowercase = "LOWERCASE",
    Capitalized = "CAPITALIZED"
}
export declare const settings: import("../../utils/types").DefinedSettings<{
    pronounsFormat: {
        type: OptionType.SELECT;
        description: string;
        options: ({
            label: string;
            value: PronounsFormat;
            default: true;
        } | {
            label: string;
            value: PronounsFormat;
            default?: undefined;
        })[];
    };
    showSelf: {
        type: OptionType.BOOLEAN;
        description: string;
        default: true;
    };
}, import("../../utils/types").SettingsChecks<{
    pronounsFormat: {
        type: OptionType.SELECT;
        description: string;
        options: ({
            label: string;
            value: PronounsFormat;
            default: true;
        } | {
            label: string;
            value: PronounsFormat;
            default?: undefined;
        })[];
    };
    showSelf: {
        type: OptionType.BOOLEAN;
        description: string;
        default: true;
    };
}>, {}>;
