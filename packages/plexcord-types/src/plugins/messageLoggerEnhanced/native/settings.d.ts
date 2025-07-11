interface MLSettings {
    logsDir: string;
    imageCacheDir: string;
}
export declare function getSettings(): Promise<MLSettings>;
export declare function saveSettings(settings: MLSettings): Promise<void>;
export {};
