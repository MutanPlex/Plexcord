import type { Settings } from "./api/Settings";
import { CspRequestResult } from "./main/csp/manager";
import type { UserThemeHeader } from "./main/themes";
import { IpcEvents } from "./shared/IpcEvents";
import { IpcRes } from "./utils/types";
export declare function sendSync<T = any>(event: IpcEvents, ...args: any[]): T;
declare const _default: {
    themes: {
        uploadTheme: (fileName: string, fileData: string) => Promise<void>;
        deleteTheme: (fileName: string) => Promise<void>;
        getThemesDir: () => Promise<string>;
        getThemesList: () => Promise<UserThemeHeader[]>;
        getThemeData: (fileName: string) => Promise<string | undefined>;
        getSystemValues: () => Promise<Record<string, string>>;
        openFolder: () => Promise<void>;
    };
    updater: {
        getUpdates: () => Promise<IpcRes<Record<"message" | "author" | "hash", string>[]>>;
        update: () => Promise<IpcRes<boolean>>;
        rebuild: () => Promise<IpcRes<boolean>>;
        getRepo: () => Promise<IpcRes<string>>;
    };
    settings: {
        get: () => Settings;
        set: (settings: Settings, pathToNotify?: string) => Promise<void>;
        getSettingsDir: () => Promise<string>;
        openFolder: () => Promise<void>;
    };
    quickCss: {
        get: () => Promise<string>;
        set: (css: string) => Promise<void>;
        addChangeListener(cb: (newCss: string) => void): void;
        addThemeChangeListener(cb: () => void): void;
        openFile: () => Promise<void>;
        openEditor: () => Promise<void>;
    };
    native: {
        getVersions: () => Partial<NodeJS.ProcessVersions>;
        openExternal: (url: string) => Promise<void>;
    };
    csp: {
        /**
         * Note: Only supports full explicit matches, not wildcards.
         *
         * If `*.example.com` is allowed, `isDomainAllowed("https://sub.example.com")` will return false.
         */
        isDomainAllowed: (url: string, directives: string[]) => Promise<boolean>;
        removeOverride: (url: string) => Promise<boolean>;
        requestAddOverride: (url: string, directives: string[], callerName: string) => Promise<CspRequestResult>;
    };
    pluginHelpers: Record<string, Record<string, (...args: any[]) => Promise<any>>>;
};
export default _default;
