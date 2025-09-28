/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { t, tJsx } from "@api/i18n";
import { addMessagePreSendListener } from "@api/MessageEvents";
import { Devs } from "@utils/constants";
import definePlugin from "@utils/types";
import { Alerts, ChannelStore, Forms, PermissionsBits, PermissionStore } from "@webpack/common";

import filterList from "./constants";

function escapeRegex(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function warningEmbedNotice(trigger) {
    return new Promise<boolean>(resolve => {
        Alerts.show({
            title: t("plugin.dontFilterMe.alert.title"),
            body: <div>
                <Forms.FormText>
                    {tJsx("plugin.dontFilterMe.alert.content", { trigger })}
                </Forms.FormText>
                <Forms.FormText>
                    {t("plugin.dontFilterMe.alert.content2")}
                </Forms.FormText>
            </div>,
            confirmText: t("plugin.dontFilterMe.alert.confirm"),
            cancelText: t("plugin.dontFilterMe.alert.cancel"),
            onConfirm: () => resolve(true),
            onCloseCallback: () => setImmediate(() => resolve(false)),
        });
    });
}

export default definePlugin({
    name: "DontFilterMe",
    description: "Warns you if your message contains a term in the automod preset list",
    authors: [Devs.Samwich],
    dependencies: ["MessageEventsAPI"],
    start() {
        this.preSend = addMessagePreSendListener(async (channelId, messageObj) => {
            const channel = ChannelStore.getChannel(channelId);
            if (channel.isDM()) return { cancel: false };
            if (PermissionStore.can(PermissionsBits.ADMINISTRATOR, channel) || PermissionStore.can(PermissionsBits.MANAGE_GUILD, channel)) return { cancel: false };

            const escapedStrings = filterList.map(escapeRegex);
            const regexString = escapedStrings.join("|");
            const regex = new RegExp(`(${regexString})`, "i");

            const matches = regex.exec(messageObj.content);
            if (matches) {
                if (!await warningEmbedNotice(matches[0])) {
                    return { cancel: true };
                }
            }
            return { cancel: false };
        });
    }
});
