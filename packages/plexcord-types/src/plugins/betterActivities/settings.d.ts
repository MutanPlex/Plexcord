import { OptionType } from "../../utils/types";
export declare const settings: import("../../utils/types").DefinedSettings<{
    memberList: {
        type: OptionType.BOOLEAN;
        description: string;
        default: true;
        restartNeeded: true;
    };
    iconSize: {
        type: OptionType.SLIDER;
        description: string;
        markers: number[];
        default: number;
        stickToMarkers: false;
    };
    specialFirst: {
        type: OptionType.BOOLEAN;
        description: string;
        default: true;
        restartNeeded: false;
    };
    renderGifs: {
        type: OptionType.BOOLEAN;
        description: string;
        default: true;
        restartNeeded: false;
    };
    divider: {
        type: OptionType.COMPONENT;
        description: string;
        component: () => import("react").JSX.Element;
    };
    userPopout: {
        type: OptionType.BOOLEAN;
        description: string;
        default: true;
        restartNeeded: true;
    };
    allActivitiesStyle: {
        type: OptionType.SELECT;
        description: string;
        options: ({
            default: true;
            label: string;
            value: string;
        } | {
            label: string;
            value: string;
            default?: undefined;
        })[];
    };
}, import("../../utils/types").SettingsChecks<{
    memberList: {
        type: OptionType.BOOLEAN;
        description: string;
        default: true;
        restartNeeded: true;
    };
    iconSize: {
        type: OptionType.SLIDER;
        description: string;
        markers: number[];
        default: number;
        stickToMarkers: false;
    };
    specialFirst: {
        type: OptionType.BOOLEAN;
        description: string;
        default: true;
        restartNeeded: false;
    };
    renderGifs: {
        type: OptionType.BOOLEAN;
        description: string;
        default: true;
        restartNeeded: false;
    };
    divider: {
        type: OptionType.COMPONENT;
        description: string;
        component: () => import("react").JSX.Element;
    };
    userPopout: {
        type: OptionType.BOOLEAN;
        description: string;
        default: true;
        restartNeeded: true;
    };
    allActivitiesStyle: {
        type: OptionType.SELECT;
        description: string;
        options: ({
            default: true;
            label: string;
            value: string;
        } | {
            label: string;
            value: string;
            default?: undefined;
        })[];
    };
}>, {}>;
