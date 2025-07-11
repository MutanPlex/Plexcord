import { Channel, Guild } from "discord-types/general";
export declare const SidebarStore: {
    guild: Guild | null;
    channel: Channel | null;
    addChangeListener(callback: () => void): void;
    addReactChangeListener(callback: () => void): void;
    removeChangeListener(callback: () => void): void;
    removeReactChangeListener(callback: () => void): void;
    emitChange(): void;
    getDispatchToken(): string;
    getName(): string;
    initialize(): void;
    initializeIfNeeded(): void;
    registerActionHandlers: import("../../webpack/common/types").GenericFunction;
    syncWith: import("../../webpack/common/types").GenericFunction;
    waitFor: import("../../webpack/common/types").GenericFunction;
    __getLocalVars(): Record<string, any>;
};
