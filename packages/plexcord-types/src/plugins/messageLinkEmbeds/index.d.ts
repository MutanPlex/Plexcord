import { OptionType } from "../../utils/types";
import { JSX } from "react";
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    dependencies: string[];
    settings: import("../../utils/types").DefinedSettings<{
        messageBackgroundColor: {
            description: string;
            type: OptionType.BOOLEAN;
        };
        automodEmbeds: {
            description: string;
            type: OptionType.SELECT;
            options: ({
                label: string;
                value: string;
                default?: undefined;
            } | {
                label: string;
                value: string;
                default: true;
            })[];
        };
        listMode: {
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
        idList: {
            description: string;
            type: OptionType.STRING;
            default: string;
        };
        clearMessageCache: {
            type: OptionType.COMPONENT;
            component: () => JSX.Element;
        };
    }, import("../../utils/types").SettingsChecks<{
        messageBackgroundColor: {
            description: string;
            type: OptionType.BOOLEAN;
        };
        automodEmbeds: {
            description: string;
            type: OptionType.SELECT;
            options: ({
                label: string;
                value: string;
                default?: undefined;
            } | {
                label: string;
                value: string;
                default: true;
            })[];
        };
        listMode: {
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
        idList: {
            description: string;
            type: OptionType.STRING;
            default: string;
        };
        clearMessageCache: {
            type: OptionType.COMPONENT;
            component: () => JSX.Element;
        };
    }>, {}>;
    start(): void;
    stop(): void;
} & Record<string, any>;
export default _default;
