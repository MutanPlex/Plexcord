import { ModalProps } from "../../utils/modal";
export declare function DependencyModal({ props, options: { key, checkytdlp, checkffmpeg } }: {
    props: ModalProps;
    options: {
        key: string;
        checkytdlp: () => Promise<boolean>;
        checkffmpeg: () => Promise<boolean>;
    };
}): import("react").JSX.Element;
