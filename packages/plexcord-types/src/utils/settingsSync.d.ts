export declare function importSettings(data: string): Promise<void>;
export declare function exportSettings({ minify }?: {
    minify?: boolean;
}): Promise<string>;
export declare function downloadSettingsBackup(): Promise<void>;
export declare function uploadSettingsBackup(showToast?: boolean): Promise<void>;
export declare function putCloudSettings(manual?: boolean): Promise<void>;
export declare function getCloudSettings(shouldNotify?: boolean, force?: boolean): Promise<boolean | undefined>;
export declare function deleteCloudSettings(): Promise<void>;
