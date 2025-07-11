import "./specialCard.css";
import type { PropsWithChildren } from "react";
interface StyledCardProps {
    title: string;
    subtitle?: string;
    description: string;
    cardImage?: string;
    backgroundImage?: string;
    backgroundColor?: string;
    buttonTitle?: string;
    buttonOnClick?: () => void;
}
export declare function SpecialCard({ title, subtitle, description, cardImage, backgroundImage, backgroundColor, buttonTitle, buttonOnClick: onClick, children }: PropsWithChildren<StyledCardProps>): import("react").JSX.Element;
export {};
