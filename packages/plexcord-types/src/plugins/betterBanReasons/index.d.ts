import "./styles.css";
import { OptionType } from "../../utils/types";
declare function ReasonsComponent(): import("react").JSX.Element;
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    patches: {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        }[];
    }[];
    getReasons(): {
        name: string;
        value: string;
    }[];
    getDefaultState: () => 0 | 1;
    settings: import("../../utils/types").DefinedSettings<{
        reasons: {
            description: string;
            type: OptionType.COMPONENT;
            default: string[];
            component: typeof ReasonsComponent;
        };
        isTextInputDefault: {
            type: OptionType.BOOLEAN;
            description: string;
        };
    }, import("../../utils/types").SettingsChecks<{
        reasons: {
            description: string;
            type: OptionType.COMPONENT;
            default: string[];
            component: typeof ReasonsComponent;
        };
        isTextInputDefault: {
            type: OptionType.BOOLEAN;
            description: string;
        };
    }>, {}>;
} & Record<string, any>;
export default _default;
