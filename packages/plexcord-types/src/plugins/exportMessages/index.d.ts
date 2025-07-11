import { OptionType } from "../../utils/types";
import { Message } from "discord-types/general";
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    settings: import("../../utils/types").DefinedSettings<{
        maxMessages: {
            type: OptionType.NUMBER;
            description: string;
            default: number;
        };
        includeAttachments: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        includeEmbeds: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        includeReactions: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        includeComponents: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
        };
    }, import("../../utils/types").SettingsChecks<{
        maxMessages: {
            type: OptionType.NUMBER;
            description: string;
            default: number;
        };
        includeAttachments: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        includeEmbeds: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        includeReactions: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        includeComponents: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
        };
    }>, {}>;
    contextMenus: {
        message: (children: Array<React.ReactElement<any> | null>, props: {
            message: Message;
        }) => void;
        "user-context": (children: Array<React.ReactElement<any> | null>, props: {
            user?: {
                id: string;
                username: string;
            };
        }) => void;
        "channel-context": (children: Array<React.ReactElement<any> | null>, props: {
            channel?: {
                id: string;
                name?: string;
                type?: number;
            };
        }) => void;
    };
} & Record<string, any>;
export default _default;
