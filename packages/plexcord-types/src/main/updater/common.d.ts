export declare const PLEXCORD_FILES: string[];
export declare function serializeErrors(func: (...args: any[]) => any): () => Promise<{
    ok: boolean;
    value: any;
    error?: undefined;
} | {
    ok: boolean;
    error: any;
    value?: undefined;
}>;
