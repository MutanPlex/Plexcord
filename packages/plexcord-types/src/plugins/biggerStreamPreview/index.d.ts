import { NavContextMenuPatchCallback } from "../../api/ContextMenu";
import { Channel, User } from "discord-types/general";
import { ApplicationStream, Stream } from "./webpack/types/stores";
export interface UserContextProps {
    channel: Channel;
    channelSelected: boolean;
    className: string;
    config: {
        context: string;
    };
    context: string;
    onHeightUpdate: Function;
    position: string;
    target: HTMLElement;
    theme: string;
    user: User;
}
export interface StreamContextProps {
    appContext: string;
    className: string;
    config: {
        context: string;
    };
    context: string;
    exitFullscreen: Function;
    onHeightUpdate: Function;
    position: string;
    target: HTMLElement;
    stream: Stream;
    theme: string;
}
export declare const handleViewPreview: ({ guildId, channelId, ownerId }: ApplicationStream | Stream) => Promise<void>;
export declare const addViewStreamContext: NavContextMenuPatchCallback;
export declare const streamContextPatch: NavContextMenuPatchCallback;
export declare const userContextPatch: NavContextMenuPatchCallback;
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    contextMenus: {
        "user-context": NavContextMenuPatchCallback;
        "stream-context": NavContextMenuPatchCallback;
    };
} & Record<string, any>;
export default _default;
