import { IpcMainInvokeEvent } from "electron";
type Format = "video" | "audio" | "gif";
type DownloadOptions = {
    url: string;
    format?: Format;
    gifQuality?: 1 | 2 | 3 | 4 | 5;
    ytdlpArgs?: string[];
    ffmpegArgs?: string[];
    maxFileSize?: number;
};
export declare function start(_: IpcMainInvokeEvent, _workdir: string | undefined): Promise<string>;
export declare function stop(_: IpcMainInvokeEvent): Promise<void>;
export declare function execute(_: IpcMainInvokeEvent, opt: DownloadOptions): Promise<{
    buffer: Buffer;
    title: string;
    logs: string;
} | {
    error: string;
    logs: string;
}>;
export declare function checkffmpeg(_?: IpcMainInvokeEvent): boolean;
export declare function checkytdlp(_?: IpcMainInvokeEvent): Promise<boolean>;
export declare function interrupt(_: IpcMainInvokeEvent): Promise<void>;
export declare const getStdout: () => string;
export declare const isYtdlpAvailable: () => boolean;
export declare const isFfmpegAvailable: () => boolean;
export {};
