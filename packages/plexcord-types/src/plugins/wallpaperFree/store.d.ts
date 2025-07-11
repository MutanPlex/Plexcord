import { Channel } from "discord-types/general";
export declare const WallpaperFreeStore: {
    initialize(previous: {
        guildMap: Map<string, string>;
        channelMap: Map<string, string>;
        globalDefault: string;
    } | undefined): void;
    getState(): {
        guildMap: [string, string][];
        channelMap: [string, string][];
        globalDefault: string | undefined;
    };
    getUrl(channel: Channel): string | undefined;
    addChangeListener(callback: () => void): void;
    addReactChangeListener(callback: () => void): void;
    removeChangeListener(callback: () => void): void;
    removeReactChangeListener(callback: () => void): void;
    emitChange(): void;
    getDispatchToken(): string;
    getName(): string;
    initializeIfNeeded(): void;
    registerActionHandlers: import("../../webpack/common/types").GenericFunction;
    syncWith: import("../../webpack/common/types").GenericFunction;
    waitFor: import("../../webpack/common/types").GenericFunction;
    __getLocalVars(): Record<string, any>;
};
