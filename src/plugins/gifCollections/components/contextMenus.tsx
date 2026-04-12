/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { findGroupChildrenByChildId, NavContextMenuPatchCallback } from "@api/ContextMenu";
import { plugin, t } from "@api/i18n";
import { getGif } from "@plugins/gifCollections/utils/getGif";
import { copyToClipboard } from "@utils/clipboard";
import { Alerts, ContextMenuApi, FluxDispatcher, Menu, showToast, Toasts } from "@webpack/common";

import { settings } from "../settings";
import type { Gif, GifItem, GifPickerInstance } from "../types";
import { addToCollection, cache_collections, deleteCollection, getGifById, getItemCollectionNameFromId, removeFromCollection } from "../utils/collectionManager";
import { stripPrefix } from "../utils/misc";
import { uuidv4 } from "../utils/uuidv4";
import { openCollectionInfoModal, openCreateCollectionModal, openGifInfoModal, openMoveToCollectionModal, openRenameCollectionModal } from "./modals";

function dispatchRefresh(collectionName: string) {
    FluxDispatcher.dispatch({ type: "GIF_PICKER_QUERY", query: "" });
    FluxDispatcher.dispatch({ type: "GIF_PICKER_QUERY", query: collectionName });
}

function AddToCollectionMenu(gif: Gif) {
    return (
        <Menu.MenuItem label={t(plugin.gifCollections.context.collection.add)} key="add-to-collection" id="add-to-collection">
            {cache_collections.length > 0 && cache_collections.map(col => (
                <Menu.MenuItem
                    key={col.name}
                    id={col.name}
                    label={stripPrefix(col.name)}
                    action={() => void addToCollection(col.name, gif)}
                />
            ))}
            {cache_collections.length > 0 && <Menu.MenuSeparator key="separator" />}
            <Menu.MenuItem
                key="create-collection"
                id="create-collection"
                label={t(plugin.gifCollections.context.collection.create)}
                action={() => openCreateCollectionModal(gif)}
            />
        </Menu.MenuItem>
    );
}

export const addCollectionContextMenuPatch: NavContextMenuPatchCallback = (children, props) => {
    if (!props) return;

    const { message, itemSrc, itemHref, target } = props;
    const gif = getGif(message, itemSrc ?? itemHref, target);
    if (!gif) return;

    const group = findGroupChildrenByChildId("open-native-link", children) ?? findGroupChildrenByChildId("copy-link", children);
    if (!group || group.some(child => child?.props?.id === "add-to-collection")) return;

    if (settings.store.showCopyImageLink) {
        group.push(
            <Menu.MenuItem
                label={t(plugin.gifCollections.context.copyImageLink)}
                key="copy-image-link"
                id="copy-image-link"
                action={() => {
                    copyToClipboard(gif.url);
                    showToast(t(plugin.gifCollections.toast.copied), Toasts.Type.SUCCESS);
                }}
            />
        );
    }

    group.push(AddToCollectionMenu(gif));
};

