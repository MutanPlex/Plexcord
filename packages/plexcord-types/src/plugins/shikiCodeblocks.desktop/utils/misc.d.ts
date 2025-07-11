import { HighlighterProps } from "../components/Highlighter";
import { HljsSetting } from "../types";
export declare const cl: (...args: (string | false | 0 | string[] | Record<string, unknown> | null | undefined)[]) => string;
export declare const shouldUseHljs: ({ lang, tryHljs, }: {
    lang: HighlighterProps["lang"];
    tryHljs: HljsSetting;
}) => boolean;
