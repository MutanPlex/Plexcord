import type { IThemedToken } from "@vap/shiki";
import { JSX } from "react";
import { ThemeBase } from "./Highlighter";
export interface CodeProps {
    theme: ThemeBase;
    useHljs: boolean;
    lang?: string;
    content: string;
    tokens: IThemedToken[][] | null;
}
export declare const Code: ({ theme, useHljs, lang, content, tokens, }: CodeProps) => JSX.Element;
