import "./style.css";
import { OptionType } from "../../utils/types";
import { ReactNode } from "react";
declare enum FolderIconDisplay {
    Never = 0,
    Always = 1,
    MoreThanOneFolderExpanded = 2
}
export declare const ExpandedGuildFolderStore: any;
declare function closeFolders(): void;
export declare const settings: import("../../utils/types").DefinedSettings<{
    sidebar: {
        type: OptionType.BOOLEAN;
        description: string;
        restartNeeded: true;
        default: true;
    };
    sidebarAnim: {
        type: OptionType.BOOLEAN;
        description: string;
        default: true;
    };
    closeAllFolders: {
        type: OptionType.BOOLEAN;
        description: string;
        default: false;
    };
    closeAllHomeButton: {
        type: OptionType.BOOLEAN;
        description: string;
        restartNeeded: true;
        default: false;
    };
    closeOthers: {
        type: OptionType.BOOLEAN;
        description: string;
        default: false;
    };
    closeServerFolder: {
        type: OptionType.BOOLEAN;
        description: string;
        default: false;
    };
    forceOpen: {
        type: OptionType.BOOLEAN;
        description: string;
        default: false;
    };
    keepIcons: {
        type: OptionType.BOOLEAN;
        description: string;
        restartNeeded: true;
        default: false;
    };
    showFolderIcon: {
        type: OptionType.SELECT;
        description: string;
        options: ({
            label: string;
            value: FolderIconDisplay;
            default?: undefined;
        } | {
            label: string;
            value: FolderIconDisplay;
            default: true;
        })[];
        restartNeeded: true;
    };
}, import("../../utils/types").SettingsChecks<{
    sidebar: {
        type: OptionType.BOOLEAN;
        description: string;
        restartNeeded: true;
        default: true;
    };
    sidebarAnim: {
        type: OptionType.BOOLEAN;
        description: string;
        default: true;
    };
    closeAllFolders: {
        type: OptionType.BOOLEAN;
        description: string;
        default: false;
    };
    closeAllHomeButton: {
        type: OptionType.BOOLEAN;
        description: string;
        restartNeeded: true;
        default: false;
    };
    closeOthers: {
        type: OptionType.BOOLEAN;
        description: string;
        default: false;
    };
    closeServerFolder: {
        type: OptionType.BOOLEAN;
        description: string;
        default: false;
    };
    forceOpen: {
        type: OptionType.BOOLEAN;
        description: string;
        default: false;
    };
    keepIcons: {
        type: OptionType.BOOLEAN;
        description: string;
        restartNeeded: true;
        default: false;
    };
    showFolderIcon: {
        type: OptionType.SELECT;
        description: string;
        options: ({
            label: string;
            value: FolderIconDisplay;
            default?: undefined;
        } | {
            label: string;
            value: FolderIconDisplay;
            default: true;
        })[];
        restartNeeded: true;
    };
}>, {}>;
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    settings: import("../../utils/types").DefinedSettings<{
        sidebar: {
            type: OptionType.BOOLEAN;
            description: string;
            restartNeeded: true;
            default: true;
        };
        sidebarAnim: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        closeAllFolders: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
        };
        closeAllHomeButton: {
            type: OptionType.BOOLEAN;
            description: string;
            restartNeeded: true;
            default: false;
        };
        closeOthers: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
        };
        closeServerFolder: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
        };
        forceOpen: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
        };
        keepIcons: {
            type: OptionType.BOOLEAN;
            description: string;
            restartNeeded: true;
            default: false;
        };
        showFolderIcon: {
            type: OptionType.SELECT;
            description: string;
            options: ({
                label: string;
                value: FolderIconDisplay;
                default?: undefined;
            } | {
                label: string;
                value: FolderIconDisplay;
                default: true;
            })[];
            restartNeeded: true;
        };
    }, import("../../utils/types").SettingsChecks<{
        sidebar: {
            type: OptionType.BOOLEAN;
            description: string;
            restartNeeded: true;
            default: true;
        };
        sidebarAnim: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        closeAllFolders: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
        };
        closeAllHomeButton: {
            type: OptionType.BOOLEAN;
            description: string;
            restartNeeded: true;
            default: false;
        };
        closeOthers: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
        };
        closeServerFolder: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
        };
        forceOpen: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
        };
        keepIcons: {
            type: OptionType.BOOLEAN;
            description: string;
            restartNeeded: true;
            default: false;
        };
        showFolderIcon: {
            type: OptionType.SELECT;
            description: string;
            options: ({
                label: string;
                value: FolderIconDisplay;
                default?: undefined;
            } | {
                label: string;
                value: FolderIconDisplay;
                default: true;
            })[];
            restartNeeded: true;
        };
    }>, {}>;
    patches: ({
        find: string;
        predicate: () => boolean;
        replacement: {
            match: RegExp;
            replace: string;
        }[];
        group?: undefined;
    } | {
        find: string;
        predicate: () => boolean;
        replacement: {
            match: RegExp;
            replace: (_: string, rest: string, ExpandedGuildFolderStore: string) => string;
        }[];
        group?: undefined;
    } | {
        find: string;
        predicate: () => boolean;
        replacement: ({
            predicate: () => boolean;
            match: RegExp;
            replace: (_: string, isExpanded: string) => string;
        } | {
            predicate: () => boolean;
            match: RegExp;
            replace: string;
        })[];
        group?: undefined;
    } | {
        find: string;
        predicate: () => boolean;
        group: true;
        replacement: ({
            match: RegExp;
            replace: (m: string, conditions: string, props: string) => string;
        } | {
            match: RegExp;
            replace: string;
        })[];
    } | {
        find: string;
        predicate: () => boolean;
        replacement: {
            match: RegExp;
            replace: string;
        };
        group?: undefined;
    })[];
    flux: {
        CHANNEL_SELECT(data: any): void;
        TOGGLE_GUILD_FOLDER_EXPAND(data: any): void;
        LOGOUT(): void;
    };
    FolderSideBar: import("react").FunctionComponent<any>;
    closeFolders: typeof closeFolders;
    wrapGuildNodeComponent(node: any, originalComponent: () => ReactNode, isBetterFolders: boolean, expandedFolderIds?: Set<any>): string | number | bigint | boolean | Iterable<ReactNode> | Promise<string | number | bigint | boolean | import("react").ReactPortal | import("react").ReactElement<unknown, string | import("react").JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | import("react").JSX.Element | null | undefined;
    makeGuildsBarGuildListFilter(isBetterFolders: boolean): (child: any) => boolean;
    makeGuildsBarSidebarFilter(isBetterFolders: boolean): (child: any) => boolean;
    shouldShowFolderIconAndBackground(isBetterFolders: boolean, expandedFolderIds?: Set<any>): boolean;
    shouldShowTransition(props: any): boolean;
    shouldRenderContents(props: any, isExpanded: boolean): boolean;
} & Record<string, any>;
export default _default;
