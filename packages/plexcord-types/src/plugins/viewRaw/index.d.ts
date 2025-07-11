import { NavContextMenuPatchCallback } from "../../api/ContextMenu";
import { OptionType } from "../../utils/types";
import { Message } from "discord-types/general";
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    settings: import("../../utils/types").DefinedSettings<{
        clickMethod: {
            description: string;
            type: OptionType.SELECT;
            options: ({
                label: string;
                value: string;
                default: true;
            } | {
                label: string;
                value: string;
                default?: undefined;
            })[];
        };
    }, import("../../utils/types").SettingsChecks<{
        clickMethod: {
            description: string;
            type: OptionType.SELECT;
            options: ({
                label: string;
                value: string;
                default: true;
            } | {
                label: string;
                value: string;
                default?: undefined;
            })[];
        };
    }>, {}>;
    contextMenus: {
        "guild-context": NavContextMenuPatchCallback;
        "guild-settings-role-context": NavContextMenuPatchCallback;
        "channel-context": NavContextMenuPatchCallback;
        "thread-context": NavContextMenuPatchCallback;
        "gdm-context": NavContextMenuPatchCallback;
        "user-context": NavContextMenuPatchCallback;
        "dev-context": NavContextMenuPatchCallback;
    };
    renderMessagePopoverButton(msg: Message): {
        label: string;
        icon: () => import("react").JSX.Element;
        message: Message;
        channel: import("discord-types/general").Channel;
        onClick: () => void;
        onContextMenu: (e: any) => void;
    };
} & Record<string, any>;
export default _default;
