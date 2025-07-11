import { NavContextMenuPatchCallback } from "../../api/ContextMenu";
import { OptionType } from "../../utils/types";
declare function applyDefaultSettings(guildId: string | null): void;
declare const _default: {
    name: string;
    description: string;
    tags: string[];
    authors: {
        name: string;
        id: bigint;
    }[];
    contextMenus: {
        "guild-context": NavContextMenuPatchCallback;
        "guild-header-popout": NavContextMenuPatchCallback;
    };
    patches: {
        find: string;
        replacement: {
            match: RegExp;
            replace: (m: string, guildId: string, lurker: string) => string;
        };
    }[];
    settings: import("../../utils/types").DefinedSettings<{
        guild: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
        };
        messages: {
            description: string;
            type: OptionType.SELECT;
            options: ({
                label: string;
                value: number;
                default?: undefined;
            } | {
                label: string;
                value: number;
                default: true;
            })[];
        };
        everyone: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
        };
        role: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
        };
        highlights: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
        };
        events: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
        };
        showAllChannels: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
        };
    }, import("../../utils/types").SettingsChecks<{
        guild: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
        };
        messages: {
            description: string;
            type: OptionType.SELECT;
            options: ({
                label: string;
                value: number;
                default?: undefined;
            } | {
                label: string;
                value: number;
                default: true;
            })[];
        };
        everyone: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
        };
        role: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
        };
        highlights: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
        };
        events: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
        };
        showAllChannels: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
        };
    }>, {}>;
    applyDefaultSettings: typeof applyDefaultSettings;
} & Record<string, any>;
export default _default;
