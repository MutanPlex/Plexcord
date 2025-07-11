import { OptionType } from "../../utils/types";
interface FixedTimerOpts {
    interval?: number;
    initialTime?: number;
}
export interface VoiceState {
    userId: string;
    channelId?: string;
    oldChannelId?: string;
    guildId?: string;
    deaf: boolean;
    mute: boolean;
    selfDeaf: boolean;
    selfMute: boolean;
    selfStream: boolean;
    selfVideo: boolean;
    sessionId: string;
    suppress: boolean;
    requestToSpeakTimestamp: string | null;
}
export interface PassiveUpdateState {
    type: string;
    guildId: string;
    members?: ({
        user: {
            avatar: null | string;
            communication_disabled_until: null | string;
            deaf: boolean;
            flags: number;
            joined_at: string;
            mute: boolean;
            nick: string;
            pending: boolean;
            premium_since: null | string;
        };
        roles: (string)[];
        premium_since: null | string;
        pending: boolean;
        nick: string | null;
        mute: boolean;
        joined_at: string;
        flags: number;
        deaf: boolean;
        communication_disabled_until: null | string;
        avatar: null | string;
    })[];
    channels: ({
        lastPinTimestamp?: string;
        lastMessageId: string;
        id: string;
    })[];
    voiceStates?: VoiceState[];
}
export declare const settings: import("../../utils/types").DefinedSettings<{
    showWithoutHover: {
        type: OptionType.BOOLEAN;
        description: string;
        restartNeeded: true;
        default: true;
    };
    showRoleColor: {
        type: OptionType.BOOLEAN;
        description: string;
        restartNeeded: false;
        default: true;
    };
    trackSelf: {
        type: OptionType.BOOLEAN;
        description: string;
        restartNeeded: false;
        default: true;
    };
    showSeconds: {
        type: OptionType.BOOLEAN;
        description: string;
        restartNeeded: false;
        default: true;
    };
    format: {
        type: OptionType.SELECT;
        description: string;
        options: ({
            label: string;
            value: string;
            default: true;
        } | {
            label: string;
            value: string;
            default?: undefined;
        })[];
    };
    watchLargeGuilds: {
        type: OptionType.BOOLEAN;
        description: string;
        restartNeeded: true;
        default: false;
    };
}, import("../../utils/types").SettingsChecks<{
    showWithoutHover: {
        type: OptionType.BOOLEAN;
        description: string;
        restartNeeded: true;
        default: true;
    };
    showRoleColor: {
        type: OptionType.BOOLEAN;
        description: string;
        restartNeeded: false;
        default: true;
    };
    trackSelf: {
        type: OptionType.BOOLEAN;
        description: string;
        restartNeeded: false;
        default: true;
    };
    showSeconds: {
        type: OptionType.BOOLEAN;
        description: string;
        restartNeeded: false;
        default: true;
    };
    format: {
        type: OptionType.SELECT;
        description: string;
        options: ({
            label: string;
            value: string;
            default: true;
        } | {
            label: string;
            value: string;
            default?: undefined;
        })[];
    };
    watchLargeGuilds: {
        type: OptionType.BOOLEAN;
        description: string;
        restartNeeded: true;
        default: false;
    };
}>, {}>;
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    settings: import("../../utils/types").DefinedSettings<{
        showWithoutHover: {
            type: OptionType.BOOLEAN;
            description: string;
            restartNeeded: true;
            default: true;
        };
        showRoleColor: {
            type: OptionType.BOOLEAN;
            description: string;
            restartNeeded: false;
            default: true;
        };
        trackSelf: {
            type: OptionType.BOOLEAN;
            description: string;
            restartNeeded: false;
            default: true;
        };
        showSeconds: {
            type: OptionType.BOOLEAN;
            description: string;
            restartNeeded: false;
            default: true;
        };
        format: {
            type: OptionType.SELECT;
            description: string;
            options: ({
                label: string;
                value: string;
                default: true;
            } | {
                label: string;
                value: string;
                default?: undefined;
            })[];
        };
        watchLargeGuilds: {
            type: OptionType.BOOLEAN;
            description: string;
            restartNeeded: true;
            default: false;
        };
    }, import("../../utils/types").SettingsChecks<{
        showWithoutHover: {
            type: OptionType.BOOLEAN;
            description: string;
            restartNeeded: true;
            default: true;
        };
        showRoleColor: {
            type: OptionType.BOOLEAN;
            description: string;
            restartNeeded: false;
            default: true;
        };
        trackSelf: {
            type: OptionType.BOOLEAN;
            description: string;
            restartNeeded: false;
            default: true;
        };
        showSeconds: {
            type: OptionType.BOOLEAN;
            description: string;
            restartNeeded: false;
            default: true;
        };
        format: {
            type: OptionType.SELECT;
            description: string;
            options: ({
                label: string;
                value: string;
                default: true;
            } | {
                label: string;
                value: string;
                default?: undefined;
            })[];
        };
        watchLargeGuilds: {
            type: OptionType.BOOLEAN;
            description: string;
            restartNeeded: true;
            default: false;
        };
    }>, {}>;
    patches: {
        find: string;
        predicate: () => boolean;
        replacement: {
            match: RegExp;
            replace: string;
        }[];
    }[];
    flux: {
        VOICE_STATE_UPDATES({ voiceStates }: {
            voiceStates: VoiceState[];
        }): void;
        PASSIVE_UPDATE_V1(passiveUpdate: PassiveUpdateState): void;
    };
    subscribeToAllGuilds(): void;
    start(): void;
    renderTimer(userId: string): import("react").JSX.Element | undefined;
} & Record<string, any>;
export default _default;
export declare function useFixedTimer({ interval, initialTime }: FixedTimerOpts): number;
export declare function Timer({ time }: Readonly<{
    time: number;
}>): import("react").JSX.Element;
export declare function TimerIcon({ height, width, className }: Readonly<{
    height?: number;
    width?: number;
    className?: string;
}>): import("react").JSX.Element;
export declare function TimerText({ text, className }: Readonly<{
    text: string;
    className: string;
}>): import("react").JSX.Element;
