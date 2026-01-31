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

import { plugin, t } from "@api/i18n";
import { isPluginEnabled } from "@api/PluginManager";
import { definePluginSettings } from "@api/Settings";
import type { Channel, Message } from "@plexcord/discord-types";
import { ApplicationIntegrationType, MessageFlags } from "@plexcord/discord-types/enums";
import NoReplyMentionPlugin from "@plugins/noReplyMention";
import { Devs, PcDevs } from "@utils/constants";
import { copyWithToast, insertTextIntoChatInputBox } from "@utils/discord";
import { Logger } from "@utils/Logger";
import definePlugin, { OptionType } from "@utils/types";
import { AuthenticationStore, Constants, EditMessageStore, FluxDispatcher, MessageActions, MessageTypeSets, PermissionsBits, PermissionStore, PinActions, RestAPI, Toasts, WindowStore } from "@webpack/common";

type Modifier = "NONE" | "SHIFT" | "CTRL" | "ALT" | "BACKSPACE" | "DELETE";
type ClickAction = "NONE" | "DELETE" | "COPY_LINK" | "COPY_ID" | "COPY_CONTENT" | "COPY_USER_ID" | "EDIT" | "REPLY" | "REACT" | "OPEN_THREAD" | "OPEN_TAB" | "EDIT_REPLY" | "QUOTE" | "PIN";

const actions: { label: () => string; value: ClickAction; }[] = [
    { label: () => t(plugin.messageClickActions.actions.none), value: "NONE" },
    { label: () => t(plugin.messageClickActions.actions.delete), value: "DELETE" },
    { label: () => t(plugin.messageClickActions.actions.copyLink), value: "COPY_LINK" },
    { label: () => t(plugin.messageClickActions.actions.copyID), value: "COPY_ID" },
    { label: () => t(plugin.messageClickActions.actions.copyContent), value: "COPY_CONTENT" },
    { label: () => t(plugin.messageClickActions.actions.copyUserID), value: "COPY_USER_ID" },
    { label: () => t(plugin.messageClickActions.actions.edit), value: "EDIT" },
    { label: () => t(plugin.messageClickActions.actions.reply), value: "REPLY" },
    { label: () => t(plugin.messageClickActions.actions.react), value: "REACT" },
    { label: () => t(plugin.messageClickActions.actions.openThread), value: "OPEN_THREAD" },
    { label: () => t(plugin.messageClickActions.actions.openTab), value: "OPEN_TAB" }
];

const doubleClickOwnActions: { label: () => string; value: ClickAction; }[] = [
    { label: () => t(plugin.messageClickActions.actions.none), value: "NONE" },
    { label: () => t(plugin.messageClickActions.actions.delete), value: "DELETE" },
    { label: () => t(plugin.messageClickActions.actions.reply), value: "REPLY" },
    { label: () => t(plugin.messageClickActions.actions.edit), value: "EDIT" },
    { label: () => t(plugin.messageClickActions.actions.quote), value: "QUOTE" },
    { label: () => t(plugin.messageClickActions.actions.copyContent), value: "COPY_CONTENT" },
    { label: () => t(plugin.messageClickActions.actions.copyLink), value: "COPY_LINK" },
    { label: () => t(plugin.messageClickActions.actions.copyID), value: "COPY_ID" },
    { label: () => t(plugin.messageClickActions.actions.copyUserID), value: "COPY_USER_ID" },
    { label: () => t(plugin.messageClickActions.actions.react), value: "REACT" },
    { label: () => t(plugin.messageClickActions.actions.pin), value: "PIN" }
];

const doubleClickOthersActions: { label: () => string; value: ClickAction; }[] = [
    { label: () => t(plugin.messageClickActions.actions.none), value: "NONE" },
    { label: () => t(plugin.messageClickActions.actions.delete), value: "DELETE" },
    { label: () => t(plugin.messageClickActions.actions.reply), value: "REPLY" },
    { label: () => t(plugin.messageClickActions.actions.quote), value: "QUOTE" },
    { label: () => t(plugin.messageClickActions.actions.copyContent), value: "COPY_CONTENT" },
    { label: () => t(plugin.messageClickActions.actions.copyLink), value: "COPY_LINK" },
    { label: () => t(plugin.messageClickActions.actions.copyID), value: "COPY_ID" },
    { label: () => t(plugin.messageClickActions.actions.copyUserID), value: "COPY_USER_ID" },
    { label: () => t(plugin.messageClickActions.actions.react), value: "REACT" },
    { label: () => t(plugin.messageClickActions.actions.pin), value: "PIN" }
];

