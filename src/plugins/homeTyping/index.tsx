/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { Devs, PcDevs } from "@utils/constants";
import definePlugin from "@utils/types";
import { findComponentByCodeLazy, findStoreLazy } from "@webpack";
import { UserStore, useStateFromStores } from "@webpack/common";

const ThreeDots = findComponentByCodeLazy(".dots,", "dotRadius:");

const TypingStore = findStoreLazy("TypingStore");

const PrivateChannelSortStore = findStoreLazy("PrivateChannelSortStore") as { getPrivateChannelIds: () => string[]; };

export default definePlugin({
    name: "HomeTyping",
    description: "Changes the home button to a typing indicator if someone in your dms is typing",
    authors: [Devs.Samwich, PcDevs.MutanPlex],
    TypingIcon() {
        return <ThreeDots dotRadius={3} themed={true} />;
    },
    isTyping() {
        return useStateFromStores([TypingStore], () =>
            PrivateChannelSortStore.getPrivateChannelIds().some(id =>
                Object.keys(TypingStore.getTypingUsers(id)).some(userId => userId !== UserStore.getCurrentUser().id)
            )
        );
    },
    patches: [
        {
            find: "#{intl::DISCODO_DISABLED}",
            replacement:
                [
                    {
                        match: /(\(0,\i.jsx\)\(\i.\i,{}\))/,
                        replace: "arguments[0].user == null ? null : (pcIsTyping ? $self.TypingIcon() : $1)"
                    },
                    // define isTyping earlier in the function so i dont bReAk ThE rUlEs Of HoOkS
                    {
                        match: /(clearTimeout\(\i\)};)if\(null==\i\)return null;/,
                        replace: "$1 let pcIsTyping = $self.isTyping();"
                    }
                ],
            group: true
        }
    ]
});
