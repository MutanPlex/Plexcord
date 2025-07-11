import "./style.css";
import { OptionType } from "../../utils/types";
export declare const settings: import("../../utils/types").DefinedSettings<{
    frequentEmojis: {
        description: string;
        type: OptionType.BOOLEAN;
        default: true;
    };
    rows: {
        description: string;
        type: OptionType.SLIDER;
        default: number;
        markers: number[];
        stickToMarkers: true;
    };
    columns: {
        description: string;
        type: OptionType.SLIDER;
        default: number;
        markers: number[];
        stickToMarkers: true;
    };
    compactMode: {
        description: string;
        type: OptionType.BOOLEAN;
        default: false;
    };
    scroll: {
        description: string;
        type: OptionType.BOOLEAN;
        default: true;
    };
}, import("../../utils/types").SettingsChecks<{
    frequentEmojis: {
        description: string;
        type: OptionType.BOOLEAN;
        default: true;
    };
    rows: {
        description: string;
        type: OptionType.SLIDER;
        default: number;
        markers: number[];
        stickToMarkers: true;
    };
    columns: {
        description: string;
        type: OptionType.SLIDER;
        default: number;
        markers: number[];
        stickToMarkers: true;
    };
    compactMode: {
        description: string;
        type: OptionType.BOOLEAN;
        default: false;
    };
    scroll: {
        description: string;
        type: OptionType.BOOLEAN;
        default: true;
    };
}>, {}>;
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    settings: import("../../utils/types").DefinedSettings<{
        frequentEmojis: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
        };
        rows: {
            description: string;
            type: OptionType.SLIDER;
            default: number;
            markers: number[];
            stickToMarkers: true;
        };
        columns: {
            description: string;
            type: OptionType.SLIDER;
            default: number;
            markers: number[];
            stickToMarkers: true;
        };
        compactMode: {
            description: string;
            type: OptionType.BOOLEAN;
            default: false;
        };
        scroll: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
        };
    }, import("../../utils/types").SettingsChecks<{
        frequentEmojis: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
        };
        rows: {
            description: string;
            type: OptionType.SLIDER;
            default: number;
            markers: number[];
            stickToMarkers: true;
        };
        columns: {
            description: string;
            type: OptionType.SLIDER;
            default: number;
            markers: number[];
            stickToMarkers: true;
        };
        compactMode: {
            description: string;
            type: OptionType.BOOLEAN;
            default: false;
        };
        scroll: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
        };
    }>, {}>;
    patches: ({
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
        group?: undefined;
    } | {
        find: string;
        group: true;
        replacement: {
            match: RegExp;
            replace: string;
        }[];
    })[];
    getMaxQuickReactions(): number;
    applyScroll(emojis: any[], index: number): any[];
    onWheelWrapper(currentScrollValue: number, setScrollHook: (value: number) => void, emojisLength: number): ((e: WheelEvent) => void) | undefined;
} & Record<string, any>;
export default _default;