const modifiers: { label: string; value: Modifier; }[] = [
    { label: "None", value: "NONE" },
    { label: "Shift", value: "SHIFT" },
    { label: "Ctrl", value: "CTRL" },
    { label: "Alt", value: "ALT" }
];

const singleClickModifiers: { label: string; value: Modifier; }[] = [
    { label: "Backspace", value: "BACKSPACE" },
    { label: "Delete", value: "DELETE" },
    ...modifiers
];

const pressedModifiers = new Set<Modifier>();
const keydown = (e: KeyboardEvent) => {
    const mod = modifierFromKey(e);
    if (mod) pressedModifiers.add(mod);
    if (e.key === "Backspace") pressedModifiers.add("BACKSPACE");
    if (e.key === "Delete") pressedModifiers.add("DELETE");
};
const keyup = (e: KeyboardEvent) => {
    const mod = modifierFromKey(e);
    if (mod) pressedModifiers.delete(mod);
    if (e.key === "Backspace") pressedModifiers.delete("BACKSPACE");
    if (e.key === "Delete") pressedModifiers.delete("DELETE");
};
const focusChanged = () => {
    if (!WindowStore.isFocused()) {
        pressedModifiers.clear();
    }
};

let lastMouseDownTime = 0;
const onMouseDown = () => {
    lastMouseDownTime = Date.now();
};

function modifierFromKey(e: KeyboardEvent): Modifier | null {
    if (e.key === "Shift") return "SHIFT";
    if (e.key === "Control") return "CTRL";
    if (e.key === "Alt") return "ALT";
    return null;
}

function isModifierPressed(modifier: Modifier): boolean {
    if (modifier === "NONE") return pressedModifiers.size === 0;
    return pressedModifiers.has(modifier);
}

let doubleClickTimeout: ReturnType<typeof setTimeout> | null = null;
let singleClickTimeout: ReturnType<typeof setTimeout> | null = null;
let pendingDoubleClickAction: (() => void) | null = null;

const settings = definePluginSettings({
    reactEmoji: {
        label: () => t(plugin.messageClickActions.option.reactEmoji.label),
        description: () => t(plugin.messageClickActions.option.reactEmoji.description),
        type: OptionType.STRING,
        default: "💀"
    },
    singleClickAction: {
        label: () => t(plugin.messageClickActions.option.singleClickAction.label),
        description: () => t(plugin.messageClickActions.option.singleClickAction.description),
        type: OptionType.SELECT,
        options: actions,
        default: "DELETE"
    },
    singleClickModifier: {
        label: () => t(plugin.messageClickActions.option.singleClickModifier.label),
        description: () => t(plugin.messageClickActions.option.singleClickModifier.description),
        type: OptionType.SELECT,
        options: singleClickModifiers,
        default: "BACKSPACE"
    },
    doubleClickAction: {
        label: () => t(plugin.messageClickActions.option.doubleClickAction.label),
        description: () => t(plugin.messageClickActions.option.doubleClickAction.description),
        type: OptionType.SELECT,
        options: doubleClickOwnActions,
        default: "EDIT"
    },
    doubleClickOthersAction: {
        label: () => t(plugin.messageClickActions.option.doubleClickOthersAction.label),
        description: () => t(plugin.messageClickActions.option.doubleClickOthersAction.description),
        type: OptionType.SELECT,
        options: doubleClickOthersActions,
        default: "REPLY"
    },
    doubleClickModifier: {
        label: () => t(plugin.messageClickActions.option.doubleClickModifier.label),
        description: () => t(plugin.messageClickActions.option.doubleClickModifier.description),
        type: OptionType.SELECT,
        options: modifiers,
        default: "NONE"
    },
    tripleClickAction: {
        label: () => t(plugin.messageClickActions.option.tripleClickAction.label),
        description: () => t(plugin.messageClickActions.option.tripleClickAction.description),
        type: OptionType.SELECT,
        options: actions,
        default: "REACT"
    },
    tripleClickModifier: {
        label: () => t(plugin.messageClickActions.option.tripleClickModifier.label),
        description: () => t(plugin.messageClickActions.option.tripleClickModifier.description),
        type: OptionType.SELECT,
        options: modifiers,
        default: "NONE"
    },
    disableInDms: {
        label: () => t(plugin.messageClickActions.option.disableInDms.label),
        description: () => t(plugin.messageClickActions.option.disableInDms.description),
        type: OptionType.BOOLEAN,
        default: false
    },
    disableInSystemDms: {
        label: () => t(plugin.messageClickActions.option.disableInSystemDms.label),
        description: () => t(plugin.messageClickActions.option.disableInSystemDms.description),
        type: OptionType.BOOLEAN,
        default: true
    },
    clickTimeout: {
        label: () => t(plugin.messageClickActions.option.clickTimeout.label),
        description: () => t(plugin.messageClickActions.option.clickTimeout.description),
        type: OptionType.NUMBER,
        default: 300
    },
    selectionHoldTimeout: {
        label: () => t(plugin.messageClickActions.option.selectionHoldTimeout.label),
        description: () => t(plugin.messageClickActions.option.selectionHoldTimeout.description),
        type: OptionType.NUMBER,
        default: 300
    },
    quoteWithReply: {
        label: () => t(plugin.messageClickActions.option.quoteWithReply.label),
        description: () => t(plugin.messageClickActions.option.quoteWithReply.description),
        type: OptionType.BOOLEAN,
        default: true
    },
    useSelectionForQuote: {
        label: () => t(plugin.messageClickActions.option.useSelectionForQuote.label),
        description: () => t(plugin.messageClickActions.option.useSelectionForQuote.description),
        type: OptionType.BOOLEAN,
        default: false
    }
});

