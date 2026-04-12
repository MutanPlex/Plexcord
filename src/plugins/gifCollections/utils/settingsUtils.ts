/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import * as DataStore from "@api/DataStore";
import { chooseFile, saveFile } from "@utils/web";
import { Toasts } from "@webpack/common";

import { DATA_COLLECTION_NAME, getCollections, refreshCacheCollection } from "./collectionManager";
import { logger } from "./misc";

export async function downloadCollections() {
        const filename = "gif-collections.json";
        const exportData = await exportCollections();
        const data = new TextEncoder().encode(exportData);

        if (IS_DISCORD_DESKTOP) {
                DiscordNative.fileManager.saveWithDialog(data, filename);
                return;
        }

        saveFile(new File([data], filename, { type: "application/json" }));
}

export async function exportCollections() {
        const collections = await getCollections();
        return JSON.stringify({ collections }, null, 4);
}

export async function importCollections(data: string) {
        const parsed = JSON.parse(data);

        if (parsed && typeof parsed === "object" && "collections" in parsed) {
                await DataStore.set(DATA_COLLECTION_NAME, (parsed as any).collections);
                await refreshCacheCollection();
                return;
        }

        throw new Error("Invalid collections format");
}

export async function uploadGifCollections(showToast = true): Promise<void> {
        if (IS_DISCORD_DESKTOP) {
                const [file] = await DiscordNative.fileManager.openFiles({
                        filters: [
                                { name: "Gif Collections", extensions: ["json"] },
                                { name: "all", extensions: ["*"] },
                        ],
                });

                if (!file) return;

                try {
                        await importCollections(new TextDecoder().decode(file.data));
                        if (showToast) toastSuccess();
                } catch (err) {
                        logger.error("Failed to import collections", err);
                        if (showToast) toastFailure(err);
                }

                return;
        }

        const file = await chooseFile("application/json");
        if (!file) return;

        try {
                await importCollections(await file.text());
                if (showToast) toastSuccess();
        } catch (err) {
                logger.error("Failed to import collections", err);
                if (showToast) toastFailure(err);
        }
}

const toastSuccess = () => Toasts.show({
        type: Toasts.Type.SUCCESS,
        message: "Collections imported successfully.",
        id: Toasts.genId(),
});

const toastFailure = (err: unknown) => Toasts.show({
        type: Toasts.Type.FAILURE,
        message: `Failed to import collections: ${String(err)}`,
        id: Toasts.genId(),
});
