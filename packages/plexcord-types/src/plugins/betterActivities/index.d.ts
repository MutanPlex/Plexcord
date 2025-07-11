import "./styles.css";
import { patchActivityList } from "./patch-helpers/activityList";
import { showAllActivitiesComponent } from "./patch-helpers/popout";
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    tags: string[];
    settings: import("../../utils/types").DefinedSettings<{
        memberList: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
            default: true;
            restartNeeded: true;
        };
        iconSize: {
            type: import("../../utils/types").OptionType.SLIDER;
            description: string;
            markers: number[];
            default: number;
            stickToMarkers: false;
        };
        specialFirst: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
            default: true;
            restartNeeded: false;
        };
        renderGifs: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
            default: true;
            restartNeeded: false;
        };
        divider: {
            type: import("../../utils/types").OptionType.COMPONENT;
            description: string;
            component: () => import("react").JSX.Element;
        };
        userPopout: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
            default: true;
            restartNeeded: true;
        };
        allActivitiesStyle: {
            type: import("../../utils/types").OptionType.SELECT;
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
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
            default: true;
            restartNeeded: true;
        };
        iconSize: {
            type: import("../../utils/types").OptionType.SLIDER;
            description: string;
            markers: number[];
            default: number;
            stickToMarkers: false;
        };
        specialFirst: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
            default: true;
            restartNeeded: false;
        };
        renderGifs: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
            default: true;
            restartNeeded: false;
        };
        divider: {
            type: import("../../utils/types").OptionType.COMPONENT;
            description: string;
            component: () => import("react").JSX.Element;
        };
        userPopout: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
            default: true;
            restartNeeded: true;
        };
        allActivitiesStyle: {
            type: import("../../utils/types").OptionType.SELECT;
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
    patchActivityList: typeof patchActivityList;
    showAllActivitiesComponent: typeof showAllActivitiesComponent;
    patches: ({
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
        predicate: () => boolean;
        all: true;
    } | {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
        predicate: () => boolean;
        all?: undefined;
    })[];
} & Record<string, any>;
export default _default;
