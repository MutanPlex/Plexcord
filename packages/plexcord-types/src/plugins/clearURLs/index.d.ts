import { MessageObject } from "../../api/MessageEvents";
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    start(): void;
    onBeforeMessageSend(_: string, msg: MessageObject): any;
    onBeforeMessageEdit(_cid: string, _mid: string, msg: MessageObject): any;
    escapeRegExp(str: string): string;
    createRules(): void;
    removeParam(rule: string | RegExp, param: string, parent: URLSearchParams): void;
    replacer(match: string): string;
    onSend(msg: MessageObject): void;
} & Record<string, any>;
export default _default;
