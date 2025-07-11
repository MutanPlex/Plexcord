declare const _default: {
    name: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    description: string;
    settings: import("../../utils/types").DefinedSettings<{
        pronounsFormat: {
            type: import("../../utils/types").OptionType.SELECT;
            description: string;
            options: ({
                label: string;
                value: import("./settings").PronounsFormat;
                default: true;
            } | {
                label: string;
                value: import("./settings").PronounsFormat;
                default?: undefined;
            })[];
        };
        showSelf: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
            default: true;
        };
    }, import("../../utils/types").SettingsChecks<{
        pronounsFormat: {
            type: import("../../utils/types").OptionType.SELECT;
            description: string;
            options: ({
                label: string;
                value: import("./settings").PronounsFormat;
                default: true;
            } | {
                label: string;
                value: import("./settings").PronounsFormat;
                default?: undefined;
            })[];
        };
        showSelf: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
            default: true;
        };
    }>, {}>;
    patches: ({
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
    } | {
        find: string;
        replacement: ({
            match: RegExp;
            replace: string;
            noWarn: true;
        } | {
            match: RegExp;
            replace: string;
            noWarn?: undefined;
        })[];
    })[];
    PronounsChatComponentWrapper: import("react").FunctionComponent<{
        message: import("discord-types/general").Message;
    }>;
    CompactPronounsChatComponentWrapper: import("react").FunctionComponent<{
        message: import("discord-types/general").Message;
    }>;
} & Record<string, any>;
export default _default;
