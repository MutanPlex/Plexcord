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
        soundVolume: {
            description: string;
            type: OptionType.SLIDER;
            default: number;
            markers: number[];
        };
        showConfirmationModal: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
        };
    }, import("../../utils/types").SettingsChecks<{
        keyBind: {
            description: string;
            type: OptionType.STRING;
            default: string;
            isValid: (value: string) => boolean;
        };
        soundVolume: {
            description: string;
            type: OptionType.SLIDER;
            default: number;
            markers: number[];
        };
        showConfirmationModal: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
        };
    }>, {}>;
    toolboxActions: {
        "Toggle Demonstration": () => void;
    };
    settingsAboutComponent: () => import("react").JSX.Element;
    start(): void;
    stop(): void;
} & Record<string, any>;
export default _default;
