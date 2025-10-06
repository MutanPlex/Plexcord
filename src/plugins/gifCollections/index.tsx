/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import "./style.css";

import { findGroupChildrenByChildId, NavContextMenuPatchCallback } from "@api/ContextMenu";
import { t } from "@api/i18n";
import { DataStore } from "@api/index";
import { definePluginSettings } from "@api/Settings";
import { Flex } from "@components/Flex";
import { copyToClipboard } from "@utils/clipboard";
import { Devs, PcDevs } from "@utils/constants";
import { ModalContent, ModalFooter, ModalHeader, ModalRoot, ModalSize, openModal } from "@utils/modal";
import definePlugin, { OptionType } from "@utils/types";
import { Alerts, Button, ContextMenuApi, FluxDispatcher, Forms, Menu, React, showToast, TextInput, Toasts, useCallback, useState } from "@webpack/common";

import { addToCollection, cache_collections, createCollection, DATA_COLLECTION_NAME, deleteCollection, fixPrefix, getCollections, getGifById, getItemCollectionNameFromId, moveGifToCollection, refreshCacheCollection, removeFromCollection, renameCollection } from "./utils/collectionManager";
import { getFormat } from "./utils/getFormat";
import { getGif } from "./utils/getGif";
import { downloadCollections, uploadGifCollections } from "./utils/settingsUtils";
import { uuidv4 } from "./utils/uuidv4";

let GIF_COLLECTION_PREFIX: string;
let GIF_ITEM_PREFIX: string;

export const SortingOptions = {
    NAME: 1,
    CREATION_DATE: 2,
    MODIFIED_DATE: 3
};

const addCollectionContextMenuPatch: NavContextMenuPatchCallback = (children, props) => {
    if (!props) return;
    const { message, itemSrc, itemHref, target } = props;
    const gif = getGif(message, itemSrc ?? itemHref, target);
    if (!gif) return;

    const group = findGroupChildrenByChildId("open-native-link", children) ?? findGroupChildrenByChildId("copy-link", children);
    if (group && !group.some(child => child?.props?.id === "add-to-collection")) {
        const collections = cache_collections;

        if (settings.store.showCopyImageLink) {
            group.push(
                <Menu.MenuItem
                    label={t("plugin.gifCollection.context.copyImageLink")}
                    key="copy-image-link"
                    id="copy-image-link"
                    action={() => {
                        copyToClipboard(gif.url);
                        showToast(t("plugin.gifCollection.toast.copied"), Toasts.Type.SUCCESS);
                    }}
                />
            );
        }

        group.push(
            <Menu.MenuItem
                label={t("plugin.gifCollection.context.collection.add")}
                key="add-to-collection"
                id="add-to-collection"
            >
                {collections.length > 0 && collections.map(col => (
                    <Menu.MenuItem
                        key={col.name}
                        id={col.name}
                        label={col.name.replace(/.+?:/, "")}
                        action={() => addToCollection(col.name, gif)}
                    />
                ))}

                {collections.length > 0 && <Menu.MenuSeparator key="separator" />}

                <Menu.MenuItem
                    label={t("plugin.gifCollection.context.collection.create")}
                    key="create-collection"
                    id="create-collection"
                    action={() => {
                        openModal(modalProps => (
                            <CreateCollectionModal onClose={modalProps.onClose} gif={gif} modalProps={modalProps} />
                        ));
                    }}
                />
            </Menu.MenuItem>
        );
    }
};


