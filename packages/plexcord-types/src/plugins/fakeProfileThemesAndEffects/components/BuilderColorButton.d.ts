import { type BuilderButtonProps, type CustomColorPickerProps } from ".";
export interface BuilderColorButtonProps extends Pick<BuilderButtonProps, "label">, Pick<CustomColorPickerProps, "suggestedColors"> {
    color: number | null;
    setColor: (color: number | null) => void;
}
export declare function BuilderColorButton({ label, color, setColor, suggestedColors }: BuilderColorButtonProps): import("react").JSX.Element;
