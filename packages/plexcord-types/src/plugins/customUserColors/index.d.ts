import "./styles.css";
import { NavContextMenuPatchCallback } from "../../api/ContextMenu";
import { OptionType } from "../../utils/types";
export declare const DATASTORE_KEY = "plexcord-customcolors";
export declare let colors: Record<string, string>;
export declare function getCustomColorString(userId: string | undefined, withHash?: boolean): string | undefined;
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    contextMenus: {
        "user-context": NavContextMenuPatchCallback;
    };
    settings: import("../../utils/types").DefinedSettings<{
        dmList: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        colorInServers: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
    }, import("../../utils/types").SettingsChecks<{
        dmList: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        colorInServers: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
    }>, {}>;
    requireSettingsMenu: () => Promise<boolean>;
    getCustomColorString: typeof getCustomColorString;
    patches: ({
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
        predicate: () => boolean;
        noWarn: true;
    } | {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
        predicate: () => boolean;
        noWarn?: undefined;
    } | {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        }[];
        predicate: () => boolean;
        noWarn?: undefined;
    } | {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
        predicate?: undefined;
        noWarn?: undefined;
    })[];
    wrapMessageColorProps(colorProps: {
        colorString: string;
        colorStrings?: Record<"primaryColor" | "secondaryColor" | "tertiaryColor", string>;
    }, context: any): {
        colorString: string;
        colorStrings?: Record<"primaryColor" | "secondaryColor" | "tertiaryColor", string>;
    } | {
        colorString: string | undefined;
        colorStrings: {
            primaryColor: string | undefined;
            secondaryColor: undefined;
            tertiaryColor: undefined;
        } | undefined;
    };
    colorDMList(context: any): string | undefined;
    colorIfServer(context: any): string | undefined;
    colorInReplyingTo(a: any): string | undefined;
} & Record<string, any>;
export default _default;
