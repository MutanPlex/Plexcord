import { OptionType } from "../../utils/types";
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    enabledByDefault: true;
    required: boolean;
    settings: import("../../utils/types").DefinedSettings<{
        addBack: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
            restartNeeded: true;
            hidden: boolean;
        };
    }, import("../../utils/types").SettingsChecks<{
        addBack: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
            restartNeeded: true;
            hidden: boolean;
        };
    }>, {}>;
    start(): void;
    stop(): void;
    patches: ({
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        }[];
        all?: undefined;
        predicate?: undefined;
        noWarn?: undefined;
    } | {
        find: string;
        all: true;
        predicate: () => boolean;
        replacement: {
            match: RegExp;
            replace: string;
        };
        noWarn?: undefined;
    } | {
        find: string;
        predicate: () => boolean;
        replacement: {
            match: RegExp;
            replace: string;
        };
        all?: undefined;
        noWarn?: undefined;
    } | {
        find: string;
        predicate: () => boolean;
        replacement: {
            match: RegExp;
            replace: string;
        }[];
        all?: undefined;
        noWarn?: undefined;
    } | {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
        all?: undefined;
        predicate?: undefined;
        noWarn?: undefined;
    } | {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        }[];
        all: true;
        noWarn: true;
        predicate?: undefined;
    })[];
    copyImage(url: string): Promise<void>;
    saveImage(url: string): Promise<void>;
    copy(): void;
    cut(): void;
    paste(): Promise<void>;
} & Record<string, any>;
export default _default;
