export declare class Logger {
    name: string;
    color: string;
    /**
     * Returns the console format args for a title with the specified background colour and black text
     * @param color Background colour
     * @param title Text
     * @returns Array. Destructure this into {@link Logger}.errorCustomFmt or console.log
     *
     * @example logger.errorCustomFmt(...Logger.makeTitleElements("white", "Hello"), "World");
     */
    static makeTitle(color: string, title: string): [string, ...string[]];
    constructor(name: string, color?: string);
    private _log;
    log(...args: any[]): void;
    info(...args: any[]): void;
    error(...args: any[]): void;
    errorCustomFmt(fmt: string, ...args: any[]): void;
    warn(...args: any[]): void;
    debug(...args: any[]): void;
}