export function RemoveItemContextMenu({ type, nameOrId, instance }: { type: "collection" | "gif"; nameOrId: string; instance: { forceUpdate: () => void; }; }) {
    return (
        <Menu.Menu
            navId="gif-collection-id"
            onClose={() => FluxDispatcher.dispatch({ type: "CONTEXT_MENU_CLOSE" })}
            aria-label={type === "collection" ? t(plugin.gifCollections.context.collection.delete) : t(plugin.gifCollections.context.collection.remove)}
        >
            {type === "collection" && (
                <>
                    <Menu.MenuItem
                        key="collection-information"
                        id="collection-information"
                        label={t(plugin.gifCollections.context.collection.information)}
                        action={() => {
                            const collection = cache_collections.find(c => c.name === nameOrId);
                            if (collection) openCollectionInfoModal(collection);
                        }}
                    />
                    <Menu.MenuSeparator />
                    <Menu.MenuItem
                        key="rename-collection"
                        id="rename-collection"
                        label={t(plugin.gifCollections.context.collection.rename)}
                        action={() => openRenameCollectionModal(nameOrId)}
                    />
                </>
            )}

            {type === "gif" && (
                <>
                    <Menu.MenuItem
                        key="gif-information"
                        id="gif-information"
                        label={t(plugin.gifCollections.context.gif.information)}
                        action={() => {
                            const gif = getGifById(nameOrId);
                            if (gif) openGifInfoModal(gif);
                        }}
                    />
                    <Menu.MenuSeparator />
                    <Menu.MenuItem
                        key="copy-url"
                        id="copy-url"
                        label={t(plugin.gifCollections.context.copyUrl)}
                        action={() => {
                            const gif = getGifById(nameOrId);
                            if (!gif) return;
                            copyToClipboard(gif.url);
                            showToast(t(plugin.gifCollections.toast.urlCopied), Toasts.Type.SUCCESS);
                        }}
                    />
                    <Menu.MenuItem
                        key="move-to-collection"
                        id="move-to-collection"
                        label={t(plugin.gifCollections.context.collection.move)}
                        action={() => openMoveToCollectionModal(nameOrId)}
                    />
                    <Menu.MenuSeparator />
                </>
            )}

            <Menu.MenuItem
                key="delete-collection"
                id="delete-collection"
                label={type === "collection" ? t(plugin.gifCollections.context.collection.delete) : t(plugin.gifCollections.context.collection.remove)}
                action={() => {
                    const doDelete = async () => {
                        if (type === "collection") {
                            await deleteCollection(nameOrId);
                            instance.forceUpdate();
                            return;
                        }

                        const collectionName = getItemCollectionNameFromId(nameOrId);
                        await removeFromCollection(nameOrId);
                        if (collectionName) dispatchRefresh(collectionName);
                    };

                    if (settings.store.stopWarnings) {
                        void doDelete();
                        return;
                    }

                    Alerts.show({
                        title: t(plugin.gifCollections.alert.delete.title),
                        body: type === "collection"
                            ? t(plugin.gifCollections.alert.delete.deleteBody)
                            : t(plugin.gifCollections.alert.delete.removeBody),
                        confirmText: type === "collection"
                            ? t(plugin.gifCollections.alert.delete.confirm)
                            : t(plugin.gifCollections.alert.delete.remove),
                        confirmColor: "dangerPrimary",
                        cancelText: t(plugin.gifCollections.alert.delete.cancel),
                        onConfirm: doDelete,
                    });
                }}
            />
        </Menu.Menu>
    );
}

export function GifPickerContextMenu({ gif }: { gif: Gif; }) {
    return (
        <Menu.Menu
            navId="gif-collection-id"
            onClose={() => FluxDispatcher.dispatch({ type: "CONTEXT_MENU_CLOSE" })}
            aria-label={t(plugin.gifCollections.context.collection.gif)}
        >
            {settings.store.showCopyImageLink && (
                <Menu.MenuItem
                    label={t(plugin.gifCollections.context.copyImageLink)}
                    key="copy-image-link"
                    id="copy-image-link"
                    action={() => {
                        copyToClipboard(gif.url);
                        showToast(t(plugin.gifCollections.toast.copied), Toasts.Type.SUCCESS);
                    }}
                />
            )}
            {AddToCollectionMenu(gif)}
        </Menu.Menu>
    );
}

export function buildGifPickerContextMenu(
    e: React.MouseEvent,
    item: GifItem,
    GIF_COLLECTION_PREFIX: string,
    GIF_ITEM_PREFIX: string,
    instance: GifPickerInstance
) {
    if (item?.name?.startsWith(GIF_COLLECTION_PREFIX)) {
        return ContextMenuApi.openContextMenu(e, () =>
            <RemoveItemContextMenu type="collection" nameOrId={item.name!} instance={instance} />
        );
    }

    if (item?.id?.startsWith(GIF_ITEM_PREFIX)) {
        return ContextMenuApi.openContextMenu(e, () =>
            <RemoveItemContextMenu type="gif" nameOrId={item.id!} instance={instance} />
        );
    }

    const { src, url, height, width } = item;
    if (src && url && height != null && width != null && !item.id?.startsWith(GIF_ITEM_PREFIX)) {
        return ContextMenuApi.openContextMenu(e, () =>
            <GifPickerContextMenu gif={{ id: uuidv4(GIF_ITEM_PREFIX), src, url, height, width }} />
        );
    }

    return null;
}