function showWarning(message: string) {
    Toasts.show({
        message,
        type: Toasts.Type.FAILURE,
        id: Toasts.genId(),
        options: {
            duration: 3000
        }
    });
}

const canSend = (channel: Channel) =>
    !channel.guild_id || PermissionStore.can(PermissionsBits.SEND_MESSAGES, channel);

const canDelete = (msg: Message, channel: Channel) => {
    const myId = AuthenticationStore.getId();
    return msg.author.id === myId ||
        PermissionStore.can(PermissionsBits.MANAGE_MESSAGES, channel) ||
        msg.interactionMetadata?.authorizing_integration_owners?.[ApplicationIntegrationType.USER_INSTALL] === myId;
};

const canReply = (msg: Message) =>
    MessageTypeSets.REPLYABLE.has(msg.type) && !msg.hasFlag(MessageFlags.EPHEMERAL);

async function toggleReaction(channelId: string, messageId: string, emoji: string, channel: Channel, msg: Message) {
    const trimmed = emoji.trim();
    if (!trimmed) return;

    if (channel.guild_id && (!PermissionStore.can(PermissionsBits.ADD_REACTIONS, channel) || !PermissionStore.can(PermissionsBits.READ_MESSAGE_HISTORY, channel))) {
        showWarning(t(plugin.messageClickActions.missingPermissions.react));
        return;
    }

    const customMatch = trimmed.match(/^:?([\w-]+):(\d+)$/);
    const emojiParam = customMatch
        ? `${customMatch[1]}:${customMatch[2]}`
        : trimmed;

    const hasReacted = msg.reactions?.some(r => {
        const reactionEmoji = r.emoji.id
            ? `${r.emoji.name}:${r.emoji.id}`
            : r.emoji.name;
        return r.me && reactionEmoji === emojiParam;
    });

    try {
        if (hasReacted) {
            await RestAPI.del({
                url: Constants.Endpoints.REACTION(channelId, messageId, emojiParam, "@me")
            });
        } else {
            await RestAPI.put({
                url: Constants.Endpoints.REACTION(channelId, messageId, emojiParam, "@me")
            });
        }
    } catch (e) {
        new Logger("MessageClickActions").error("Failed to toggle reaction:", e);
    }
}

function copyLink(msg: Message, channel: Channel) {
    copyWithToast(`https://discord.com/channels/${channel.guild_id ?? "@me"}/${channel.id}/${msg.id}`, t(plugin.messageClickActions.linkCopied));
}

function togglePin(channel: Channel, msg: Message) {
    if (!PermissionStore.can(PermissionsBits.MANAGE_MESSAGES, channel)) {
        showWarning(t(plugin.messageClickActions.missingPermissions.pin));
        return;
    }

    if (msg.pinned) {
        PinActions.unpinMessage(channel, msg.id);
    } else {
        PinActions.pinMessage(channel, msg.id);
    }
}

