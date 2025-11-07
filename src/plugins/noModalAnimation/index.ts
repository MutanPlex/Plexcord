/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { t } from "@api/i18n";
import { Devs, PcDevs } from "@utils/constants";
import definePlugin from "@utils/types";

export default definePlugin({
    name: "NoModalAnimation",
    description: "Remove the 300ms long animation when opening or closing modals",
    authors: [Devs.AutumnVN, PcDevs.MutanPlex],

    get displayDescription() {
        return t("plugin.noModalAnimation.description");
    },

    patches: [
        {
            find: "DURATION_IN:",
            replacement: {
                match: /300,/,
                replace: "0,",
            }
        },
        {
            find: 'backdropFilter:"blur(0px)"',
            replacement: {
                match: /\?0:200/,
                replace: "?0:0",
            }
        },
        {
            find: '="ABOVE"',
            replacement: {
                match: /:300/,
                replace: ":0",
            }
        },
        {
            find: "renderLurkerModeUpsellPopout,position:",
            replacement: {
                match: /(\i)=(200|300)/g,
                replace: "$1=0",
            },
        }
    ]
});
