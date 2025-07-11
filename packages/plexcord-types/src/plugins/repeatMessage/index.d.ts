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
    };
    start(): void;
    stop(): void;
} & Record<string, any>;
export default _default;
