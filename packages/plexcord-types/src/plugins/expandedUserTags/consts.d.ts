import { RC } from "../../webpack/common/types";
import { Channel, Guild, Message, User } from "discord-types/general";
export declare const isWebhook: (message: Message, user: User) => boolean;
export declare const tags: [{
    readonly name: "WEBHOOK";
    readonly displayName: "Webhook";
    readonly description: "Messages sent by webhooks";
    readonly condition: (message: Message, user: User) => boolean;
}, {
    readonly name: "OWNER";
    readonly displayName: "Owner";
    readonly description: "Owns the server";
    readonly condition: (_: Message | null, user: User, channel: Channel) => boolean;
}, {
    readonly name: "ADMINISTRATOR";
    readonly displayName: "Admin";
    readonly description: "Has the administrator permission";
    readonly permissions: ["ADMINISTRATOR"];
}, {
    readonly name: "MODERATOR_STAFF";
    readonly displayName: "Staff";
    readonly description: "Can manage the server, channels or roles";
    readonly permissions: ["MANAGE_GUILD", "MANAGE_CHANNELS", "MANAGE_ROLES"];
}, {
    readonly name: "MODERATOR";
    readonly displayName: "Mod";
    readonly description: "Can manage messages or kick/ban people";
    readonly permissions: ["MANAGE_MESSAGES", "KICK_MEMBERS", "BAN_MEMBERS"];
}, {
    readonly name: "VOICE_MODERATOR";
    readonly displayName: "VC Mod";
    readonly description: "Can manage voice chats";
    readonly permissions: ["MOVE_MEMBERS", "MUTE_MEMBERS", "DEAFEN_MEMBERS"];
}, {
    readonly name: "CHAT_MODERATOR";
    readonly displayName: "Chat Mod";
    readonly description: "Can timeout people";
    readonly permissions: ["MODERATE_MEMBERS"];
}];
export declare const Tag: RC<{
    type?: number | null;
    className?: string;
    useRemSizes?: boolean;
}> & {
    Types: Record<string, number>;
};
export declare const computePermissions: (options: {
    user?: {
        id: string;
    } | string | null;
    context?: Guild | Channel | null;
    overwrites?: Channel["permissionOverwrites"] | null;
    checkElevated?: boolean;
    excludeGuildPermissions?: boolean;
}) => bigint;
