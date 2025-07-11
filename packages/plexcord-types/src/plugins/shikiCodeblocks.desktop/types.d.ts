import type { ILanguageRegistration, IShikiTheme, IThemedToken, IThemeRegistration } from "@vap/shiki";
/** This must be atleast a subset of the `@vap/shiki-worker` spec */
export type ShikiSpec = {
    setOnigasm: ({ wasm }: {
        wasm: string;
    }) => Promise<void>;
    setHighlighter: ({ theme, langs }: {
        theme: IThemeRegistration | void;
        langs: ILanguageRegistration[];
    }) => Promise<void>;
    loadTheme: ({ theme }: {
        theme: string | IShikiTheme;
    }) => Promise<void>;
    getTheme: ({ theme }: {
        theme: string;
    }) => Promise<{
        themeData: string;
    }>;
    loadLanguage: ({ lang }: {
        lang: ILanguageRegistration;
    }) => Promise<void>;
    codeToThemedTokens: ({ code, lang, theme, }: {
        code: string;
        lang?: string;
        theme?: string;
    }) => Promise<IThemedToken[][]>;
};
export declare const enum StyleSheets {
    Main = "MAIN",
    DevIcons = "DEVICONS"
}
export declare const enum HljsSetting {
    Never = "NEVER",
    Secondary = "SECONDARY",
    Primary = "PRIMARY",
    Always = "ALWAYS"
}
export declare const enum DeviconSetting {
    Disabled = "DISABLED",
    Greyscale = "GREYSCALE",
    Color = "COLOR"
}
