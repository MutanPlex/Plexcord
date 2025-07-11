import { ReporterTestable } from "../../utils/types";
interface VoiceState {
    userId: string;
    channelId?: string;
    oldChannelId?: string;
    deaf: boolean;
    mute: boolean;
    selfDeaf: boolean;
    selfMute: boolean;
}
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    reporterTestable: ReporterTestable;
    settings: import("../../utils/types").DefinedSettings<{
        voice: {
            type: import("../../utils/types").OptionType.COMPONENT;
            component: typeof import("./VoiceSetting").VoiceSettingSection;
            readonly default: string | undefined;
        };
        volume: {
            type: import("../../utils/types").OptionType.SLIDER;
            description: string;
            default: number;
            markers: number[];
            stickToMarkers: false;
        };
        rate: {
            type: import("../../utils/types").OptionType.SLIDER;
            description: string;
            default: number;
            markers: number[];
            stickToMarkers: false;
        };
        sayOwnName: {
            description: string;
            type: import("../../utils/types").OptionType.BOOLEAN;
            default: false;
        };
        latinOnly: {
            description: string;
            type: import("../../utils/types").OptionType.BOOLEAN;
            default: false;
        };
        joinMessage: {
            type: import("../../utils/types").OptionType.STRING;
            description: string;
            default: string;
        };
        leaveMessage: {
            type: import("../../utils/types").OptionType.STRING;
            description: string;
            default: string;
        };
        moveMessage: {
            type: import("../../utils/types").OptionType.STRING;
            description: string;
            default: string;
        };
        muteMessage: {
            type: import("../../utils/types").OptionType.STRING;
            description: string;
            default: string;
        };
        unmuteMessage: {
            type: import("../../utils/types").OptionType.STRING;
            description: string;
            default: string;
        };
        deafenMessage: {
            type: import("../../utils/types").OptionType.STRING;
            description: string;
            default: string;
        };
        undeafenMessage: {
            type: import("../../utils/types").OptionType.STRING;
            description: string;
            default: string;
        };
    }, import("../../utils/types").SettingsChecks<{
        voice: {
            type: import("../../utils/types").OptionType.COMPONENT;
            component: typeof import("./VoiceSetting").VoiceSettingSection;
            readonly default: string | undefined;
        };
        volume: {
            type: import("../../utils/types").OptionType.SLIDER;
            description: string;
            default: number;
            markers: number[];
            stickToMarkers: false;
        };
        rate: {
            type: import("../../utils/types").OptionType.SLIDER;
            description: string;
            default: number;
            markers: number[];
            stickToMarkers: false;
        };
        sayOwnName: {
            description: string;
            type: import("../../utils/types").OptionType.BOOLEAN;
            default: false;
        };
        latinOnly: {
            description: string;
            type: import("../../utils/types").OptionType.BOOLEAN;
            default: false;
        };
        joinMessage: {
            type: import("../../utils/types").OptionType.STRING;
            description: string;
            default: string;
        };
        leaveMessage: {
            type: import("../../utils/types").OptionType.STRING;
            description: string;
            default: string;
        };
        moveMessage: {
            type: import("../../utils/types").OptionType.STRING;
            description: string;
            default: string;
        };
        muteMessage: {
            type: import("../../utils/types").OptionType.STRING;
            description: string;
            default: string;
        };
        unmuteMessage: {
            type: import("../../utils/types").OptionType.STRING;
            description: string;
            default: string;
        };
        deafenMessage: {
            type: import("../../utils/types").OptionType.STRING;
            description: string;
            default: string;
        };
        undeafenMessage: {
            type: import("../../utils/types").OptionType.STRING;
            description: string;
            default: string;
        };
    }>, {}>;
    flux: {
        VOICE_STATE_UPDATES({ voiceStates }: {
            voiceStates: VoiceState[];
        }): void;
        AUDIO_TOGGLE_SELF_MUTE(): void;
        AUDIO_TOGGLE_SELF_DEAF(): void;
    };
    start(): void;
    settingsAboutComponent({ tempSettings: s }: {
        tempSettings?: Record<string, any>;
    }): import("react").JSX.Element;
} & Record<string, any>;
export default _default;
