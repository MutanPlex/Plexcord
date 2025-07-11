export declare const wordsFromCamel: (text: string) => string[];
export declare const wordsFromSnake: (text: string) => string[];
export declare const wordsFromKebab: (text: string) => string[];
export declare const wordsFromPascal: (text: string) => string[];
export declare const wordsFromTitle: (text: string) => string[];
export declare const wordsToCamel: (words: string[]) => string;
export declare const wordsToSnake: (words: string[]) => string;
export declare const wordsToKebab: (words: string[]) => string;
export declare const wordsToPascal: (words: string[]) => string;
export declare const wordsToTitle: (words: string[]) => string;
declare const units: readonly ["years", "months", "weeks", "days", "hours", "minutes", "seconds"];
type Units = typeof units[number];
/**
 * Forms time into a human readable string link "1 day, 2 hours, 3 minutes and 4 seconds"
 * @param time The time on the specified unit
 * @param unit The unit the time is on
 * @param short Whether to use short units like "d" instead of "days"
 */
export declare function formatDuration(time: number, unit: Units, short?: boolean): string;
export declare function formatDurationMs(ms: number, human?: boolean, seconds?: boolean): string;
/**
 * Join an array of strings in a human readable way (1, 2 and 3)
 * @param elements Elements
 */
export declare function humanFriendlyJoin(elements: string[]): string;
/**
 * Join an array of strings in a human readable way (1, 2 and 3)
 * @param elements Elements
 * @param mapper Function that converts elements to a string
 */
export declare function humanFriendlyJoin<T>(elements: T[], mapper: (e: T) => string): string;
/**
 * Wrap the text in ``` with an optional language
 */
export declare function makeCodeblock(text: string, language?: string): string;
export declare function stripIndent(strings: TemplateStringsArray, ...values: any[]): string;
export declare const ZWSP = "\u200B";
export declare function toInlineCode(s: string): string;
export {};
