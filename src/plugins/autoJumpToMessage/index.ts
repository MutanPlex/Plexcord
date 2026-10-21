/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2026 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { PcDevs } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";
import { ChannelRouter, ChannelStore, UserGuildSettingsStore } from "@webpack/common";

const settings = definePluginSettings({
    onlyWhenUnfocused: {
        label: () => t(plugin.autoJumpToMessage.option.onlyWhenUnfocused.label),
        type: OptionType.BOOLEAN,
        default: true,
        description: () => t(plugin.autoJumpToMessage.option.onlyWhenUnfocused.description),
    },
});

export default definePlugin({
    name: "AutoJumpToMessage",
    description: () => t(plugin.autoJumpToMessage.description),
    tags: ["chat", "utility"],
    authors: [PcDevs.k304, PcDevs.MutanPlex],
    settings,
    flux: {
        RPC_NOTIFICATION_CREATE({ channelId }) {
            if (!channelId || settings.store.onlyWhenUnfocused && document.hasFocus()
                || UserGuildSettingsStore.isGuildOrCategoryOrChannelMuted(ChannelStore.getChannel(channelId)?.guild_id, channelId)) return;
            ChannelRouter.transitionToChannel(channelId);
        }
    },
});
