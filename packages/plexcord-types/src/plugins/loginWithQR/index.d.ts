import { OptionType } from "../../utils/types";
import { ReactElement } from "react";
import openQrModal from "./ui/modals/QrModal";
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    settings: import("../../utils/types").DefinedSettings<{
        scanQr: {
            type: OptionType.COMPONENT;
            description: string;
            component(): import("react").JSX.Element;
        };
    }, {}, {}>;
    patches: {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
    }[];
    qrModalOpen: boolean;
    insertScanQrButton: (button: ReactElement) => import("react").JSX.Element;
    readonly ScanQrMenuItem: import("react").JSX.Element;
    readonly ScanQrSettingsSheet: {
        section: any;
        onClick: typeof openQrModal;
        searchableTitles: any[];
        label: any;
        ariaLabel: any;
    };
    start(): void;
    stop(): void;
} & Record<string, any>;
export default _default;
