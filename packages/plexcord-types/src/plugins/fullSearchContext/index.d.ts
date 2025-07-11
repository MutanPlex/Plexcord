import { NavContextMenuPatchCallback } from "../../api/ContextMenu";
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
    handleContextMenu(event: React.MouseEvent, message: Message): void;
    contextMenus: {
        "message-actions": NavContextMenuPatchCallback;
    };
} & Record<string, any>;
export default _default;
