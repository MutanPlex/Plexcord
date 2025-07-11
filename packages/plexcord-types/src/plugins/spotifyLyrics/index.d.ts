import "./styles.css";
declare const _default: {
    name: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    description: string;
    dependencies: string[];
    patches: {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
        predicate: () => boolean;
        noWarn: true;
    }[];
    FakePanelWrapper({ PlexcordOriginal, ...props }: {
        [x: string]: any;
        PlexcordOriginal: any;
    }): import("react").JSX.Element;
    settings: import("../../utils/types").DefinedSettings<{
        ShowMusicNoteOnNoLyrics: {
            description: string;
            type: import("../../utils/types").OptionType.BOOLEAN;
            default: true;
        };
        LyricsPosition: {
            description: string;
            type: import("../../utils/types").OptionType.SELECT;
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
            type: import("../../utils/types").OptionType.SELECT;
            options: ({
                value: import("./providers/types").Provider;
                label: string;
                default: true;
            } | {
                value: import("./providers/types").Provider;
                label: string;
                default?: undefined;
            })[];
        };
        FallbackProvider: {
            description: string;
            type: import("../../utils/types").OptionType.BOOLEAN;
            default: true;
        };
        TranslateTo: {
            description: string;
            type: import("../../utils/types").OptionType.SELECT;
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
            type: import("../../utils/types").OptionType.SELECT;
            options: ({
                value: import("./providers/types").Provider;
                label: string;
                default: true;
            } | {
                value: import("./providers/types").Provider;
                label: string;
                default?: undefined;
            })[];
        };
        ShowFailedToasts: {
            description: string;
            type: import("../../utils/types").OptionType.BOOLEAN;
            default: true;
        };
        LyricDelay: {
            markers: number[];
            stickToMarkers: boolean;
            description: string;
            type: import("../../utils/types").OptionType.SLIDER;
            default: number;
            hidden: true;
        };
        Display: {
            description: string;
            type: import("../../utils/types").OptionType.COMPONENT;
            component: () => import("react").JSX.Element;
        };
        Details: {
            description: string;
            type: import("../../utils/types").OptionType.COMPONENT;
            component: () => import("react").JSX.Element;
        };
        PurgeLyricsCache: {
            description: string;
            type: import("../../utils/types").OptionType.COMPONENT;
            component: () => import("react").JSX.Element;
        };
        TestingCache: {
            description: string;
            type: import("../../utils/types").OptionType.BOOLEAN;
            default: false;
            hidden: true;
        };
    }, import("../../utils/types").SettingsChecks<{
        ShowMusicNoteOnNoLyrics: {
            description: string;
            type: import("../../utils/types").OptionType.BOOLEAN;
            default: true;
        };
        LyricsPosition: {
            description: string;
            type: import("../../utils/types").OptionType.SELECT;
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
            type: import("../../utils/types").OptionType.SELECT;
            options: ({
                value: import("./providers/types").Provider;
                label: string;
                default: true;
            } | {
                value: import("./providers/types").Provider;
                label: string;
                default?: undefined;
            })[];
        };
        FallbackProvider: {
            description: string;
            type: import("../../utils/types").OptionType.BOOLEAN;
            default: true;
        };
        TranslateTo: {
            description: string;
            type: import("../../utils/types").OptionType.SELECT;
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
            type: import("../../utils/types").OptionType.SELECT;
            options: ({
                value: import("./providers/types").Provider;
                label: string;
                default: true;
            } | {
                value: import("./providers/types").Provider;
                label: string;
                default?: undefined;
            })[];
        };
        ShowFailedToasts: {
            description: string;
            type: import("../../utils/types").OptionType.BOOLEAN;
            default: true;
        };
        LyricDelay: {
            markers: number[];
            stickToMarkers: boolean;
            description: string;
            type: import("../../utils/types").OptionType.SLIDER;
            default: number;
            hidden: true;
        };
        Display: {
            description: string;
            type: import("../../utils/types").OptionType.COMPONENT;
            component: () => import("react").JSX.Element;
        };
        Details: {
            description: string;
            type: import("../../utils/types").OptionType.COMPONENT;
            component: () => import("react").JSX.Element;
        };
        PurgeLyricsCache: {
            description: string;
            type: import("../../utils/types").OptionType.COMPONENT;
            component: () => import("react").JSX.Element;
        };
        TestingCache: {
            description: string;
            type: import("../../utils/types").OptionType.BOOLEAN;
            default: false;
            hidden: true;
        };
    }>, {}>;
    start(): Promise<void>;
} & Record<string, any>;
export default _default;
