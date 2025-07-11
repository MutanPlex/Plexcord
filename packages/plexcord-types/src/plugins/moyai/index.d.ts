import { OptionType } from "../../utils/types";
import { Message, ReactionEmoji } from "discord-types/general";
interface IMessageCreate {
    type: "MESSAGE_CREATE";
    optimistic: boolean;
    isPushNotification: boolean;
    channelId: string;
    message: Message;
}
interface IReactionAdd {
    type: "MESSAGE_REACTION_ADD";
    optimistic: boolean;
    channelId: string;
    messageId: string;
    messageAuthorId: string;
    userId: "195136840355807232";
    emoji: ReactionEmoji;
}
interface IVoiceChannelEffectSendEvent {
    type: string;
    emoji?: ReactionEmoji;
    channelId: string;
    userId: string;
    animationType: number;
    animationId: number;
}
declare const _default: {
    name: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    description: string;
    settings: import("../../utils/types").DefinedSettings<{
        volume: {
            description: string;
            type: OptionType.SLIDER;
            markers: number[];
            default: number;
            stickToMarkers: false;
        };
        quality: {
            description: string;
            type: OptionType.SELECT;
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
        triggerWhenUnfocused: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
        };
        ignoreBots: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
        };
        ignoreBlocked: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
        };
    }, import("../../utils/types").SettingsChecks<{
        volume: {
            description: string;
            type: OptionType.SLIDER;
            markers: number[];
            default: number;
            stickToMarkers: false;
        };
        quality: {
            description: string;
            type: OptionType.SELECT;
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
        triggerWhenUnfocused: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
        };
        ignoreBots: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
        };
        ignoreBlocked: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
        };
    }>, {}>;
    flux: {
        MESSAGE_CREATE({ optimistic, type, message, channelId }: IMessageCreate): Promise<void>;
        MESSAGE_REACTION_ADD({ optimistic, type, channelId, userId, messageAuthorId, emoji }: IReactionAdd): void;
        VOICE_CHANNEL_EFFECT_SEND({ emoji }: IVoiceChannelEffectSendEvent): void;
    };
} & Record<string, any>;
export default _default;
