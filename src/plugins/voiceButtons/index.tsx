/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { Flex } from "@components/Flex";
import { User } from "@plexcord/discord-types";
import { PcDevs } from "@utils/constants";
import definePlugin from "@utils/types";
import { React } from "@webpack/common";

import { settings } from "./settings";
import { UserChatButton, UserDeafenButton, UserMuteButton } from "./utils";

export default definePlugin({
    name: "VoiceButtons",
    description: () => t(plugin.voiceButtons.description),
    authors: [PcDevs.nicola02nb, PcDevs.omaw],
    settings,

    patches: [
        {
            find: ".VOICE_PANEL}}",
            replacement: [
                {
                    match: /\[\i\.\i\]:\i\}\),children:\[/,
                    replace: "$&$self.renderButtons(arguments[0].user),"
                }
            ]
        }
    ],
    renderButtons(user: User) {
        if (!user) return null;
        return (
            <Flex className="voice-user-buttons">
                {settings.store.showChatButton && <UserChatButton user={user} />}
                {settings.store.showMuteButton && <UserMuteButton user={user} />}
                {settings.store.showDeafenButton && <UserDeafenButton user={user} />}
            </Flex>
        );
    }
});
