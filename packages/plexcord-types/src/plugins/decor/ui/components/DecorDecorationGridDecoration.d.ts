import type { HTMLProps } from "react";
import { Decoration } from "../../lib/api";
interface DecorDecorationGridDecorationProps extends HTMLProps<HTMLDivElement> {
    decoration: Decoration;
    isSelected: boolean;
    onSelect: () => void;
}
export default function DecorDecorationGridDecoration(props: DecorDecorationGridDecorationProps): import("react").JSX.Element;
export {};
