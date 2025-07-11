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
        onLink: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
            restartNeeded: true;
        };
        onReply: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
            restartNeeded: true;
        };
        onForward: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
            restartNeeded: true;
        };
        display: {
            description: string;
            type: OptionType.SELECT;
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
    }, import("../../utils/types").SettingsChecks<{
        onLink: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
            restartNeeded: true;
        };
        onReply: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
            restartNeeded: true;
        };
        onForward: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
            restartNeeded: true;
        };
        display: {
            description: string;
            type: OptionType.SELECT;
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
    }>, {}>;
    patches: {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
        predicate: () => boolean;
    }[];
    MentionTooltip({ Component, pcProps, ...props }: {
        [x: string]: any;
        Component: any;
        pcProps: any;
    }): import("react").JSX.Element;
    ReplyTooltip({ Component, pcProps, ...props }: {
        [x: string]: any;
        Component: any;
        pcProps: any;
    }): import("react").JSX.Element;
    ForwardTooltip({ Component, pcProps, ...props }: {
        [x: string]: any;
        Component: any;
        pcProps: any;
    }): import("react").JSX.Element;
} & Record<string, any>;
export default _default;
