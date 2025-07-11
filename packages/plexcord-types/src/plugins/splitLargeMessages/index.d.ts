import { OptionType } from "../../utils/types";
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    dependencies: string[];
    settings: import("../../utils/types").DefinedSettings<{
        maxLength: {
            type: OptionType.NUMBER;
            description: string;
            default: number;
            max: number;
            onChange(newValue: any): void;
        };
        disableFileConversion: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        sendDelay: {
            type: OptionType.SLIDER;
            description: string;
            default: number;
            markers: number[];
        };
        hardSplit: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
        };
        splitInSlowmode: {
            type: OptionType.BOOLEAN;
            description: string;
        };
        slowmodeMax: {
            type: OptionType.NUMBER;
            description: string;
            default: number;
            min: number;
            max: number;
        };
    }, import("../../utils/types").SettingsChecks<{
        maxLength: {
            type: OptionType.NUMBER;
            description: string;
            default: number;
            max: number;
            onChange(newValue: any): void;
        };
        disableFileConversion: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        sendDelay: {
            type: OptionType.SLIDER;
            description: string;
            default: number;
            markers: number[];
        };
        hardSplit: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
        };
        splitInSlowmode: {
            type: OptionType.BOOLEAN;
            description: string;
        };
        slowmodeMax: {
            type: OptionType.NUMBER;
            description: string;
            default: number;
            min: number;
            max: number;
        };
    }>, {}>;
    start(): void;
    stop(): void;
    patches: {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
    }[];
} & Record<string, any>;
export default _default;
