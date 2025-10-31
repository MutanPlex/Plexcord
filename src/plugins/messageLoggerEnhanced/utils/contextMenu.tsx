/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { addContextMenuPatch, NavContextMenuPatchCallback, removeContextMenuPatch } from "@api/ContextMenu";
import { t } from "@api/i18n";
import { openLogModal } from "@plugins/messageLoggerEnhanced/components/LogsModal";
import { deleteMessageIDB } from "@plugins/messageLoggerEnhanced/db";
import { settings } from "@plugins/messageLoggerEnhanced/index";
import { FluxDispatcher, Menu, MessageActions, React, Toasts, UserStore } from "@webpack/common";

import { addToXAndRemoveFromOpposite, ListType, removeFromX } from ".";

const idFunctions = {
    Server: props => props?.guild?.id,
    User: props => props?.message?.author?.id || props?.user?.id,
    Channel: props => props.message?.channel_id || props.channel?.id
} as const;

type idKeys = keyof typeof idFunctions;

function renderListOption(listType: ListType, IdType: idKeys, props: any) {
    const id = idFunctions[IdType](props);
    if (!id) return null;

    const isBlocked = settings.store[listType].includes(id);
    const oppositeListType = listType === "blacklistedIds" ? "whitelistedIds" : "blacklistedIds";
    const isOppositeBlocked = settings.store[oppositeListType].includes(id);
    const translatedType = t(`plugin.messageLoggerEnhanced.type.${IdType.toLowerCase()}`);
    const listAction = listType === "blacklistedIds" ? "blacklist" : "whitelist";

    const addToList = () => addToXAndRemoveFromOpposite(listType, id);
    const removeFromList = () => removeFromX(listType, id);

    return (
        <Menu.MenuItem
            id={`${listType}-${IdType}-${id}`}
            label={
                isOppositeBlocked
                    ? t(`plugin.messageLoggerEnhanced.context.move${IdType}To${listAction === "blacklist" ? "Blacklist" : "Whitelist"}`)
                    : isBlocked
                        ? t(`plugin.messageLoggerEnhanced.context.remove${IdType}From${listAction === "blacklist" ? "Blacklist" : "Whitelist"}`)
                        : t(`plugin.messageLoggerEnhanced.context.add${IdType}To${listAction === "blacklist" ? "Blacklist" : "Whitelist"}`)
            }
            action={isBlocked ? removeFromList : addToList}
        />
    );
}

function renderOpenLogs(idType: idKeys, props: any) {
    const id = idFunctions[idType](props);
    if (!id) return null;

    const translatedType = t(`plugin.messageLoggerEnhanced.type.${idType.toLowerCase()}`);

    return (
        <Menu.MenuItem
            id={`open-logs-for-${idType.toLowerCase()}`}
            label={t("plugin.messageLoggerEnhanced.context.openLogsFor", { name: translatedType })}
            action={() => openLogModal(`${idType.toLowerCase()}:${id}`)}
        />
    );
}

export const contextMenuPath: NavContextMenuPatchCallback = (children, props) => {
    if (!props) return;

    if (!children.some(child => child?.props?.id === "message-logger")) {
        if (props.navId === "message" && (props.message?.deleted || props.message?.editHistory?.length > 0)) {
            children.push(
                <Menu.MenuItem
                    id="remove-message"
                    label={props.message?.deleted ? t("plugin.messageLoggerEnhanced.context.removeMessage") : t("plugin.messageLoggerEnhanced.context.removeMessageHistory")}
                    color="danger"
                    action={() =>
                        deleteMessageIDB(props.message.id)
                            .then(() => {
                                if (props.message.deleted) {
                                    FluxDispatcher.dispatch({
                                        type: "MESSAGE_DELETE",
                                        channelId: props.message.channel_id,
                                        id: props.message.id,
                                        mlDeleted: true
                                    });
                                } else {
                                    props.message.editHistory = [];
                                }
                            }).catch(() => Toasts.show({
                                type: Toasts.Type.FAILURE,
                                message: t("plugin.messageLoggerEnhanced.failedToRemove"),
                                id: Toasts.genId()
                            }))

                    }
                />
            );
        }

        children.push(
            <Menu.MenuItem
                id="message-logger"
                label={t("plugin.messageLoggerEnhanced.context.title")}
            >

                <Menu.MenuItem
                    id="open-logs"
                    label={t("plugin.messageLoggerEnhanced.context.openLogs")}
                    action={() => openLogModal()}
                />

                {Object.keys(idFunctions).map(IdType => renderOpenLogs(IdType as idKeys, props))}

                <Menu.MenuSeparator />

                {Object.keys(idFunctions).map(IdType => (
                    <React.Fragment key={IdType}>
                        {renderListOption("blacklistedIds", IdType as idKeys, props)}
                        {renderListOption("whitelistedIds", IdType as idKeys, props)}
                    </React.Fragment>
                ))}{
                    settings.store.hideMessageFromMessageLoggers
                    && props.navId === "message"
                    && props.message?.author?.id === UserStore.getCurrentUser().id
                    && props.message?.deleted === false
                    && (
                        <>
                            <Menu.MenuSeparator />
                            <Menu.MenuItem
                                id="hide-from-message-loggers"
                                label={t("plugin.messageLoggerEnhanced.context.deleteMessageHide")}
                                color="danger"

                                action={async () => {
                                    await MessageActions.deleteMessage(props.message.channel_id, props.message.id);
                                    MessageActions._sendMessage(props.message.channel_id, {
                                        "content": settings.store.hideMessageFromMessageLoggersDeletedMessage,
                                        "tts": false,
                                        "invalidEmojis": [],
                                        "validNonShortcutEmojis": []
                                    }, { nonce: props.message.id });
                                }}

                            />
                        </>
                    )
                }
            </Menu.MenuItem>
        );
    }
};

export const setupContextMenuPatches = () => {
    addContextMenuPatch("message", contextMenuPath);
    addContextMenuPatch("channel-context", contextMenuPath);
    addContextMenuPatch("user-context", contextMenuPath);
    addContextMenuPatch("guild-context", contextMenuPath);
    addContextMenuPatch("gdm-context", contextMenuPath);
};

export const removeContextMenuBindings = () => {
    removeContextMenuPatch("message", contextMenuPath);
    removeContextMenuPatch("channel-context", contextMenuPath);
    removeContextMenuPatch("user-context", contextMenuPath);
    removeContextMenuPatch("guild-context", contextMenuPath);
    removeContextMenuPatch("gdm-context", contextMenuPath);
};
