import "./style.css";
import { NavContextMenuPatchCallback } from "../../api/ContextMenu";
export declare const MessageType: any;
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    dependencies: string[];
    patches: {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
    }[];
    toolboxActions: {
        "Open Notes"(): Promise<void>;
    };
    contextMenus: {
        message: NavContextMenuPatchCallback;
    };
    toolbarAction(e: any): any;
    start(): Promise<void>;
    stop(): Promise<void>;
} & Record<string, any>;
export default _default;
