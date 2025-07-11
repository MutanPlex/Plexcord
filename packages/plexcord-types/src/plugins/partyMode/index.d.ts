import { OptionType, ReporterTestable } from "../../utils/types";
declare const enum Intensity {
    Normal = 0,
    Better = 1,
    ProjectX = 2
}
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    reporterTestable: ReporterTestable;
    settings: import("../../utils/types").DefinedSettings<{
        superIntensePartyMode: {
            description: string;
            type: OptionType.SELECT;
            options: ({
                label: string;
                value: Intensity;
                default: true;
            } | {
                label: string;
                value: Intensity;
                default?: undefined;
            })[];
            restartNeeded: false;
            onChange: typeof setSettings;
        };
    }, import("../../utils/types").SettingsChecks<{
        superIntensePartyMode: {
            description: string;
            type: OptionType.SELECT;
            options: ({
                label: string;
                value: Intensity;
                default: true;
            } | {
                label: string;
                value: Intensity;
                default?: undefined;
            })[];
            restartNeeded: false;
            onChange: typeof setSettings;
        };
    }>, {}>;
    start(): void;
    stop(): void;
} & Record<string, any>;
export default _default;
declare function setSettings(intensity: Intensity): void;
