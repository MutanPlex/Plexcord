import { OptionType } from "../../utils/types";
import type { Message } from "discord-types/general";
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    settings: import("../../utils/types").DefinedSettings<{
        userList: {
            description: string;
            type: OptionType.STRING;
            default: string;
        };
        shouldPingListed: {
            description: string;
            type: OptionType.SELECT;
            options: ({
                label: string;
                value: false;
                default?: undefined;
            } | {
                label: string;
                value: true;
                default: true;
            })[];
        };
        inverseShiftReply: {
            description: string;
            type: OptionType.BOOLEAN;
            default: false;
        };
    }, import("../../utils/types").SettingsChecks<{
        userList: {
            description: string;
            type: OptionType.STRING;
            default: string;
        };
        shouldPingListed: {
            description: string;
            type: OptionType.SELECT;
            options: ({
                label: string;
                value: false;
                default?: undefined;
            } | {
                label: string;
                value: true;
                default: true;
            })[];
        };
        inverseShiftReply: {
            description: string;
            type: OptionType.BOOLEAN;
            default: false;
        };
    }>, {}>;
    shouldMention(message: Message, isHoldingShift: boolean): boolean;
    patches: {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
    }[];
} & Record<string, any>;
export default _default;
