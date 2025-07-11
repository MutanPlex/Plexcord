import { NavContextMenuPatchCallback } from "../../api/ContextMenu";
import { OptionType } from "../../utils/types";
import type { VoiceState } from "../../webpack/common/types";
export declare const settings: import("../../utils/types").DefinedSettings<{
    executeOnFollow: {
        type: OptionType.BOOLEAN;
        description: string;
        restartNeeded: false;
        default: true;
    };
    onlyManualTrigger: {
        type: OptionType.BOOLEAN;
        description: string;
        restartNeeded: false;
        default: false;
    };
    followLeave: {
        type: OptionType.BOOLEAN;
        description: string;
        restartNeeded: false;
        default: false;
    };
    autoMoveBack: {
        type: OptionType.BOOLEAN;
        description: string;
        restartNeeded: false;
        default: false;
    };
    followUserId: {
        type: OptionType.STRING;
        description: string;
        restartNeeded: false;
        hidden: true;
        default: string;
    };
    channelFull: {
        type: OptionType.BOOLEAN;
        description: string;
        restartNeeded: false;
        default: true;
    };
}, import("../../utils/types").SettingsChecks<{
    executeOnFollow: {
        type: OptionType.BOOLEAN;
        description: string;
        restartNeeded: false;
        default: true;
    };
    onlyManualTrigger: {
        type: OptionType.BOOLEAN;
        description: string;
        restartNeeded: false;
        default: false;
    };
    followLeave: {
        type: OptionType.BOOLEAN;
        description: string;
        restartNeeded: false;
        default: false;
    };
    autoMoveBack: {
        type: OptionType.BOOLEAN;
        description: string;
        restartNeeded: false;
        default: false;
    };
    followUserId: {
        type: OptionType.STRING;
        description: string;
        restartNeeded: false;
        hidden: true;
        default: string;
    };
    channelFull: {
        type: OptionType.BOOLEAN;
        description: string;
        restartNeeded: false;
        default: true;
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
        executeOnFollow: {
            type: OptionType.BOOLEAN;
            description: string;
            restartNeeded: false;
            default: true;
        };
        onlyManualTrigger: {
            type: OptionType.BOOLEAN;
            description: string;
            restartNeeded: false;
            default: false;
        };
        followLeave: {
            type: OptionType.BOOLEAN;
            description: string;
            restartNeeded: false;
            default: false;
        };
        autoMoveBack: {
            type: OptionType.BOOLEAN;
            description: string;
            restartNeeded: false;
            default: false;
        };
        followUserId: {
            type: OptionType.STRING;
            description: string;
            restartNeeded: false;
            hidden: true;
            default: string;
        };
        channelFull: {
            type: OptionType.BOOLEAN;
            description: string;
            restartNeeded: false;
            default: true;
        };
    }, import("../../utils/types").SettingsChecks<{
        executeOnFollow: {
            type: OptionType.BOOLEAN;
            description: string;
            restartNeeded: false;
            default: true;
        };
        onlyManualTrigger: {
            type: OptionType.BOOLEAN;
            description: string;
            restartNeeded: false;
            default: false;
        };
        followLeave: {
            type: OptionType.BOOLEAN;
            description: string;
            restartNeeded: false;
            default: false;
        };
        autoMoveBack: {
            type: OptionType.BOOLEAN;
            description: string;
            restartNeeded: false;
            default: false;
        };
        followUserId: {
            type: OptionType.STRING;
            description: string;
            restartNeeded: false;
            hidden: true;
            default: string;
        };
        channelFull: {
            type: OptionType.BOOLEAN;
            description: string;
            restartNeeded: false;
            default: true;
        };
    }>, {}>;
    patches: {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
    }[];
    contextMenus: {
        "user-context": NavContextMenuPatchCallback;
    };
    flux: {
        VOICE_STATE_UPDATES({ voiceStates }: {
            voiceStates: VoiceState[];
        }): void;
    };
    FollowIndicator(): import("react").JSX.Element | null;
    addIconToToolBar(e: {
        toolbar: React.ReactNode[] | React.ReactNode;
    }): number | undefined;
} & Record<string, any>;
export default _default;
