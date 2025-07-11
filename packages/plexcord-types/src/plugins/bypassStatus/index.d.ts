import { type NavContextMenuPatchCallback } from "../../api/ContextMenu";
import type { Message } from "discord-types/general";
interface IMessageCreate {
    channelId: string;
    guildId: string;
    message: Message;
}
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    flux: {
        MESSAGE_CREATE({ message, guildId, channelId }: IMessageCreate): Promise<void>;
    };
    settings: any;
    contextMenus: {
        "guild-context": NavContextMenuPatchCallback;
        "channel-context": NavContextMenuPatchCallback;
        "user-context": NavContextMenuPatchCallback;
    };
} & Record<string, any>;
export default _default;
