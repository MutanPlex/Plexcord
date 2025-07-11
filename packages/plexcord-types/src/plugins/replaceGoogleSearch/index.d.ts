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
        customEngineName: {
            description: string;
            type: OptionType.STRING;
            placeholder: string;
        };
        customEngineURL: {
            description: string;
            type: OptionType.STRING;
            placeholder: string;
        };
    }, import("../../utils/types").SettingsChecks<{
        customEngineName: {
            description: string;
            type: OptionType.STRING;
            placeholder: string;
        };
        customEngineURL: {
            description: string;
            type: OptionType.STRING;
            placeholder: string;
        };
    }>, {}>;
    contextMenus: {
        message: NavContextMenuPatchCallback;
    };
} & Record<string, any>;
export default _default;
