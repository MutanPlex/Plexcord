import { Logger } from "../../utils/Logger";
import { OptionType, ReporterTestable } from "../../utils/types";
import { stopWs } from "./initWs";
export declare const PORT = 8485;
export declare const logger: Logger;
export declare const settings: import("../../utils/types").DefinedSettings<{
    notifyOnAutoConnect: {
        description: string;
        type: OptionType.BOOLEAN;
        default: true;
    };
    usePatchedModule: {
        description: string;
        default: true;
        type: OptionType.BOOLEAN;
    };
    reloadAfterToggle: {
        description: string;
        default: true;
        type: OptionType.BOOLEAN;
    };
}, import("../../utils/types").SettingsChecks<{
    notifyOnAutoConnect: {
        description: string;
        type: OptionType.BOOLEAN;
        default: true;
    };
    usePatchedModule: {
        description: string;
        default: true;
        type: OptionType.BOOLEAN;
    };
    reloadAfterToggle: {
        description: string;
        default: true;
        type: OptionType.BOOLEAN;
    };
}>, {}>;
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    reporterTestable: ReporterTestable;
    settings: import("../../utils/types").DefinedSettings<{
        notifyOnAutoConnect: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
        };
        usePatchedModule: {
            description: string;
            default: true;
            type: OptionType.BOOLEAN;
        };
        reloadAfterToggle: {
            description: string;
            default: true;
            type: OptionType.BOOLEAN;
        };
    }, import("../../utils/types").SettingsChecks<{
        notifyOnAutoConnect: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
        };
        usePatchedModule: {
            description: string;
            default: true;
            type: OptionType.BOOLEAN;
        };
        reloadAfterToggle: {
            description: string;
            default: true;
            type: OptionType.BOOLEAN;
        };
    }>, {}>;
    toolboxActions: {
        Reconnect(): void;
    };
    start(): void;
    stop: typeof stopWs;
} & Record<string, any>;
export default _default;
