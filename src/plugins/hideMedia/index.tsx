/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2022 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

import "./styles.css";

import { get, set } from "@api/DataStore";
import { t } from "@api/i18n";
import { updateMessage } from "@api/MessageUpdater";
import { ImageInvisible, ImageVisible } from "@components/Icons";
import { Message } from "@plexcord/discord-types";
import { Devs } from "@utils/constants";
import { classes } from "@utils/misc";
import definePlugin from "@utils/types";
import { ChannelStore } from "@webpack/common";

const KEY = "HideAttachments_HiddenIds";

let hiddenMessages = new Set<string>();

async function getHiddenMessages() {
    hiddenMessages = await get(KEY) ?? new Set();
    return hiddenMessages;
}

const saveHiddenMessages = (ids: Set<string>) => set(KEY, ids);

const hasMedia = (msg: Message) => msg.attachments.length > 0 || msg.embeds.length > 0 || msg.stickerItems.length > 0;

async function toggleHide(channelId: string, messageId: string) {
    const ids = await getHiddenMessages();
    if (!ids.delete(messageId))
        ids.add(messageId);

    await saveHiddenMessages(ids);
    updateMessage(channelId, messageId);
}

export default definePlugin({
    name: "HideMedia",
    description: "Hide attachments and embeds for individual messages via hover button",
    authors: [Devs.Ven],
    dependencies: ["MessageUpdaterAPI"],

    get displayDescription() {
        return t("plugin.hideMedia.description");
    },

    patches: [{
        find: "this.renderAttachments(",
        replacement: {
            match: /(?<=\i=)this\.render(?:Attachments|Embeds|StickersAccessories)\((\i)\)/g,
            replace: "$self.shouldHide($1?.id)?null:$&"
        }
    }],
    messagePopoverButton: {
        icon: ImageInvisible,
        render(msg) {
            if (!hasMedia(msg) && !msg.messageSnapshots.some(s => hasMedia(s.message))) return null;

            const isHidden = hiddenMessages.has(msg.id);

            return {
                label: isHidden ? t("plugin.hideMedia.show") : t("plugin.hideMedia.hide"),
                icon: isHidden ? ImageVisible : ImageInvisible,
                message: msg,
                channel: ChannelStore.getChannel(msg.channel_id),
                onClick: () => toggleHide(msg.channel_id, msg.id)
            };
        },
    },

    renderMessageAccessory({ message }) {
        if (!this.shouldHide(message.id)) return null;

        return (
            <span className={classes("pc-hideAttachments-accessory", !message.content && "pc-hideAttachments-no-content")}>
                {t("plugin.hideMedia.hidden")}
            </span>
        );
    },

    async start() {
        await getHiddenMessages();
    },

    stop() {
        hiddenMessages.clear();
    },

    shouldHide(messageId: string) {
        return hiddenMessages.has(messageId);
    }
});
