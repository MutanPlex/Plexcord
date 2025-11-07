/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { t } from "@api/i18n";
import { addMessagePreSendListener, removeMessagePreSendListener } from "@api/MessageEvents";
import { Devs } from "@utils/constants";
import definePlugin from "@utils/types";
export default definePlugin({
    name: "NoBulletPoints",
    description: "Stops you from typing markdown bullet points (stinky)",
    authors: [Devs.Samwich],
    dependencies: ["MessageEventsAPI"],

    get displayDescription() {
        return t("plugin.noBulletPoints.description");
    },

    start() {
        this.preSend = addMessagePreSendListener((channelId, msg) => {
            msg.content = textProcessing(msg.content);
        });
    },
    stop() {
        this.preSend = removeMessagePreSendListener((channelId, msg) => {
            msg.content = textProcessing(msg.content);
        });
    },
});

function textProcessing(text: string): string {
    return text.replace(/([*-]) /g, "\\$1 ");
}
