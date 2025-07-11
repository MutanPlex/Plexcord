import "./addonCard.css";
import type { MouseEventHandler, ReactNode } from "react";
interface Props {
    name: ReactNode;
    description: ReactNode;
    enabled: boolean;
    setEnabled: (enabled: boolean) => void;
    disabled?: boolean;
    isNew?: boolean;
    onMouseEnter?: MouseEventHandler<HTMLDivElement>;
    onMouseLeave?: MouseEventHandler<HTMLDivElement>;
    infoButton?: ReactNode;
    footer?: ReactNode;
    author?: ReactNode;
}
export declare function AddonCard({ disabled, isNew, name, infoButton, footer, author, enabled, setEnabled, description, onMouseEnter, onMouseLeave }: Props): import("react").JSX.Element;
export {};
