import { JSX } from "react";
import { GridProps } from "./Grid";
type Section<SectionT, ItemT> = SectionT & {
    items: Array<ItemT>;
};
interface SectionedGridListProps<ItemT, SectionT, SectionU = Section<SectionT, ItemT>> extends Omit<GridProps<ItemT>, "items"> {
    renderSectionHeader: (section: SectionU) => JSX.Element;
    getSectionKey: (section: SectionU) => string;
    sections: SectionU[];
}
export default function SectionedGridList<ItemT, SectionU>(props: SectionedGridListProps<ItemT, SectionU>): JSX.Element;
export {};
