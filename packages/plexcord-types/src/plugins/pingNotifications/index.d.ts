import { OptionType } from "../../utils/types";
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    settings: import("../../utils/types").DefinedSettings<{
        friends: {
            type: OptionType.BOOLEAN;
            default: true;
            description: string;
        };
        mentions: {
            type: OptionType.BOOLEAN;
            default: true;
            description: string;
        };
        replies: {
            type: OptionType.BOOLEAN;
            default: true;
            description: string;
        };
        dms: {
            type: OptionType.BOOLEAN;
            default: true;
            description: string;
        };
        showInActive: {
            type: OptionType.BOOLEAN;
            default: false;
            description: string;
        };
    }, import("../../utils/types").SettingsChecks<{
        friends: {
            type: OptionType.BOOLEAN;
            default: true;
            description: string;
        };
        mentions: {
            type: OptionType.BOOLEAN;
            default: true;
            description: string;
        };
        replies: {
            type: OptionType.BOOLEAN;
            default: true;
            description: string;
        };
        dms: {
            type: OptionType.BOOLEAN;
            default: true;
            description: string;
        };
        showInActive: {
            type: OptionType.BOOLEAN;
            default: false;
            description: string;
        };
    }>, {}>;
    flux: {
        MESSAGE_CREATE({ message }: any): Promise<void>;
    };
} & Record<string, any>;
export default _default;
