import { OptionType, StartAt } from "../../utils/types";
interface AllowLevels {
    error: boolean;
    warn: boolean;
    trace: boolean;
    log: boolean;
    info: boolean;
    debug: boolean;
}
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    settings: import("../../utils/types").DefinedSettings<{
        disableLoggers: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
            restartNeeded: true;
        };
        disableSpotifyLogger: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
            restartNeeded: true;
        };
        whitelistedLoggers: {
            type: OptionType.STRING;
            description: string;
            default: string;
            onChange(newVal: string): void;
        };
        allowLevel: {
            type: OptionType.COMPONENT;
            component: import("react").FunctionComponent<any>;
            default: AllowLevels;
        };
    }, import("../../utils/types").SettingsChecks<{
        disableLoggers: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
            restartNeeded: true;
        };
        disableSpotifyLogger: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
            restartNeeded: true;
        };
        whitelistedLoggers: {
            type: OptionType.STRING;
            description: string;
            default: string;
            onChange(newVal: string): void;
        };
        allowLevel: {
            type: OptionType.COMPONENT;
            component: import("react").FunctionComponent<any>;
            default: AllowLevels;
        };
    }>, {}>;
    startAt: StartAt.Init;
    start(): void;
    Noop: () => void;
    NoopLogger: () => {
        logDangerously: () => void;
        log: () => void;
        verboseDangerously: () => void;
        verbose: () => void;
        info: () => void;
        warn: () => void;
        error: () => void;
        trace: () => void;
        time: () => void;
        fileOnly: () => void;
    };
    shouldLog(logger: string, level: keyof AllowLevels): boolean;
    patches: ({
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
        predicate?: undefined;
    } | {
        find: string;
        predicate: () => boolean;
        replacement: {
            match: RegExp;
            replace: string;
        };
    })[];
} & Record<string, any>;
export default _default;
