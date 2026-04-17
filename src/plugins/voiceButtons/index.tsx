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
    tags: ["voice", "utility"],
    settings,

    patches: [
        {
            find: ".VOICE_PANEL}}",
            replacement: [
                {
                    match: /\}\),children:\[(?=.{0,200}\.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED)/,
                    replace: "$&$self.renderButtons(arguments[0]?.user),"
                }
            ]
        }
    ],
    renderButtons(user: User) {
        if (!user) return null;
        const positionClass = settings.store.buttonPosition === "right"
            ? "voice-user-buttons-right"
            : "voice-user-buttons-left";

        return (
            <Flex flexDirection="row" className={`voice-user-buttons ${positionClass}`}>
                {settings.store.showChatButton && <UserChatButton user={user} />}
                {settings.store.showMuteButton && <UserMuteButton user={user} />}
                {settings.store.showDeafenButton && <UserDeafenButton user={user} />}
            </Flex>
        );
    }
});
