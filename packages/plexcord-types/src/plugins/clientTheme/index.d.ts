import "./clientTheme.css";
import { OptionType, StartAt } from "../../utils/types";
import { ResetThemeColorComponent, ThemeSettingsComponent } from "./components/Settings";
import { disableClientTheme } from "./utils/styleUtils";
export declare const settings: import("../../utils/types").DefinedSettings<{
    color: {
        type: OptionType.COMPONENT;
        default: string;
        component: typeof ThemeSettingsComponent;
    };
    resetColor: {
        type: OptionType.COMPONENT;
        component: typeof ResetThemeColorComponent;
    };
}, import("../../utils/types").SettingsChecks<{
    color: {
        type: OptionType.COMPONENT;
        default: string;
        component: typeof ThemeSettingsComponent;
    };
    resetColor: {
        type: OptionType.COMPONENT;
        component: typeof ResetThemeColorComponent;
    };
}>, {}>;
declare const _default: {
    name: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    description: string;
    settings: import("../../utils/types").DefinedSettings<{
        color: {
            type: OptionType.COMPONENT;
            default: string;
            component: typeof ThemeSettingsComponent;
        };
        resetColor: {
            type: OptionType.COMPONENT;
            component: typeof ResetThemeColorComponent;
        };
    }, import("../../utils/types").SettingsChecks<{
        color: {
            type: OptionType.COMPONENT;
            default: string;
            component: typeof ThemeSettingsComponent;
        };
        resetColor: {
            type: OptionType.COMPONENT;
            component: typeof ResetThemeColorComponent;
        };
    }>, {}>;
    startAt: StartAt.DOMContentLoaded;
    start: () => Promise<void>;
    stop: typeof disableClientTheme;
} & Record<string, any>;
export default _default;
