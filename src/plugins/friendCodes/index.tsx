/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { Devs, PcDevs } from "@utils/constants";
import definePlugin from "@utils/types";

import FriendCodesPanel from "./FriendCodesPanel";

export default definePlugin({
    name: "FriendCodes",
    description: () => t(plugin.friendCodes.description),
    authors: [Devs.HypedDomi, PcDevs.MutanPlex],
    patches: [
        {
            find: "#{intl::ADD_FRIEND})}),(",
            replacement: {
                match: /"header",.{0,30}children:\[.*?\{\}\)/,
                replace: "$&,$self.FriendCodesPanel"
            },
            noWarn: true,
        }
    ],

    get FriendCodesPanel() {
        return <FriendCodesPanel />;
    }
});