function quoteMessage(channel: Channel, msg: Message) {
    if (!canReply(msg)) {
        showWarning(t(plugin.messageClickActions.cannotQuote));
        return;
    }

    let { content } = msg;
    if (settings.store.useSelectionForQuote) {
        const selection = window.getSelection()?.toString().trim();
        if (selection && msg.content?.includes(selection)) {
            content = selection;
        }
    }
    if (!content) return;

    const quoteText = content.split("\n").map(line => `> ${line}`).join("\n") + "\n";

    insertTextIntoChatInputBox(quoteText);

    if (settings.store.quoteWithReply) {
        FluxDispatcher.dispatch({
            type: "CREATE_PENDING_REPLY",
            channel,
            message: msg,
            shouldMention: false,
            showMentionToggle: !channel.isPrivate?.()
        });
    }
}

function openInNewTab(msg: Message, channel: Channel) {
    const guildId = channel.guild_id ?? "@me";
    const link = `https://discord.com/channels/${guildId}/${channel.id}/${msg.id}`;
    PlexcordNative.native.openExternal(link);
}

function openInThread(msg: Message, channel: Channel) {
    FluxDispatcher.dispatch({
        type: "OPEN_THREAD_FLOW_MODAL",
        channelId: channel.id,
        messageId: msg.id
    });
}

async function executeAction(
    action: ClickAction,
    msg: Message,
    channel: Channel,
    event: MouseEvent
) {
    const myId = AuthenticationStore.getId();
    const isMe = msg.author.id === myId;

    switch (action) {
        case "DELETE":
            if (!canDelete(msg, channel)) return;

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
            break;

        case "COPY_LINK":
            copyLink(msg, channel);
            event.preventDefault();
            break;

        case "COPY_ID":
            copyWithToast(msg.id, t(plugin.messageClickActions.copy.messageId));
            event.preventDefault();
            break;

        case "COPY_CONTENT":
            copyWithToast(msg.content || "", t(plugin.messageClickActions.copy.messageContent));
            event.preventDefault();
            break;

        case "COPY_USER_ID":
            copyWithToast(msg.author.id, t(plugin.messageClickActions.copy.userId));
            event.preventDefault();
            break;

        case "EDIT":
            if (!isMe) return;
            if (EditMessageStore.isEditing(channel.id, msg.id) || msg.state !== "SENT") return;
            MessageActions.startEditMessage(channel.id, msg.id, msg.content);
            event.preventDefault();
            break;

        case "REPLY":
            if (!canReply(msg)) return;
            if (!canSend(channel)) return;

            const isShiftPress = event.shiftKey;
            const shouldMention = isPluginEnabled(NoReplyMentionPlugin.name)
                ? NoReplyMentionPlugin.shouldMention(msg, isShiftPress)
                : !isShiftPress;

            FluxDispatcher.dispatch({
                type: "CREATE_PENDING_REPLY",
                channel,
                message: msg,
                shouldMention,
                showMentionToggle: channel.guild_id !== null
            });
            event.preventDefault();
            break;

        case "EDIT_REPLY":
            if (isMe) {
                if (EditMessageStore.isEditing(channel.id, msg.id) || msg.state !== "SENT") return;
                MessageActions.startEditMessage(channel.id, msg.id, msg.content);
            } else {
                if (!canReply(msg)) return;
                if (!canSend(channel)) return;

                const shouldMentionReply = isPluginEnabled(NoReplyMentionPlugin.name)
                    ? NoReplyMentionPlugin.shouldMention(msg, false)
                    : true;

                FluxDispatcher.dispatch({
                    type: "CREATE_PENDING_REPLY",
                    channel,
                    message: msg,
                    shouldMention: shouldMentionReply,
                    showMentionToggle: channel.guild_id !== null
                });
            }
            event.preventDefault();
            break;

        case "QUOTE":
            quoteMessage(channel, msg);
            event.preventDefault();
            break;

        case "PIN":
            togglePin(channel, msg);
            event.preventDefault();
            break;

        case "REACT":
            await toggleReaction(channel.id, msg.id, settings.store.reactEmoji, channel, msg);
            event.preventDefault();
            break;

        case "OPEN_THREAD":
            openInThread(msg, channel);
            event.preventDefault();
            break;

        case "OPEN_TAB":
            openInNewTab(msg, channel);
            event.preventDefault();
            break;

        case "NONE":
            break;
    }
}

