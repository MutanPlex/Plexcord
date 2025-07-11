import { OptionType } from "../../utils/types";
import { MessageJSON } from "discord-types/general";
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    settings: import("../../utils/types").DefinedSettings<{
        channelToAffect: {
            type: OptionType.SELECT;
            description: string;
            options: ({
                label: string;
                value: string;
                default: true;
            } | {
                label: string;
                value: string;
                default?: undefined;
            })[];
        };
        allowMentions: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
        };
        allowEveryone: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
        };
    }, import("../../utils/types").SettingsChecks<{
        channelToAffect: {
            type: OptionType.SELECT;
            description: string;
            options: ({
                label: string;
                value: string;
                default: true;
            } | {
                label: string;
                value: string;
                default?: undefined;
            })[];
        };
        allowMentions: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
        };
        allowEveryone: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
        };
    }>, {}>;
    patches: {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        }[];
    }[];
    isPrivateChannelRead(message: MessageJSON): boolean;
} & Record<string, any>;
export default _default;
