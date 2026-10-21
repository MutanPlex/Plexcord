/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import ErrorBoundary from "@components/ErrorBoundary";
import { Channel } from "@plexcord/discord-types";
import { Devs, PcDevs } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";
import { findComponentByCodeLazy } from "@webpack";
import { JoinedThreadsStore, ReadStateStore, UserGuildSettingsStore, useStateFromStores } from "@webpack/common";

const NumberBadge = findComponentByCodeLazy("BADGE_NOTIFICATION_BACKGROUND", "let{count:");

const settings = definePluginSettings({
    showOnMutedChannels: {
        label: () => t(plugin.unreadCountBadge.option.showOnMutedChannels.label),
        description: () => t(plugin.unreadCountBadge.option.showOnMutedChannels.description),
        type: OptionType.BOOLEAN,
        default: false,
    },
    notificationCountLimit: {
        label: () => t(plugin.unreadCountBadge.option.notificationCountLimit.label),
        description: () => t(plugin.unreadCountBadge.option.notificationCountLimit.description),
        type: OptionType.BOOLEAN,
        default: false,
    },
});

export default definePlugin({
    name: "UnreadCountBadge",
    authors: [Devs.Joona, PcDevs.MutanPlex],
    description: () => t(plugin.unreadCountBadge.description),
    tags: ["appearance", "customisation", "servers"],
    settings,

    patches: [
        // Kanged from typingindicators
        {
            find: "UNREAD_IMPORTANT:",
            replacement: [
                {
                    match: /\.Children\.count.+?:null(?<=,channel:\i.+?)/,
                    replace: "$&,$self.CountBadge({channel: arguments[0].channel})",
                },
            ]
        },
        // Threads
        {
            // This is the thread "spine" that shows in the left
            find: "M0 15H2c0 1.6569",
            replacement: [
                {
                    match: /mentionsCount:\i.{0,50}?null/,
                    replace: "$&,$self.CountBadge({channel: arguments[0].thread})",
                },
            ]
        },
    ],

    CountBadge: ErrorBoundary.wrap(({ channel }: { channel: Channel; }) => {
        const unreadCount = useStateFromStores([ReadStateStore], () => ReadStateStore.getUnreadCount(channel.id));
        if (!unreadCount) return null;

        if (!settings.store.showOnMutedChannels && (UserGuildSettingsStore.isChannelMuted(channel.guild_id, channel.id) || JoinedThreadsStore.isMuted(channel.id)))
            return null;

        return (
            <NumberBadge
                color="var(--brand-500)"
                count={
                    unreadCount > 99 && settings.store.notificationCountLimit
                        ? "+99"
                        : unreadCount
                }
            />
        );
    }, { noop: true }),
});
