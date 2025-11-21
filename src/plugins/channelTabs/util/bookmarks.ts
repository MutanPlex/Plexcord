/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import * as DataStore from "@api/DataStore";
import { t } from "@api/i18n";
import { useAwaiter } from "@utils/react";
import { ChannelStore, useCallback, UserStore, useState } from "@webpack/common";

import { bookmarkFolderColors, logger } from "./constants";
import { Bookmark, BookmarkFolder, Bookmarks, UseBookmark, UseBookmarkMethods } from "./types";

export function isBookmarkFolder(bookmark: Bookmark | BookmarkFolder): bookmark is BookmarkFolder {
    return "bookmarks" in bookmark;
}

export function bookmarkPlaceholderName(bookmark: Omit<Bookmark | BookmarkFolder, "name">) {
    if (isBookmarkFolder(bookmark as Bookmark | BookmarkFolder)) return t("plugin.channelTabs.bookmark.folder");

    const { channelId } = (bookmark as Bookmark);

    // handle special synthetic pages
    if (channelId?.startsWith("__")) {
        const specialPagesMap: Record<string, string> = {
            "__quests__": t("plugin.channelTabs.bookmark.quests"),
            "__message-requests__": t("plugin.channelTabs.bookmark.messageRequests"),
            "__friends__": t("plugin.channelTabs.bookmark.friends"),
            "__shop__": t("plugin.channelTabs.bookmark.shop"),
            "__library__": t("plugin.channelTabs.bookmark.library"),
            "__discovery__": t("plugin.channelTabs.bookmark.discovery"),
            "__nitro__": t("plugin.channelTabs.bookmark.nitro"),
            "__icymi__": t("plugin.channelTabs.bookmark.icymi"),
            "__activity__": t("plugin.channelTabs.bookmark.activity"),
        };

        return specialPagesMap[channelId] || t("plugin.channelTabs.bookmark.specialPage");
    }

    const channel = ChannelStore.getChannel(channelId);

    if (!channel) return t("plugin.channelTabs.bookmark.label");
    if (channel.name) return `#${channel.name}`;
    if (channel.recipients) return UserStore.getUser(channel.recipients?.[0])?.username
        ?? t("plugin.channelTabs.bookmark.unknown");
    return t("plugin.channelTabs.bookmark.label");
}

export function useBookmarks(userId: string): UseBookmark {
    const [bookmarks, _setBookmarks] = useState<{ [k: string]: Bookmarks; }>({});
    const setBookmarks = useCallback((bookmarks: { [k: string]: Bookmarks; }) => {
        _setBookmarks(bookmarks);
        DataStore.update("ChannelTabs_bookmarks", old => ({
            ...old,
            [userId]: bookmarks[userId]
        }));
    }, [userId]);

    useAwaiter(() => DataStore.get("ChannelTabs_bookmarks"), {
        fallbackValue: undefined,
        onSuccess(bookmarks: { [k: string]: Bookmarks; }) {
            if (!bookmarks) {
                bookmarks = { [userId]: [] };
                DataStore.set("ChannelTabs_bookmarks", { [userId]: [] });
            }
            if (!bookmarks[userId]) bookmarks[userId] = [];

            setBookmarks(bookmarks);
        },
    });

    const methods = {
        addBookmark: (bookmark, folderIndex) => {
            if (!bookmarks) return;

            if (typeof folderIndex === "number" && !(isBookmarkFolder(bookmarks[userId][folderIndex])))
                return logger.error("Attempted to add bookmark to non-folder " + folderIndex, bookmarks);

            const name = bookmark.name ?? bookmarkPlaceholderName(bookmark);
            if (typeof folderIndex === "number")
                (bookmarks[userId][folderIndex] as BookmarkFolder).bookmarks.push({ ...bookmark, name });
            else bookmarks[userId].push({ ...bookmark, name });

            setBookmarks({
                ...bookmarks
            });
        },
        addFolder() {
            if (!bookmarks) return;
            const length = bookmarks[userId].push({
                name: t("plugin.channelTabs.bookmark.folder"),
                iconColor: bookmarkFolderColors.Black,
                bookmarks: []
            });

            setBookmarks({
                ...bookmarks
            });
            return length - 1;
        },
        editBookmark(index, newBookmark) {
            if (!bookmarks) return;
            Object.entries(newBookmark).forEach(([k, v]) => {
                bookmarks[userId][index][k] = v;
            });
            setBookmarks({
                ...bookmarks
            });
        },
        deleteBookmark(index, folderIndex) {
            if (!bookmarks) return;
            if (index < 0 || index > (bookmarks[userId].length - 1))
                return logger.error("Attempted to delete bookmark at index " + index, bookmarks);

            if (typeof folderIndex === "number")
                (bookmarks[userId][folderIndex] as BookmarkFolder).bookmarks.splice(index, 1);
            else bookmarks[userId].splice(index, 1);

            setBookmarks({
                ...bookmarks
            });
        },
        moveDraggedBookmarks(index1, index2) {
            if (index1 < 0 || index2 > bookmarks[userId].length)
                return logger.error(`Out of bounds drag (swap between indexes ${index1} and ${index2})`, bookmarks);

            const firstItem = bookmarks[userId].splice(index1, 1)[0];
            bookmarks[userId].splice(index2, 0, firstItem);

            setBookmarks({
                ...bookmarks
            });
        }
    } as UseBookmarkMethods;

    return [bookmarks[userId], methods];
}
