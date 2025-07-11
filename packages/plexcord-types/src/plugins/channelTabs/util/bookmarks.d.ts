import { Bookmark, BookmarkFolder, UseBookmark } from "./types";
export declare function isBookmarkFolder(bookmark: Bookmark | BookmarkFolder): bookmark is BookmarkFolder;
export declare function bookmarkPlaceholderName(bookmark: Omit<Bookmark | BookmarkFolder, "name">): string;
export declare function useBookmarks(userId: string): UseBookmark;
