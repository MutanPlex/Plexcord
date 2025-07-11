import { NavContextMenuPatchCallback } from "../../api/ContextMenu";
import { OptionType } from "../../utils/types";
import { User } from "discord-types/general";
export declare const cl: (...args: (string | false | 0 | string[] | Record<string, unknown> | null | undefined)[]) => string;
interface VoiceState {
    guildId?: string;
    channelId?: string;
    oldChannelId?: string;
    user: User;
    userId: string;
}
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    contextMenus: {
        "channel-context": NavContextMenuPatchCallback;
    };
    settings: import("../../utils/types").DefinedSettings<{
        mode: {
            type: OptionType.SELECT;
            description: string;
            options: ({
                label: string;
                value: number;
                default: true;
            } | {
                label: string;
                value: number;
                default?: undefined;
            })[];
        };
        voiceChannelChatSelf: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        voiceChannelChatSilent: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        voiceChannelChatSilentSelf: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
        };
        ignoreBlockedUsers: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
        };
    }, import("../../utils/types").SettingsChecks<{
        mode: {
            type: OptionType.SELECT;
            description: string;
            options: ({
                label: string;
                value: number;
                default: true;
            } | {
                label: string;
                value: number;
                default?: undefined;
            })[];
        };
        voiceChannelChatSelf: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        voiceChannelChatSilent: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        voiceChannelChatSilentSelf: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
        };
        ignoreBlockedUsers: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
        };
    }>, {}>;
    flux: {
        VOICE_STATE_UPDATES({ voiceStates }: {
            voiceStates: VoiceState[];
        }): void;
    };
} & Record<string, any>;
export default _default;
