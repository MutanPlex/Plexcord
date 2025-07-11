import "./styles.css";
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    settings: import("../../utils/types").DefinedSettings<{
        messageImages: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
            default: true;
            restartNeeded: true;
        };
        messageAvatars: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
            default: true;
            restartNeeded: true;
        };
        messageLinks: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
            default: true;
            restartNeeded: true;
        };
        messageStickers: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
            default: true;
            restartNeeded: true;
        };
        mouseOnlyMode: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
            default: false;
        };
        fixedImage: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
            default: false;
        };
        fileInformation: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        hoverDelay: {
            type: import("../../utils/types").OptionType.SLIDER;
            description: string;
            default: number;
            markers: number[];
        };
        zoomFactor: {
            type: import("../../utils/types").OptionType.SLIDER;
            description: string;
            default: number;
            markers: number[];
        };
        defaultMaxSize: {
            type: import("../../utils/types").OptionType.STRING;
            description: string;
            default: string;
            onChange: (value: string) => void;
        };
    }, import("../../utils/types").SettingsChecks<{
        messageImages: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
            default: true;
            restartNeeded: true;
        };
        messageAvatars: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
            default: true;
            restartNeeded: true;
        };
        messageLinks: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
            default: true;
            restartNeeded: true;
        };
        messageStickers: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
            default: true;
            restartNeeded: true;
        };
        mouseOnlyMode: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
            default: false;
        };
        fixedImage: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
            default: false;
        };
        fileInformation: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        hoverDelay: {
            type: import("../../utils/types").OptionType.SLIDER;
            description: string;
            default: number;
            markers: number[];
        };
        zoomFactor: {
            type: import("../../utils/types").OptionType.SLIDER;
            description: string;
            default: number;
            markers: number[];
        };
        defaultMaxSize: {
            type: import("../../utils/types").OptionType.STRING;
            description: string;
            default: string;
            onChange: (value: string) => void;
        };
    }>, {}>;
    start(): void;
    stop(): void;
} & Record<string, any>;
export default _default;
