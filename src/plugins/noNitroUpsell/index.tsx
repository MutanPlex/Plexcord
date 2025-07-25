/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { User } from "@plexcord/discord-types";
import { PcDevs } from "@utils/constants";
import definePlugin from "@utils/types";
import { UserStore } from "@webpack/common";

let user: ModifiedUser | undefined;
let lastUserId: string | undefined;

interface ModifiedUser extends User {
    _realPremiumType?: number;
}

const onChange = () => {
    const newUser = UserStore.getCurrentUser();
    if (newUser && newUser.id !== lastUserId) {
        user = newUser;
        ready(user);
    }
};

function ready(user: ModifiedUser) {
    if (!user) return;
    if ("_realPremiumType" in user) return;

    user._realPremiumType = user.premiumType ?? 0;
    user.premiumType = 2;
    lastUserId = user.id;
}

export default definePlugin({
    name: "NoNitroUpsell",
    description: "Removes ALL of Discord's nitro upsells by tricking the client into thinking you have nitro.",
    authors: [PcDevs.thororen, PcDevs.MutanPlex],
    patches: [
        {
            find: "#{intl::USER_PROFILE_ENTRY_POINTS_AMP_UP_YOUR_PROFILE}",
            replacement: [
                {
                    match: /}\);return \i\?.*?}\)}}/,
                    replace: "});return null}}"
                }
            ],
        }
    ],
    start() {
        user = UserStore.getCurrentUser();
        if (user) ready(user);

        UserStore.addChangeListener(onChange);
    },
    stop() {
        const user = UserStore.getCurrentUser();
        if (!user) return;
        if (!("_realPremiumType" in user)) return;
        // @ts-ignore
        user.premiumType = user._realPremiumType;
        delete user._realPremiumType;
        UserStore.removeChangeListener(onChange);
    }
});
