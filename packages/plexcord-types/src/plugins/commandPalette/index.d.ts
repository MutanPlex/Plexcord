import { OptionType } from "../../utils/types";
export declare const settings: import("../../utils/types").DefinedSettings<{
    hotkey: {
        description: string;
        type: OptionType.COMPONENT;
        default: string[];
        component: () => import("react").JSX.Element;
    };
    allowMouseControl: {
        description: string;
        type: OptionType.BOOLEAN;
        default: true;
    };
}, import("../../utils/types").SettingsChecks<{
    hotkey: {
        description: string;
        type: OptionType.COMPONENT;
        default: string[];
        component: () => import("react").JSX.Element;
    };
    allowMouseControl: {
        description: string;
        type: OptionType.BOOLEAN;
        default: true;
    };
}>, {}>;
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    settings: import("../../utils/types").DefinedSettings<{
        hotkey: {
            description: string;
            type: OptionType.COMPONENT;
            default: string[];
            component: () => import("react").JSX.Element;
        };
        allowMouseControl: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
        };
    }, import("../../utils/types").SettingsChecks<{
        hotkey: {
            description: string;
            type: OptionType.COMPONENT;
            default: string[];
            component: () => import("react").JSX.Element;
        };
        allowMouseControl: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
        };
    }>, {}>;
    start(): void;
    stop(): void;
    event(e: KeyboardEvent): void;
} & Record<string, any>;
export default _default;
