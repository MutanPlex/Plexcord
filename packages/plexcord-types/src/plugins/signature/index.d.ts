import { ApplicationCommandInputType, ApplicationCommandOptionType } from "../../api/Commands";
import { NavContextMenuPatchCallback } from "../../api/ContextMenu";
import { OptionType } from "../../utils/types";
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    dependencies: string[];
    start: () => void;
    stop: () => void;
    settings: import("../../utils/types").DefinedSettings<{
        name: {
            type: OptionType.STRING;
            description: string;
            default: string;
        };
        textHeader: {
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
        showIcon: {
            type: OptionType.BOOLEAN;
            default: true;
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
        name: {
            type: OptionType.STRING;
            description: string;
            default: string;
        };
        textHeader: {
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
        showIcon: {
            type: OptionType.BOOLEAN;
            default: true;
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
} & Record<string, any>;
export default _default;
