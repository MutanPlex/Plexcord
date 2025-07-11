import { JSX } from "react";
export interface GridProps<ItemT> {
    renderItem: (item: ItemT) => JSX.Element;
    getItemKey: (item: ItemT) => string;
    itemKeyPrefix?: string;
    items: Array<ItemT>;
}
export default function Grid<ItemT>({ renderItem, getItemKey, itemKeyPrefix: ikp, items }: GridProps<ItemT>): JSX.Element;
