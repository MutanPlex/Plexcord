import { ChatBarButtonFactory } from "../../api/ChatButtons";
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    start: () => Map<string, ChatBarButtonFactory>;
    stop: () => boolean;
} & Record<string, any>;
export default _default;
