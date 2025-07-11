import { OptionType } from "../../utils/types";
export declare const settings: import("../../utils/types").DefinedSettings<{
    authorize: {
        type: OptionType.COMPONENT;
        component: () => import("react").JSX.Element;
    };
    notifyReviews: {
        type: OptionType.BOOLEAN;
        description: string;
        default: true;
    };
    showWarning: {
        type: OptionType.BOOLEAN;
        description: string;
        default: true;
    };
    hideTimestamps: {
        type: OptionType.BOOLEAN;
        description: string;
        default: false;
    };
    hideBlockedUsers: {
        type: OptionType.BOOLEAN;
        description: string;
        default: true;
    };
    buttons: {
        type: OptionType.COMPONENT;
        component: () => import("react").JSX.Element;
    };
}, import("../../utils/types").SettingsChecks<{
    authorize: {
        type: OptionType.COMPONENT;
        component: () => import("react").JSX.Element;
    };
    notifyReviews: {
        type: OptionType.BOOLEAN;
        description: string;
        default: true;
    };
    showWarning: {
        type: OptionType.BOOLEAN;
        description: string;
        default: true;
    };
    hideTimestamps: {
        type: OptionType.BOOLEAN;
        description: string;
        default: false;
    };
    hideBlockedUsers: {
        type: OptionType.BOOLEAN;
        description: string;
        default: true;
    };
    buttons: {
        type: OptionType.COMPONENT;
        component: () => import("react").JSX.Element;
    };
}>, {
    lastReviewId?: number;
    reviewsDropdownState?: boolean;
}>;
