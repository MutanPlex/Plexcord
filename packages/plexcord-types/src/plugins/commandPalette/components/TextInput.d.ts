import "./style.css";
import { ModalProps } from "../../../utils/modal";
interface SimpleTextInputProps {
    modalProps: ModalProps;
    onSelect: (inputValue: string) => void;
    placeholder?: string;
    info?: string;
}
export declare function SimpleTextInput({ modalProps, onSelect, placeholder, info }: SimpleTextInputProps): import("react").JSX.Element;
export declare function openSimpleTextInput(placeholder?: string, info?: string): Promise<string>;
export {};
