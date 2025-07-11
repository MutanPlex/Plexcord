import "./style.css";
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
        apiKey: {
            type: OptionType.STRING;
            description: string;
        };
        showUserInfo: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        showFriends: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        showLastSeen: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        showGuildStats: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        showGuilds: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        showWhereNow: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        showPunishment: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        showRawData: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
        };
    }, import("../../utils/types").SettingsChecks<{
        apiKey: {
            type: OptionType.STRING;
            description: string;
        };
        showUserInfo: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        showFriends: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        showLastSeen: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        showGuildStats: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        showGuilds: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        showWhereNow: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        showPunishment: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        showRawData: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
        };
    }>, {}>;
    contextMenus: {
        "user-context": NavContextMenuPatchCallback;
    };
} & Record<string, any>;
export default _default;
