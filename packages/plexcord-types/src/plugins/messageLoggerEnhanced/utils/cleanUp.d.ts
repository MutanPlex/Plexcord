import { User } from "discord-types/general";
import { LoggedMessageJSON } from "../types";
export declare function cleanupMessage(message: any, removeDetails?: boolean): LoggedMessageJSON;
export declare function cleanUpCachedMessage(message: any): LoggedMessageJSON;
export declare function cleanupEmbed(embed: any): any;
export declare function cleanupUserObject(user: User): {
    discriminator: string;
    username: string;
    avatar: string;
    id: string;
    bot: boolean;
    public_flags: any;
};
