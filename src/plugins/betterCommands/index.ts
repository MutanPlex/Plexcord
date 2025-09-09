/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { definePluginSettings } from "@api/Settings";
import { Devs } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";

const settings = definePluginSettings({
    autoFillArguments: {
        description: "Automatically fill command with all arguements instead of just required ones",
        type: OptionType.BOOLEAN,
        default: true,
    }
});

export default definePlugin({
    name: "BetterCommands",
    description: "Enhances the command system with miscellaneous improvements.",
    authors: [Devs.thororen],
    settings,
    patches: [
        {
            find: 'applicationCommand",',
            predicate: () => settings.store.autoFillArguments,
            replacement: [
                {
                    match: /\(\i\.required.{0,20}\]\)/,
                    replace: "true"
                },
            ]
        }
    ]
});
