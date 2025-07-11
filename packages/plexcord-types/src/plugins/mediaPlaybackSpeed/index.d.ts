import "./styles.css";
import { OptionType } from "../../utils/types";
import { RefObject } from "react";
type MediaRef = RefObject<HTMLMediaElement> | undefined;
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    settings: import("../../utils/types").DefinedSettings<{
        test: {
            type: OptionType.COMPONENT;
            description: string;
            component(): import("react").JSX.Element;
        };
        defaultVoiceMessageSpeed: {
            type: OptionType.SLIDER;
            default: number;
            description: string;
            markers: number[];
        };
        defaultVideoSpeed: {
            type: OptionType.SLIDER;
            default: number;
            description: string;
            markers: number[];
        };
        defaultAudioSpeed: {
            type: OptionType.SLIDER;
            default: number;
            description: string;
            markers: number[];
        };
    }, import("../../utils/types").SettingsChecks<{
        test: {
            type: OptionType.COMPONENT;
            description: string;
            component(): import("react").JSX.Element;
        };
        defaultVoiceMessageSpeed: {
            type: OptionType.SLIDER;
            default: number;
            description: string;
            markers: number[];
        };
        defaultVideoSpeed: {
            type: OptionType.SLIDER;
            default: number;
            description: string;
            markers: number[];
        };
        defaultAudioSpeed: {
            type: OptionType.SLIDER;
            default: number;
            description: string;
            markers: number[];
        };
    }>, {}>;
    PlaybackSpeedComponent({ mediaRef }: {
        mediaRef: MediaRef;
    }): import("react").JSX.Element;
    renderComponent(mediaRef: MediaRef): import("react").JSX.Element;
    patches: {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
    }[];
} & Record<string, any>;
export default _default;
