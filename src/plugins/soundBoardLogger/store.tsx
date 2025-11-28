/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import * as DataStore from "@api/DataStore";

import settings from "./settings";
import { SoundEvent, SoundLogEntry } from "./utils";

// Cache for logged sounds to avoid repeated DataStore calls
let cachedSounds: SoundLogEntry[] | null = null;
let cacheTimestamp = 0;
const CACHE_DURATION = 1000; // 1 second cache

/** Returns an array with the logged sounds */
export async function getLoggedSounds(): Promise<SoundLogEntry[]> {
    const now = Date.now();

    // Return cached data if it's still fresh
    if (cachedSounds !== null && (now - cacheTimestamp) < CACHE_DURATION) {
        return cachedSounds;
    }

    const data = await DataStore.get("SoundBoardLogList");
    if (!data) {
        DataStore.set("SoundBoardLogList", []);
        cachedSounds = [];
    } else {
        cachedSounds = data;
    }

    cacheTimestamp = now;
    return cachedSounds!; // We know it's not null at this point
}

/** Invalidates the cache */
function invalidateCache() {
    cachedSounds = null;
    cacheTimestamp = 0;
}

/** Attempts to add a sound event to the log */
export async function updateLoggedSounds(sound: SoundEvent): Promise<void> {
    const data = await getLoggedSounds();
    const timestamp = Date.now();

    if (!data || data.length === 0) {
        await DataStore.set("SoundBoardLogList", [{ ...sound, users: [{ id: sound.userId, plays: [timestamp] }] }]);
        invalidateCache();
        return;
    }

    // Find existing sound entry
    const existingIndex = data.findIndex(item => item.soundId === sound.soundId);

    if (existingIndex !== -1) {
        // Sound exists, update user plays and move to top
        const existingSound = { ...data[existingIndex] }; // Create a copy
        const existingUserIndex = existingSound.users.findIndex(user => user.id === sound.userId);

        if (existingUserIndex !== -1) {
            // User exists, add new play timestamp
            existingSound.users[existingUserIndex].plays.push(timestamp);
        } else {
            // New user for existing sound
            existingSound.users.push({ id: sound.userId, plays: [timestamp] });
        }

        // Remove from current position and add to the beginning
        const newSounds = [...data];
        newSounds.splice(existingIndex, 1); // Remove from current position
        newSounds.unshift(existingSound); // Add to beginning

        // Apply limit if necessary
        let limit = settings.store.savedIds ?? 50;
        if (limit === 0) limit = Infinity;
        const limitedSounds = newSounds.slice(0, limit);

        await DataStore.set("SoundBoardLogList", limitedSounds);
    } else {
        // New sound
        let limit = settings.store.savedIds ?? 50;
        if (limit === 0) limit = Infinity;

        const newEntry = { ...sound, users: [{ id: sound.userId, plays: [timestamp] }] };
        const modified = [newEntry, ...data].slice(0, limit);

        await DataStore.set("SoundBoardLogList", modified);
    }

    invalidateCache(); // Invalidate cache after updating
}

/** Clears the logged sounds array */
export async function clearLoggedSounds() {
    await DataStore.set("SoundBoardLogList", []);
    invalidateCache(); // Clear cache when data is cleared
}
