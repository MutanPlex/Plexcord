import { OptionType } from "../../utils/types";
declare const settings: import("../../utils/types").DefinedSettings<{
    SavedIds: {
        description: string;
        type: OptionType.COMPONENT;
        component: ({ setValue, setError }: import("../../utils/types").IPluginOptionComponentProps) => import("react").JSX.Element;
    };
    FileType: {
        description: string;
        type: OptionType.SELECT;
        options: ({
            label: string;
            value: string;
            default: true;
        } | {
            label: string;
            value: string;
            default?: undefined;
        })[];
    };
    OpenLogs: {
        type: OptionType.COMPONENT;
        description: string;
        component: () => import("react").JSX.Element;
    };
    soundVolume: {
        description: string;
        type: OptionType.SLIDER;
        default: number;
        markers: number[];
    };
    IconLocation: {
        description: string;
        type: OptionType.SELECT;
        options: ({
            label: string;
            value: string;
            default: true;
        } | {
            label: string;
            value: string;
            default?: undefined;
        })[];
        restartNeeded: true;
    };
}, import("../../utils/types").SettingsChecks<{
    SavedIds: {
        description: string;
        type: OptionType.COMPONENT;
        component: ({ setValue, setError }: import("../../utils/types").IPluginOptionComponentProps) => import("react").JSX.Element;
    };
    FileType: {
        description: string;
        type: OptionType.SELECT;
        options: ({
            label: string;
            value: string;
            default: true;
        } | {
            label: string;
            value: string;
            default?: undefined;
        })[];
    };
    OpenLogs: {
        type: OptionType.COMPONENT;
        description: string;
        component: () => import("react").JSX.Element;
    };
    soundVolume: {
        description: string;
        type: OptionType.SLIDER;
        default: number;
        markers: number[];
    };
    IconLocation: {
        description: string;
        type: OptionType.SELECT;
        options: ({
            label: string;
            value: string;
            default: true;
        } | {
            label: string;
            value: string;
            default?: undefined;
        })[];
        restartNeeded: true;
    };
}>, {}>;
export default settings;
