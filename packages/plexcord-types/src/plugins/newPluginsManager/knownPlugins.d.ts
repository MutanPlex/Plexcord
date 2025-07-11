export declare const KNOWN_PLUGINS_DATA_KEY = "NewPluginsManager_KnownPlugins";
export declare function getKnownPlugins(): Promise<Set<string>>;
export declare function getNewPlugins(): Promise<Set<string>>;
export declare function writeKnownPlugins(): Promise<void>;
