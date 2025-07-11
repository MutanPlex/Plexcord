import type { Settings } from "../api/Settings";
import { SettingsStore } from "../shared/SettingsStore";
export declare const RendererSettings: SettingsStore<Partial<Settings>>;
export interface NativeSettings {
    plugins: {
        [plugin: string]: {
            [setting: string]: any;
        };
    };
    customCspRules: Record<string, string[]>;
}
export declare const NativeSettings: SettingsStore<NativeSettings>;
