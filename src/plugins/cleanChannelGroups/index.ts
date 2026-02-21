/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2026 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { PcDevs } from "@utils/constants";
import definePlugin from "@utils/types";

export default definePlugin({
    name: "CleanChannelGroups",
    description: () => t(plugin.cleanChannelGroups.description),
    authors: [PcDevs.justjxke, PcDevs.MutanPlex],
    patches: [
        {
            find: '"placeholder-channel-id"',
            replacement: [
                {
                    match: /this\.category\.isCollapsed&&\(.{0,600}?\)\?\{renderLevel:3,threadIds:/,
                    replace: "this.category.isCollapsed?{renderLevel:3,threadIds:"
                },
                {
                    match: /(?<=!this.category.isCollapsed.{0,50}\i=)(\i\(this\.record,.{0,5},\i\.hideMutedChannels\);)/,
                    replace: "this.category.isCollapsed?[]:$1"
                }
            ]
        }
    ]
});
