import { SettingsStore as SettingsStoreClass } from "../shared/SettingsStore";
import { DefinedSettings, SettingsChecks, SettingsDefinition } from "../utils/types";
export interface Settings {
    autoUpdate: boolean;
    autoUpdateNotification: boolean;
    useQuickCss: boolean;
    eagerPatches: boolean;
    enabledThemes: string[];
    enabledThemeLinks: string[];
    enableReactDevtools: boolean;
    themeLinks: string[];
    frameless: boolean;
    transparent: boolean;
    winCtrlQ: boolean;
    macosVibrancyStyle: "content" | "fullscreen-ui" | "header" | "hud" | "menu" | "popover" | "selection" | "sidebar" | "titlebar" | "tooltip" | "under-page" | "window" | undefined;
    disableMinSize: boolean;
    winNativeTitleBar: boolean;
    plugins: {
        [plugin: string]: {
            enabled: boolean;
            [setting: string]: any;
        };
    };
    notifications: {
        timeout: number;
        position: "top-right" | "bottom-right";
        useNative: "always" | "never" | "not-focused";
        logLimit: number;
    };
    cloud: {
        authenticated: boolean;
        url: string;
        settingsSync: boolean;
        settingsSyncVersion: number;
    };
    ignoreResetWarning: boolean;
    userCssVars: {
        [themeId: string]: {
            [varName: string]: string;
        };
    };
}
export declare const SettingsStore: SettingsStoreClass<Settings>;
/**
 * Same as {@link Settings} but unproxied. You should treat this as readonly,
 * as modifying properties on this will not save to disk or call settings
 * listeners.
 * WARNING: default values specified in plugin.options will not be ensured here. In other words,
 * settings for which you specified a default value may be uninitialised. If you need proper
 * handling for default values, use {@link Settings}
 */
export declare const PlainSettings: Settings;
/**
 * A smart settings object. Altering props automagically saves
 * the updated settings to disk.
 * This recursively proxies objects. If you need the object non proxied, use {@link PlainSettings}
 */
export declare const Settings: Settings;
/**
 * Settings hook for React components. Returns a smart settings
 * object that automagically triggers a rerender if any properties
 * are altered
 * @param paths An optional list of paths to whitelist for rerenders
 * @returns Settings
 */
export declare function useSettings(paths?: UseSettings<Settings>[]): Settings;
export declare function migratePluginSettings(name: string, ...oldNames: string[]): void;
export declare function migratePluginSetting(pluginName: string, newSetting: string, oldSetting: string): void;
export declare function migrateSettingFromPlugin(newPlugin: string, newSetting: string, oldPlugin: string, oldSetting: string): void;
export declare function definePluginSettings<Def extends SettingsDefinition, Checks extends SettingsChecks<Def>, PrivateSettings extends object = {}>(def: Def, checks?: Checks): DefinedSettings<Def, Checks, PrivateSettings>;
type UseSettings<T extends object> = ResolveUseSettings<T>[keyof T];
type ResolveUseSettings<T extends object> = {
    [Key in keyof T]: Key extends string ? T[Key] extends Record<string, unknown> ? UseSettings<T[Key]> extends string ? `${Key}.${UseSettings<T[Key]>}` : never : Key : never;
};
export {};
