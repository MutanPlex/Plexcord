import { openNewPluginsModal } from "./NewPluginsModal";
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    flux: {
        POST_CONNECTION_OPEN(): Promise<void>;
    };
    openNewPluginsModal: typeof openNewPluginsModal;
    KNOWN_PLUGINS_DATA_KEY: string;
} & Record<string, any>;
export default _default;
