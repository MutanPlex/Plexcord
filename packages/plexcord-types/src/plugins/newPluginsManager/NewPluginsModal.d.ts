import { ModalProps } from "../../utils/modal";
import { JSX } from "react";
export declare function NewPluginsModal({ modalProps, newPlugins }: {
    modalProps: ModalProps;
    newPlugins: Set<string>;
}): JSX.Element;
export declare function openNewPluginsModal(): Promise<void>;
