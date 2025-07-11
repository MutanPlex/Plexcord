import { NavContextMenuPatchCallback } from "../../api/ContextMenu";
import { OptionType } from "../../utils/types";
declare enum userIDOptions {
    displayName = 0,
    userName = 1,
    userId = 2
}
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
    settings: import("../../utils/types").DefinedSettings<{
        userIdentifier: {
            type: OptionType.SELECT;
            description: string;
            options: ({
                label: string;
                value: userIDOptions;
                default: true;
            } | {
                label: string;
                value: userIDOptions;
                default?: undefined;
            })[];
        };
    }, import("../../utils/types").SettingsChecks<{
        userIdentifier: {
            type: OptionType.SELECT;
            description: string;
            options: ({
                label: string;
                value: userIDOptions;
                default: true;
            } | {
                label: string;
                value: userIDOptions;
                default?: undefined;
            })[];
        };
    }>, {}>;
} & Record<string, any>;
export default _default;
