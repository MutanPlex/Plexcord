import type { User } from "discord-types/general";
export { User };
export interface SoundEvent {
    type: "VOICE_CHANNEL_EFFECT_SEND";
    emoji: {
        name: string;
        id?: string;
        animated: boolean;
    };
    channelId: string;
    userId: string;
    animationType: number;
    animationId: number;
    soundId: string;
    soundVolume: number;
}
export interface SoundLogEntry extends SoundEvent {
    users: {
        id: string;
        plays: number[];
    }[];
}
export declare const cl: (...args: (string | false | 0 | string[] | Record<string, unknown> | null | undefined)[]) => string;
export declare function getEmojiUrl(emoji: any): any;
export declare const playSound: (id: any) => void;
export declare function downloadAudio(id: string): Promise<void>;
export declare function getListeners(): Function[];
export declare function addListener(fn: any): void;
export declare function removeListener(fn: any): void;
export declare const UserSummaryItem: import("../../utils/react").LazyComponentWrapper<import("react").ComponentType<any>>;
export declare const AvatarStyles: any;
