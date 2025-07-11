import { Logger } from "../../../utils/Logger";
import { OptionType } from "../../../utils/types";
import { ChannelTabsPreview } from "../components/ChannelTabsContainer";
export declare const logger: Logger;
export declare const bookmarkFolderColors: {
    readonly Red: "var(--channeltabs-red)";
    readonly Blue: "var(--channeltabs-blue)";
    readonly Yellow: "var(--channeltabs-yellow)";
    readonly Green: "var(--channeltabs-green)";
    readonly Black: "var(--channeltabs-black)";
    readonly White: "var(--channeltabs-white)";
    readonly Orange: "var(--channeltabs-orange)";
    readonly Pink: "var(--channeltabs-pink)";
};
export declare const settings: import("../../../utils/types").DefinedSettings<{
    onStartup: {
        type: OptionType.SELECT;
        description: string;
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
    tabSet: {
        component: typeof ChannelTabsPreview;
        description: string;
        type: OptionType.COMPONENT;
        default: {};
    };
    noPomeloNames: {
        description: string;
        type: OptionType.BOOLEAN;
        default: false;
    };
    showStatusIndicators: {
        description: string;
        type: OptionType.BOOLEAN;
        default: true;
    };
    showBookmarkBar: {
        description: string;
        type: OptionType.BOOLEAN;
        default: true;
    };
    bookmarkNotificationDot: {
        description: string;
        type: OptionType.BOOLEAN;
        default: true;
    };
    widerTabsAndBookmarks: {
        description: string;
        type: OptionType.BOOLEAN;
        default: false;
        restartNeeded: false;
    };
    switchToExistingTab: {
        type: OptionType.BOOLEAN;
        description: string;
        default: false;
        restartNeeded: false;
    };
    createNewTabIfNotExists: {
        type: OptionType.BOOLEAN;
        description: string;
        default: false;
        restartNeeded: false;
    };
    enableRapidNavigation: {
        type: OptionType.BOOLEAN;
        description: string;
        default: false;
        restartNeeded: false;
    };
    rapidNavigationThreshold: {
        type: OptionType.SLIDER;
        description: string;
        markers: number[];
        default: number;
        stickToMarkers: false;
    };
}, import("../../../utils/types").SettingsChecks<{
    onStartup: {
        type: OptionType.SELECT;
        description: string;
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
    tabSet: {
        component: typeof ChannelTabsPreview;
        description: string;
        type: OptionType.COMPONENT;
        default: {};
    };
    noPomeloNames: {
        description: string;
        type: OptionType.BOOLEAN;
        default: false;
    };
    showStatusIndicators: {
        description: string;
        type: OptionType.BOOLEAN;
        default: true;
    };
    showBookmarkBar: {
        description: string;
        type: OptionType.BOOLEAN;
        default: true;
    };
    bookmarkNotificationDot: {
        description: string;
        type: OptionType.BOOLEAN;
        default: true;
    };
    widerTabsAndBookmarks: {
        description: string;
        type: OptionType.BOOLEAN;
        default: false;
        restartNeeded: false;
    };
    switchToExistingTab: {
        type: OptionType.BOOLEAN;
        description: string;
        default: false;
        restartNeeded: false;
    };
    createNewTabIfNotExists: {
        type: OptionType.BOOLEAN;
        description: string;
        default: false;
        restartNeeded: false;
    };
    enableRapidNavigation: {
        type: OptionType.BOOLEAN;
        description: string;
        default: false;
        restartNeeded: false;
    };
    rapidNavigationThreshold: {
        type: OptionType.SLIDER;
        description: string;
        markers: number[];
        default: number;
        stickToMarkers: false;
    };
}>, {}>;
export declare const CircleQuestionIcon: import("../../../utils").LazyComponentWrapper<import("react").ComponentType<any>>;
