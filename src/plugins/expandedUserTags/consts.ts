/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { t } from "@api/i18n";
import { Channel, Guild, Message, RC, User } from "@plexcord/discord-types";
import { findByCodeLazy, findLazy } from "@webpack";
import { GuildStore } from "@webpack/common";

import { settings } from "./settings";
import type { ITag } from "./types";

export const isWebhook = (message: Message, user: User) => {
    const isFollowed = message?.type === 0 && !!message?.messageReference && !settings.store.showWebhookTagFully;
    return !!message?.webhookId && user.isNonUserBot() && !isFollowed;
};

export const tags = {
    get values(): ITag[] {
        return [
            {
                name: "WEBHOOK",
                displayName: t("plugin.expandedUserTags.tag.webhook.name"),
                description: t("plugin.expandedUserTags.tag.webhook.description"),
                condition: isWebhook
            },
            {
                name: "OWNER",
                displayName: t("plugin.expandedUserTags.tag.owner.name"),
                description: t("plugin.expandedUserTags.tag.owner.description"),
                condition: (_, user, channel) => GuildStore.getGuild(channel?.guild_id)?.ownerId === user.id
            },
            {
                name: "ADMINISTRATOR",
                displayName: t("plugin.expandedUserTags.tag.admin.name"),
                description: t("plugin.expandedUserTags.tag.admin.description"),
                permissions: ["ADMINISTRATOR"]
            },
            {
                name: "MODERATOR_STAFF",
                displayName: t("plugin.expandedUserTags.tag.staff.name"),
                description: t("plugin.expandedUserTags.tag.staff.description"),
                permissions: ["MANAGE_GUILD", "MANAGE_CHANNELS", "MANAGE_ROLES"]
            },
            {
                name: "MODERATOR",
                displayName: t("plugin.expandedUserTags.tag.mod.name"),
                description: t("plugin.expandedUserTags.tag.mod.description"),
                permissions: ["MANAGE_MESSAGES", "KICK_MEMBERS", "BAN_MEMBERS"]
            },
            {
                name: "VOICE_MODERATOR",
                displayName: t("plugin.expandedUserTags.tag.vcmod.name"),
                description: t("plugin.expandedUserTags.tag.vcmod.description"),
                permissions: ["MOVE_MEMBERS", "MUTE_MEMBERS", "DEAFEN_MEMBERS"]
            },
            {
                name: "CHAT_MODERATOR",
                displayName: t("plugin.expandedUserTags.tag.chatmod.name"),
                description: t("plugin.expandedUserTags.tag.chatmod.description"),
                permissions: ["MODERATE_MEMBERS"]
            }
        ] as const;
    }
};
export const Tag = findLazy(m => m.Types?.[0] === "BOT") as RC<{ type?: number | null, className?: string, useRemSizes?: boolean; }> & { Types: Record<string, number>; };

// PermissionStore.computePermissions will not work here since it only gets permissions for the current user
export const computePermissions: (options: {
    user?: { id: string; } | string | null;
    context?: Guild | Channel | null;
    overwrites?: Channel["permissionOverwrites"] | null;
    checkElevated?: boolean /* = true */;
    excludeGuildPermissions?: boolean /* = false */;
}) => bigint = findByCodeLazy(".getCurrentUser()", ".computeLurkerPermissionsAllowList()");
