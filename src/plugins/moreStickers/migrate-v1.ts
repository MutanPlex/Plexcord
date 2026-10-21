/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { DataStore } from "@api/index";
import { showToast } from "@webpack/common";

import { getRecentStickers, setRecentStickers } from "./components/misc";
import { deleteStickerPack, getStickerPack, getStickerPackMetas, saveStickerPack } from "./stickers";
import { Sticker, StickerPack } from "./types";

const PACKS_KEY = "MoreStickers:Packs";
const PACKS_KEY_OLD = "Plexcord-MoreStickers-Packs";

const RECENT_STICKERS_KEY = "MoreStickers:RecentStickers";
const RECENT_STICKERS_KEY_OLD = "Plexcord-MoreStickers-RecentStickers";

function migrateStickerPackId(oldStickerPackId: string): string {
    if (oldStickerPackId.startsWith("Plexcord-MoreStickers-Line-Pack")) {
        const id = oldStickerPackId.replace("Plexcord-MoreStickers-Line-Pack-", "");
        return "MoreStickers:Line:Pack:" + id;
    } else if (oldStickerPackId.startsWith("Plexcord-MoreStickers-Line-Emoji-Pack")) {
        const id = oldStickerPackId.replace("Plexcord-MoreStickers-Line-Emoji-Pack-", "");
        return "MoreStickers:Line:Emoji:Pack:" + id;
    } else {
        return oldStickerPackId;
    }
}

function migrateStickerId(oldStickerId: string): string {
    if (oldStickerId.startsWith("Plexcord-MoreStickers-Line-Sticker")) {
        const [stickerPackId, stickerId] = oldStickerId.replace("Plexcord-MoreStickers-Line-Sticker", "").split("-", 2);
        return "MoreStickers:Line:Sticker:" + stickerPackId + ":" + stickerId;
    } else if (oldStickerId.startsWith("Plexcord-MoreStickers-Line-Emoji")) {
        const [stickerPackId, stickerId] = oldStickerId.replace("Plexcord-MoreStickers-Line-Emoji", "").split("-", 2);
        return "MoreStickers:Line:Emoji:" + stickerPackId + ":" + stickerId;
    } else {
        return oldStickerId;
    }
}

function migrateSticker(oldSticker: Sticker): Sticker {
    return {
        ...oldSticker,
        id: migrateStickerId(oldSticker.id),
    };
}

function migrateStickerPack(oldStickerPack: StickerPack): StickerPack {
    return {
        ...oldStickerPack,
        id: migrateStickerPackId(oldStickerPack.id),
        logo: migrateSticker(oldStickerPack.logo),
        stickers: oldStickerPack.stickers.map(migrateSticker),
    };
}

export async function isV1() {
    const newPackMetas = await getStickerPackMetas(PACKS_KEY);
    if (newPackMetas.length > 0) {
        return false;
    }

    const oldPackMetas = await getStickerPackMetas(PACKS_KEY_OLD);
    if (oldPackMetas.length === 0) {
        return false;
    }

    return true;
}

export async function migrate() {
    const newPackMetas = await getStickerPackMetas(PACKS_KEY);
    if (newPackMetas.length > 0) {
        showToast({
            text: t(plugin.moreStickers.toast.newStickerPacksAlready),
            variant: "critical",
            duration: 1000
        });
        return;
    }

    let oldPackMetas = await getStickerPackMetas(PACKS_KEY_OLD);
    if (oldPackMetas.length === 0) {
        showToast({
            text: t(plugin.moreStickers.toast.oldStickerPacksNot),
            variant: "critical",
            duration: 1000
        });
        return;
    }

    for (const oldStickerPackMeta of oldPackMetas) {
        try {
            const oldStickerPack = await getStickerPack(oldStickerPackMeta.id);
            if (oldStickerPack === null) continue;
            const newStickerPack = migrateStickerPack(oldStickerPack);

            try {
                await saveStickerPack(newStickerPack, PACKS_KEY);
                await deleteStickerPack(oldStickerPackMeta.id, PACKS_KEY_OLD);
            } catch (e) {
                await deleteStickerPack(newStickerPack.id, PACKS_KEY);
            }
        } catch (e) {
            console.error(e);
            showToast({
                text: t(plugin.moreStickers.toast.migrationFailedTitleId, { title: oldStickerPackMeta.title, id: oldStickerPackMeta.id }),
                variant: "critical",
                duration: 1000
            });
        }
    }

    oldPackMetas = await getStickerPackMetas(PACKS_KEY_OLD);
    if (oldPackMetas.length === 0) {
        await DataStore.del(PACKS_KEY_OLD);
    }

    const oldRecentStickers = await getRecentStickers(RECENT_STICKERS_KEY_OLD);
    if (oldRecentStickers.length > 0) {
        const newRecentStickers = oldRecentStickers.map(migrateSticker);
        await setRecentStickers(newRecentStickers, RECENT_STICKERS_KEY);
        await DataStore.del(RECENT_STICKERS_KEY_OLD);
    }

    console.log("Migration complete");
    showToast({
        text: t(plugin.moreStickers.toast.stickerPackMigrationComplete),
        variant: "success",
        duration: 1000
    });
}
