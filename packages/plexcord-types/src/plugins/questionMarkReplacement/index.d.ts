import { OptionType } from "../../utils/types";
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    settings: import("../../utils/types").DefinedSettings<{
        replace: {
            type: OptionType.STRING;
            description: string;
            default: string;
        };
    }, import("../../utils/types").SettingsChecks<{
        replace: {
            type: OptionType.STRING;
            description: string;
            default: string;
        };
    }>, {}>;
    start(): void;
    stop(): void;
} & Record<string, any>;
export default _default;
