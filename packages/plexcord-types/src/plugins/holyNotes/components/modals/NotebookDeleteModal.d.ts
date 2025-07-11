import { ModalProps } from "../../../../utils/modal";
declare const _default: ({ onClose, notebook, onChangeTab, ...props }: ModalProps & {
    onClose: () => void;
    notebook: string;
    onChangeTab: React.Dispatch<React.SetStateAction<string>>;
}) => import("react").JSX.Element;
export default _default;
