import { OptionType } from "../../utils/types";
interface StreamData {
    audioContext: AudioContext;
    audioElement: HTMLAudioElement;
    emitter: any;
    gainNode?: GainNode;
    id: string;
    levelNode: AudioWorkletNode;
    sinkId: string | "default";
    stream: MediaStream;
    streamSourceNode?: MediaStreamAudioSourceNode;
    videoStreamId: string;
    _mute: boolean;
    _speakingFlags: number;
    _volume: number;
}
declare const _default: {
    name: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    description: string;
    settings: import("../../utils/types").DefinedSettings<{
        multiplier: {
            description: string;
            type: OptionType.SLIDER;
            markers: number[];
            default: number;
            stickToMarkers: true;
        };
    }, import("../../utils/types").SettingsChecks<{
        multiplier: {
            description: string;
            type: OptionType.SLIDER;
            markers: number[];
            default: number;
            stickToMarkers: true;
        };
    }>, {}>;
    patches: ({
        find: string;
        replacement: {
            match: RegExp;
            replace: (_: any, higherMaxVolume: any, minorMaxVolume: any) => string;
        };
    } | {
        find: string;
        predicate: () => boolean;
        group: true;
        replacement: {
            match: RegExp;
            replace: string;
        }[];
    } | {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        }[];
        predicate?: undefined;
        group?: undefined;
    } | {
        find: string;
        replacement: {
            match: RegExp;
            replace: (_: string, rest1: string, localVolume: string, syncVolume: string, rest2: string) => string;
        }[];
        predicate?: undefined;
        group?: undefined;
    })[];
    patchVolume(data: StreamData): void;
} & Record<string, any>;
export default _default;
