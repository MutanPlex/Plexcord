import { NavContextMenuPatchCallback } from "../../api/ContextMenu";
declare const _default: {
    name: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    description: string;
    contextMenus: {
        "user-context": NavContextMenuPatchCallback;
    };
} & Record<string, any>;
export default _default;
