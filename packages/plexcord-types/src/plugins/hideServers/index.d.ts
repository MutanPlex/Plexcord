import { NavContextMenuPatchCallback } from "../../api/ContextMenu";
type guildsNode = {
    type: "guild" | "folder";
    id: number | string;
    children: guildsNode[];
};
type qsResult = {
    type: "GUILD" | string;
    record?: {
        id?: string;
        guild_id?: string;
    };
};
export declare function addIndicator(): void;
export declare function removeIndicator(): void;
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    tags: string[];
    dependencies: string[];
    contextMenus: {
        "guild-context": NavContextMenuPatchCallback;
        "guild-header-popout": NavContextMenuPatchCallback;
    };
    patches: ({
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        }[];
    } | {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
    })[];
    settings: import("../../utils/types").DefinedSettings<{
        showIndicator: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
            default: true;
            onChange: (val: any) => void;
        };
        guildsList: {
            type: import("../../utils/types").OptionType.COMPONENT;
            description: string;
            component: () => import("react").JSX.Element;
        };
        resetHidden: {
            type: import("../../utils/types").OptionType.COMPONENT;
            description: string;
            component: () => import("react").JSX.Element;
        };
    }, import("../../utils/types").SettingsChecks<{
        showIndicator: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
            default: true;
            onChange: (val: any) => void;
        };
        guildsList: {
            type: import("../../utils/types").OptionType.COMPONENT;
            description: string;
            component: () => import("react").JSX.Element;
        };
        resetHidden: {
            type: import("../../utils/types").OptionType.COMPONENT;
            description: string;
            component: () => import("react").JSX.Element;
        };
    }>, {}>;
    useStore: () => void;
    start(): Promise<void>;
    stop(): Promise<void>;
    useFilteredGuilds(guilds: guildsNode[]): guildsNode[];
    filteredGuildResults(results: qsResult[]): qsResult[];
} & Record<string, any>;
export default _default;
