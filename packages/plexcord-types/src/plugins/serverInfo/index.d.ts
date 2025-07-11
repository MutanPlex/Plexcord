import { NavContextMenuPatchCallback } from "../../api/ContextMenu";
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    dependencies: string[];
    tags: string[];
    contextMenus: {
        "guild-context": NavContextMenuPatchCallback;
        "guild-header-popout": NavContextMenuPatchCallback;
    };
} & Record<string, any>;
export default _default;
