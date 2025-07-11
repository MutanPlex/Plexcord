import { OptionType, ReporterTestable } from "../../utils/types";
import type { Embed, GuildMember, MessageAttachment, User } from "discord-types/general";
interface Message {
    guild_id: string;
    attachments: MessageAttachment[];
    author: User;
    channel_id: string;
    components: any[];
    content: string;
    edited_timestamp: string;
    embeds: Embed[];
    sticker_items?: Sticker[];
    flags: number;
    id: string;
    member: GuildMember;
    mention_everyone: boolean;
    mention_roles: string[];
    mentions: Mention[];
    nonce: string;
    pinned: false;
    referenced_message: any;
    timestamp: string;
    tts: boolean;
    type: number;
}
interface Mention {
    avatar: string;
    avatar_decoration_data: any;
    discriminator: string;
    global_name: string;
    id: string;
    public_flags: number;
    username: string;
}
interface Sticker {
    t: "Sticker";
    description: string;
    format_type: number;
    guild_id: string;
    id: string;
    name: string;
    tags: string;
    type: number;
}
interface Call {
    channel_id: string;
    guild_id: string;
    message_id: string;
    region: string;
    ringing: string[];
}
declare function start(): Promise<unknown>;
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    tags: string[];
    reporterTestable: ReporterTestable;
    settings: import("../../utils/types").DefinedSettings<{
        webSocketPort: {
            type: OptionType.NUMBER;
            description: string;
            default: number;
            onChange(): Promise<void>;
        };
        preferUDP: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
            disabled: () => boolean;
        };
        botNotifications: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
        };
        serverNotifications: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        dmNotifications: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        groupDmNotifications: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        callNotifications: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        pingColor: {
            type: OptionType.STRING;
            description: string;
            default: string;
        };
        channelPingColor: {
            type: OptionType.STRING;
            description: string;
            default: string;
        };
        soundPath: {
            type: OptionType.STRING;
            description: string;
            default: string;
        };
        timeout: {
            type: OptionType.NUMBER;
            description: string;
            default: number;
        };
        lengthBasedTimeout: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        opacity: {
            type: OptionType.SLIDER;
            description: string;
            default: number;
            markers: number[];
        };
        volume: {
            type: OptionType.SLIDER;
            description: string;
            default: number;
            markers: number[];
        };
    }, import("../../utils/types").SettingsChecks<{
        webSocketPort: {
            type: OptionType.NUMBER;
            description: string;
            default: number;
            onChange(): Promise<void>;
        };
        preferUDP: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
            disabled: () => boolean;
        };
        botNotifications: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
        };
        serverNotifications: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        dmNotifications: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        groupDmNotifications: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        callNotifications: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        pingColor: {
            type: OptionType.STRING;
            description: string;
            default: string;
        };
        channelPingColor: {
            type: OptionType.STRING;
            description: string;
            default: string;
        };
        soundPath: {
            type: OptionType.STRING;
            description: string;
            default: string;
        };
        timeout: {
            type: OptionType.NUMBER;
            description: string;
            default: number;
        };
        lengthBasedTimeout: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        opacity: {
            type: OptionType.SLIDER;
            description: string;
            default: number;
            markers: number[];
        };
        volume: {
            type: OptionType.SLIDER;
            description: string;
            default: number;
            markers: number[];
        };
    }>, {}>;
    flux: {
        CALL_UPDATE({ call }: {
            call: Call;
        }): void;
        MESSAGE_CREATE({ message, optimistic }: {
            message: Message;
            optimistic: boolean;
        }): void;
    };
    start: typeof start;
    stop(): void;
    settingsAboutComponent: () => import("react").JSX.Element;
} & Record<string, any>;
export default _default;
