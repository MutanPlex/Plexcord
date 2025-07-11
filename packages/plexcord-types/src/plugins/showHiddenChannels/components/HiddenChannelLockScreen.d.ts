import type { Channel } from "discord-types/general";
declare const enum SortOrderTypes {
    LATEST_ACTIVITY = 0,
    CREATION_DATE = 1
}
declare const enum ForumLayoutTypes {
    DEFAULT = 0,
    LIST = 1,
    GRID = 2
}
interface DefaultReaction {
    emojiId: string | null;
    emojiName: string | null;
}
interface Tag {
    id: string;
    name: string;
    emojiId: string | null;
    emojiName: string | null;
    moderated: boolean;
}
interface ExtendedChannel extends Channel {
    defaultThreadRateLimitPerUser?: number;
    defaultSortOrder?: SortOrderTypes | null;
    defaultForumLayout?: ForumLayoutTypes;
    defaultReactionEmoji?: DefaultReaction | null;
    availableTags?: Array<Tag>;
}
declare const _default: import("react").FunctionComponent<{
    channel: ExtendedChannel;
}>;
export default _default;
