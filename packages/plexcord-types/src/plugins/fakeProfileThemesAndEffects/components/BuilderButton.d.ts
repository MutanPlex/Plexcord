import type { ComponentProps, RefObject } from "react";
export interface BuilderButtonProps {
    label?: string | undefined;
    tooltip?: string | undefined;
    selectedStyle?: ComponentProps<"div">["style"];
    buttonProps?: ComponentProps<"div"> | undefined;
    buttonRef?: RefObject<null>;
}
export declare const BuilderButton: ({ buttonRef, label, tooltip, selectedStyle, buttonProps }: BuilderButtonProps) => import("react").JSX.Element;
