import { OptionType } from "../../utils/types";
declare function SettingsComponent(): import("react").JSX.Element;
export declare const settings: import("../../utils/types").DefinedSettings<{
    dontShowForBots: {
        description: string;
        type: OptionType.BOOLEAN;
        default: false;
    };
    dontShowBotTag: {
        description: string;
        type: OptionType.BOOLEAN;
        default: false;
        restartNeeded: true;
    };
    showWebhookTagFully: {
        description: string;
        type: OptionType.BOOLEAN;
        default: false;
    };
    tagSettings: {
        type: OptionType.COMPONENT;
        component: typeof SettingsComponent;
        description: string;
    };
}, import("../../utils/types").SettingsChecks<{
    dontShowForBots: {
        description: string;
        type: OptionType.BOOLEAN;
        default: false;
    };
    dontShowBotTag: {
        description: string;
        type: OptionType.BOOLEAN;
        default: false;
        restartNeeded: true;
    };
    showWebhookTagFully: {
        description: string;
        type: OptionType.BOOLEAN;
        default: false;
    };
    tagSettings: {
        type: OptionType.COMPONENT;
        component: typeof SettingsComponent;
        description: string;
    };
}>, {}>;
export {};
