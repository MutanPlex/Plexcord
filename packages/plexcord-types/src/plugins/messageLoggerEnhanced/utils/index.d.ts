import { LoggedMessageJSON } from "../types";
export * from "./cleanUp";
export * from "./misc";
export declare const DISCORD_EPOCH = 1420070400000;
export declare function reAddDeletedMessages(messages: LoggedMessageJSON[], deletedMessages: LoggedMessageJSON[], channelStart: boolean, channelEnd: boolean): void;
interface ShouldIgnoreArguments {
    channelId?: string;
    authorId?: string;
    guildId?: string;
    flags?: number;
    bot?: boolean;
    ghostPinged?: boolean;
    isCachedByUs?: boolean;
    webhookId?: string;
}
/**
  * the function `shouldIgnore` evaluates whether a message should be ignored or kept, following a priority hierarchy: User > Channel > Server.
  * In this hierarchy, whitelisting takes priority; if any element (User, Channel, or Server) is whitelisted, the message is kept.
  * However, if a higher-priority element, like a User, is blacklisted, it will override the whitelisting status of a lower-priority element, such as a Server, causing the message to be ignored.
  * @param {ShouldIgnoreArguments} args - An object containing the message details.
  * @returns {boolean} - True if the message should be ignored, false if it should be kept.
*/
export declare function shouldIgnore({ channelId, authorId, guildId, flags, bot, ghostPinged, isCachedByUs, webhookId }: ShouldIgnoreArguments): boolean;
export type ListType = "blacklistedIds" | "whitelistedIds";
export declare function addToXAndRemoveFromOpposite(list: ListType, id: string): void;
export declare function addToX(list: ListType, id: string): void;
export declare function removeFromX(list: ListType, id: string): void;
