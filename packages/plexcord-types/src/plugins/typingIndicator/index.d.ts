import "./style.css";
import { OptionType } from "../../utils/types";
declare const enum IndicatorMode {
    Dots = 1,
    Avatars = 2
}
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    settings: import("../../utils/types").DefinedSettings<{
        includeCurrentChannel: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        includeMutedChannels: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
        };
        includeBlockedUsers: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
        };
        indicatorMode: {
            type: OptionType.SELECT;
            description: string;
            options: ({
                label: string;
                value: number;
                default: true;
            } | {
                label: string;
                value: IndicatorMode;
                default?: undefined;
            })[];
        };
    }, import("../../utils/types").SettingsChecks<{
        includeCurrentChannel: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        includeMutedChannels: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
        };
        includeBlockedUsers: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
        };
        indicatorMode: {
            type: OptionType.SELECT;
            description: string;
            options: ({
                label: string;
                value: number;
                default: true;
            } | {
                label: string;
                value: IndicatorMode;
                default?: undefined;
            })[];
        };
    }>, {}>;
    patches: {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
    }[];
    TypingIndicator: (channelId: string, guildId: string) => import("react").JSX.Element;
} & Record<string, any>;
export default _default;
