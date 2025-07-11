import { OptionType } from "../../utils/types";
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    settings: import("../../utils/types").DefinedSettings<{
        keyBind: {
            description: string;
            type: OptionType.STRING;
            default: string;
            isValid: (value: string) => boolean;
        };
        reqCtrl: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
        };
        reqShift: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
        };
        reqAlt: {
            description: string;
            type: OptionType.BOOLEAN;
            default: false;
        };
    }, import("../../utils/types").SettingsChecks<{
        keyBind: {
            description: string;
            type: OptionType.STRING;
            default: string;
            isValid: (value: string) => boolean;
        };
        reqCtrl: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
        };
        reqShift: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
        };
        reqAlt: {
            description: string;
            type: OptionType.BOOLEAN;
            default: false;
        };
    }>, {}>;
    patches: {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
    }[];
    TrashIcon: (channel: any) => import("react").JSX.Element | null;
} & Record<string, any>;
export default _default;
