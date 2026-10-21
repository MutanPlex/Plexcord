/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2026 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { findGroupChildrenByChildId, NavContextMenuPatchCallback } from "@api/ContextMenu";
import { plugin, t } from "@api/i18n";
import { RobotIcon } from "@components/Icons";
import { Message } from "@plexcord/discord-types";
import { PcDevs } from "@utils/constants";
import definePlugin from "@utils/types";
import { ChannelStore, Menu } from "@webpack/common";

import { settings } from "./settings";
import { getPayload, getResponse, handleResponse } from "./utils";

const messageCtxPatch: NavContextMenuPatchCallback = (children, { message }: { message: Message; }) => {
    if (!message.content.trim() && !message.embeds.length && (!settings.store.supportImages || !message.attachments.some(att => att.content_type?.startsWith("image/")))) return;

    const group = findGroupChildrenByChildId("copy-text", children);
    if (!group) return;

    group.splice(group.findIndex(c => c?.props?.id === "copy-text") + 1, 0, (
        <Menu.MenuItem
            id="pc-trivia-ai"
            label={t(plugin.triviaAI.text.answerWithAi)}
            icon={RobotIcon}
            leadingAccessory={{ type: "icon", icon: RobotIcon }}
            action={async () => {
                const payload = await getPayload(message);
                if (!payload) return;

                const ans = await getResponse(payload);
                handleResponse(message, ans);
            }}
        />
    ));
};

export default definePlugin({
    name: "TriviaAI",
    description: () => t(plugin.triviaAI.description),
    dependencies: ["MessagePopoverAPI"],
    tags: ["appearance", "customisation", "fun"],
    authors: [PcDevs.yash, PcDevs.MutanPlex],
    settings,
    contextMenus: {
        "message": messageCtxPatch
    },
    messagePopoverButton: {
        icon: RobotIcon,
        render(message: Message) {
            if (!message.content.trim() && !message.embeds.length && (!settings.store.supportImages || !message.attachments.some(att => att.content_type?.startsWith("image/")))) return null;

            return {
                label: t(plugin.triviaAI.text.answerWithAi),
                icon: RobotIcon,
                message,
                channel: ChannelStore.getChannel(message.channel_id),
                onClick: async () => {
                    const payload = await getPayload(message);
                    if (!payload) return;

                    const ans = await getResponse(payload);
                    handleResponse(message, ans);
                }
            };
        }
    }
});
