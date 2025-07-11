import "./style.css";
import type { Message } from "discord-types/general";
declare const enum ReferencedMessageState {
    LOADED = 0,
    NOT_LOADED = 1,
    DELETED = 2
}
type ReferencedMessage = {
    state: ReferencedMessageState.LOADED;
    message: Message;
} | {
    state: ReferencedMessageState.NOT_LOADED | ReferencedMessageState.DELETED;
};
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
    ReplyTimestamp: import("react").FunctionComponent<{
        referencedMessage: ReferencedMessage;
        baseMessage: Message;
    }>;
} & Record<string, any>;
export default _default;
