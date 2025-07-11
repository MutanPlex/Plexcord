import { NavContextMenuPatchCallback } from "../../api/ContextMenu";
declare const _default: {
    name: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    description: string;
    patches: {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        }[];
    }[];
    contextMenus: {
        "user-context": NavContextMenuPatchCallback;
        "channel-context": NavContextMenuPatchCallback;
        "thread-context": NavContextMenuPatchCallback;
        "gdm-context": NavContextMenuPatchCallback;
    };
    renderSidebar: import("react").FunctionComponent<{
        width: number;
        stockSidebarOpen: any;
    }>;
} & Record<string, any>;
export default _default;
