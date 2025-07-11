export interface ThemeBase {
    plainColor: string;
    accentBgColor: string;
    accentFgColor: string;
    backgroundColor: string;
}
export interface HighlighterProps {
    lang?: string;
    content: string;
    isPreview: boolean;
    tempSettings?: Record<string, any>;
}
export declare const createHighlighter: (props: HighlighterProps) => import("react").JSX.Element;
export declare const Highlighter: ({ lang, content, isPreview, tempSettings, }: HighlighterProps) => import("react").JSX.Element;
