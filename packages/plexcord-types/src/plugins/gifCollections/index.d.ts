import "./style.css";
import { NavContextMenuPatchCallback } from "../../api/ContextMenu";
import { OptionType } from "../../utils/types";
export declare const SortingOptions: {
    NAME: number;
    CREATION_DATE: number;
    MODIFIED_DATE: number;
};
export declare const settings: import("../../utils/types").DefinedSettings<{
    itemPrefix: {
        description: string;
        type: OptionType.STRING;
        default: string;
        onChange: (value: any) => void;
        restartNeeded: true;
    };
    collectionPrefix: {
        description: string;
        type: OptionType.STRING;
        default: string;
        onChange: (value: any) => void;
        restartNeeded: true;
    };
    onlyShowCollections: {
        description: string;
        type: OptionType.BOOLEAN;
        default: false;
        restartNeeded: true;
    };
    stopWarnings: {
        description: string;
        type: OptionType.BOOLEAN;
        default: false;
    };
    defaultEmptyCollectionImage: {
        description: string;
        type: OptionType.STRING;
        default: string;
    };
    collectionsSortType: {
        description: string;
        type: OptionType.NUMBER;
        default: number;
        hidden: true;
    };
    collectionsSortOrder: {
        description: string;
        type: OptionType.STRING;
        default: string;
        hidden: true;
    };
    collectionsSort: {
        type: OptionType.COMPONENT;
        description: string;
        component: () => import("react").JSX.Element;
    };
    importGifs: {
        type: OptionType.COMPONENT;
        description: string;
        component: () => import("react").JSX.Element;
    };
    exportGifs: {
        type: OptionType.COMPONENT;
        description: string;
        component: () => import("react").JSX.Element;
    };
    resetCollections: {
        type: OptionType.COMPONENT;
        description: string;
        component: () => import("react").JSX.Element;
    };
}, import("../../utils/types").SettingsChecks<{
    itemPrefix: {
        description: string;
        type: OptionType.STRING;
        default: string;
        onChange: (value: any) => void;
        restartNeeded: true;
    };
    collectionPrefix: {
        description: string;
        type: OptionType.STRING;
        default: string;
        onChange: (value: any) => void;
        restartNeeded: true;
    };
    onlyShowCollections: {
        description: string;
        type: OptionType.BOOLEAN;
        default: false;
        restartNeeded: true;
    };
    stopWarnings: {
        description: string;
        type: OptionType.BOOLEAN;
        default: false;
    };
    defaultEmptyCollectionImage: {
        description: string;
        type: OptionType.STRING;
        default: string;
    };
    collectionsSortType: {
        description: string;
        type: OptionType.NUMBER;
        default: number;
        hidden: true;
    };
    collectionsSortOrder: {
        description: string;
        type: OptionType.STRING;
        default: string;
        hidden: true;
    };
    collectionsSort: {
        type: OptionType.COMPONENT;
        description: string;
        component: () => import("react").JSX.Element;
    };
    importGifs: {
        type: OptionType.COMPONENT;
        description: string;
        component: () => import("react").JSX.Element;
    };
    exportGifs: {
        type: OptionType.COMPONENT;
        description: string;
        component: () => import("react").JSX.Element;
    };
    resetCollections: {
        type: OptionType.COMPONENT;
        description: string;
        component: () => import("react").JSX.Element;
    };
}>, {}>;
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
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
        itemPrefix: {
            description: string;
            type: OptionType.STRING;
            default: string;
            onChange: (value: any) => void;
            restartNeeded: true;
        };
        collectionPrefix: {
            description: string;
            type: OptionType.STRING;
            default: string;
            onChange: (value: any) => void;
            restartNeeded: true;
        };
        onlyShowCollections: {
            description: string;
            type: OptionType.BOOLEAN;
            default: false;
            restartNeeded: true;
        };
        stopWarnings: {
            description: string;
            type: OptionType.BOOLEAN;
            default: false;
        };
        defaultEmptyCollectionImage: {
            description: string;
            type: OptionType.STRING;
            default: string;
        };
        collectionsSortType: {
            description: string;
            type: OptionType.NUMBER;
            default: number;
            hidden: true;
        };
        collectionsSortOrder: {
            description: string;
            type: OptionType.STRING;
            default: string;
            hidden: true;
        };
        collectionsSort: {
            type: OptionType.COMPONENT;
            description: string;
            component: () => import("react").JSX.Element;
        };
        importGifs: {
            type: OptionType.COMPONENT;
            description: string;
            component: () => import("react").JSX.Element;
        };
        exportGifs: {
            type: OptionType.COMPONENT;
            description: string;
            component: () => import("react").JSX.Element;
        };
        resetCollections: {
            type: OptionType.COMPONENT;
            description: string;
            component: () => import("react").JSX.Element;
        };
    }, import("../../utils/types").SettingsChecks<{
        itemPrefix: {
            description: string;
            type: OptionType.STRING;
            default: string;
            onChange: (value: any) => void;
            restartNeeded: true;
        };
        collectionPrefix: {
            description: string;
            type: OptionType.STRING;
            default: string;
            onChange: (value: any) => void;
            restartNeeded: true;
        };
        onlyShowCollections: {
            description: string;
            type: OptionType.BOOLEAN;
            default: false;
            restartNeeded: true;
        };
        stopWarnings: {
            description: string;
            type: OptionType.BOOLEAN;
            default: false;
        };
        defaultEmptyCollectionImage: {
            description: string;
            type: OptionType.STRING;
            default: string;
        };
        collectionsSortType: {
            description: string;
            type: OptionType.NUMBER;
            default: number;
            hidden: true;
        };
        collectionsSortOrder: {
            description: string;
            type: OptionType.STRING;
            default: string;
            hidden: true;
        };
        collectionsSort: {
            type: OptionType.COMPONENT;
            description: string;
            component: () => import("react").JSX.Element;
        };
        importGifs: {
            type: OptionType.COMPONENT;
            description: string;
            component: () => import("react").JSX.Element;
        };
        exportGifs: {
            type: OptionType.COMPONENT;
            description: string;
            component: () => import("react").JSX.Element;
        };
        resetCollections: {
            type: OptionType.COMPONENT;
            description: string;
            component: () => import("react").JSX.Element;
        };
    }>, {}>;
    contextMenus: {
        message: NavContextMenuPatchCallback;
    };
    start(): void;
    readonly collections: any;
    sortedCollections(): import("./types").Collection[];
    renderContent(instance: any): void;
    hidePrefix(name: any): any;
    insertCollections(instance: any): void;
    shouldStopFetch(query: any): any;
    collectionContextMenu(e: any, instance: any): void | null;
} & Record<string, any>;
export default _default;
