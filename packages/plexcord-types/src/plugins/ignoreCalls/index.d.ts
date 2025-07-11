import { NavContextMenuPatchCallback } from "../../api/ContextMenu";
import { OptionType } from "../../utils/types";
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
    settings: import("../../utils/types").DefinedSettings<{
        ignoreTimeout: {
            type: OptionType.SLIDER;
            description: string;
            markers: number[];
            default: number;
            stickToMarkers: false;
        };
    }, import("../../utils/types").SettingsChecks<{
        ignoreTimeout: {
            type: OptionType.SLIDER;
            description: string;
            markers: number[];
            default: number;
            stickToMarkers: false;
        };
    }>, {}>;
    flux: {
        CALL_UPDATE({ channelId, ringing, messageId, region }: {
            channelId: string;
            ringing: string[];
            messageId: string;
            region: string;
        }): Promise<void>;
    };
    renderIgnore(channel: any): import("react").JSX.Element;
    contextMenus: {
        "user-context": NavContextMenuPatchCallback;
        "gdm-context": NavContextMenuPatchCallback;
    };
} & Record<string, any>;
export default _default;
