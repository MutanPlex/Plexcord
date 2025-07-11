import "./styles.css";
import { OptionType, StartAt } from "../../utils/types";
import { Channel } from "discord-types/general";
import { Category, categoryLen, getAllUncollapsedChannels, getSections, init, isPinned, usePinnedDms } from "./data";
interface ChannelComponentProps {
    children: React.ReactNode;
    channel: Channel;
    selected: boolean;
}
export declare const PrivateChannelSortStore: {
    getPrivateChannelIds: () => string[];
};
export declare let instance: any;
export declare const enum PinOrder {
    LastMessage = 0,
    Custom = 1
}
export declare const settings: import("../../utils/types").DefinedSettings<{
    pinOrder: {
        type: OptionType.SELECT;
        description: string;
        options: ({
            label: string;
            value: PinOrder;
            default: true;
        } | {
            label: string;
            value: PinOrder;
            default?: undefined;
        })[];
    };
    canCollapseDmSection: {
        type: OptionType.BOOLEAN;
        description: string;
        default: false;
    };
    dmSectionCollapsed: {
        type: OptionType.BOOLEAN;
        description: string;
        default: false;
        hidden: true;
    };
    userBasedCategoryList: {
        type: OptionType.CUSTOM;
        description: string;
        default: Record<string, Category[]>;
    };
}, import("../../utils/types").SettingsChecks<{
    pinOrder: {
        type: OptionType.SELECT;
        description: string;
        options: ({
            label: string;
            value: PinOrder;
            default: true;
        } | {
            label: string;
            value: PinOrder;
            default?: undefined;
        })[];
    };
    canCollapseDmSection: {
        type: OptionType.BOOLEAN;
        description: string;
        default: false;
    };
    dmSectionCollapsed: {
        type: OptionType.BOOLEAN;
        description: string;
        default: false;
        hidden: true;
    };
    userBasedCategoryList: {
        type: OptionType.CUSTOM;
        description: string;
        default: Record<string, Category[]>;
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
        pinOrder: {
            type: OptionType.SELECT;
            description: string;
            options: ({
                label: string;
                value: PinOrder;
                default: true;
            } | {
                label: string;
                value: PinOrder;
                default?: undefined;
            })[];
        };
        canCollapseDmSection: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
        };
        dmSectionCollapsed: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
            hidden: true;
        };
        userBasedCategoryList: {
            type: OptionType.CUSTOM;
            description: string;
            default: Record<string, Category[]>;
        };
    }, import("../../utils/types").SettingsChecks<{
        pinOrder: {
            type: OptionType.SELECT;
            description: string;
            options: ({
                label: string;
                value: PinOrder;
                default: true;
            } | {
                label: string;
                value: PinOrder;
                default?: undefined;
            })[];
        };
        canCollapseDmSection: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
        };
        dmSectionCollapsed: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
            hidden: true;
        };
        userBasedCategoryList: {
            type: OptionType.CUSTOM;
            description: string;
            default: Record<string, Category[]>;
        };
    }>, {}>;
    contextMenus: {
        "gdm-context": import("../../api/ContextMenu").NavContextMenuPatchCallback;
        "user-context": import("../../api/ContextMenu").NavContextMenuPatchCallback;
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
    sections: number[] | null;
    _instance: any;
    startAt: StartAt.WebpackReady;
    start: typeof init;
    flux: {
        CONNECTION_OPEN: typeof init;
    };
    usePinnedDms: typeof usePinnedDms;
    isPinned: typeof isPinned;
    categoryLen: typeof categoryLen;
    getSections: typeof getSections;
    getAllUncollapsedChannels: typeof getAllUncollapsedChannels;
    requireSettingsMenu: () => Promise<boolean>;
    makeProps(instance: any, { sections }: {
        sections: number[];
    }): {
        sections: number[];
        chunkSize: number;
    };
    makeSpanProps(): {
        onClick: () => void;
        role: string;
        style: {
            cursor: string;
        };
    } | undefined;
    getChunkSize(): number;
    isCategoryIndex(sectionIndex: number): boolean | null;
    isChannelIndex(sectionIndex: number, channelIndex: number): string | boolean | null;
    collapseDMList(): void;
    isChannelHidden(categoryIndex: number, channelIndex: number): boolean | undefined;
    getScrollOffset(channelId: string, rowHeight: number, padding: number, preRenderedChildren: number, originalOffset: number): number;
    renderCategory: import("react").FunctionComponent<{
        section: number;
    }>;
    renderChannel(sectionIndex: number, index: number, ChannelComponent: React.ComponentType<ChannelComponentProps>): import("react").FunctionComponent<any>;
    getChannel(sectionIndex: number, index: number, channels: Record<string, Channel>): {
        channel: null;
        category: null;
    } | {
        channel: Channel;
        category: Category;
    };
    getCategoryChannels(category: Category): string[];
} & Record<string, any>;
export default _default;
