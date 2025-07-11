import { NavContextMenuPatchCallback } from "../../api/ContextMenu";
import { OptionType } from "../../utils/types";
declare const _default: {
    name: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    description: string;
    tags: string[];
    dependencies: string[];
    settings: import("../../utils/types").DefinedSettings<{
        format: {
            type: OptionType.SELECT;
            description: string;
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
        imgSize: {
            type: OptionType.SELECT;
            description: string;
            options: {
                label: string;
                value: string;
                default: boolean;
            }[];
        };
    }, import("../../utils/types").SettingsChecks<{
        format: {
            type: OptionType.SELECT;
            description: string;
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
        imgSize: {
            type: OptionType.SELECT;
            description: string;
            options: {
                label: string;
                value: string;
                default: boolean;
            }[];
        };
    }>, {}>;
    openAvatar: (url: string) => void;
    openBanner: (url: string) => void;
    contextMenus: {
        "user-context": NavContextMenuPatchCallback;
        "guild-context": NavContextMenuPatchCallback;
        "gdm-context": NavContextMenuPatchCallback;
    };
    patches: ({
        find: string;
        replacement: ({
            match: RegExp;
            replace: string;
            noWarn: true;
        } | {
            match: RegExp;
            replace: string;
            noWarn?: undefined;
        })[];
        all: true;
    } | {
        find: string;
        replacement: {
            match: RegExp;
            replace: (_: string, rest: string, bannerSrc: string) => string;
        };
        all?: undefined;
    })[];
} & Record<string, any>;
export default _default;
