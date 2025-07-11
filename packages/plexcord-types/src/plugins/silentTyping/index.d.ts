import { ChatBarButtonFactory } from "../../api/ChatButtons";
import { ApplicationCommandInputType, ApplicationCommandOptionType } from "../../api/Commands";
import { NavContextMenuPatchCallback } from "../../api/ContextMenu";
import { OptionType } from "../../utils/types";
declare const _default: {
    name: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    description: string;
    settings: import("../../utils/types").DefinedSettings<{
        showIcon: {
            type: OptionType.BOOLEAN;
            default: false;
            description: string;
            restartNeeded: true;
        };
        contextMenu: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        isEnabled: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
    }, import("../../utils/types").SettingsChecks<{
        showIcon: {
            type: OptionType.BOOLEAN;
            default: false;
            description: string;
            restartNeeded: true;
        };
        contextMenu: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        isEnabled: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
    }>, {}>;
    contextMenus: {
        "textarea-context": NavContextMenuPatchCallback;
    };
    patches: {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
    }[];
    commands: {
        name: string;
        description: string;
        inputType: ApplicationCommandInputType.BUILT_IN;
        options: {
            name: string;
            description: string;
            required: false;
            type: ApplicationCommandOptionType.BOOLEAN;
        }[];
        execute: (args: import("../../api/Commands").Argument[], ctx: import("../../api/Commands").CommandContext) => Promise<void>;
    }[];
    startTyping(channelId: string): Promise<void>;
    renderChatBarButton: ChatBarButtonFactory;
} & Record<string, any>;
export default _default;
