import { OptionType } from "../../utils/types";
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    settings: import("../../utils/types").DefinedSettings<{
        idleTimeout: {
            description: string;
            type: OptionType.SLIDER;
            markers: number[];
            default: number;
            stickToMarkers: false;
            restartNeeded: true;
        };
        remainInIdle: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
        };
    }, import("../../utils/types").SettingsChecks<{
        idleTimeout: {
            description: string;
            type: OptionType.SLIDER;
            markers: number[];
            default: number;
            stickToMarkers: false;
            restartNeeded: true;
        };
        remainInIdle: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
        };
    }>, {}>;
    patches: {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        }[];
    }[];
    handleOnline(): void;
    getIdleTimeout(): number;
} & Record<string, any>;
export default _default;
