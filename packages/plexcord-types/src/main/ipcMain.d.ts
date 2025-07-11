import "./updater";
import "./ipcPlugins";
import "./settings";
import { BrowserWindow } from "electron";
export declare function ensureSafePath(basePath: string, path: string): string | null;
export declare function initIpc(mainWindow: BrowserWindow): void;
