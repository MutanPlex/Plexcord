import { OptionType } from "../../utils/types";
declare const _default: {
    name: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    description: string;
    settings: import("../../utils/types").DefinedSettings<{
        shownEmojis: {
            description: string;
            type: OptionType.SELECT;
            default: string;
            options: {
                label: string;
                value: string;
            }[];
        };
    }, import("../../utils/types").SettingsChecks<{
        shownEmojis: {
            description: string;
            type: OptionType.SELECT;
            default: string;
            options: {
                label: string;
                value: string;
            }[];
        };
    }>, {}>;
    patches: {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
    }[];
    shouldSkip(guildId: string, emoji: any): boolean;
} & Record<string, any>;
export default _default;
