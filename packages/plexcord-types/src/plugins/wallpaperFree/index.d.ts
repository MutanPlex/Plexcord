import "./styles.css";
import { OptionType } from "../../utils/types";
import { Channel } from "discord-types/general";
import { GlobalDefaultComponent, TipsComponent } from "./components/util";
export declare const settings: import("../../utils/types").DefinedSettings<{
    globalDefault: {
        description: string;
        type: OptionType.COMPONENT;
        component: typeof GlobalDefaultComponent;
    };
    stylingTips: {
        description: string;
        type: OptionType.COMPONENT;
        component: typeof TipsComponent;
    };
}, import("../../utils/types").SettingsChecks<{
    globalDefault: {
        description: string;
        type: OptionType.COMPONENT;
        component: typeof GlobalDefaultComponent;
    };
    stylingTips: {
        description: string;
        type: OptionType.COMPONENT;
        component: typeof TipsComponent;
    };
}>, {}>;
declare const _default: {
    name: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    description: string;
    patches: {
        find: string;
        group: true;
        replacement: {
            match: RegExp;
            replace: string;
        }[];
    }[];
    settings: import("../../utils/types").DefinedSettings<{
        globalDefault: {
            description: string;
            type: OptionType.COMPONENT;
            component: typeof GlobalDefaultComponent;
        };
        stylingTips: {
            description: string;
            type: OptionType.COMPONENT;
            component: typeof TipsComponent;
        };
    }, import("../../utils/types").SettingsChecks<{
        globalDefault: {
            description: string;
            type: OptionType.COMPONENT;
            component: typeof GlobalDefaultComponent;
        };
        stylingTips: {
            description: string;
            type: OptionType.COMPONENT;
            component: typeof TipsComponent;
        };
    }>, {}>;
    contextMenus: {
        "user-context": import("../../api/ContextMenu").NavContextMenuPatchCallback;
        "channel-context": import("../../api/ContextMenu").NavContextMenuPatchCallback;
        "thread-context": import("../../api/ContextMenu").NavContextMenuPatchCallback;
        "guild-context": import("../../api/ContextMenu").NavContextMenuPatchCallback;
        "gdm-context": import("../../api/ContextMenu").NavContextMenuPatchCallback;
    };
    Wallpaper({ url }: {
        url: string;
    }): import("react").JSX.Element | null;
    WallpaperState(channel: Channel): string | undefined;
} & Record<string, any>;
export default _default;
