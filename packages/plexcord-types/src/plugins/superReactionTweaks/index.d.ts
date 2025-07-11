import { OptionType } from "../../utils/types";
export declare const settings: import("../../utils/types").DefinedSettings<{
    superReactByDefault: {
        type: OptionType.BOOLEAN;
        description: string;
        default: true;
    };
    unlimitedSuperReactionPlaying: {
        type: OptionType.BOOLEAN;
        description: string;
        default: false;
    };
    superReactionPlayingLimit: {
        description: string;
        type: OptionType.SLIDER;
        default: number;
        markers: number[];
        stickToMarkers: true;
    };
}, {
    superReactionPlayingLimit: {
        disabled(this: import("../../utils/types").DefinedSettings<{
            superReactByDefault: {
                type: OptionType.BOOLEAN;
                description: string;
                default: true;
            };
            unlimitedSuperReactionPlaying: {
                type: OptionType.BOOLEAN;
                description: string;
                default: false;
            };
            superReactionPlayingLimit: {
                description: string;
                type: OptionType.SLIDER;
                default: number;
                markers: number[];
                stickToMarkers: true;
            };
        }, {}, {}>): boolean;
    };
}, {}>;
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    patches: ({
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
    } | {
        find: string;
        replacement: {
            match: RegExp;
            replace: (_: string, rest: string, isBurstReactionVariable: string, isReactionIntention: string) => string;
        };
    })[];
    settings: import("../../utils/types").DefinedSettings<{
        superReactByDefault: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        unlimitedSuperReactionPlaying: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
        };
        superReactionPlayingLimit: {
            description: string;
            type: OptionType.SLIDER;
            default: number;
            markers: number[];
            stickToMarkers: true;
        };
    }, {
        superReactionPlayingLimit: {
            disabled(this: import("../../utils/types").DefinedSettings<{
                superReactByDefault: {
                    type: OptionType.BOOLEAN;
                    description: string;
                    default: true;
                };
                unlimitedSuperReactionPlaying: {
                    type: OptionType.BOOLEAN;
                    description: string;
                    default: false;
                };
                superReactionPlayingLimit: {
                    description: string;
                    type: OptionType.SLIDER;
                    default: number;
                    markers: number[];
                    stickToMarkers: true;
                };
            }, {}, {}>): boolean;
        };
    }, {}>;
    shouldPlayBurstReaction(playingCount: number): boolean;
    readonly shouldSuperReactByDefault: boolean;
} & Record<string, any>;
export default _default;
