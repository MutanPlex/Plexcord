import { OptionType } from "../../utils/types";
import { Message } from "discord-types/general";
declare const enum MentionOptions {
    DISABLED = 0,
    ENABLED = 1,
    NO_REPLY_MENTION_PLUGIN = 2
}
declare const _default: {
    name: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    description: string;
    settings: import("../../utils/types").DefinedSettings<{
        shouldMention: {
            type: OptionType.SELECT;
            description: string;
            options: ({
                label: string;
                value: MentionOptions;
                default: true;
            } | {
                label: string;
                value: MentionOptions;
                default?: undefined;
            })[];
        };
    }, import("../../utils/types").SettingsChecks<{
        shouldMention: {
            type: OptionType.SELECT;
            description: string;
            options: ({
                label: string;
                value: MentionOptions;
                default: true;
            } | {
                label: string;
                value: MentionOptions;
                default?: undefined;
            })[];
        };
    }>, {}>;
    start(): void;
    stop(): void;
    flux: {
        DELETE_PENDING_REPLY(): void;
        MESSAGE_END_EDIT(): void;
        CHANNEL_SELECT(): void;
        MESSAGE_START_EDIT: typeof onStartEdit;
        CREATE_PENDING_REPLY: typeof onCreatePendingReply;
    };
} & Record<string, any>;
export default _default;
declare function onStartEdit({ messageId, _isQuickEdit }: any): void;
declare function onCreatePendingReply({ message, _isQuickReply }: {
    message: Message;
    _isQuickReply: boolean;
}): void;
