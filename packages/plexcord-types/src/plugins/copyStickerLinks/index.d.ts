import { NavContextMenuPatchCallback } from "../../api/ContextMenu";
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    contextMenus: {
        message: NavContextMenuPatchCallback;
        "expression-picker": NavContextMenuPatchCallback;
    };
} & Record<string, any>;
export default _default;
