import { NavContextMenuPatchCallback } from "../../api/ContextMenu";
import { OptionType } from "../../utils/types";
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    settings: import("../../utils/types").DefinedSettings<{
        waitAfter: {
            type: OptionType.SLIDER;
            description: string;
            default: number;
            markers: number[];
        };
        waitSeconds: {
            type: OptionType.SLIDER;
            description: string;
            default: number;
            markers: number[];
        };
    }, import("../../utils/types").SettingsChecks<{
        waitAfter: {
            type: OptionType.SLIDER;
            description: string;
            default: number;
            markers: number[];
        };
        waitSeconds: {
            type: OptionType.SLIDER;
            description: string;
            default: number;
            markers: number[];
        };
    }>, {}>;
    contextMenus: {
        "channel-context": NavContextMenuPatchCallback;
    };
} & Record<string, any>;
export default _default;
