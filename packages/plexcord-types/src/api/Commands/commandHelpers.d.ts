import { Message } from "discord-types/general";
import type { PartialDeep } from "type-fest";
import { Argument } from "./types";
export declare function generateId(): string;
/**
 * Send a message as Clyde
 * @param {string} channelId ID of channel to send message to
 * @param {Message} message Message to send
 * @returns {Message}
 */
export declare function sendBotMessage(channelId: string, message: PartialDeep<Message>): Message;
/**
 * Get the value of an option by name
 * @param args Arguments array (first argument passed to execute)
 * @param name Name of the argument
 * @param fallbackValue Fallback value in case this option wasn't passed
 * @returns Value
 */
export declare function findOption<T>(args: Argument[], name: string): T & {} | undefined;
export declare function findOption<T>(args: Argument[], name: string, fallbackValue: T): T & {};
