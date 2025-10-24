/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
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

import { t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { MessageFlags } from "@plexcord/discord-types/enums";
import { Devs } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";
import { findByPropsLazy } from "@webpack";
import { FluxDispatcher, MessageTypeSets, PermissionsBits, PermissionStore, UserStore, WindowStore } from "@webpack/common";
import NoReplyMentionPlugin from "plugins/noReplyMention";

const MessageActions = findByPropsLazy("deleteMessage", "startEditMessage");
const EditStore = findByPropsLazy("isEditing", "isEditingAny");

let isDeletePressed = false;
const keydown = (e: KeyboardEvent) => e.key === "Backspace" && (isDeletePressed = true);
const keyup = (e: KeyboardEvent) => e.key === "Backspace" && (isDeletePressed = false);
const focusChanged = () => !WindowStore.isFocused() && (isDeletePressed = false);

const settings = definePluginSettings({
    enableDeleteOnClick: {
        get label() {
            return t("plugin.messageClickActions.option.enableDeleteOnClick.label");
        },
        get description() {
            return t("plugin.messageClickActions.option.enableDeleteOnClick.description");
        },
        type: OptionType.BOOLEAN,
        default: true
    },
    enableDoubleClickToEdit: {
        get label() {
            return t("plugin.messageClickActions.option.enableDoubleClickToEdit.label");
        },
        get description() {
            return t("plugin.messageClickActions.option.enableDoubleClickToEdit.description");
        },
        type: OptionType.BOOLEAN,
        default: true
    },
    enableDoubleClickToReply: {
        get label() {
            return t("plugin.messageClickActions.option.enableDoubleClickToReply.label");
        },
        get description() {
            return t("plugin.messageClickActions.option.enableDoubleClickToReply.description");
        },
        type: OptionType.BOOLEAN,
        default: true
    },
    requireModifier: {
        get label() {
            return t("plugin.messageClickActions.option.requireModifier.label");
        },
        get description() {
            return t("plugin.messageClickActions.option.requireModifier.description");
        },
        type: OptionType.BOOLEAN,
        default: false
    }
});

export default definePlugin({
    name: "MessageClickActions",
    description: "Hold Backspace and click to delete, double click to edit/reply",
    authors: [Devs.Ven],

    get displayDescription() {
        return t("plugin.messageClickActions.description");
    },

    settings,

    start() {
        document.addEventListener("keydown", keydown);
        document.addEventListener("keyup", keyup);
        WindowStore.addChangeListener(focusChanged);
    },

    stop() {
        document.removeEventListener("keydown", keydown);
        document.removeEventListener("keyup", keyup);
        WindowStore.removeChangeListener(focusChanged);
    },

    onMessageClick(msg, channel, event) {
        const isMe = msg.author.id === UserStore.getCurrentUser().id;
        if (!isDeletePressed) {
            if (event.detail < 2) return;
            if (settings.store.requireModifier && !event.ctrlKey && !event.shiftKey) return;
            if (channel.guild_id && !PermissionStore.can(PermissionsBits.SEND_MESSAGES, channel)) return;
            if (msg.deleted === true) return;

            if (isMe) {
                if (!settings.store.enableDoubleClickToEdit || EditStore.isEditing(channel.id, msg.id) || msg.state !== "SENT") return;

                MessageActions.startEditMessage(channel.id, msg.id, msg.content);
                event.preventDefault();
            } else {
                if (!settings.store.enableDoubleClickToReply) return;

                if (!MessageTypeSets.REPLYABLE.has(msg.type) || msg.hasFlag(MessageFlags.EPHEMERAL)) return;

                const isShiftPress = event.shiftKey && !settings.store.requireModifier;
                const shouldMention = Plexcord.Plugins.isPluginEnabled(NoReplyMentionPlugin.name)
                    ? NoReplyMentionPlugin.shouldMention(msg, isShiftPress)
                    : !isShiftPress;

                FluxDispatcher.dispatch({
                    type: "CREATE_PENDING_REPLY",
                    channel,
                    message: msg,
                    shouldMention,
                    showMentionToggle: channel.guild_id !== null
                });
            }
        } else if (settings.store.enableDeleteOnClick && (isMe || PermissionStore.can(PermissionsBits.MANAGE_MESSAGES, channel))) {
            if (msg.deleted) {
                FluxDispatcher.dispatch({
                    type: "MESSAGE_DELETE",
                    channelId: channel.id,
                    id: msg.id,
                    mlDeleted: true
                });
            } else {
                MessageActions.deleteMessage(channel.id, msg.id);
            }
            event.preventDefault();
        }
    },
});
