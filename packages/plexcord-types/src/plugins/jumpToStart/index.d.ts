import { NavContextMenuPatchCallback } from "../../api/ContextMenu";
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    contextMenus: {
        "channel-context": NavContextMenuPatchCallback;
        "user-context": NavContextMenuPatchCallback;
        "thread-context": NavContextMenuPatchCallback;
    };
} & Record<string, any>;
export default _default;
