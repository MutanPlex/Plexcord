import { Guild, GuildMember, Role } from "discord-types/general";
export declare const getGuildPermissionSpecMap: any;
export declare const cl: (...args: (string | false | 0 | string[] | Record<string, unknown> | null | undefined)[]) => string;
export declare function getSortedRoles({ id }: Guild, member: GuildMember): Role[];
export declare function sortUserRoles(roles: Role[]): Role[];
export declare function sortPermissionOverwrites<T extends {
    id: string;
    type: number;
}>(overwrites: T[], guildId: string): T[];