export const settings = definePluginSettings({
    itemPrefix: {
        get label() {
            return t("plugin.gifCollection.option.itemPrefix.label");
        },
        get description() {
            return t("plugin.gifCollection.option.itemPrefix.description");
        },
        type: OptionType.STRING,
        default: "gc-item:",
        onChange: value => {
            const normalizedValue = value.replace(/:+$/, "") + ":";
            if (normalizedValue === GIF_ITEM_PREFIX) return;
            GIF_ITEM_PREFIX = normalizedValue;
            settings.store.itemPrefix = normalizedValue;
            fixPrefix(normalizedValue);
        },
        restartNeeded: true
    },
    collectionPrefix: {
        get label() {
            return t("plugin.gifCollection.option.collectionPrefix.label");
        },
        get description() {
            return t("plugin.gifCollection.option.collectionPrefix.description");
        },
        type: OptionType.STRING,
        default: "gc:",
        onChange: value => {
            const normalizedValue = value.replace(/:+$/, "") + ":";
            if (normalizedValue === GIF_COLLECTION_PREFIX) return;
            GIF_COLLECTION_PREFIX = normalizedValue;
            settings.store.collectionPrefix = normalizedValue;
            fixPrefix(normalizedValue);
        },
        restartNeeded: true
    },
    onlyShowCollections: {
        get label() {
            return t("plugin.gifCollection.option.onlyShowCollections.label");
        },
        get description() {
            return t("plugin.gifCollection.option.onlyShowCollections.description");
        },
        type: OptionType.BOOLEAN,
        default: false,
        restartNeeded: true
    },
    stopWarnings: {
        get label() {
            return t("plugin.gifCollection.option.stopWarnings.label");
        },
        get description() {
            return t("plugin.gifCollection.option.stopWarnings.description");
        },
        type: OptionType.BOOLEAN,
        default: false,
    },
    showCopyImageLink: {
        get label() {
            return t("plugin.gifCollection.option.showCopyImageLink.label");
        },
        get description() {
            return t("plugin.gifCollection.option.showCopyImageLink.description", { copyImageLink: t("plugin.gifCollection.context.copyImageLink") });
        },
        type: OptionType.BOOLEAN,
        default: false,
    },
    defaultEmptyCollectionImage: {
        get label() {
            return t("plugin.gifCollection.option.defaultEmptyCollectionImage.label");
        },
        get description() {
            return t("plugin.gifCollection.option.defaultEmptyCollectionImage.description");
        },
        type: OptionType.STRING,
        default: "https://c.tenor.com/YEG33HsLEaIAAAAC/parksandrec-oops.gif"
    },
    collectionsSortType: {
        get label() {
            return t("plugin.gifCollection.option.collectionsSortType.label");
        },
        get description() {
            return t("plugin.gifCollection.option.collectionsSortType.description");
        },
        type: OptionType.NUMBER,
        default: SortingOptions.NAME,
        hidden: true
    },
    collectionsSortOrder: {
        get label() {
            return t("plugin.gifCollection.option.collectionsSortOrder.label");
        },
        get description() {
            return t("plugin.gifCollection.option.collectionsSortOrder.description");
        },
        type: OptionType.STRING,
        default: "asc",
        hidden: true
    },
    collectionsSort: {
        get label() {
            return t("plugin.gifCollection.option.collectionsSort.label");
        },
        get description() {
            return t("plugin.gifCollection.option.collectionsSort.description");
        },
        type: OptionType.COMPONENT,
        component: () => {
            const [sortType, setSortType] = useState(settings.store.collectionsSortType || SortingOptions.NAME);
            const [sortOrder, setSortOrder] = useState(settings.store.collectionsSortOrder || "asc");

            const handleSortTypeChange = value => {
                setSortType(value);
                settings.store.collectionsSortType = value;
            };

            const handleSortOrderChange = value => {
                setSortOrder(value);
                settings.store.collectionsSortOrder = value;
            };

            return (
                <div className="collections-sort-container">
                    <Forms.FormTitle className="collections-sort-title">{t("plugin.gifCollection.option.collectionsSort.title")}</Forms.FormTitle>
                    <Forms.FormDivider className="collections-sort-divider" />
                    <Forms.FormText className="collections-sort-description">
                        {t("plugin.gifCollection.option.collectionsSort.sortDescription")}
                    </Forms.FormText>
                    <Forms.FormDivider className="collections-sort-divider" />
                    <div className="collections-sort-section">
                        <Forms.FormText className="collections-sort-section-title">{t("plugin.gifCollection.option.collectionsSort.sortBy")}</Forms.FormText>
                        <div className="collections-sort-option">
                            <label className="collections-sort-label">
                                <input
                                    type="radio"
                                    name="sortType"
                                    value={SortingOptions.NAME}
                                    checked={sortType === SortingOptions.NAME}
                                    onChange={() => handleSortTypeChange(SortingOptions.NAME)}
                                    className="collections-sort-input"
                                />
                                {t("plugin.gifCollection.option.collectionsSort.name")}
                            </label>
                        </div>
                        <div className="collections-sort-option">
                            <label className="collections-sort-label">
                                <input
                                    type="radio"
                                    name="sortType"
                                    value={SortingOptions.CREATION_DATE}
                                    checked={sortType === SortingOptions.CREATION_DATE}
                                    onChange={() => handleSortTypeChange(SortingOptions.CREATION_DATE)}
                                    className="collections-sort-input"
                                />
                                {t("plugin.gifCollection.option.collectionsSort.creationDate")}
                            </label>
                        </div>
                        <div className="collections-sort-option">
                            <label className="collections-sort-label">
                                <input
                                    type="radio"
                                    name="sortType"
                                    value={SortingOptions.MODIFIED_DATE}
                                    checked={sortType === SortingOptions.MODIFIED_DATE}
                                    onChange={() => handleSortTypeChange(SortingOptions.MODIFIED_DATE)}
                                    className="collections-sort-input"
                                />
                                {t("plugin.gifCollection.option.collectionsSort.modifiedDate")}
                            </label>
                        </div>
                    </div>
                    <Forms.FormDivider className="collections-sort-divider" />
                    <div className="collections-sort-section">
                        <Forms.FormText className="collections-sort-section-title">Order</Forms.FormText>
                        <div className="collections-sort-option">
                            <label className="collections-sort-label">
                                <input
                                    type="radio"
                                    name="sortOrder"
                                    value="asc"
                                    checked={sortOrder === "asc"}
                                    onChange={() => handleSortOrderChange("asc")}
                                    className="collections-sort-input"
                                />
                                {t("plugin.gifCollection.option.collectionsSort.ascending")}
                            </label>
                        </div>
                        <div className="collections-sort-option">
                            <label className="collections-sort-label">
                                <input
                                    type="radio"
                                    name="sortOrder"
                                    value="desc"
                                    checked={sortOrder === "desc"}
                                    onChange={() => handleSortOrderChange("desc")}
                                    className="collections-sort-input"
                                />
                                {t("plugin.gifCollection.option.collectionsSort.descending")}
                            </label>
                        </div>
                    </div>
                </div>
            );
        }
    },
    importGifs: {
        get label() {
            return t("plugin.gifCollection.option.importGifs.label");
        },
        get description() {
            return t("plugin.gifCollection.option.importGifs.description");
        },
        type: OptionType.COMPONENT,
        component: () =>
            <Button onClick={async () =>
                (await getCollections()).length ? Alerts.show({
                    title: t("plugin.gifCollection.alert.import.title"),
                    body: t("plugin.gifCollection.alert.import.body"),
                    confirmText: t("plugin.gifCollection.alert.import.confirm"),
                    confirmColor: Button.Colors.RED,
                    cancelText: t("plugin.gifCollection.alert.import.cancel"),
                    onConfirm: async () => uploadGifCollections()
                }) : uploadGifCollections()}>
                {t("plugin.gifCollection.option.importGifs.button")}
            </Button>,
    },
    exportGifs: {
        get label() {
            return t("plugin.gifCollection.option.exportGifs.label");
        },
        get description() {
            return t("plugin.gifCollection.option.exportGifs.description");
        },
        type: OptionType.COMPONENT,
        component: () =>
            <Button onClick={downloadCollections}>
                {t("plugin.gifCollection.option.exportGifs.button")}
            </Button>
    },
    resetCollections: {
        get label() {
            return t("plugin.gifCollection.option.resetCollections.label");
        },
        get description() {
            return t("plugin.gifCollection.option.resetCollections.description");
        },
        type: OptionType.COMPONENT,
        component: () =>
            <Button onClick={() =>
                Alerts.show({
                    title: t("plugin.gifCollection.alert.reset.title"),
                    body: t("plugin.gifCollection.alert.reset.body"),
                    confirmText: t("plugin.gifCollection.alert.reset.confirm"),
                    confirmColor: Button.Colors.RED,
                    cancelText: t("plugin.gifCollection.alert.reset.cancel"),
                    onConfirm: async () => {
                        await DataStore.set(DATA_COLLECTION_NAME, []);
                        refreshCacheCollection();
                    }
                })}>
                {t("plugin.gifCollection.option.resetCollections.button")}
            </Button>
    }
});

