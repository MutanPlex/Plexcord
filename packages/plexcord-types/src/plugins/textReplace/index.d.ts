import { OptionType } from "../../utils/types";
type Rule = Record<"find" | "replace" | "onlyIfIncludes", string>;
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    settings: import("../../utils/types").DefinedSettings<{
        replace: {
            type: OptionType.COMPONENT;
            component: () => import("react").JSX.Element;
        };
        stringRules: {
            type: OptionType.CUSTOM;
            description: string;
            default: Rule[];
        };
        regexRules: {
            type: OptionType.CUSTOM;
            description: string;
            default: Rule[];
        };
    }, import("../../utils/types").SettingsChecks<{
        replace: {
            type: OptionType.COMPONENT;
            component: () => import("react").JSX.Element;
        };
        stringRules: {
            type: OptionType.CUSTOM;
            description: string;
            default: Rule[];
        };
        regexRules: {
            type: OptionType.CUSTOM;
            description: string;
            default: Rule[];
        };
    }>, {}>;
    onBeforeMessageSend(channelId: string, msg: import("../../api/MessageEvents").MessageObject): void;
    start(): Promise<void>;
} & Record<string, any>;
export default _default;
