import { OptionType } from "../../utils/types";
import { DeviconSetting, HljsSetting } from "./types";
export type ShikiSettings = typeof settings.store;
export declare const settings: import("../../utils/types").DefinedSettings<{
    theme: {
        type: OptionType.SELECT;
        description: string;
        options: {
            label: string;
            value: string;
            default: boolean;
        }[];
        onChange: (themeUrl: string) => Promise<void>;
    };
    customTheme: {
        type: OptionType.STRING;
        description: string;
        placeholder: string;
        onChange: (value: any) => void;
    };
    tryHljs: {
        type: OptionType.SELECT;
        description: string;
        options: ({
            label: string;
            value: HljsSetting;
            default?: undefined;
        } | {
            label: string;
            value: HljsSetting;
            default: true;
        })[];
    };
    useDevIcon: {
        type: OptionType.SELECT;
        description: string;
        options: ({
            label: string;
            value: DeviconSetting;
            default?: undefined;
        } | {
            label: string;
            value: DeviconSetting;
            default: true;
        })[];
        onChange: (newValue: DeviconSetting) => void;
    };
    bgOpacity: {
        type: OptionType.SLIDER;
        description: string;
        markers: number[];
        default: number;
        componentProps: {
            stickToMarkers: boolean;
            onValueRender: null;
        };
    };
}, {
    theme: {
        disabled(this: import("../../utils/types").DefinedSettings<{
            theme: {
                type: OptionType.SELECT;
                description: string;
                options: {
                    label: string;
                    value: string;
                    default: boolean;
                }[];
                onChange: (themeUrl: string) => Promise<void>;
            };
            customTheme: {
                type: OptionType.STRING;
                description: string;
                placeholder: string;
                onChange: (value: any) => void;
            };
            tryHljs: {
                type: OptionType.SELECT;
                description: string;
                options: ({
                    label: string;
                    value: HljsSetting;
                    default?: undefined;
                } | {
                    label: string;
                    value: HljsSetting;
                    default: true;
                })[];
            };
            useDevIcon: {
                type: OptionType.SELECT;
                description: string;
                options: ({
                    label: string;
                    value: DeviconSetting;
                    default?: undefined;
                } | {
                    label: string;
                    value: DeviconSetting;
                    default: true;
                })[];
                onChange: (newValue: DeviconSetting) => void;
            };
            bgOpacity: {
                type: OptionType.SLIDER;
                description: string;
                markers: number[];
                default: number;
                componentProps: {
                    stickToMarkers: boolean;
                    onValueRender: null;
                };
            };
        }, {}, {}>): boolean;
    };
    customTheme: {
        isValid(this: import("../../utils/types").DefinedSettings<{
            theme: {
                type: OptionType.SELECT;
                description: string;
                options: {
                    label: string;
                    value: string;
                    default: boolean;
                }[];
                onChange: (themeUrl: string) => Promise<void>;
            };
            customTheme: {
                type: OptionType.STRING;
                description: string;
                placeholder: string;
                onChange: (value: any) => void;
            };
            tryHljs: {
                type: OptionType.SELECT;
                description: string;
                options: ({
                    label: string;
                    value: HljsSetting;
                    default?: undefined;
                } | {
                    label: string;
                    value: HljsSetting;
                    default: true;
                })[];
            };
            useDevIcon: {
                type: OptionType.SELECT;
                description: string;
                options: ({
                    label: string;
                    value: DeviconSetting;
                    default?: undefined;
                } | {
                    label: string;
                    value: DeviconSetting;
                    default: true;
                })[];
                onChange: (newValue: DeviconSetting) => void;
            };
            bgOpacity: {
                type: OptionType.SLIDER;
                description: string;
                markers: number[];
                default: number;
                componentProps: {
                    stickToMarkers: boolean;
                    onValueRender: null;
                };
            };
        }, {}, {}>, value: string): true | "Must be a valid URL" | "Must be a json file";
    };
}, {}>;
