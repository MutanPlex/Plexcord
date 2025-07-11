import "./shiki.css";
import { ReporterTestable } from "../../utils/types";
import { DeviconSetting } from "./types";
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    reporterTestable: ReporterTestable;
    settings: import("../../utils/types").DefinedSettings<{
        theme: {
            type: import("../../utils/types").OptionType.SELECT;
            description: string;
            options: {
                label: string;
                value: string;
                default: boolean;
            }[];
            onChange: (themeUrl: string) => Promise<void>;
        };
        customTheme: {
            type: import("../../utils/types").OptionType.STRING;
            description: string;
            placeholder: string;
            onChange: (value: any) => void;
        };
        tryHljs: {
            type: import("../../utils/types").OptionType.SELECT;
            description: string;
            options: ({
                label: string;
                value: import("./types").HljsSetting;
                default?: undefined;
            } | {
                label: string;
                value: import("./types").HljsSetting;
                default: true;
            })[];
        };
        useDevIcon: {
            type: import("../../utils/types").OptionType.SELECT;
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
            type: import("../../utils/types").OptionType.SLIDER;
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
                    type: import("../../utils/types").OptionType.SELECT;
                    description: string;
                    options: {
                        label: string;
                        value: string;
                        default: boolean;
                    }[];
                    onChange: (themeUrl: string) => Promise<void>;
                };
                customTheme: {
                    type: import("../../utils/types").OptionType.STRING;
                    description: string;
                    placeholder: string;
                    onChange: (value: any) => void;
                };
                tryHljs: {
                    type: import("../../utils/types").OptionType.SELECT;
                    description: string;
                    options: ({
                        label: string;
                        value: import("./types").HljsSetting;
                        default?: undefined;
                    } | {
                        label: string;
                        value: import("./types").HljsSetting;
                        default: true;
                    })[];
                };
                useDevIcon: {
                    type: import("../../utils/types").OptionType.SELECT;
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
                    type: import("../../utils/types").OptionType.SLIDER;
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
                    type: import("../../utils/types").OptionType.SELECT;
                    description: string;
                    options: {
                        label: string;
                        value: string;
                        default: boolean;
                    }[];
                    onChange: (themeUrl: string) => Promise<void>;
                };
                customTheme: {
                    type: import("../../utils/types").OptionType.STRING;
                    description: string;
                    placeholder: string;
                    onChange: (value: any) => void;
                };
                tryHljs: {
                    type: import("../../utils/types").OptionType.SELECT;
                    description: string;
                    options: ({
                        label: string;
                        value: import("./types").HljsSetting;
                        default?: undefined;
                    } | {
                        label: string;
                        value: import("./types").HljsSetting;
                        default: true;
                    })[];
                };
                useDevIcon: {
                    type: import("../../utils/types").OptionType.SELECT;
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
                    type: import("../../utils/types").OptionType.SLIDER;
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
    patches: {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
    }[];
    start: () => Promise<void>;
    stop: () => void;
    settingsAboutComponent: ({ tempSettings }: {
        tempSettings?: Record<string, any>;
    }) => import("react").JSX.Element;
    shiki: {
        client: import("@vap/core/ipc").WorkerClient<import("./types").ShikiSpec> | null;
        currentTheme: import("@vap/shiki").IShikiTheme | null;
        currentThemeUrl: string | null;
        timeoutMs: number;
        languages: Record<string, import("./api/languages").Language>;
        themes: {
            DarkPlus: string;
            MaterialCandy: string;
            Andromeeda: string;
            AuroraX: string;
            AyuDark: string;
            CatppuccinLatte: string;
            CatppuccinFrappe: string;
            CatppuccinMacchiato: string;
            CatppuccinMocha: string;
            DraculaSoft: string;
            Dracula: string;
            EverforestDark: string;
            EverforestLight: string;
            GithubDarkDefault: string;
            GithubDarkDimmed: string;
            GithubDarkHighContrast: string;
            GithubDark: string;
            GithubLightDefault: string;
            GithubLightHighContrast: string;
            GithubLight: string;
            Houston: string;
            KanagawaDragon: string;
            KanagawaLotus: string;
            KanagawaWave: string;
            LaserWave: string;
            LightPlus: string;
            MaterialDarker: string;
            MaterialDefault: string;
            MaterialLighter: string;
            MaterialOcean: string;
            MaterialPalenight: string;
            MinDark: string;
            MinLight: string;
            Monokai: string;
            NightOwl: string;
            Nord: string;
            OneDarkPro: string;
            OneLight: string;
            Plastic: string;
            Poimandres: string;
            Red: string;
            RosePineDawn: string;
            RosePineMoon: string;
            RosePine: string;
            SlackDark: string;
            SlackOchin: string;
            SnazzyLight: string;
            SolarizedDark: string;
            SolarizedLight: string;
            Synthwave84: string;
            TokyoNight: string;
            Vesper: string;
            VitesseBlack: string;
            VitesseDark: string;
            VitesseLight: string;
        };
        loadedThemes: Set<string>;
        loadedLangs: Set<string>;
        clientPromise: Promise<import("@vap/core/ipc").WorkerClient<import("./types").ShikiSpec>>;
        init: (initThemeUrl: string | undefined) => Promise<void>;
        _setTheme: (themeUrl: string) => Promise<void>;
        loadTheme: (themeUrl: string) => Promise<void>;
        setTheme: (themeUrl: string) => Promise<void>;
        loadLang: (langId: string) => Promise<void>;
        tokenizeCode: (code: string, langId: string) => Promise<import("@vap/shiki").IThemedToken[][]>;
        destroy(): void;
    };
    createHighlighter: (props: import("./components/Highlighter").HighlighterProps) => import("react").JSX.Element;
    renderHighlighter: ({ lang, content }: {
        lang: string;
        content: string;
    }) => import("react").JSX.Element;
} & Record<string, any>;
export default _default;
