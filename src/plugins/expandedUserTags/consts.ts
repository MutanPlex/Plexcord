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

const getTagDisplayName = (name: string, defaultKey: string) => {
    return settings.store.tagSettings?.[name]?.text || t(defaultKey);
};

const getTagDescription = (name: string, defaultKey: string) => {
    return settings.store.tagSettings?.[name]?.description || t(defaultKey);
};

export const tags = {
    get values(): ITag[] {
        return [
            {
                name: "WEBHOOK",
                get displayName() { return getTagDisplayName("WEBHOOK", "plugin.expandedUserTags.tag.webhook.name"); },
                get description() { return getTagDescription("WEBHOOK", "plugin.expandedUserTags.tag.webhook.description"); },
                condition: isWebhook
            },
            {
                name: "OWNER",
                get displayName() { return getTagDisplayName("OWNER", "plugin.expandedUserTags.tag.owner.name"); },
                get description() { return getTagDescription("OWNER", "plugin.expandedUserTags.tag.owner.description"); },
                condition: (_, user, channel) => GuildStore.getGuild(channel?.guild_id)?.ownerId === user.id
            },
            {
                name: "ADMINISTRATOR",
                get displayName() { return getTagDisplayName("ADMINISTRATOR", "plugin.expandedUserTags.tag.admin.name"); },
                get description() { return getTagDescription("ADMINISTRATOR", "plugin.expandedUserTags.tag.admin.description"); },
                permissions: ["ADMINISTRATOR"]
            },
            {
                name: "MODERATOR_STAFF",
                get displayName() { return getTagDisplayName("MODERATOR_STAFF", "plugin.expandedUserTags.tag.staff.name"); },
                get description() { return getTagDescription("MODERATOR_STAFF", "plugin.expandedUserTags.tag.staff.description"); },
                permissions: ["MANAGE_GUILD", "MANAGE_CHANNELS", "MANAGE_ROLES"]
            },
            {
                name: "MODERATOR",
                get displayName() { return getTagDisplayName("MODERATOR", "plugin.expandedUserTags.tag.mod.name"); },
                get description() { return getTagDescription("MODERATOR", "plugin.expandedUserTags.tag.mod.description"); },
                permissions: ["MANAGE_MESSAGES", "KICK_MEMBERS", "BAN_MEMBERS"]
            },
            {
                name: "VOICE_MODERATOR",
                get displayName() { return getTagDisplayName("VOICE_MODERATOR", "plugin.expandedUserTags.tag.vcmod.name"); },
                get description() { return getTagDescription("VOICE_MODERATOR", "plugin.expandedUserTags.tag.vcmod.description"); },
                permissions: ["MOVE_MEMBERS", "MUTE_MEMBERS", "DEAFEN_MEMBERS"]
            },
            {
                name: "CHAT_MODERATOR",
                get displayName() { return getTagDisplayName("CHAT_MODERATOR", "plugin.expandedUserTags.tag.chatmod.name"); },
                get description() { return getTagDescription("CHAT_MODERATOR", "plugin.expandedUserTags.tag.chatmod.description"); },
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
