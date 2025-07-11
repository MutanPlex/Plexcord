import { OptionType } from "../../utils/types";
export declare const settings: import("../../utils/types").DefinedSettings<{
    avatarDivWrap: {
        type: OptionType.BOOLEAN;
        description: string;
        restartNeeded: false;
        default: true;
    };
}, import("../../utils/types").SettingsChecks<{
    avatarDivWrap: {
        type: OptionType.BOOLEAN;
        description: string;
        restartNeeded: false;
        default: true;
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
        avatarDivWrap: {
            type: OptionType.BOOLEAN;
            description: string;
            restartNeeded: false;
            default: true;
        };
    }, import("../../utils/types").SettingsChecks<{
        avatarDivWrap: {
            type: OptionType.BOOLEAN;
            description: string;
            restartNeeded: false;
            default: true;
        };
    }>, {}>;
    patches: {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
    }[];
    funnyButton: import("react").FunctionComponent<any>;
    flux: {
        AUDIO_TOGGLE_SELF_DEAF: () => Promise<void>;
    };
    start: () => void;
    stop: () => void;
} & Record<string, any>;
export default _default;
