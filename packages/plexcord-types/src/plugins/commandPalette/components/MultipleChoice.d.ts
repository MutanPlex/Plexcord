import "./style.css";
import { ModalProps } from "../../../utils/modal";
import { ButtonAction } from "../commands";
interface MultipleChoiceProps {
    modalProps: ModalProps;
    onSelect: (selectedValue: any) => void;
    choices: ButtonAction[];
}
export declare function MultipleChoice({ modalProps, onSelect, choices }: MultipleChoiceProps): import("react").JSX.Element;
export declare function openMultipleChoice(choices: ButtonAction[]): Promise<ButtonAction>;
export {};
