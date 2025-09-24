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

import {
    createStore,
    del,
    get,
    keys,
    set,
} from "@api/DataStore";
import { Flogger, Native } from "@plugins/messageLoggerEnhanced";
import { LoggedAttachment } from "@plugins/messageLoggerEnhanced/types";
import { DEFAULT_IMAGE_CACHE_DIR } from "@plugins/messageLoggerEnhanced/utils/constants";
import { sleep } from "@utils/misc";

const ImageStore = createStore("MessageLoggerImageData", "MessageLoggerImageStore");

interface IDBSavedImage { attachmentId: string, path: string; }
const idbSavedImages = new Map<string, IDBSavedImage>();
(async () => {
    try {

        const paths = await keys(ImageStore);
        paths.forEach(path => {
            const str = path.toString();
            if (!str.startsWith(DEFAULT_IMAGE_CACHE_DIR)) return;

            idbSavedImages.set(str.split("/")?.[1]?.split(".")?.[0], { attachmentId: str.split("/")?.[1]?.split(".")?.[0], path: str });
        });
    } catch (err) {
        Flogger.error("Failed to get idb images", err);
    }
})();

export async function getImage(attachmentId: string, fileExt?: string | null): Promise<any> {
    // for people who have access to native api but some images are still in idb
    // also for people who dont have native api
    const idbPath = idbSavedImages.get(attachmentId)?.path;
    if (idbPath)
        return get(idbPath, ImageStore);

    if (IS_WEB) return null;

    return await Native.getImageNative(attachmentId);
}

export async function downloadAttachment(attachment: LoggedAttachment): Promise<string | undefined> {
    if (IS_WEB) {
        return await downloadAttachmentWeb(attachment);
    }

    const { path, error } = await Native.downloadAttachment(attachment);

    if (error || !path) {
        Flogger.error("Failed to download attachment", error, path);
        return;
    }

    return path;
}

export async function deleteImage(attachmentId: string): Promise<void> {
    const idbPath = idbSavedImages.get(attachmentId)?.path;
    if (idbPath)
        return await del(idbPath, ImageStore);


    if (IS_WEB) return;

    await Native.deleteFileNative(attachmentId);
}


async function downloadAttachmentWeb(attachment: LoggedAttachment, attempts = 0) {
    if (!attachment?.url || !attachment?.id || !attachment?.fileExtension) {
        Flogger.error("Invalid attachment", attachment);
        return;
    }

    const res = await fetch(attachment.url);
    if (res.status !== 200) {
        if (res.status === 404 || res.status === 403) return;
        attempts++;
        if (attempts > 3) {
            Flogger.warn(`Failed to get attachment ${attachment.id} for caching, error code ${res.status}`);
            return;
        }

        await sleep(1000);
        return downloadAttachmentWeb(attachment, attempts);
    }
    const ab = await res.arrayBuffer();
    const path = `${DEFAULT_IMAGE_CACHE_DIR}/${attachment.id}${attachment.fileExtension}`;

    // await writeImage(imageCacheDir, `${attachmentId}${fileExtension}`, new Uint8Array(ab));

    await set(path, new Uint8Array(ab), ImageStore);
    idbSavedImages.set(attachment.id, { attachmentId: attachment.id, path });

    return path;
}
