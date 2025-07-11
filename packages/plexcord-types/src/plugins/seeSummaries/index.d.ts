import { OptionType } from "../../utils/types";
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    settings: import("../../utils/types").DefinedSettings<{
        summaryExpiryThresholdDays: {
            type: OptionType.SLIDER;
            description: string;
            markers: number[];
            stickToMarkers: false;
            default: number;
        };
    }, import("../../utils/types").SettingsChecks<{
        summaryExpiryThresholdDays: {
            type: OptionType.SLIDER;
            description: string;
            markers: number[];
            stickToMarkers: false;
            default: number;
        };
    }>, {}>;
    patches: {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
    }[];
    flux: {
        CONVERSATION_SUMMARY_UPDATE(data: any): void;
    };
    start(): Promise<void>;
    shouldFetch(channelId: string): boolean;
} & Record<string, any>;
export default _default;
