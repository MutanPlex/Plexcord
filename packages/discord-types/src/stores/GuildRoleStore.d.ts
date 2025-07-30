import { FluxStore, Role } from "..";

export class GuildRoleStore extends FluxStore {
    getRole(guildId: string, roleId: string): Role;
    getRolesSnapshot(guildId: string): Record<string, Role>;
    getSortedRoles(guildId: string): Role[];
}
