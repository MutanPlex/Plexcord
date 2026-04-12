/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import * as DataStore from "@api/DataStore";
import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { Button } from "@components/Button";
import { Divider } from "@components/Divider";
import { Heading } from "@components/Heading";
import { Paragraph } from "@components/Paragraph";
import { OptionType } from "@utils/types";
import { Alerts, useState } from "@webpack/common";

import { DATA_COLLECTION_NAME, getCollections, refreshCacheCollection } from "./utils/collectionManager";
import { cl } from "./utils/misc";
import { downloadCollections, uploadGifCollections } from "./utils/settingsUtils";

export const SortingOptions = {
    NAME: 1,
    CREATION_DATE: 2,
    MODIFIED_DATE: 3,
} as const;

export const settings = definePluginSettings({
    itemPrefix: {
        label: () => t(plugin.gifCollections.option.itemPrefix.label),
        description: () => t(plugin.gifCollections.option.itemPrefix.description),
        type: OptionType.STRING,
        default: "gc-item:",
        restartNeeded: true,
    },
    collectionPrefix: {
        label: () => t(plugin.gifCollections.option.collectionPrefix.label),
        description: () => t(plugin.gifCollections.option.collectionPrefix.description),
        type: OptionType.STRING,
        default: "gc:",
        restartNeeded: true,
    },
    onlyShowCollections: {
        label: () => t(plugin.gifCollections.option.onlyShowCollections.label),
        description: () => t(plugin.gifCollections.option.onlyShowCollections.description),
        type: OptionType.BOOLEAN,
        default: false,
        restartNeeded: true,
    },
    stopWarnings: {
        label: () => t(plugin.gifCollections.option.stopWarnings.label),
        description: () => t(plugin.gifCollections.option.stopWarnings.description),
        type: OptionType.BOOLEAN,
        default: false,
    },
    showCopyImageLink: {
        label: () => t(plugin.gifCollections.option.showCopyImageLink.label),
        description: () => t(plugin.gifCollections.option.showCopyImageLink.description, {
            copyImageLink: t(plugin.gifCollections.context.copyImageLink),
        }),
        type: OptionType.BOOLEAN,
        default: false,
    },
    preventDuplicates: {
        label: () => t(plugin.gifCollections.option.preventDuplicates.label),
        description: () => t(plugin.gifCollections.option.preventDuplicates.description),
        type: OptionType.BOOLEAN,
        default: false,
    },
    defaultEmptyCollectionImage: {
        label: () => t(plugin.gifCollections.option.defaultEmptyCollectionImage.label),
        description: () => t(plugin.gifCollections.option.defaultEmptyCollectionImage.description),
        type: OptionType.STRING,
        default: "https://c.tenor.com/YEG33HsLEaIAAAAC/parksandrec-oops.gif",
    },
    collectionsSortType: {
        label: () => t(plugin.gifCollections.option.collectionsSortType.label),
        description: () => t(plugin.gifCollections.option.collectionsSortType.description),
        type: OptionType.NUMBER,
        default: SortingOptions.NAME,
        hidden: true,
    },
    collectionsSortOrder: {
        label: () => t(plugin.gifCollections.option.collectionsSortOrder.label),
        description: () => t(plugin.gifCollections.option.collectionsSortOrder.description),
        type: OptionType.STRING,
        default: "asc",
        hidden: true,
    },
    collectionsSort: {
        type: OptionType.COMPONENT,
        label: () => t(plugin.gifCollections.option.collectionsSort.label),
        description: () => t(plugin.gifCollections.option.collectionsSort.description),
        component: SortSettingsComponent,
    },
    importGifs: {
        type: OptionType.COMPONENT,
        label: () => t(plugin.gifCollections.option.importGifs.label),
        description: () => t(plugin.gifCollections.option.importGifs.description),
        component: () =>
            <Button onClick={async () =>
                (await getCollections()).length ? Alerts.show({
                    title: t(plugin.gifCollections.alert.import.title),
                    body: t(plugin.gifCollections.alert.import.body),
                    confirmText: t(plugin.gifCollections.alert.import.confirm),
                    confirmColor: "dangerPrimary",
                    cancelText: t(plugin.gifCollections.alert.import.cancel),
                    onConfirm: () => uploadGifCollections(),
                }) : uploadGifCollections()}>
                {t(plugin.gifCollections.option.importGifs.button)}
            </Button>,
    },
    exportGifs: {
        type: OptionType.COMPONENT,
        label: () => t(plugin.gifCollections.option.exportGifs.label),
        description: () => t(plugin.gifCollections.option.exportGifs.description),
        component: () =>
            <Button onClick={downloadCollections}>
                {t(plugin.gifCollections.option.exportGifs.button)}
            </Button>,
    },
    resetCollections: {
        type: OptionType.COMPONENT,
        label: () => t(plugin.gifCollections.option.resetCollections.label),
        description: () => t(plugin.gifCollections.option.resetCollections.description),
        component: () =>
            <Button onClick={() =>
                Alerts.show({
                    title: t(plugin.gifCollections.alert.reset.title),
                    body: t(plugin.gifCollections.alert.reset.body),
                    confirmText: t(plugin.gifCollections.alert.reset.confirm),
                    confirmColor: "dangerPrimary",
                    cancelText: t(plugin.gifCollections.alert.reset.cancel),
                    onConfirm: async () => {
                        await DataStore.set(DATA_COLLECTION_NAME, []);
                        void refreshCacheCollection();
                    },
                })}>
                {t(plugin.gifCollections.option.resetCollections.button)}
            </Button>,
    },
});

