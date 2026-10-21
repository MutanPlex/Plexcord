/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2026 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { CloudUploadPlatform } from "@plexcord/discord-types/enums";
import { openPrivateChannel, sendMessage } from "@utils/discord";
import { sleep } from "@utils/misc";
import { ChannelStore, CloudUploader, IconUtils, RelationshipStore, showToast, UserStore } from "@webpack/common";

import type { FormFieldOption, FormSubmitExtras, PaletteCommand } from "../api/types";
import { fuzzyScore } from "../search/ranker";
import { SendIcon } from "../ui/icons";

function friendOptions(query: string): FormFieldOption[] {
    const options = RelationshipStore.getFriendIDs()
        .map(id => UserStore.getUser(id))
        .filter(user => user != null)
        .map(user => ({
            value: user.id,
            label: user.globalName || user.username,
            icon: IconUtils.getUserAvatarURL(user, false, 64)
        }));

    const trimmed = query.trim();
    if (!trimmed) return options;

    return options
        .map(option => ({ option, score: fuzzyScore(trimmed, option.label) }))
        .filter(entry => entry.score > 0)
        .sort((a, b) => b.score - a.score)
        .map(entry => entry.option);
}

async function resolveDmChannel(userId: string): Promise<string | null> {
    const result = await Promise.resolve(openPrivateChannel(userId, true));
    if (typeof result === "string") return result;

    const existing = ChannelStore.getDMFromUserId(userId);
    if (existing) return existing;

    for (let attempt = 0; attempt < 20; attempt++) {
        const channelId = ChannelStore.getDMFromUserId(userId);
        if (channelId) return channelId;
        await sleep(150);
    }
    return null;
}

export const sendDmCommand: PaletteCommand = {
    id: "messaging.sendDm",
    title: t(plugin.commandPalette.text.sendDm),
    section: t(plugin.commandPalette.text.sectionMessaging),
    keywords: ["dm", "message", "send", "direct message"],
    icon: SendIcon,
    page: () => ({
        title: t(plugin.commandPalette.text.sendDm),
        icon: SendIcon,
        spec: {
            type: "form",
            submitLabel: t(plugin.commandPalette.text.sendDm),
            fields: [
                { key: "recipient", label: t(plugin.commandPalette.text.recipient), type: "picker", placeholder: t(plugin.commandPalette.text.searchFriends), suggestions: friendOptions },
                { key: "message", label: t(plugin.commandPalette.text.message), type: "textarea", placeholder: t(plugin.commandPalette.text.messageContent), markdown: true, attachments: true },
            ],
            validate(values, extras?: FormSubmitExtras) {
                if (!UserStore.getUser(values.recipient)) return t(plugin.commandPalette.text.pickRecipient);
                const files = extras?.files?.message ?? [];
                if (!values.message.trim() && files.length === 0) return t(plugin.commandPalette.text.addMessageOrFile);
                return null;
            },
            async submit(values, ctx, extras) {
                const channelId = await resolveDmChannel(values.recipient);
                if (!channelId) throw new Error("Unable to open a DM with that user.");

                const files = extras?.files?.message ?? [];
                const uploads = files.map(file => new CloudUploader({ file, platform: CloudUploadPlatform.WEB }, channelId));

                await sendMessage(channelId, { content: values.message.trim() }, true, {
                    attachmentsToUpload: uploads,
                });

                const user = UserStore.getUser(values.recipient);
                showToast({ text: t(plugin.commandPalette.toast.messageSentToUsername, { username: user.globalName || user.username }), variant: "success" });
                ctx.close();
            }
        }
    })
};
