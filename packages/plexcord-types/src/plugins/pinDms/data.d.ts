export interface Category {
    id: string;
    name: string;
    color: number;
    channels: string[];
    collapsed?: boolean;
}
export declare let currentUserCategories: Category[];
export declare function init(): Promise<void>;
export declare function usePinnedDms(): void;
export declare function getCategory(id: string): Category | undefined;
export declare function getCategoryByIndex(index: number): Category;
export declare function createCategory(category: Category): void;
export declare function addChannelToCategory(channelId: string, categoryId: string): void;
export declare function removeChannelFromCategory(channelId: string): void;
export declare function removeCategory(categoryId: string): void;
export declare function collapseCategory(id: string, value?: boolean): void;
export declare function isPinned(id: string): boolean;
export declare function categoryLen(): number;
export declare function getAllUncollapsedChannels(): string[];
export declare function getSections(): number[];
export declare const canMoveArrayInDirection: (array: any[], index: number, direction: -1 | 1) => any;
export declare const canMoveCategoryInDirection: (id: string, direction: -1 | 1) => any;
export declare const canMoveCategory: (id: string) => any;
export declare const canMoveChannelInDirection: (channelId: string, direction: -1 | 1) => any;
export declare function moveCategory(id: string, direction: -1 | 1): void;
export declare function moveChannel(channelId: string, direction: -1 | 1): void;
