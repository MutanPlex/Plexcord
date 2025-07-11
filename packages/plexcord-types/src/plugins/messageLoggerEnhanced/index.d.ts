export declare const VERSION = "4.0.0";
export declare const Native: import("../../utils/types").PluginNative<typeof import("./native")>;
import "./styles.css";
import { Logger } from "../../utils/Logger";
import * as idb from "./db";
import * as LoggedMessageManager from "./LoggedMessageManager";
import { settings } from "./settings";
import { FetchMessagesResponse, LoadMessagePayload, LoggedMessageJSON, MessageCreatePayload, MessageDeleteBulkPayload, MessageUpdatePayload } from "./types";
import { reAddDeletedMessages } from "./utils";
import { LimitedMap } from "./utils/LimitedMap";
import * as imageUtils from "./utils/saveImage";
import * as ImageManager from "./utils/saveImage/ImageManager";
export { settings };
export declare const Flogger: Logger;
export declare const cacheSentMessages: LimitedMap<string, LoggedMessageJSON>;
declare function messageDeleteBulkHandler({ channelId, guildId, ids }: MessageDeleteBulkPayload): Promise<void>;
declare function messageUpdateHandler(payload: MessageUpdatePayload): Promise<void>;
declare function messageCreateHandler(payload: MessageCreatePayload): void;
declare function processMessageFetch(response: FetchMessagesResponse): Promise<void>;
declare const _default: {
    name: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    description: string;
    dependencies: string[];
    patches: ({
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        }[];
        predicate?: undefined;
    } | {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
        predicate?: undefined;
    } | {
        find: string;
        predicate: () => boolean;
        replacement: {
            match: RegExp;
            replace: string;
        };
    })[];
    settings: import("../../utils/types").DefinedSettings<{
        saveMessages: {
            default: true;
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
        };
        saveImages: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
            default: false;
        };
        sortNewest: {
            default: true;
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
        };
        cacheMessagesFromServers: {
            default: false;
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
        };
        ignoreBots: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
            default: false;
            onChange(): void;
        };
        ignoreWebhooks: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
            default: false;
        };
        ignoreSelf: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
            default: false;
            onChange(): void;
        };
        ignoreMutedGuilds: {
            default: false;
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
        };
        ignoreMutedCategories: {
            default: false;
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
        };
        ignoreMutedChannels: {
            default: false;
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
        };
        alwaysLogDirectMessages: {
            default: true;
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
        };
        alwaysLogCurrentChannel: {
            default: true;
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
        };
        permanentlyRemoveLogByDefault: {
            default: false;
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
        };
        hideMessageFromMessageLoggers: {
            default: false;
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
        };
        ShowLogsButton: {
            default: true;
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
            restartNeeded: true;
        };
        messagesToDisplayAtOnceInLogs: {
            default: number;
            type: import("../../utils/types").OptionType.NUMBER;
            description: string;
        };
        hideMessageFromMessageLoggersDeletedMessage: {
            default: string;
            type: import("../../utils/types").OptionType.STRING;
            description: string;
        };
        messageLimit: {
            default: number;
            type: import("../../utils/types").OptionType.NUMBER;
            description: string;
        };
        attachmentSizeLimitInMegabytes: {
            default: number;
            type: import("../../utils/types").OptionType.NUMBER;
            description: string;
        };
        attachmentFileExtensions: {
            default: string;
            type: import("../../utils/types").OptionType.STRING;
            description: string;
        };
        cacheLimit: {
            default: number;
            type: import("../../utils/types").OptionType.NUMBER;
            description: string;
        };
        whitelistedIds: {
            default: string;
            type: import("../../utils/types").OptionType.STRING;
            description: string;
        };
        blacklistedIds: {
            default: string;
            type: import("../../utils/types").OptionType.STRING;
            description: string;
        };
        imageCacheDir: {
            type: import("../../utils/types").OptionType.COMPONENT;
            description: string;
            component: any;
        };
        logsDir: {
            type: import("../../utils/types").OptionType.COMPONENT;
            description: string;
            component: any;
        };
        importLogs: {
            type: import("../../utils/types").OptionType.COMPONENT;
            description: string;
            component: () => import("react").JSX.Element;
        };
        exportLogs: {
            type: import("../../utils/types").OptionType.COMPONENT;
            description: string;
            component: () => import("react").JSX.Element;
        };
        openLogs: {
            type: import("../../utils/types").OptionType.COMPONENT;
            description: string;
            component: () => import("react").JSX.Element;
        };
        openImageCacheFolder: {
            type: import("../../utils/types").OptionType.COMPONENT;
            description: string;
            component: () => import("react").JSX.Element;
        };
        clearLogs: {
            type: import("../../utils/types").OptionType.COMPONENT;
            description: string;
            component: () => import("react").JSX.Element;
        };
    }, import("../../utils/types").SettingsChecks<{
        saveMessages: {
            default: true;
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
        };
        saveImages: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
            default: false;
        };
        sortNewest: {
            default: true;
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
        };
        cacheMessagesFromServers: {
            default: false;
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
        };
        ignoreBots: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
            default: false;
            onChange(): void;
        };
        ignoreWebhooks: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
            default: false;
        };
        ignoreSelf: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
            default: false;
            onChange(): void;
        };
        ignoreMutedGuilds: {
            default: false;
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
        };
        ignoreMutedCategories: {
            default: false;
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
        };
        ignoreMutedChannels: {
            default: false;
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
        };
        alwaysLogDirectMessages: {
            default: true;
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
        };
        alwaysLogCurrentChannel: {
            default: true;
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
        };
        permanentlyRemoveLogByDefault: {
            default: false;
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
        };
        hideMessageFromMessageLoggers: {
            default: false;
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
        };
        ShowLogsButton: {
            default: true;
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
            restartNeeded: true;
        };
        messagesToDisplayAtOnceInLogs: {
            default: number;
            type: import("../../utils/types").OptionType.NUMBER;
            description: string;
        };
        hideMessageFromMessageLoggersDeletedMessage: {
            default: string;
            type: import("../../utils/types").OptionType.STRING;
            description: string;
        };
        messageLimit: {
            default: number;
            type: import("../../utils/types").OptionType.NUMBER;
            description: string;
        };
        attachmentSizeLimitInMegabytes: {
            default: number;
            type: import("../../utils/types").OptionType.NUMBER;
            description: string;
        };
        attachmentFileExtensions: {
            default: string;
            type: import("../../utils/types").OptionType.STRING;
            description: string;
        };
        cacheLimit: {
            default: number;
            type: import("../../utils/types").OptionType.NUMBER;
            description: string;
        };
        whitelistedIds: {
            default: string;
            type: import("../../utils/types").OptionType.STRING;
            description: string;
        };
        blacklistedIds: {
            default: string;
            type: import("../../utils/types").OptionType.STRING;
            description: string;
        };
        imageCacheDir: {
            type: import("../../utils/types").OptionType.COMPONENT;
            description: string;
            component: any;
        };
        logsDir: {
            type: import("../../utils/types").OptionType.COMPONENT;
            description: string;
            component: any;
        };
        importLogs: {
            type: import("../../utils/types").OptionType.COMPONENT;
            description: string;
            component: () => import("react").JSX.Element;
        };
        exportLogs: {
            type: import("../../utils/types").OptionType.COMPONENT;
            description: string;
            component: () => import("react").JSX.Element;
        };
        openLogs: {
            type: import("../../utils/types").OptionType.COMPONENT;
            description: string;
            component: () => import("react").JSX.Element;
        };
        openImageCacheFolder: {
            type: import("../../utils/types").OptionType.COMPONENT;
            description: string;
            component: () => import("react").JSX.Element;
        };
        clearLogs: {
            type: import("../../utils/types").OptionType.COMPONENT;
            description: string;
            component: () => import("react").JSX.Element;
        };
    }>, {}>;
    toolboxActions: {
        "Message Logger"(): void;
    };
    addIconToToolBar(e: {
        toolbar: React.ReactNode[] | React.ReactNode;
    }): number | undefined;
    processMessageFetch: typeof processMessageFetch;
    openLogModal: (initalQuery?: string) => string;
    doesMatch: (type: "has" | "message" | "user" | "from" | "guild" | "channel" | "after" | "in" | "server" | "around" | "before" | "near" | "during", value: string, message: LoggedMessageJSON) => any;
    reAddDeletedMessages: typeof reAddDeletedMessages;
    LoggedMessageManager: typeof LoggedMessageManager;
    ImageManager: typeof ImageManager;
    imageUtils: typeof imageUtils;
    idb: typeof idb;
    coolReAddDeletedMessages: (messages: LoggedMessageJSON[] & {
        extra: LoggedMessageJSON[];
    }, payload: LoadMessagePayload) => LoggedMessageJSON[] & {
        extra: LoggedMessageJSON[];
    };
    isDeletedMessage: (id: string) => boolean;
    getDeleted(m1: any, m2: any): any;
    getEdited(m1: any, m2: any): any;
    flux: {
        MESSAGE_DELETE: any;
        MESSAGE_DELETE_BULK: typeof messageDeleteBulkHandler;
        MESSAGE_UPDATE: typeof messageUpdateHandler;
        MESSAGE_CREATE: typeof messageCreateHandler;
    };
    start(): Promise<void>;
    stop(): void;
} & Record<string, any>;
export default _default;
