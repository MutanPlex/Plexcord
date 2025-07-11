import "./styles.css";
import { OptionType } from "../../utils/types";
declare const enum IndicatorType {
    SERVER = 1,
    FRIEND = 2,
    BOTH = 3
}
export declare const settings: import("../../utils/types").DefinedSettings<{
    mode: {
        description: string;
        type: OptionType.SELECT;
        options: ({
            label: string;
            value: IndicatorType;
            default: true;
        } | {
            label: string;
            value: IndicatorType;
            default?: undefined;
        })[];
        restartNeeded: true;
    };
    useCompact: {
        description: string;
        type: OptionType.BOOLEAN;
        default: false;
        restartNeeded: true;
    };
}, import("../../utils/types").SettingsChecks<{
    mode: {
        description: string;
        type: OptionType.SELECT;
        options: ({
            label: string;
            value: IndicatorType;
            default: true;
        } | {
            label: string;
            value: IndicatorType;
            default?: undefined;
        })[];
        restartNeeded: true;
    };
    useCompact: {
        description: string;
        type: OptionType.BOOLEAN;
        default: false;
        restartNeeded: true;
    };
}>, {}>;
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    dependencies: string[];
    settings: import("../../utils/types").DefinedSettings<{
        mode: {
            description: string;
            type: OptionType.SELECT;
            options: ({
                label: string;
                value: IndicatorType;
                default: true;
            } | {
                label: string;
                value: IndicatorType;
                default?: undefined;
            })[];
            restartNeeded: true;
        };
        useCompact: {
            description: string;
            type: OptionType.BOOLEAN;
            default: false;
            restartNeeded: true;
        };
    }, import("../../utils/types").SettingsChecks<{
        mode: {
            description: string;
            type: OptionType.SELECT;
            options: ({
                label: string;
                value: IndicatorType;
                default: true;
            } | {
                label: string;
                value: IndicatorType;
                default?: undefined;
            })[];
            restartNeeded: true;
        };
        useCompact: {
            description: string;
            type: OptionType.BOOLEAN;
            default: false;
            restartNeeded: true;
        };
    }>, {}>;
    renderIndicator: () => import("react").JSX.Element;
    start(): void;
    stop(): void;
} & Record<string, any>;
export default _default;
