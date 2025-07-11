import "./styles.css";
import { OptionType } from "../../utils/types";
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    settings: import("../../utils/types").DefinedSettings<{
        selectedFont: {
            type: OptionType.STRING;
            description: string;
            default: string;
            hidden: true;
        };
        fontSearch: {
            type: OptionType.COMPONENT;
            description: string;
            component: () => import("react").JSX.Element;
        };
        applyOnClodeBlocks: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
        };
    }, import("../../utils/types").SettingsChecks<{
        selectedFont: {
            type: OptionType.STRING;
            description: string;
            default: string;
            hidden: true;
        };
        fontSearch: {
            type: OptionType.COMPONENT;
            description: string;
            component: () => import("react").JSX.Element;
        };
        applyOnClodeBlocks: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
        };
    }>, {}>;
    start(): Promise<void>;
    stop(): void;
} & Record<string, any>;
export default _default;
