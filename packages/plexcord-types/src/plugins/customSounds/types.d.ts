export interface SoundType {
    name: string;
    id: string;
}
export interface SoundOverride {
    enabled: boolean;
    fileName: string;
    url: string;
    volume: number;
}
export interface SoundPlayer {
    loop(): void;
    play(): void;
    pause(): void;
    stop(): void;
}
export declare const soundTypes: readonly SoundType[];
export declare function makeEmptyOverride(): SoundOverride;
