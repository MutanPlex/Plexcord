import { OptionType } from "../../utils/types";
export declare const settings: import("../../utils/types").DefinedSettings<{
    saveMessages: {
        default: true;
        type: OptionType.BOOLEAN;
        description: string;
    };
    saveImages: {
        type: OptionType.BOOLEAN;
        description: string;
        default: false;
    };
    sortNewest: {
        default: true;
        type: OptionType.BOOLEAN;
        description: string;
    };
    cacheMessagesFromServers: {
        default: false;
        type: OptionType.BOOLEAN;
        description: string;
    };
    ignoreBots: {
        type: OptionType.BOOLEAN;
        description: string;
        default: false;
        onChange(): void;
    };
    ignoreWebhooks: {
        type: OptionType.BOOLEAN;
        description: string;
        default: false;
    };
    ignoreSelf: {
        type: OptionType.BOOLEAN;
        description: string;
        default: false;
        onChange(): void;
    };
    ignoreMutedGuilds: {
        default: false;
        type: OptionType.BOOLEAN;
        description: string;
    };
    ignoreMutedCategories: {
        default: false;
        type: OptionType.BOOLEAN;
        description: string;
    };
    ignoreMutedChannels: {
        default: false;
        type: OptionType.BOOLEAN;
        description: string;
    };
    alwaysLogDirectMessages: {
        default: true;
        type: OptionType.BOOLEAN;
        description: string;
    };
    alwaysLogCurrentChannel: {
        default: true;
        type: OptionType.BOOLEAN;
        description: string;
    };
    permanentlyRemoveLogByDefault: {
        default: false;
        type: OptionType.BOOLEAN;
        description: string;
    };
    hideMessageFromMessageLoggers: {
        default: false;
        type: OptionType.BOOLEAN;
        description: string;
    };
    ShowLogsButton: {
        default: true;
        type: OptionType.BOOLEAN;
        description: string;
        restartNeeded: true;
    };
    messagesToDisplayAtOnceInLogs: {
        default: number;
        type: OptionType.NUMBER;
        description: string;
    };
    hideMessageFromMessageLoggersDeletedMessage: {
        default: string;
        type: OptionType.STRING;
        description: string;
    };
    messageLimit: {
        default: number;
        type: OptionType.NUMBER;
        description: string;
    };
    attachmentSizeLimitInMegabytes: {
        default: number;
        type: OptionType.NUMBER;
        description: string;
    };
    attachmentFileExtensions: {
        default: string;
        type: OptionType.STRING;
        description: string;
    };
    cacheLimit: {
        default: number;
        type: OptionType.NUMBER;
        description: string;
    };
    whitelistedIds: {
        default: string;
        type: OptionType.STRING;
        description: string;
    };
    blacklistedIds: {
        default: string;
        type: OptionType.STRING;
        description: string;
    };
    imageCacheDir: {
        type: OptionType.COMPONENT;
        description: string;
        component: any;
    };
    logsDir: {
        type: OptionType.COMPONENT;
        description: string;
        component: any;
    };
    importLogs: {
        type: OptionType.COMPONENT;
        description: string;
        component: () => import("react").JSX.Element;
    };
    exportLogs: {
        type: OptionType.COMPONENT;
        description: string;
        component: () => import("react").JSX.Element;
    };
    openLogs: {
        type: OptionType.COMPONENT;
        description: string;
        component: () => import("react").JSX.Element;
    };
    openImageCacheFolder: {
        type: OptionType.COMPONENT;
        description: string;
        component: () => import("react").JSX.Element;
    };
    clearLogs: {
        type: OptionType.COMPONENT;
        description: string;
        component: () => import("react").JSX.Element;
    };
}, import("../../utils/types").SettingsChecks<{
    saveMessages: {
        default: true;
        type: OptionType.BOOLEAN;
        description: string;
    };
    saveImages: {
        type: OptionType.BOOLEAN;
        description: string;
        default: false;
    };
    sortNewest: {
        default: true;
        type: OptionType.BOOLEAN;
        description: string;
    };
    cacheMessagesFromServers: {
        default: false;
        type: OptionType.BOOLEAN;
        description: string;
    };
    ignoreBots: {
        type: OptionType.BOOLEAN;
        description: string;
        default: false;
        onChange(): void;
    };
    ignoreWebhooks: {
        type: OptionType.BOOLEAN;
        description: string;
        default: false;
    };
    ignoreSelf: {
        type: OptionType.BOOLEAN;
        description: string;
        default: false;
        onChange(): void;
    };
    ignoreMutedGuilds: {
        default: false;
        type: OptionType.BOOLEAN;
        description: string;
    };
    ignoreMutedCategories: {
        default: false;
        type: OptionType.BOOLEAN;
        description: string;
    };
    ignoreMutedChannels: {
        default: false;
        type: OptionType.BOOLEAN;
        description: string;
    };
    alwaysLogDirectMessages: {
        default: true;
        type: OptionType.BOOLEAN;
        description: string;
    };
    alwaysLogCurrentChannel: {
        default: true;
        type: OptionType.BOOLEAN;
        description: string;
    };
    permanentlyRemoveLogByDefault: {
        default: false;
        type: OptionType.BOOLEAN;
        description: string;
    };
    hideMessageFromMessageLoggers: {
        default: false;
        type: OptionType.BOOLEAN;
        description: string;
    };
    ShowLogsButton: {
        default: true;
        type: OptionType.BOOLEAN;
        description: string;
        restartNeeded: true;
    };
    messagesToDisplayAtOnceInLogs: {
        default: number;
        type: OptionType.NUMBER;
        description: string;
    };
    hideMessageFromMessageLoggersDeletedMessage: {
        default: string;
        type: OptionType.STRING;
        description: string;
    };
    messageLimit: {
        default: number;
        type: OptionType.NUMBER;
        description: string;
    };
    attachmentSizeLimitInMegabytes: {
        default: number;
        type: OptionType.NUMBER;
        description: string;
    };
    attachmentFileExtensions: {
        default: string;
        type: OptionType.STRING;
        description: string;
    };
    cacheLimit: {
        default: number;
        type: OptionType.NUMBER;
        description: string;
    };
    whitelistedIds: {
        default: string;
        type: OptionType.STRING;
        description: string;
    };
    blacklistedIds: {
        default: string;
        type: OptionType.STRING;
        description: string;
    };
    imageCacheDir: {
        type: OptionType.COMPONENT;
        description: string;
        component: any;
    };
    logsDir: {
        type: OptionType.COMPONENT;
        description: string;
        component: any;
    };
    importLogs: {
        type: OptionType.COMPONENT;
        description: string;
        component: () => import("react").JSX.Element;
    };
    exportLogs: {
        type: OptionType.COMPONENT;
        description: string;
        component: () => import("react").JSX.Element;
    };
    openLogs: {
        type: OptionType.COMPONENT;
        description: string;
        component: () => import("react").JSX.Element;
    };
    openImageCacheFolder: {
        type: OptionType.COMPONENT;
        description: string;
        component: () => import("react").JSX.Element;
    };
    clearLogs: {
        type: OptionType.COMPONENT;
        description: string;
        component: () => import("react").JSX.Element;
    };
}>, {}>;
