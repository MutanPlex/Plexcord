/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

export enum Format { IMAGE = 1, VIDEO = 2 }

export interface Category {
    type: "Trending" | "Category";
    name: string;
    src: string;
    format: Format;
    gifs?: Gif[];
    createdAt?: number;
    lastUpdated?: number;
}

export interface Gif {
    id: string,
    src: string;
    url: string;
    height: number,
    width: number;
    addedAt?: number;
    channelId?: string;
    messageId?: string;
    attachmentId?: string;
}

export interface Props {
    favorites: { [src: string]: any; };
    trendingCategories: Category[];
}

type WithRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] };

export type Collection = WithRequired<Category, "gifs">;

export interface GifPickerInstance {
    props: {
        query: string;
        resultItems: { id: string; format: Format; src: string; url: string; width: number; height: number; }[];
        trendingCategories: Category[];
        favorites: Category[];
        item: { name?: string; id?: string; src?: string; url?: string; height?: number; width?: number; };
    };
    forceUpdate: () => void;
}

export interface GifItem {
    name?: string;
    id?: string;
    src?: string;
    url?: string;
    height?: number;
    width?: number;
}
