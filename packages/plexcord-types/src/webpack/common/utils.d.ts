import type { Channel } from "discord-types/general";
import type * as t from "./types/utils";
export declare let FluxDispatcher: t.FluxDispatcher;
export declare let ComponentDispatch: any;
export declare const Constants: t.Constants;
export declare const RestAPI: t.RestAPI;
export declare const moment: typeof import("moment");
export declare const hljs: typeof import("highlight.js").default;
export declare const useDrag: any;
export declare const useDrop: any;
export declare const match: typeof import("ts-pattern").match, P: typeof import("ts-pattern/dist/patterns");
export declare const lodash: typeof import("lodash");
export declare const i18n: Record<"t" | "intl", any>;
export declare let SnowflakeUtils: t.SnowflakeUtils;
export declare let Parser: t.Parser;
export declare let Alerts: t.Alerts;
export interface ToastData {
    message: string;
    id: string;
    /**
     * Toasts.Type
     */
    type: string;
    options?: ToastOptions;
}
export interface ToastOptions {
    /**
     * Toasts.Position
     */
    position?: number;
    component?: React.ReactNode;
    duration?: number;
}
export declare const Toasts: {
    show(data: ToastData): void;
    pop(): void;
    create(message: string, type: string, options?: ToastOptions): ToastData;
    Type: {
        MESSAGE: string;
        SUCCESS: string;
        FAILURE: string;
        CUSTOM: string;
        CLIP: string;
        LINK: string;
        FORWARD: string;
        BOOKMARK: string;
        CLOCK: string;
    };
    Position: {
        TOP: number;
        BOTTOM: number;
    };
    genId: () => string;
};
/**
 * Show a simple toast. If you need more options, use Toasts.show manually
 */
export declare function showToast(message: string, type?: string, options?: ToastOptions): void;
export declare const UserUtils: {
    getUser: any;
};
export declare const UploadManager: any;
export declare const UploadHandler: {
    promptToUpload: (files: File[], channel: Channel, draftType: Number) => void;
};
export declare const ApplicationAssetUtils: Record<"fetchAssetIds" | "getAssetFromImageURL" | "getAssetImage" | "getAssets", any>;
export declare const NavigationRouter: t.NavigationRouter;
export declare const ChannelRouter: t.ChannelRouter;
export declare let SettingsRouter: any;
export declare const PermissionsBits: t.PermissionsBits;
export declare const zustandCreate: any;
export declare const zustandPersist: any;
export declare const MessageActions: any;
export declare const MessageCache: any;
export declare const UserProfileActions: any;
export declare const InviteActions: any;
export declare const ChannelActionCreators: any;
export declare const IconUtils: t.IconUtils;
export declare const ReadStateUtils: Record<"ackChannel", any>;
export declare const ExpressionPickerStore: t.ExpressionPickerStore;
export declare const PopoutActions: t.PopoutActions;
export declare const UsernameUtils: t.UsernameUtils;
export declare const DisplayProfileUtils: t.DisplayProfileUtils;
export declare const DateUtils: t.DateUtils;
