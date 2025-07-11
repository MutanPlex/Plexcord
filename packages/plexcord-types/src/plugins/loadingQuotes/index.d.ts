import { OptionType } from "../../utils/types";
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    settings: import("../../utils/types").DefinedSettings<{
        replaceEvents: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
        };
        enablePluginPresetQuotes: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
        };
        enableDiscordPresetQuotes: {
            description: string;
            type: OptionType.BOOLEAN;
            default: false;
        };
        additionalQuotes: {
            description: string;
            type: OptionType.STRING;
            default: string;
        };
        additionalQuotesDelimiter: {
            description: string;
            type: OptionType.STRING;
            default: string;
        };
    }, import("../../utils/types").SettingsChecks<{
        replaceEvents: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
        };
        enablePluginPresetQuotes: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
        };
        enableDiscordPresetQuotes: {
            description: string;
            type: OptionType.BOOLEAN;
            default: false;
        };
        additionalQuotes: {
            description: string;
            type: OptionType.STRING;
            default: string;
        };
        additionalQuotesDelimiter: {
            description: string;
            type: OptionType.STRING;
            default: string;
        };
    }>, {}>;
    patches: {
        find: string;
        replacement: ({
            match: RegExp;
            replace: string;
            predicate?: undefined;
        } | {
            match: RegExp;
            replace: string;
            predicate: () => boolean;
        })[];
    }[];
    mutateQuotes(quotes: string[]): void;
} & Record<string, any>;
export default _default;
