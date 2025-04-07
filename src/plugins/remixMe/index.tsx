/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { addMessagePreSendListener, MessageExtra, MessageObject, removeMessagePreSendListener } from "@api/MessageEvents";
import { PcDevs } from "@utils/constants";
import definePlugin from "@utils/types";

const handleMessage = (channelID: string, message: MessageObject, messageEx: MessageExtra) => messageEx.uploads && messageEx.uploads.forEach(att => (att as any).isRemix = true);

export default definePlugin({
    name: "RemixMe",
    description: "Turns every single message with attachment to have remix tag",
    authors: [PcDevs.kvba, PcDevs.MutanPlex],
    start: () => addMessagePreSendListener(handleMessage),
    stop: () => removeMessagePreSendListener(handleMessage)
});
