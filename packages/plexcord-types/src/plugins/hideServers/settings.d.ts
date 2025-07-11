import { OptionType } from "../../utils/types";
declare const _default: import("../../utils/types").DefinedSettings<{
    showIndicator: {
        type: OptionType.BOOLEAN;
        description: string;
        default: true;
        onChange: (val: any) => void;
    };
    guildsList: {
        type: OptionType.COMPONENT;
        description: string;
        component: () => import("react").JSX.Element;
    };
    resetHidden: {
        type: OptionType.COMPONENT;
        description: string;
        component: () => import("react").JSX.Element;
    };
}, import("../../utils/types").SettingsChecks<{
    showIndicator: {
        type: OptionType.BOOLEAN;
        description: string;
        default: true;
        onChange: (val: any) => void;
    };
    guildsList: {
        type: OptionType.COMPONENT;
        description: string;
        component: () => import("react").JSX.Element;
    };
    resetHidden: {
        type: OptionType.COMPONENT;
        description: string;
        component: () => import("react").JSX.Element;
    };
}>, {}>;
export default _default;
