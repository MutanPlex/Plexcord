import { OptionType } from "../../utils/types";
export declare const settings: import("../../utils/types").DefinedSettings<{
    dms: {
        type: OptionType.BOOLEAN;
        default: true;
        description: string;
        restartNeeded: true;
    };
    billing: {
        type: OptionType.BOOLEAN;
        default: true;
        description: string;
        restartNeeded: true;
    };
    gift: {
        type: OptionType.BOOLEAN;
        default: true;
        description: string;
        restartNeeded: true;
    };
    emojiList: {
        type: OptionType.BOOLEAN;
        default: true;
        description: string;
        restartNeeded: true;
    };
}, import("../../utils/types").SettingsChecks<{
    dms: {
        type: OptionType.BOOLEAN;
        default: true;
        description: string;
        restartNeeded: true;
    };
    billing: {
        type: OptionType.BOOLEAN;
        default: true;
        description: string;
        restartNeeded: true;
    };
    gift: {
        type: OptionType.BOOLEAN;
        default: true;
        description: string;
        restartNeeded: true;
    };
    emojiList: {
        type: OptionType.BOOLEAN;
        default: true;
        description: string;
        restartNeeded: true;
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
        dms: {
            type: OptionType.BOOLEAN;
            default: true;
            description: string;
            restartNeeded: true;
        };
        billing: {
            type: OptionType.BOOLEAN;
            default: true;
            description: string;
            restartNeeded: true;
        };
        gift: {
            type: OptionType.BOOLEAN;
            default: true;
            description: string;
            restartNeeded: true;
        };
        emojiList: {
            type: OptionType.BOOLEAN;
            default: true;
            description: string;
            restartNeeded: true;
        };
    }, import("../../utils/types").SettingsChecks<{
        dms: {
            type: OptionType.BOOLEAN;
            default: true;
            description: string;
            restartNeeded: true;
        };
        billing: {
            type: OptionType.BOOLEAN;
            default: true;
            description: string;
            restartNeeded: true;
        };
        gift: {
            type: OptionType.BOOLEAN;
            default: true;
            description: string;
            restartNeeded: true;
        };
        emojiList: {
            type: OptionType.BOOLEAN;
            default: true;
            description: string;
            restartNeeded: true;
        };
    }>, {}>;
    patches: ({
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        }[];
        predicate: () => boolean;
        all?: undefined;
    } | {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
        all: true;
        predicate: () => boolean;
    } | {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
        predicate: () => boolean;
        all?: undefined;
    })[];
} & Record<string, any>;
export default _default;
