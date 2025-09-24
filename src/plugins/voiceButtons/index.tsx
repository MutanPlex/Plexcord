/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { User } from "@plexcord/discord-types";
import { PcDevs } from "@utils/constants";
import definePlugin from "@utils/types";
import { Flex, React } from "@webpack/common";

import { settings } from "./settings";
import { UserChatButton, UserDeafenButton, UserMuteButton } from "./utils";

export default definePlugin({
    name: "VoiceButtons",
    description: "Quickly DM, mute, or deafen any user right from the voice-call panel.",
    authors: [PcDevs.nicola02nb, PcDevs.omaw],
    settings,
    patches: [
        {
            find: "\"avatarContainerClass\",\"userNameClassName\"",
            replacement: [
                {
                    match: /flipped\]:\i\}\),children:\[/,
                    replace: "$&$self.renderButtons(arguments[0].user),"
                }
            ]
        }
    ],
    renderButtons(user: User) {
        if (!user) return null;
        return (
            <Flex direction={Flex.Direction.HORIZONTAL} className="voice-user-buttons">
                {settings.store.showChatButton && <UserChatButton user={user} />}
                {settings.store.showMuteButton && <UserMuteButton user={user} />}
                {settings.store.showDeafenButton && <UserDeafenButton user={user} />}
            </Flex>
        );
    }
});
