import "./styles.css";
import { OptionType } from "../../utils/types";
import { Message } from "discord-types/general";
import { FunctionComponent, ReactNode } from "react";
declare const enum DisplayStyle {
    Tooltip = "tooltip",
    Inline = "ssalggnikool"
}
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    settings: import("../../utils/types").DefinedSettings<{
        displayStyle: {
            description: string;
            type: OptionType.SELECT;
            options: ({
                label: string;
                value: DisplayStyle;
                default?: undefined;
            } | {
                label: string;
                value: DisplayStyle;
                default: true;
            })[];
        };
    }, import("../../utils/types").SettingsChecks<{
        displayStyle: {
            description: string;
            type: OptionType.SELECT;
            options: ({
                label: string;
                value: DisplayStyle;
                default?: undefined;
            } | {
                label: string;
                value: DisplayStyle;
                default: true;
            })[];
        };
    }>, {}>;
    patches: {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        }[];
    }[];
    TooltipWrapper: FunctionComponent<{
        message: Message;
        children: FunctionComponent<any>;
        text: ReactNode;
    }>;
} & Record<string, any>;
export default _default;
