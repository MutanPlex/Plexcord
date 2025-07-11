import "./style.css";
import { NavContextMenuPatchCallback } from "../../api/ContextMenu";
import { Message } from "discord-types/general";
import { JSX } from "react";
import { BasicChannelTabsProps } from "./util";
import * as ChannelTabsUtils from "./util";
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    dependencies: string[];
    contextMenus: {
        "channel-mention-context": NavContextMenuPatchCallback;
        "channel-context": NavContextMenuPatchCallback;
    };
    patches: {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
    }[];
    settings: import("../../utils/types").DefinedSettings<{
        onStartup: {
            type: import("../../utils/types").OptionType.SELECT;
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
        tabSet: {
            component: typeof import("./components/ChannelTabsContainer").ChannelTabsPreview;
            description: string;
            type: import("../../utils/types").OptionType.COMPONENT;
            default: {};
        };
        noPomeloNames: {
            description: string;
            type: import("../../utils/types").OptionType.BOOLEAN;
            default: false;
        };
        showStatusIndicators: {
            description: string;
            type: import("../../utils/types").OptionType.BOOLEAN;
            default: true;
        };
        showBookmarkBar: {
            description: string;
            type: import("../../utils/types").OptionType.BOOLEAN;
            default: true;
        };
        bookmarkNotificationDot: {
            description: string;
            type: import("../../utils/types").OptionType.BOOLEAN;
            default: true;
        };
        widerTabsAndBookmarks: {
            description: string;
            type: import("../../utils/types").OptionType.BOOLEAN;
            default: false;
            restartNeeded: false;
        };
        switchToExistingTab: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
            default: false;
            restartNeeded: false;
        };
        createNewTabIfNotExists: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
            default: false;
            restartNeeded: false;
        };
        enableRapidNavigation: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
            default: false;
            restartNeeded: false;
        };
        rapidNavigationThreshold: {
            type: import("../../utils/types").OptionType.SLIDER;
            description: string;
            markers: number[];
            default: number;
            stickToMarkers: false;
        };
    }, import("../../utils/types").SettingsChecks<{
        onStartup: {
            type: import("../../utils/types").OptionType.SELECT;
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
        tabSet: {
            component: typeof import("./components/ChannelTabsContainer").ChannelTabsPreview;
            description: string;
            type: import("../../utils/types").OptionType.COMPONENT;
            default: {};
        };
        noPomeloNames: {
            description: string;
            type: import("../../utils/types").OptionType.BOOLEAN;
            default: false;
        };
        showStatusIndicators: {
            description: string;
            type: import("../../utils/types").OptionType.BOOLEAN;
            default: true;
        };
        showBookmarkBar: {
            description: string;
            type: import("../../utils/types").OptionType.BOOLEAN;
            default: true;
        };
        bookmarkNotificationDot: {
            description: string;
            type: import("../../utils/types").OptionType.BOOLEAN;
            default: true;
        };
        widerTabsAndBookmarks: {
            description: string;
            type: import("../../utils/types").OptionType.BOOLEAN;
            default: false;
            restartNeeded: false;
        };
        switchToExistingTab: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
            default: false;
            restartNeeded: false;
        };
        createNewTabIfNotExists: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
            default: false;
            restartNeeded: false;
        };
        enableRapidNavigation: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
            default: false;
            restartNeeded: false;
        };
        rapidNavigationThreshold: {
            type: import("../../utils/types").OptionType.SLIDER;
            description: string;
            markers: number[];
            default: number;
            stickToMarkers: false;
        };
    }>, {}>;
    containerHeight: number;
    render({ currentChannel, children }: {
        currentChannel: BasicChannelTabsProps;
        children: JSX.Element;
    }): JSX.Element;
    open(message: Message): void;
    handleNavigation(guildId: string, channelId: string): void;
    util: typeof ChannelTabsUtils;
} & Record<string, any>;
export default _default;
