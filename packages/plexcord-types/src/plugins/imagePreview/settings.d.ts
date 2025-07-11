import { OptionType } from "../../utils/types";
declare const settings: import("../../utils/types").DefinedSettings<{
    messageImages: {
        type: OptionType.BOOLEAN;
        description: string;
        default: true;
        restartNeeded: true;
    };
    messageAvatars: {
        type: OptionType.BOOLEAN;
        description: string;
        default: true;
        restartNeeded: true;
    };
    messageLinks: {
        type: OptionType.BOOLEAN;
        description: string;
        default: true;
        restartNeeded: true;
    };
    messageStickers: {
        type: OptionType.BOOLEAN;
        description: string;
        default: true;
        restartNeeded: true;
    };
    mouseOnlyMode: {
        type: OptionType.BOOLEAN;
        description: string;
        default: false;
    };
    fixedImage: {
        type: OptionType.BOOLEAN;
        description: string;
        default: false;
    };
    fileInformation: {
        type: OptionType.BOOLEAN;
        description: string;
        default: true;
    };
    hoverDelay: {
        type: OptionType.SLIDER;
        description: string;
        default: number;
        markers: number[];
    };
    zoomFactor: {
        type: OptionType.SLIDER;
        description: string;
        default: number;
        markers: number[];
    };
    defaultMaxSize: {
        type: OptionType.STRING;
        description: string;
        default: string;
        onChange: (value: string) => void;
    };
}, import("../../utils/types").SettingsChecks<{
    messageImages: {
        type: OptionType.BOOLEAN;
        description: string;
        default: true;
        restartNeeded: true;
    };
    messageAvatars: {
        type: OptionType.BOOLEAN;
        description: string;
        default: true;
        restartNeeded: true;
    };
    messageLinks: {
        type: OptionType.BOOLEAN;
        description: string;
        default: true;
        restartNeeded: true;
    };
    messageStickers: {
        type: OptionType.BOOLEAN;
        description: string;
        default: true;
        restartNeeded: true;
    };
    mouseOnlyMode: {
        type: OptionType.BOOLEAN;
        description: string;
        default: false;
    };
    fixedImage: {
        type: OptionType.BOOLEAN;
        description: string;
        default: false;
    };
    fileInformation: {
        type: OptionType.BOOLEAN;
        description: string;
        default: true;
    };
    hoverDelay: {
        type: OptionType.SLIDER;
        description: string;
        default: number;
        markers: number[];
    };
    zoomFactor: {
        type: OptionType.SLIDER;
        description: string;
        default: number;
        markers: number[];
    };
    defaultMaxSize: {
        type: OptionType.STRING;
        description: string;
        default: string;
        onChange: (value: string) => void;
    };
}>, {}>;
declare function getMimeType(extension: string | undefined): [boolean, string];
declare function isLinkAnImage(url: string): boolean;
declare function stripDiscordParams(url: string): string;
export { getMimeType, isLinkAnImage, settings, stripDiscordParams };