function RadioOption({ name, value, checked, onChange, label }: { name: string; value: string | number; checked: boolean; onChange: () => void; label: string; }) {
    return (
        <div className={cl("sort-option")}>
            <label className={cl("sort-label")}>
                <input type="radio" name={name} value={value} checked={checked} onChange={onChange} className={cl("sort-input")} />
                {label}
            </label>
        </div>
    );
}

function SortSettingsComponent() {
    const [sortType, setSortType] = useState(settings.store.collectionsSortType ?? SortingOptions.NAME);
    const [sortOrder, setSortOrder] = useState(settings.store.collectionsSortOrder ?? "asc");

    const handleSortType = (value: number) => {
        setSortType(value);
        settings.store.collectionsSortType = value;
    };

    const handleSortOrder = (value: string) => {
        setSortOrder(value);
        settings.store.collectionsSortOrder = value;
    };

    return (
        <div className={cl("sort-container")}>
            <Heading className={cl("sort-title")}>{t(plugin.gifCollections.option.collectionsSort.title)}</Heading>
            <Divider className={cl("sort-divider")} />
            <Paragraph className={cl("sort-description")}>{t(plugin.gifCollections.option.collectionsSort.sortDescription)}</Paragraph>
            <Divider className={cl("sort-divider")} />

            <div className={cl("sort-section")}>
                <Paragraph className={cl("sort-section-title")}>{t(plugin.gifCollections.option.collectionsSort.sortBy)}</Paragraph>
                <RadioOption name="sortType" value={SortingOptions.NAME} checked={sortType === SortingOptions.NAME} onChange={() => handleSortType(SortingOptions.NAME)} label={t(plugin.gifCollections.option.collectionsSort.name)} />
                <RadioOption name="sortType" value={SortingOptions.CREATION_DATE} checked={sortType === SortingOptions.CREATION_DATE} onChange={() => handleSortType(SortingOptions.CREATION_DATE)} label={t(plugin.gifCollections.option.collectionsSort.creationDate)} />
                <RadioOption name="sortType" value={SortingOptions.MODIFIED_DATE} checked={sortType === SortingOptions.MODIFIED_DATE} onChange={() => handleSortType(SortingOptions.MODIFIED_DATE)} label={t(plugin.gifCollections.option.collectionsSort.modifiedDate)} />
            </div>

            <Divider className={cl("sort-divider")} />

            <div className={cl("sort-section")}>
                <Paragraph className={cl("sort-section-title")}>{t(plugin.gifCollections.option.collectionsSortOrder.label)}</Paragraph>
                <RadioOption name="sortOrder" value="asc" checked={sortOrder === "asc"} onChange={() => handleSortOrder("asc")} label={t(plugin.gifCollections.option.collectionsSort.ascending)} />
                <RadioOption name="sortOrder" value="desc" checked={sortOrder === "desc"} onChange={() => handleSortOrder("desc")} label={t(plugin.gifCollections.option.collectionsSort.descending)} />
            </div>
        </div>
    );
}
