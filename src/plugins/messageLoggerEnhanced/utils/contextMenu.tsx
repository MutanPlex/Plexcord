/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { addContextMenuPatch, NavContextMenuPatchCallback, removeContextMenuPatch } from "@api/ContextMenu";
import { openLogModal } from "@plugins/messageLoggerEnhanced/components/LogsModal";
import { deleteMessageIDB } from "@plugins/messageLoggerEnhanced/db";
import { settings } from "@plugins/messageLoggerEnhanced/index";
import { FluxDispatcher, Menu, React, Toasts } from "@webpack/common";

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
    const list = listType === "blacklistedIds" ? "Blacklist" : "Whitelist";

    const addToList = () => addToXAndRemoveFromOpposite(listType, id);
    const removeFromList = () => removeFromX(listType, id);

    return (
        <Menu.MenuItem
            id={`${listType}-${IdType}-${id}`}
            label={
                isOppositeBlocked
                    ? `Move ${IdType} to ${list}`
                    : isBlocked ? `Remove ${IdType} From ${list}` : `${list} ${IdType}`
            }
            action={isBlocked ? removeFromList : addToList}
        />
    );
}

function renderOpenLogs(idType: idKeys, props: any) {
    const id = idFunctions[idType](props);
    if (!id) return null;

    return (
        <Menu.MenuItem
            id={`open-logs-for-${idType.toLowerCase()}`}
            label={`Open Logs For ${idType}`}
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
                    label={props.message?.deleted ? "Remove Message (Permanent)" : "Remove Message History (Permanent)"}
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
                                message: "Failed to remove message",
                                id: Toasts.genId()
                            }))

                    }
                />
            );
        }

        children.push(
            <Menu.MenuItem
                id="message-logger"
                label="Message Logger"
            >

                <Menu.MenuItem
                    id="open-logs"
                    label="Open Logs"
                    action={() => openLogModal()}
                />

                {Object.keys(idFunctions).map(IdType => renderOpenLogs(IdType as idKeys, props))}

                <Menu.MenuSeparator />

                {Object.keys(idFunctions).map(IdType => (
                    <React.Fragment key={IdType}>
                        {renderListOption("blacklistedIds", IdType as idKeys, props)}
                        {renderListOption("whitelistedIds", IdType as idKeys, props)}
                    </React.Fragment>
                ))}
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
