import { Channel, Message } from "discord-types/general/index.js";
import { JSX } from "react";
export interface MessageDecorationProps {
    author: {
        /**
         * Will be username if the user has no nickname
         */
        nick: string;
        iconRoleId: string;
        guildMemberAvatar: string;
        colorRoleName: string;
        colorString: string;
    };
    channel: Channel;
    compact: boolean;
    decorations: {
        /**
         * Element for the [BOT] tag if there is one
         */
        0: JSX.Element | null;
        /**
         * Other decorations (including ones added with this api)
         */
        1: JSX.Element[];
    };
    message: Message;
    [key: string]: any;
}
export type MessageDecorationFactory = (props: MessageDecorationProps) => JSX.Element | null;
export declare const decorationsFactories: Map<string, MessageDecorationFactory>;
export declare function addMessageDecoration(identifier: string, decoration: MessageDecorationFactory): void;
export declare function removeMessageDecoration(identifier: string): void;
export declare function __addDecorationsToMessage(props: MessageDecorationProps): JSX.Element;
