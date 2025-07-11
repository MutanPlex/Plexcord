import { MessageObject } from "../../api/MessageEvents";
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
            replace: (_: string, content: string) => string;
        };
    }[];
    unindent(str: string): string;
    unindentMsg(msg: MessageObject): void;
    onBeforeMessageSend(_: string, msg: MessageObject): any;
    onBeforeMessageEdit(_cid: string, _mid: string, msg: MessageObject): any;
} & Record<string, any>;
export default _default;
