export interface Track {
    id: string;
    name: string;
    duration: number;
    isLocal: boolean;
    album: {
        id: string;
        name: string;
        image: {
            height: number;
            width: number;
            url: string;
        };
    };
    artists: {
        id: string;
        href: string;
        name: string;
        type: string;
        uri: string;
    }[];
}
interface Device {
    id: string;
    is_active: boolean;
}
type Repeat = "off" | "track" | "context";
export declare const SpotifyStore: {
    mPosition: number;
    _start: number;
    track: Track | null;
    device: Device | null;
    isPlaying: boolean;
    repeat: Repeat;
    shuffle: boolean;
    volume: number;
    isSettingPosition: boolean;
    openExternal(path: string): void;
    position: number;
    prev(): void;
    next(): void;
    setVolume(percent: number): void;
    setPlaying(playing: boolean): void;
    setRepeat(state: Repeat): void;
    setShuffle(state: boolean): void;
    seek(ms: number): any;
    _req(method: "post" | "get" | "put", route: string, data?: any): any;
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
export {};
