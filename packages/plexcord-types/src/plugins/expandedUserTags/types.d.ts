import type { Permissions } from "../../webpack/common/types";
import type { Channel, Message, User } from "discord-types/general";
import { tags } from "./consts";
export type ITag = {
    name: string;
    displayName: string;
    description: string;
} & ({
    permissions: Permissions[];
} | {
    condition?(message: Message | null, user: User, channel: Channel): boolean;
});
export interface TagSetting {
    text: string;
    showInChat: boolean;
    showInNotChat: boolean;
}
export type TagSettings = {
    [k in typeof tags[number]["name"]]: TagSetting;
};
