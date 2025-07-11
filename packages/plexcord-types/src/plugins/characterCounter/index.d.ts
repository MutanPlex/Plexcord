import "./style.css";
import { OptionType } from "../../utils/types";
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    settings: import("../../utils/types").DefinedSettings<{
        colorEffects: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
            onChange: (value: any) => void;
        };
        position: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
            onChange: (value: any) => void;
        };
    }, import("../../utils/types").SettingsChecks<{
        colorEffects: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
            onChange: (value: any) => void;
        };
        position: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
            onChange: (value: any) => void;
        };
    }>, {}>;
    start: () => Promise<void>;
    stop(): void;
} & Record<string, any>;
export default _default;
