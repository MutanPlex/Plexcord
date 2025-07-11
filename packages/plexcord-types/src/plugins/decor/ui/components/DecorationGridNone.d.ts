import { HTMLProps } from "react";
type DecorationGridNoneProps = HTMLProps<HTMLDivElement> & {
    isSelected: boolean;
    onSelect: () => void;
};
export default function DecorationGridNone(props: DecorationGridNoneProps): import("react").JSX.Element;
export {};
