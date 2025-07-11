import { MessageObject } from "../api/MessageEvents";
import { Channel, Guild, Message, User } from "discord-types/general";
import GuildFeatures from "discord-types/other/Constants";
import { Except } from "type-fest";
import { MediaModalItem, MediaModalProps } from "./modal";
/**
 * Get an internationalized message from a non hashed key
 * @param key The plain message key
 * @param values The values to interpolate, if it's a rich message
 */
export declare function getIntlMessage(key: string, values?: Record<PropertyKey, any>): any;
/**
 * Get an internationalized message from a hashed key
 * @param hashedKey The hashed message key
 * @param values The values to interpolate, if it's a rich message
 */
export declare function getIntlMessageFromHash(hashedKey: string, values?: Record<PropertyKey, any>, originalKey?: string): any;
/**
 * Open the invite modal
 * @param code The invite code
 * @returns Whether the invite was accepted
 */
export declare function openInviteModal(code: string): Promise<boolean>;
export declare function getCurrentChannel(): Channel | undefined;
export declare function getCurrentGuild(): Guild | undefined;
export declare function openPrivateChannel(userId: string): void;
export declare const enum Theme {
    Dark = 1,
    Light = 2
}
export declare function getTheme(): Theme;
export declare function insertTextIntoChatInputBox(text: string): void;
interface MessageExtra {
    messageReference: Message["messageReference"];
    allowedMentions: {
        parse: string[];
        replied_user: boolean;
    };
    stickerIds: string[];
}
export declare function sendMessage(channelId: string, data: Partial<MessageObject>, waitForChannelReady?: boolean, extra?: Partial<MessageExtra>): any;
/**
 * You must specify either height or width in the item
 */
export declare function openImageModal(item: Except<MediaModalItem, "type">, mediaModalProps?: Omit<MediaModalProps, "items">): void;
export declare function openUserProfile(id: string): Promise<void>;
interface FetchUserProfileOptions {
    friend_token?: string;
    connections_role_id?: string;
    guild_id?: string;
    with_mutual_guilds?: boolean;
    with_mutual_friends_count?: boolean;
}
/**
 * Fetch a user's profile
 */
export declare function fetchUserProfile(id: string, options?: FetchUserProfileOptions): Promise<any>;
/**
 * Get the unique username for a user. Returns user.username for pomelo people, user.tag otherwise
 */
export declare function getUniqueUsername(user: User): string;
/**
 *  Get the URL for an emoji. This function always returns a gif URL for animated emojis, instead of webp
 * @param id The emoji id
 * @param animated Whether the emoji is animated
 * @param size The size for the emoji
 */
export declare function getEmojiURL(id: string, animated: boolean, size: number): string;
export declare function getGuildAcronym(guild: Guild): string;
export declare function hasGuildFeature(guild: Guild, feature: keyof GuildFeatures["GuildFeatures"]): boolean;
export {};
