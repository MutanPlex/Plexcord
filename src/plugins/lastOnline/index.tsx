/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { BaseText } from "@components/BaseText";
import { User } from "@plexcord/discord-types";
import { PcDevs } from "@utils/constants";
import definePlugin from "@utils/types";
import { moment } from "@webpack/common";

interface PresenceStatus {
    hasBeenOnline: boolean;
    lastOffline: number | null;
}

const recentlyOnlineList: Map<string, PresenceStatus> = new Map();

function handlePresenceUpdate(status: string, userId: string) {
    if (recentlyOnlineList.has(userId)) {
        const presenceStatus = recentlyOnlineList.get(userId)!;
        if (status !== "offline") {
            presenceStatus.hasBeenOnline = true;
            presenceStatus.lastOffline = null;
        } else if (presenceStatus.hasBeenOnline && presenceStatus.lastOffline == null) {
            presenceStatus.lastOffline = Date.now();
        }
    } else {
        recentlyOnlineList.set(userId, {
            hasBeenOnline: status !== "offline",
            lastOffline: status === "offline" ? Date.now() : null
        });
    }
}

function formatTime(time: number) {
    const diff = moment.duration(moment().diff(time));
    const d = Math.floor(diff.asDays());
    const h = Math.floor(diff.asHours());
    const m = Math.floor(diff.asMinutes());

    if (d > 0) return `${d} ${t(plugin.lastOnline.unit.d)}`;
    if (h > 0) return `${h} ${t(plugin.lastOnline.unit.h)}`;
    if (m > 0) return `${m} ${t(plugin.lastOnline.unit.m)}`;
    return `1 ${t(plugin.lastOnline.unit.m)}`;
}

export default definePlugin({
    name: "LastOnline",
    description: () => t(plugin.lastOnline.description),
    authors: [PcDevs.MutanPlex, PcDevs.Nick],

    flux: {
        PRESENCE_UPDATES({ updates }) {
            updates.forEach(update => {
                handlePresenceUpdate(update.status, update.user.id);
            });
        }
    },
    patches: [
        // Patches the guild member list
        {
            find: ".MEMBER_LIST_ITEM_AVATAR_DECORATION_PADDING)",
            replacement: {
                match: /(return null==(\i).{0,1500}subText:)/,
                replace: "$1$self.shouldShowRecentlyOffline($2)?$self.buildRecentlyOffline($2):"
            }
        },

        // Patches the DM list
        {
            find: "PrivateChannel.renderAvatar",
            replacement: {
                match: /({id:(\i).id.{0,1500}subText:)/,
                replace: "$1$self.shouldShowRecentlyOffline($2.recipients.length === 1 ? { id: $2.recipients[0] } : null)?$self.buildRecentlyOffline({ id: $2.recipients[0] }):"
            }
        }
    ],
    shouldShowRecentlyOffline(user: User) {
        if (!user || !user.id) return false;

        const presenceStatus = recentlyOnlineList.get(user.id);
        return presenceStatus && presenceStatus.hasBeenOnline && presenceStatus.lastOffline !== null;
    },
    buildRecentlyOffline(user: User) {
        if (!user) return <></>;

        const presenceStatus = recentlyOnlineList.get(user.id);
        const formattedTime = presenceStatus && presenceStatus.lastOffline !== null
            ? formatTime(presenceStatus.lastOffline)
            : "";
        return (
            <BaseText size="xs">{t(plugin.lastOnline.online, { formattedTime })}</BaseText>
        );
    }
});
