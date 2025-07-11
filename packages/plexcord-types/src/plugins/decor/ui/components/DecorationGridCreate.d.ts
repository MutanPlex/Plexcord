import { HTMLProps } from "react";
type DecorationGridCreateProps = HTMLProps<HTMLDivElement> & {
    onSelect: () => void;
};
export default function DecorationGridCreate(props: DecorationGridCreateProps): import("react").JSX.Element;
export {};
