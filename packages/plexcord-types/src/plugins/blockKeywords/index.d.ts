import { OptionType } from "../../utils/types";
import { MessageJSON } from "discord-types/general";
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    patches: ({
        find: string;
        predicate: () => any;
        replacement: {
            match: RegExp;
            replace: (_: any, _funcName: any, props: any) => string;
        }[];
    } | {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
    })[];
    settings: import("../../utils/types").DefinedSettings<{
        blockedWords: {
            type: OptionType.STRING;
            description: string;
            default: string;
            restartNeeded: true;
        };
        useRegex: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
            restartNeeded: true;
        };
        caseSensitive: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
            restartNeeded: true;
        };
        ignoreBlockedMessages: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
            restartNeeded: true;
        };
    }, import("../../utils/types").SettingsChecks<{
        blockedWords: {
            type: OptionType.STRING;
            description: string;
            default: string;
            restartNeeded: true;
        };
        useRegex: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
            restartNeeded: true;
        };
        caseSensitive: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
            restartNeeded: true;
        };
        ignoreBlockedMessages: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
            restartNeeded: true;
        };
    }>, {}>;
    start(): void;
    containsBlockedKeywords(message: MessageJSON): boolean;
    blockMessagesWithKeywords(messageList: any): any;
} & Record<string, any>;
export default _default;