export default definePlugin({
    name: "MessageClickActions",
    description: () => t(plugin.messageClickActions.description),
    authors: [Devs.Ven, PcDevs.keyages],
    isModified: true,

    settings,

    start() {
        document.addEventListener("keydown", keydown);
        document.addEventListener("keyup", keyup);
        document.addEventListener("mousedown", onMouseDown);
        WindowStore.addChangeListener(focusChanged);
    },

    stop() {
        document.removeEventListener("keydown", keydown);
        document.removeEventListener("keyup", keyup);
        document.removeEventListener("mousedown", onMouseDown);
        WindowStore.removeChangeListener(focusChanged);

        if (doubleClickTimeout) {
            clearTimeout(doubleClickTimeout);
            doubleClickTimeout = null;
        }
        if (singleClickTimeout) {
            clearTimeout(singleClickTimeout);
            singleClickTimeout = null;
        }
        pendingDoubleClickAction = null;
    },

    onMessageClick(msg, channel, event) {
        let target = event.target as HTMLElement;
        if (target.nodeType === Node.TEXT_NODE) target = target.parentElement as HTMLElement;

        const myId = AuthenticationStore.getId();
        const isMe = msg.author.id === myId;
        const isDM = channel.isDM();
        const isSystemDM = channel.isSystemDM();

        if ((settings.store.disableInDms && isDM) || (settings.store.disableInSystemDms && isSystemDM)) return;

        const singleClickAction = settings.store.singleClickAction as ClickAction;
        const doubleClickAction = isMe
            ? (settings.store.doubleClickAction as ClickAction)
            : (settings.store.doubleClickOthersAction as ClickAction);
        const tripleClickAction = settings.store.tripleClickAction as ClickAction;

        const singleClickModifier = settings.store.singleClickModifier as Modifier;
        const doubleClickModifier = settings.store.doubleClickModifier as Modifier;
        const tripleClickModifier = settings.store.tripleClickModifier as Modifier;

        const isSingleClick = event.detail === 1 && event.button === 0;
        const isDoubleClick = event.detail === 2;
        const isTripleClick = event.detail === 3;

        if (Date.now() - lastMouseDownTime > settings.store.selectionHoldTimeout) return;

        if (singleClickTimeout) {
            clearTimeout(singleClickTimeout);
            singleClickTimeout = null;
        }

        if (isTripleClick) {
            if (doubleClickTimeout) {
                clearTimeout(doubleClickTimeout);
                doubleClickTimeout = null;
                pendingDoubleClickAction = null;
            }

            if (isModifierPressed(tripleClickModifier) && tripleClickAction !== "NONE") {
                executeAction(tripleClickAction, msg, channel, event);
            }
            return;
        }

        const canDoubleClick = (isModifierPressed(doubleClickModifier) || doubleClickModifier === "NONE") && doubleClickAction !== "NONE";
        const canTripleClick = isModifierPressed(tripleClickModifier) && tripleClickAction !== "NONE";

        if (isDoubleClick) {
            if (singleClickTimeout) {
                clearTimeout(singleClickTimeout);
                singleClickTimeout = null;
            }

            const executeDoubleClick = () => {
                if (!canSend(channel)) return;
                if (msg.deleted === true) return;
                if (canDoubleClick) {
                    executeAction(doubleClickAction, msg, channel, event);
                }
            };

            if (canTripleClick && canDoubleClick) {
                if (doubleClickTimeout) {
                    clearTimeout(doubleClickTimeout);
                }
                pendingDoubleClickAction = executeDoubleClick;
                doubleClickTimeout = setTimeout(() => {
                    pendingDoubleClickAction?.();
                    pendingDoubleClickAction = null;
                    doubleClickTimeout = null;
                }, settings.store.clickTimeout);
            } else {
                executeDoubleClick();
            }
            event.preventDefault();
            return;
        }

        if (isSingleClick) {
            const shouldExecuteSingle = isModifierPressed(singleClickModifier) && singleClickAction !== "NONE";
            const executeSingleClick = () => {
                if (shouldExecuteSingle) {
                    executeAction(singleClickAction, msg, channel, event);
                }
            };

            if (canDoubleClick && shouldExecuteSingle && singleClickModifier === "NONE") {
                singleClickTimeout = setTimeout(() => {
                    executeSingleClick();
                    singleClickTimeout = null;
                }, settings.store.clickTimeout);
            } else {
                executeSingleClick();
            }
        }
    },
});
