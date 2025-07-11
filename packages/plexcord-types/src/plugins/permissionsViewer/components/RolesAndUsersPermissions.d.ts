import type { Guild } from "discord-types/general";
export declare const enum PermissionType {
    Role = 0,
    User = 1,
    Owner = 2
}
export interface RoleOrUserPermission {
    type: PermissionType;
    id?: string;
    permissions?: bigint;
    overwriteAllow?: bigint;
    overwriteDeny?: bigint;
}
export default function openRolesAndUsersPermissionsModal(permissions: Array<RoleOrUserPermission>, guild: Guild, header: string): string;
