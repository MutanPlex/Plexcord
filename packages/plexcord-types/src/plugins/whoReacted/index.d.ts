import { CustomEmoji } from "../../webpack/common/types";
import { Message } from "discord-types/general";
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
    setScrollObj(scroll: any): void;
    renderUsers(props: RootObject): import("react").JSX.Element | null;
    UsersComponent({ message, emoji, type }: RootObject): import("react").JSX.Element;
    reactions: any;
} & Record<string, any>;
export default _default;
interface RootObject {
    message: Message;
    readOnly: boolean;
    isLurking: boolean;
    isPendingMember: boolean;
    useChatFontScaling: boolean;
    emoji: CustomEmoji;
    count: number;
    burst_user_ids: any[];
    burst_count: number;
    burst_colors: any[];
    burst_me: boolean;
    me: boolean;
    type: number;
    hideEmoji: boolean;
    remainingBurstCurrency: number;
}
