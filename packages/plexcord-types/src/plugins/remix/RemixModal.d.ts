import { ModalProps } from "../../utils/modal";
type Props = {
    modalProps: ModalProps;
    close: () => void;
    url?: string;
};
export default function RemixModal({ modalProps, close, url }: Props): import("react").JSX.Element;
export {};
