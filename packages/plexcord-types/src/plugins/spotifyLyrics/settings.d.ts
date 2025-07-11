import { OptionType } from "../../utils/types";
import { Provider } from "./providers/types";
declare const settings: import("../../utils/types").DefinedSettings<{
    ShowMusicNoteOnNoLyrics: {
        description: string;
        type: OptionType.BOOLEAN;
        default: true;
    };
    LyricsPosition: {
        description: string;
        type: OptionType.SELECT;
        options: ({
            value: string;
            label: string;
            default?: undefined;
        } | {
            value: string;
            label: string;
            default: true;
        })[];
    };
    LyricsProvider: {
        description: string;
        type: OptionType.SELECT;
        options: ({
            value: Provider;
            label: string;
            default: true;
        } | {
            value: Provider;
            label: string;
            default?: undefined;
        })[];
    };
    FallbackProvider: {
        description: string;
        type: OptionType.BOOLEAN;
        default: true;
    };
    TranslateTo: {
        description: string;
        type: OptionType.SELECT;
        options: ({
            value: string;
            label: string;
            default?: undefined;
        } | {
            value: string;
            label: string;
            default: boolean;
        })[];
        onChange: () => Promise<void>;
    };
    LyricsConversion: {
        description: string;
        type: OptionType.SELECT;
        options: ({
            value: Provider;
            label: string;
            default: true;
        } | {
            value: Provider;
            label: string;
            default?: undefined;
        })[];
    };
    ShowFailedToasts: {
        description: string;
        type: OptionType.BOOLEAN;
        default: true;
    };
    LyricDelay: {
        markers: number[];
        stickToMarkers: boolean;
        description: string;
        type: OptionType.SLIDER;
        default: number;
        hidden: true;
    };
    Display: {
        description: string;
        type: OptionType.COMPONENT;
        component: () => import("react").JSX.Element;
    };
    Details: {
        description: string;
        type: OptionType.COMPONENT;
        component: () => import("react").JSX.Element;
    };
    PurgeLyricsCache: {
        description: string;
        type: OptionType.COMPONENT;
        component: () => import("react").JSX.Element;
    };
    TestingCache: {
        description: string;
        type: OptionType.BOOLEAN;
        default: false;
        hidden: true;
    };
}, import("../../utils/types").SettingsChecks<{
    ShowMusicNoteOnNoLyrics: {
        description: string;
        type: OptionType.BOOLEAN;
        default: true;
    };
    LyricsPosition: {
        description: string;
        type: OptionType.SELECT;
        options: ({
            value: string;
            label: string;
            default?: undefined;
        } | {
            value: string;
            label: string;
            default: true;
        })[];
    };
    LyricsProvider: {
        description: string;
        type: OptionType.SELECT;
        options: ({
            value: Provider;
            label: string;
            default: true;
        } | {
            value: Provider;
            label: string;
            default?: undefined;
        })[];
    };
    FallbackProvider: {
        description: string;
        type: OptionType.BOOLEAN;
        default: true;
    };
    TranslateTo: {
        description: string;
        type: OptionType.SELECT;
        options: ({
            value: string;
            label: string;
            default?: undefined;
        } | {
            value: string;
            label: string;
            default: boolean;
        })[];
        onChange: () => Promise<void>;
    };
    LyricsConversion: {
        description: string;
        type: OptionType.SELECT;
        options: ({
            value: Provider;
            label: string;
            default: true;
        } | {
            value: Provider;
            label: string;
            default?: undefined;
        })[];
    };
    ShowFailedToasts: {
        description: string;
        type: OptionType.BOOLEAN;
        default: true;
    };
    LyricDelay: {
        markers: number[];
        stickToMarkers: boolean;
        description: string;
        type: OptionType.SLIDER;
        default: number;
        hidden: true;
    };
    Display: {
        description: string;
        type: OptionType.COMPONENT;
        component: () => import("react").JSX.Element;
    };
    Details: {
        description: string;
        type: OptionType.COMPONENT;
        component: () => import("react").JSX.Element;
    };
    PurgeLyricsCache: {
        description: string;
        type: OptionType.COMPONENT;
        component: () => import("react").JSX.Element;
    };
    TestingCache: {
        description: string;
        type: OptionType.BOOLEAN;
        default: false;
        hidden: true;
    };
}>, {}>;
export default settings;
