import { ModalProps } from "../../../utils/modal";
export declare const requireSettingsMenu: () => Promise<boolean>;
interface Props {
    categoryId: string | null;
    initialChannelId: string | null;
    modalProps: ModalProps;
}
export declare function NewCategoryModal({ categoryId, modalProps, initialChannelId, }: Props): import("react").JSX.Element | null;
export declare const openCategoryModal: (categoryId: string | null, channelId: string | null) => Promise<string>;
export {};
