import { OptionType } from "../../utils/types";
export declare const enum RenderType {
    BLOCK = 0,
    FOREGROUND = 1,
    BACKGROUND = 2
}
export declare const enum BlockDisplayType {
    LEFT = 0,
    RIGHT = 1,
    BOTH = 2
}
export declare const settings: import("../../utils/types").DefinedSettings<{
    renderType: {
        type: OptionType.SELECT;
        description: string;
        options: ({
            label: string;
            value: RenderType;
            default: true;
        } | {
            label: string;
            value: RenderType;
            default?: undefined;
        })[];
    };
    enableShortHexCodes: {
        type: OptionType.BOOLEAN;
        description: string;
        default: true;
        restartNeeded: true;
    };
    blockView: {
        type: OptionType.SELECT;
        disabled: () => boolean;
        description: string;
        options: ({
            label: string;
            value: BlockDisplayType;
            default: true;
        } | {
            label: string;
            value: BlockDisplayType;
            default?: undefined;
        })[];
    };
}, import("../../utils/types").SettingsChecks<{
    renderType: {
        type: OptionType.SELECT;
        description: string;
        options: ({
            label: string;
            value: RenderType;
            default: true;
        } | {
            label: string;
            value: RenderType;
            default?: undefined;
        })[];
    };
    enableShortHexCodes: {
        type: OptionType.BOOLEAN;
        description: string;
        default: true;
        restartNeeded: true;
    };
    blockView: {
        type: OptionType.SELECT;
        disabled: () => boolean;
        description: string;
        options: ({
            label: string;
            value: BlockDisplayType;
            default: true;
        } | {
            label: string;
            value: BlockDisplayType;
            default?: undefined;
        })[];
    };
}>, {}>;
export declare const enum ColorType {
    RGB = 0,
    RGBA = 1,
    HEX = 2,
    HSL = 3
}
export declare const replaceRegexp: (reg: string) => RegExp;
export declare const regex: {
    reg: RegExp;
    type: ColorType;
}[];
