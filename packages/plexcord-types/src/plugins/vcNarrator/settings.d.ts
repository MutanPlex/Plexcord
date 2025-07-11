import { OptionType } from "../../utils/types";
import { VoiceSettingSection } from "./VoiceSetting";
export declare const getDefaultVoice: () => SpeechSynthesisVoice | undefined;
export declare function getCurrentVoice(voices?: SpeechSynthesisVoice[]): SpeechSynthesisVoice | undefined;
export declare const settings: import("../../utils/types").DefinedSettings<{
    voice: {
        type: OptionType.COMPONENT;
        component: typeof VoiceSettingSection;
        readonly default: string | undefined;
    };
    volume: {
        type: OptionType.SLIDER;
        description: string;
        default: number;
        markers: number[];
        stickToMarkers: false;
    };
    rate: {
        type: OptionType.SLIDER;
        description: string;
        default: number;
        markers: number[];
        stickToMarkers: false;
    };
    sayOwnName: {
        description: string;
        type: OptionType.BOOLEAN;
        default: false;
    };
    latinOnly: {
        description: string;
        type: OptionType.BOOLEAN;
        default: false;
    };
    joinMessage: {
        type: OptionType.STRING;
        description: string;
        default: string;
    };
    leaveMessage: {
        type: OptionType.STRING;
        description: string;
        default: string;
    };
    moveMessage: {
        type: OptionType.STRING;
        description: string;
        default: string;
    };
    muteMessage: {
        type: OptionType.STRING;
        description: string;
        default: string;
    };
    unmuteMessage: {
        type: OptionType.STRING;
        description: string;
        default: string;
    };
    deafenMessage: {
        type: OptionType.STRING;
        description: string;
        default: string;
    };
    undeafenMessage: {
        type: OptionType.STRING;
        description: string;
        default: string;
    };
}, import("../../utils/types").SettingsChecks<{
    voice: {
        type: OptionType.COMPONENT;
        component: typeof VoiceSettingSection;
        readonly default: string | undefined;
    };
    volume: {
        type: OptionType.SLIDER;
        description: string;
        default: number;
        markers: number[];
        stickToMarkers: false;
    };
    rate: {
        type: OptionType.SLIDER;
        description: string;
        default: number;
        markers: number[];
        stickToMarkers: false;
    };
    sayOwnName: {
        description: string;
        type: OptionType.BOOLEAN;
        default: false;
    };
    latinOnly: {
        description: string;
        type: OptionType.BOOLEAN;
        default: false;
    };
    joinMessage: {
        type: OptionType.STRING;
        description: string;
        default: string;
    };
    leaveMessage: {
        type: OptionType.STRING;
        description: string;
        default: string;
    };
    moveMessage: {
        type: OptionType.STRING;
        description: string;
        default: string;
    };
    muteMessage: {
        type: OptionType.STRING;
        description: string;
        default: string;
    };
    unmuteMessage: {
        type: OptionType.STRING;
        description: string;
        default: string;
    };
    deafenMessage: {
        type: OptionType.STRING;
        description: string;
        default: string;
    };
    undeafenMessage: {
        type: OptionType.STRING;
        description: string;
        default: string;
    };
}>, {}>;
