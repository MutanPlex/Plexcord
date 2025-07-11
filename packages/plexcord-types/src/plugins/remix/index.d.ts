import { NavContextMenuPatchCallback } from "../../api/ContextMenu";
import { OptionType } from "../../utils/types";
export declare function sendRemix(blob: Blob): void;
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    settings: import("../../utils/types").DefinedSettings<{
        remixTag: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
        };
    }, import("../../utils/types").SettingsChecks<{
        remixTag: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
        };
    }>, {}>;
    contextMenus: {
        "channel-attach": NavContextMenuPatchCallback;
        message: NavContextMenuPatchCallback;
    };
    start(): Promise<void>;
    stop(): void;
} & Record<string, any>;
export default _default;
