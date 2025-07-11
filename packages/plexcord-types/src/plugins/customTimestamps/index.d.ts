import "./style.css";
import { OptionType } from "../../utils/types";
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    settings: import("../../utils/types").DefinedSettings<{
        formats: {
            type: OptionType.COMPONENT;
            description: string;
            component: (componentProps: import("../../utils/types").IPluginOptionComponentProps) => import("react").JSX.Element[];
        };
    }, import("../../utils/types").SettingsChecks<{
        formats: {
            type: OptionType.COMPONENT;
            description: string;
            component: (componentProps: import("../../utils/types").IPluginOptionComponentProps) => import("react").JSX.Element[];
        };
    }>, {
        formats: {
            cozyFormat: string;
            compactFormat: string;
            tooltipFormat: string;
            ariaLabelFormat: string;
            sameDayFormat: string;
            lastDayFormat: string;
            lastWeekFormat: string;
            sameElseFormat: string;
        };
    }>;
    settingsAboutComponent: () => import("react").JSX.Element;
    patches: ({
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        }[];
    } | {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
    })[];
    renderTimestamp: (date: Date, type: "cozy" | "compact" | "tooltip" | "ariaLabel") => string;
} & Record<string, any>;
export default _default;
