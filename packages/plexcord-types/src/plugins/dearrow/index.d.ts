import "./styles.css";
import { OptionType } from "../../utils/types";
import type { Component } from "react";
interface Props {
    embed: {
        rawTitle: string;
        provider?: {
            name: string;
        };
        thumbnail: {
            proxyURL: string;
        };
        video: {
            url: string;
        };
        dearrow: {
            enabled: boolean;
            oldTitle?: string;
            oldThumb?: string;
        };
    };
}
declare const enum ReplaceElements {
    ReplaceAllElements = 0,
    ReplaceTitlesOnly = 1,
    ReplaceThumbnailsOnly = 2
}
declare function embedDidMount(this: Component<Props>): Promise<void>;
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    settings: import("../../utils/types").DefinedSettings<{
        hideButton: {
            description: string;
            type: OptionType.BOOLEAN;
            default: false;
            restartNeeded: true;
        };
        replaceElements: {
            description: string;
            type: OptionType.SELECT;
            restartNeeded: true;
            options: ({
                label: string;
                value: ReplaceElements;
                default: true;
            } | {
                label: string;
                value: ReplaceElements;
                default?: undefined;
            })[];
        };
        dearrowByDefault: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
            restartNeeded: false;
        };
    }, import("../../utils/types").SettingsChecks<{
        hideButton: {
            description: string;
            type: OptionType.BOOLEAN;
            default: false;
            restartNeeded: true;
        };
        replaceElements: {
            description: string;
            type: OptionType.SELECT;
            restartNeeded: true;
            options: ({
                label: string;
                value: ReplaceElements;
                default: true;
            } | {
                label: string;
                value: ReplaceElements;
                default?: undefined;
            })[];
        };
        dearrowByDefault: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
            restartNeeded: false;
        };
    }>, {}>;
    embedDidMount: typeof embedDidMount;
    renderButton(component: Component<Props>): import("react").JSX.Element;
    patches: {
        find: string;
        replacement: ({
            match: RegExp;
            replace: string;
            predicate?: undefined;
        } | {
            match: RegExp;
            replace: string;
            predicate: () => boolean;
        })[];
    }[];
} & Record<string, any>;
export default _default;