export default definePlugin({
    name: "GifCollections",
    description: "Allows you to create collections of gifs",
    authors: [Devs.Aria, PcDevs.creations, PcDevs.MutanPlex],

    get displayDescription() {
        return t("plugin.gifCollection.description");
    },

    patches: [
        {
            find: "renderCategoryExtras",
            replacement: [
                {
                    match: /(render\(\){)(.{1,50}getItemGrid)/,
                    replace: "$1;$self.insertCollections(this);$2"
                },
                {
                    match: /(className:\w\.categoryName,children:)(\i)/,
                    replace: "$1$self.hidePrefix($2),"
                },
            ]
        },
        {
            find: "renderEmptyFavorite",
            replacement: {
                match: /render\(\){.{1,500}onClick:this\.handleClick,/,
                replace: "$&onContextMenu: (e) => $self.collectionContextMenu(e, this),"
            }
        },
        {
            find: "renderHeaderContent()",
            replacement: [
                {
                    match: /(renderContent\(\){)(.{1,50}resultItems)/,
                    replace: "$1$self.renderContent(this);$2"
                },
            ]
        },
        {
            find: "type:\"GIF_PICKER_QUERY\"",
            replacement: {
                match: /(function \i\(.{1,10}\){)(.{1,100}.GIFS_SEARCH,query:)/,
                replace: "$1if($self.shouldStopFetch(arguments[0])) return;$2"
            }
        },
    ],
    settings,
    contextMenus: {
        "message": addCollectionContextMenuPatch
    },
    start() {
        refreshCacheCollection();
        GIF_COLLECTION_PREFIX = settings.store.collectionPrefix;
        GIF_ITEM_PREFIX = settings.store.itemPrefix;
    },
    get collections() {
        refreshCacheCollection();
        return this.sortedCollections();
    },
    sortedCollections() {
        return cache_collections.sort((a, b) => {
            const sortType = settings.store.collectionsSortType;
            const sortOrder = settings.store.collectionsSortOrder === "asc" ? 1 : -1;
            switch (sortType) {
                case SortingOptions.NAME:
                    return a.name.localeCompare(b.name) * sortOrder;
                case SortingOptions.CREATION_DATE:
                    return ((a.createdAt ?? 0) - (b.createdAt ?? 0)) * sortOrder;
                case SortingOptions.MODIFIED_DATE:
                    return ((a.lastUpdated ?? 0) - (b.lastUpdated ?? 0)) * sortOrder;
                default:
                    return 0;
            }
        });
    },
    renderContent(instance) {
        if (instance.props.query.startsWith(GIF_COLLECTION_PREFIX)) {
            const collection = this.collections.find(c => c.name === instance.props.query);
            if (collection) {
                instance.props.resultItems = collection.gifs.map(g => ({
                    id: g.id,
                    format: getFormat(g.src),
                    src: g.src,
                    url: g.url,
                    width: g.width,
                    height: g.height
                })).reverse();
            }
        }
    },
    hidePrefix(name) {
        return name.split(":".length > 1) ? name.replace(/.+?:/, "") : name;
    },
    insertCollections(instance) {
        const shouldRemoveAll = settings.store.onlyShowCollections;
        try {
            if (instance.props.trendingCategories.length && instance.props.trendingCategories[0].type === "Trending") {
                this.oldTrendingCat = instance.props.trendingCategories;
            }
            if (shouldRemoveAll) {
                instance.props.trendingCategories = this.sortedCollections().concat(instance.props.favorites);
            } else if (this.oldTrendingCat != null) {
                instance.props.trendingCategories = this.sortedCollections().concat(this.oldTrendingCat);
            }
        } catch (err) {
            console.error(err);
        }
    },
    shouldStopFetch(query) {
        return query.startsWith(GIF_COLLECTION_PREFIX) && this.collections.find(c => c.name === query) != null;
    },
    collectionContextMenu(e, instance) {
        const { item } = instance.props;
        if (item?.name?.startsWith(GIF_COLLECTION_PREFIX)) {
            return ContextMenuApi.openContextMenu(e, () =>
                <RemoveItemContextMenu type="collection" nameOrId={item.name} instance={instance} />
            );
        }
        if (item?.id?.startsWith(GIF_ITEM_PREFIX)) {
            return ContextMenuApi.openContextMenu(e, () =>
                <RemoveItemContextMenu type="gif" nameOrId={item.id} instance={instance} />
            );
        }
        const { src, url, height, width } = item;
        if (src && url && height != null && width != null && !item.id?.startsWith(GIF_ITEM_PREFIX)) {
            return ContextMenuApi.openContextMenu(e, () =>
                <Menu.Menu
                    navId="gif-collection-id"
                    onClose={() => FluxDispatcher.dispatch({ type: "CONTEXT_MENU_CLOSE" })}
                    aria-label={t("plugin.gifCollection.context.collection.gif")}
                >
                    {MenuThingy({ gif: { ...item, id: uuidv4(GIF_ITEM_PREFIX) } })}
                </Menu.Menu>
            );
        }
        return null;
    },
});

const RemoveItemContextMenu = ({ type, nameOrId, instance }) => (
    <Menu.Menu
        navId="gif-collection-id"
        onClose={() => FluxDispatcher.dispatch({ type: "CONTEXT_MENU_CLOSE" })}
        aria-label={type === "collection" ? t("plugin.gifCollection.context.collection.delete") : t("plugin.gifCollection.context.collection.remove")}
    >
        {type === "collection" && (
            <>
                <Menu.MenuItem
                    key="collection-information"
                    id="collection-information"
                    label={t("plugin.gifCollection.context.collection.information")}
                    action={() => {
                        const collection = cache_collections.find(c => c.name === nameOrId);
                        if (!collection) return;
                        openModal(modalProps => (
                            <ModalRoot
                                {...modalProps}
                                size={ModalSize.SMALL}
                                transitionState={modalProps.transitionState}
                                className="custom-modal"
                            >
                                <ModalHeader separator={false} className="custom-modal-header">
                                    <Forms.FormText className="custom-modal-title">{t("plugin.gifCollection.context.collection.information")}</Forms.FormText>
                                </ModalHeader>
                                <ModalContent className="custom-modal-content">
                                    <Forms.FormSection>
                                        <Flex className="collection-info">
                                            <Forms.FormTitle tag="h5" className="collection-info-title">{t("plugin.gifCollection.context.collection.name")}</Forms.FormTitle>
                                            <Forms.FormText className="collection-info-text">{collection.name.replace(/.+?:/, "")}</Forms.FormText>
                                        </Flex>
                                        <Flex className="collection-info">
                                            <Forms.FormTitle tag="h5" className="collection-info-title">{t("plugin.gifCollection.context.collection.gifs")}</Forms.FormTitle>
                                            <Forms.FormText className="collection-info-text">{collection.gifs.length}</Forms.FormText>
                                        </Flex>
                                        <Flex className="collection-info">
                                            <Forms.FormTitle tag="h5" className="collection-info-title">{t("plugin.gifCollection.context.collection.created")}</Forms.FormTitle>
                                            <Forms.FormText className="collection-info-text">{collection.createdAt ? new Date(collection.createdAt).toLocaleString() : "Unknown"}</Forms.FormText>
                                        </Flex>
                                        <Flex className="collection-info">
                                            <Forms.FormTitle tag="h5" className="collection-info-title">{t("plugin.gifCollection.context.collection.updated")}</Forms.FormTitle>
                                            <Forms.FormText className="collection-info-text">{collection.lastUpdated ? new Date(collection.lastUpdated).toLocaleString() : "Unknown"}</Forms.FormText>
                                        </Flex>
                                    </Forms.FormSection>
                                </ModalContent>
                                <ModalFooter className="custom-modal-footer">
                                    <Button onClick={modalProps.onClose} className="custom-modal-button">{t("plugin.gifCollection.context.collection.close")}</Button>
                                </ModalFooter>
                            </ModalRoot>
                        ));
                    }}
                />
                <Menu.MenuSeparator />
                <Menu.MenuItem
                    key="rename-collection"
                    id="rename-collection"
                    label={t("plugin.gifCollection.context.collection.rename")}
                    action={() => openModal(modalProps => (
                        <RenameCollectionModal
                            onClose={modalProps.onClose}
                            name={nameOrId}
                            modalProps={modalProps}
                        />
                    ))}
                />
            </>
        )}
        {type === "gif" && (
            <>
                <Menu.MenuItem
                    key="gif-information"
                    id="gif-information"
                    label={t("plugin.gifCollection.context.gif.information")}
                    action={() => {
                        const gifInfo = getGifById(nameOrId);
                        if (!gifInfo) return;
                        openModal(modalProps => (
                            <ModalRoot
                                {...modalProps}
                                size={ModalSize.SMALL}
                                transitionState={modalProps.transitionState}
                                className="custom-modal"
                            >
                                <ModalHeader separator={false} className="custom-modal-header">
                                    <Forms.FormText className="custom-modal-title">{t("plugin.gifCollection.context.gif.information")}</Forms.FormText>
                                </ModalHeader>
                                <ModalContent className="custom-modal-content">
                                    <Forms.FormSection>
                                        <Flex className="gif-info">
                                            <Forms.FormTitle tag="h5" className="gif-info-title">{t("plugin.gifCollection.context.gif.added")}</Forms.FormTitle>
                                            <Forms.FormText className="gif-info-text">{gifInfo.addedAt ? new Date(gifInfo.addedAt).toLocaleString() : "Unknown"}</Forms.FormText>
                                        </Flex>
                                        <Flex className="gif-info">
                                            <Forms.FormTitle tag="h5" className="gif-info-title">{t("plugin.gifCollection.context.gif.width")}</Forms.FormTitle>
                                            <Forms.FormText className="gif-info-text">{gifInfo.width}</Forms.FormText>
                                        </Flex>
                                        <Flex className="gif-info">
                                            <Forms.FormTitle tag="h5" className="gif-info-title">{t("plugin.gifCollection.context.gif.height")}</Forms.FormTitle>
                                            <Forms.FormText className="gif-info-text">{gifInfo.height}</Forms.FormText>
                                        </Flex>
                                    </Forms.FormSection>
                                </ModalContent>
                                <ModalFooter className="custom-modal-footer">
                                    <Button onClick={modalProps.onClose} className="custom-modal-button">{t("plugin.gifCollection.context.gif.close")}</Button>
                                </ModalFooter>
                            </ModalRoot>
                        ));
                    }}
                />
                <Menu.MenuSeparator />
                <Menu.MenuItem
                    key="copy-url"
                    id="copy-url"
                    label={t("plugin.gifCollection.context.copyUrl")}
                    action={() => {
                        const gifInfo = getGifById(nameOrId);
                        if (!gifInfo) return;
                        copyToClipboard(gifInfo.url);
                        showToast(t("plugin.gifCollection.toast.urlCopied"), Toasts.Type.SUCCESS);
                    }}
                />
                <Menu.MenuItem
                    key="move-to-collection"
                    id="move-to-collection"
                    label={t("plugin.gifCollection.context.collection.move")}
                    action={() => {
                        openModal(modalProps => (
                            <ModalRoot
                                {...modalProps}
                                size={ModalSize.SMALL}
                                transitionState={modalProps.transitionState}
                                className="custom-modal"
                            >
                                <ModalHeader separator={false} className="custom-modal-header">
                                    <Forms.FormText className="custom-modal-title">{t("plugin.gifCollection.context.collection.move")}</Forms.FormText>
                                </ModalHeader>
                                <ModalContent className="custom-modal-content">
                                    <Forms.FormTitle tag="h5" className="custom-modal-text">
                                        {t("plugin.gifCollection.context.collection.select")}
                                    </Forms.FormTitle>
                                    <div className="collection-buttons">
                                        {cache_collections
                                            .filter(col => col.name !== getItemCollectionNameFromId(nameOrId))
                                            .map(col => (
                                                <Button
                                                    key={col.name}
                                                    id={col.name}
                                                    onClick={async () => {
                                                        const fromCollection = getItemCollectionNameFromId(nameOrId);
                                                        if (!fromCollection) return;
                                                        await moveGifToCollection(nameOrId, fromCollection, col.name);
                                                        FluxDispatcher.dispatch({
                                                            type: "GIF_PICKER_QUERY",
                                                            query: `${fromCollection} `
                                                        });
                                                        FluxDispatcher.dispatch({
                                                            type: "GIF_PICKER_QUERY",
                                                            query: `${fromCollection}`
                                                        });
                                                        modalProps.onClose();
                                                    }}
                                                    className="collection-button"
                                                >
                                                    {col.name.replace(/.+?:/, "")}
                                                </Button>
                                            ))}
                                    </div>
                                </ModalContent>
                                <ModalFooter className="custom-modal-footer">
                                    <Button onClick={modalProps.onClose} className="custom-modal-button">{t("plugin.gifCollection.context.collection.close")}</Button>
                                </ModalFooter>
                            </ModalRoot>
                        ));
                    }}
                />
                <Menu.MenuSeparator />
            </>
        )}
        <Menu.MenuItem
            key="delete-collection"
            id="delete-collection"
            label={type === "collection" ? t("plugin.gifCollection.context.collection.delete") : t("plugin.gifCollection.context.collection.remove")}
            action={async () => {
                if (settings.store.stopWarnings) {
                    const collectionName = getItemCollectionNameFromId(nameOrId);
                    if (type === "collection") {
                        deleteCollection(nameOrId);
                        instance.forceUpdate();
                    } else {
                        await removeFromCollection(nameOrId);
                        FluxDispatcher.dispatch({
                            type: "GIF_PICKER_QUERY",
                            query: `${collectionName} `
                        });
                        FluxDispatcher.dispatch({
                            type: "GIF_PICKER_QUERY",
                            query: `${collectionName}`
                        });
                    }
                    return;
                }
                Alerts.show({
                    title: t("plugin.gifCollection.alert.delete.title"),
                    body: `${type === "collection" ? t("plugin.gifCollection.alert.delete.deleteBody") : t("plugin.gifCollection.alert.delete.removeBody")}`,
                    confirmText: type === "collection" ? t("plugin.gifCollection.alert.delete.confirm") : t("plugin.gifCollection.alert.delete.remove"),
                    confirmColor: Button.Colors.RED,
                    cancelText: t("plugin.gifCollection.alert.delete.cancel"),
                    onConfirm: async () => {
                        const collectionName = type === "collection" ? nameOrId : getItemCollectionNameFromId(nameOrId);
                        if (type === "collection") {
                            deleteCollection(nameOrId);
                            instance.forceUpdate();
                        } else {
                            await removeFromCollection(nameOrId);
                            FluxDispatcher.dispatch({
                                type: "GIF_PICKER_QUERY",
                                query: `${collectionName} `
                            });
                            FluxDispatcher.dispatch({
                                type: "GIF_PICKER_QUERY",
                                query: `${collectionName}`
                            });
                        }
                    }
                });
            }}
        />
    </Menu.Menu>
);

const MenuThingy = ({ gif }) => {
    const collections = cache_collections;
    const menuItems: React.ReactNode[] = [];

    if (settings.store.showCopyImageLink) {
        menuItems.push(
            <Menu.MenuItem
                label={t("plugin.gifCollection.context.copyImageLink")}
                key="copy-image-link"
                id="copy-image-link"
                action={() => {
                    copyToClipboard(gif.url);
                    showToast(t("plugin.gifCollection.toast.copied"), Toasts.Type.SUCCESS);
                }}
            />
        );
    }

    menuItems.push(
        <Menu.MenuItem label={t("plugin.gifCollection.context.collection.add")} key="add-to-collection" id="add-to-collection">
            {collections.map(col => (
                <Menu.MenuItem
                    key={col.name}
                    id={col.name}
                    label={col.name.replace(/.+?:/, "")}
                    action={() => addToCollection(col.name, gif)}
                />
            ))}
            {collections.length > 0 && <Menu.MenuSeparator />}
            <Menu.MenuItem
                key="create-collection"
                id="create-collection"
                label={t("plugin.gifCollection.context.collection.create")}
                action={() => openModal(modalProps => (
                    <CreateCollectionModal onClose={modalProps.onClose} gif={gif} modalProps={modalProps} />
                ))}
            />
        </Menu.MenuItem>
    );

    return <>{menuItems}</>;
};

function CreateCollectionModal({ gif, onClose, modalProps }) {
    const [name, setName] = useState("");
    const onSubmit = useCallback(e => {
        e.preventDefault();
        if (!name.length) return;
        createCollection(name, [gif]);
        onClose();
    }, [name]);

    return (
        <ModalRoot {...modalProps}>
            <form onSubmit={onSubmit}>
                <ModalHeader>
                    <Forms.FormText>{t("plugin.gifCollection.modal.create.title")}</Forms.FormText>
                </ModalHeader>
                <ModalContent>
                    <Forms.FormTitle tag="h5" style={{ marginTop: "10px" }}>{t("plugin.gifCollection.modal.create.name")}</Forms.FormTitle>
                    <TextInput onChange={e => setName(e)} />
                </ModalContent>
                <div style={{ marginTop: "1rem" }}>
                    <ModalFooter>
                        <Button
                            type="submit"
                            color={Button.Colors.GREEN}
                            disabled={!name.length}
                            onClick={onSubmit}
                        >
                            {t("plugin.gifCollection.modal.create.create")}
                        </Button>
                    </ModalFooter>
                </div>
            </form>
        </ModalRoot>
    );
}

function RenameCollectionModal({ name, onClose, modalProps }) {
    const prefix = settings.store.collectionPrefix;
    const strippedName = name.startsWith(prefix) ? name.slice(prefix.length) : name;
    const [newName, setNewName] = useState(strippedName);

    const onSubmit = useCallback(async e => {
        e.preventDefault();
        if (!newName.length || newName.length >= 25) return;
        await renameCollection(name, newName);
        onClose();
    }, [newName, name, onClose]);

    return (
        <ModalRoot {...modalProps}>
            <form onSubmit={onSubmit}>
                <ModalHeader>
                    <Forms.FormText>{t("plugin.gifCollection.modal.rename.title")}</Forms.FormText>
                </ModalHeader>
                <ModalContent>
                    <Forms.FormText className="rename-collection-text">{t("plugin.gifCollection.modal.rename.name")}</Forms.FormText>
                    <TextInput value={newName} className={`rename-collection-input ${newName.length >= 25 ? "input-warning" : ""}`} onChange={e => setNewName(e)} />
                    {newName.length >= 25 && <Forms.FormText className="warning-text">{t("plugin.gifCollection.modal.rename.warning")}</Forms.FormText>}
                </ModalContent>
                <div style={{ marginTop: "1rem" }}>
                    <ModalFooter>
                        <Button
                            type="submit"
                            color={Button.Colors.GREEN}
                            disabled={!newName.length || newName.length >= 25}
                            onClick={onSubmit}
                        >
                            {t("plugin.gifCollection.modal.rename.rename")}
                        </Button>
                    </ModalFooter>
                </div>
            </form>
        </ModalRoot>
    );
}
