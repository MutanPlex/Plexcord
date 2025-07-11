import { ChatBarButtonFactory } from "../../api/ChatButtons";
import { StartAt } from "../../utils/types";
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    startAt: StartAt.Init;
    renderChatBarButton: ChatBarButtonFactory;
} & Record<string, any>;
export default _default;
