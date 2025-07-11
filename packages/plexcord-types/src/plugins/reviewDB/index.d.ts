import "./style.css";
import { NavContextMenuPatchCallback } from "../../api/ContextMenu";
import { User } from "discord-types/general";
import { initAuth } from "./auth";
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    settings: import("../../utils/types").DefinedSettings<{
        authorize: {
            type: import("../../utils/types").OptionType.COMPONENT;
            component: () => import("react").JSX.Element;
        };
        notifyReviews: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        showWarning: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        hideTimestamps: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
            default: false;
        };
        hideBlockedUsers: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        buttons: {
            type: import("../../utils/types").OptionType.COMPONENT;
            component: () => import("react").JSX.Element;
        };
    }, import("../../utils/types").SettingsChecks<{
        authorize: {
            type: import("../../utils/types").OptionType.COMPONENT;
            component: () => import("react").JSX.Element;
        };
        notifyReviews: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        showWarning: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        hideTimestamps: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
            default: false;
        };
        hideBlockedUsers: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        buttons: {
            type: import("../../utils/types").OptionType.COMPONENT;
            component: () => import("react").JSX.Element;
        };
    }>, {
        lastReviewId?: number;
        reviewsDropdownState?: boolean;
    }>;
    contextMenus: {
        "guild-header-popout": NavContextMenuPatchCallback;
        "guild-context": NavContextMenuPatchCallback;
        "user-context": NavContextMenuPatchCallback;
        "user-profile-actions": NavContextMenuPatchCallback;
        "user-profile-overflow-menu": NavContextMenuPatchCallback;
    };
    patches: {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
    }[];
    flux: {
        CONNECTION_OPEN: typeof initAuth;
    };
    start(): Promise<void>;
    BiteSizeReviewsButton: import("react").FunctionComponent<{
        user: User;
    }>;
} & Record<string, any>;
export default _default;
