import { Message } from "discord-types/general";
/**
 * Update and re-render a message
 * @param channelId The channel id of the message
 * @param messageId The message id
 * @param fields The fields of the message to change. Leave empty if you just want to re-render
 */
export declare function updateMessage(channelId: string, messageId: string, fields?: Partial<Message & Record<string, any>>): void;
