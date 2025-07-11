export declare function exists(filename: string): Promise<boolean>;
export declare function ensureDirectoryExists(cacheDir: string): Promise<void>;
export declare function getAttachmentIdFromFilename(filename: string): string;
export declare const sleep: (ms: number) => Promise<unknown>;
