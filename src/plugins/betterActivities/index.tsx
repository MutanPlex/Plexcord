/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import "./styles.css";

import { plugin, t } from "@api/i18n";
import { Devs } from "@utils/constants";
import definePlugin from "@utils/types";

import { patchActivityList } from "./patch-helpers/activityList";
import { showAllActivitiesComponent } from "./patch-helpers/popout";
import { settings } from "./settings";

export default definePlugin({
    name: "BetterActivities",
    description: () => t(plugin.betterActivities.description),
    authors: [Devs.D3SOX, Devs.Arjix, Devs.AutumnVN, Devs.thororen],
    tags: ["activity"],

    settings,

    patchActivityList,

    showAllActivitiesComponent,

    patches: [
        {
            // Patch activity icons
            find: "isBlockedOrIgnored(null",
            replacement: [
                {
                    match: /(?<=className:\i,children:\[).*?(?=\i\(\),\i&&)/,
                    replace: "",
                    predicate: () => settings.store.removeGameActivityStatus,
                },
                {
                    match: /(?<=hideTooltip:.{0,4}}=(\i).*?{}\))\]/,
                    replace: ",$self.patchActivityList($1)]",
                    predicate: () => settings.store.memberList,
                }
            ],
            all: true
        },
        {
            // Show all activities in the user popout/sidebar
            find: '"UserProfilePopoutBody"',
            replacement: {
                match: /((\i)=.{0,10}(\i)\.id\).*?,)\i\?.{0,250}onClose:\i\}\)/,
                replace: "$1$self.showAllActivitiesComponent({ activity: $2, user: $3 })"
            },
            predicate: () => settings.store.userPopout
        }
    ],
});
