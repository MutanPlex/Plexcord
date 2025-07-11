import { Message, User } from "discord-types/general";
import { Channel } from "discord-types/general/index.js";
declare const enum ReferencedMessageState {
    Loaded = 0,
    NotLoaded = 1,
    Deleted = 2
}
interface Reply {
    baseAuthor: User;
    baseMessage: Message;
    channel: Channel;
    referencedMessage: {
        state: ReferencedMessageState;
    };
    compact: boolean;
    isReplyAuthorBlocked: boolean;
}
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    patches: {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
    }[];
    setReplyStore(store: any): void;
    fetchReply(reply: Reply): Promise<void>;
} & Record<string, any>;
export default _default;
