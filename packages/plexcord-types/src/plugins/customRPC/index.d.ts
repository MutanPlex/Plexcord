import { OptionType } from "../../utils/types";
declare const enum ActivityType {
    PLAYING = 0,
    STREAMING = 1,
    LISTENING = 2,
    WATCHING = 3,
    COMPETING = 5
}
declare const enum TimestampMode {
    NONE = 0,
    NOW = 1,
    TIME = 2,
    CUSTOM = 3
}
declare function onChange(): void;
declare function isStreamLinkDisabled(): boolean;
declare function isStreamLinkValid(value: string): true | "Streaming link must be a valid URL." | "Streaming link must be not longer than 512 characters.";
declare function isTimestampDisabled(): boolean;
declare function isImageKeyValid(value: string): true | "Don't use a Discord link. Use an Imgur image link instead." | "Imgur link must be a direct link to the image (e.g. https://i.imgur.com/...). Right click the image and click 'Copy image address'" | "Tenor link must be a direct link to the image (e.g. https://media.tenor.com/...). Right click the GIF and click 'Copy image address'";
declare function setRpc(disable?: boolean): Promise<void>;
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    dependencies: string[];
    start: typeof setRpc;
    stop: () => Promise<void>;
    settings: import("../../utils/types").DefinedSettings<{
        appID: {
            type: OptionType.STRING;
            description: string;
            onChange: typeof onChange;
            isValid: (value: string) => true | "Application ID is required." | "Application ID must be a number.";
        };
        appName: {
            type: OptionType.STRING;
            description: string;
            onChange: typeof onChange;
            isValid: (value: string) => true | "Application name is required." | "Application name must be not longer than 128 characters.";
        };
        details: {
            type: OptionType.STRING;
            description: string;
            onChange: typeof onChange;
            isValid: (value: string) => true | "Details (line 1) must be not longer than 128 characters.";
        };
        state: {
            type: OptionType.STRING;
            description: string;
            onChange: typeof onChange;
            isValid: (value: string) => true | "State (line 2) must be not longer than 128 characters.";
        };
        type: {
            type: OptionType.SELECT;
            description: string;
            onChange: typeof onChange;
            options: ({
                label: string;
                value: ActivityType;
                default: true;
            } | {
                label: string;
                value: ActivityType;
                default?: undefined;
            })[];
        };
        streamLink: {
            type: OptionType.STRING;
            description: string;
            onChange: typeof onChange;
            disabled: typeof isStreamLinkDisabled;
            isValid: typeof isStreamLinkValid;
        };
        timestampMode: {
            type: OptionType.SELECT;
            description: string;
            onChange: typeof onChange;
            options: ({
                label: string;
                value: TimestampMode;
                default: true;
            } | {
                label: string;
                value: TimestampMode;
                default?: undefined;
            })[];
        };
        startTime: {
            type: OptionType.NUMBER;
            description: string;
            onChange: typeof onChange;
            disabled: typeof isTimestampDisabled;
            isValid: (value: number) => true | "Start timestamp must be greater than 0.";
        };
        endTime: {
            type: OptionType.NUMBER;
            description: string;
            onChange: typeof onChange;
            disabled: typeof isTimestampDisabled;
            isValid: (value: number) => true | "End timestamp must be greater than 0.";
        };
        imageBig: {
            type: OptionType.STRING;
            description: string;
            onChange: typeof onChange;
            isValid: typeof isImageKeyValid;
        };
        imageBigTooltip: {
            type: OptionType.STRING;
            description: string;
            onChange: typeof onChange;
            isValid: (value: string) => true | "Big image tooltip must be not longer than 128 characters.";
        };
        imageSmall: {
            type: OptionType.STRING;
            description: string;
            onChange: typeof onChange;
            isValid: typeof isImageKeyValid;
        };
        imageSmallTooltip: {
            type: OptionType.STRING;
            description: string;
            onChange: typeof onChange;
            isValid: (value: string) => true | "Small image tooltip must be not longer than 128 characters.";
        };
        buttonOneText: {
            type: OptionType.STRING;
            description: string;
            onChange: typeof onChange;
            isValid: (value: string) => true | "Button 1 text must be not longer than 31 characters.";
        };
        buttonOneURL: {
            type: OptionType.STRING;
            description: string;
            onChange: typeof onChange;
        };
        buttonTwoText: {
            type: OptionType.STRING;
            description: string;
            onChange: typeof onChange;
            isValid: (value: string) => true | "Button 2 text must be not longer than 31 characters.";
        };
        buttonTwoURL: {
            type: OptionType.STRING;
            description: string;
            onChange: typeof onChange;
        };
    }, import("../../utils/types").SettingsChecks<{
        appID: {
            type: OptionType.STRING;
            description: string;
            onChange: typeof onChange;
            isValid: (value: string) => true | "Application ID is required." | "Application ID must be a number.";
        };
        appName: {
            type: OptionType.STRING;
            description: string;
            onChange: typeof onChange;
            isValid: (value: string) => true | "Application name is required." | "Application name must be not longer than 128 characters.";
        };
        details: {
            type: OptionType.STRING;
            description: string;
            onChange: typeof onChange;
            isValid: (value: string) => true | "Details (line 1) must be not longer than 128 characters.";
        };
        state: {
            type: OptionType.STRING;
            description: string;
            onChange: typeof onChange;
            isValid: (value: string) => true | "State (line 2) must be not longer than 128 characters.";
        };
        type: {
            type: OptionType.SELECT;
            description: string;
            onChange: typeof onChange;
            options: ({
                label: string;
                value: ActivityType;
                default: true;
            } | {
                label: string;
                value: ActivityType;
                default?: undefined;
            })[];
        };
        streamLink: {
            type: OptionType.STRING;
            description: string;
            onChange: typeof onChange;
            disabled: typeof isStreamLinkDisabled;
            isValid: typeof isStreamLinkValid;
        };
        timestampMode: {
            type: OptionType.SELECT;
            description: string;
            onChange: typeof onChange;
            options: ({
                label: string;
                value: TimestampMode;
                default: true;
            } | {
                label: string;
                value: TimestampMode;
                default?: undefined;
            })[];
        };
        startTime: {
            type: OptionType.NUMBER;
            description: string;
            onChange: typeof onChange;
            disabled: typeof isTimestampDisabled;
            isValid: (value: number) => true | "Start timestamp must be greater than 0.";
        };
        endTime: {
            type: OptionType.NUMBER;
            description: string;
            onChange: typeof onChange;
            disabled: typeof isTimestampDisabled;
            isValid: (value: number) => true | "End timestamp must be greater than 0.";
        };
        imageBig: {
            type: OptionType.STRING;
            description: string;
            onChange: typeof onChange;
            isValid: typeof isImageKeyValid;
        };
        imageBigTooltip: {
            type: OptionType.STRING;
            description: string;
            onChange: typeof onChange;
            isValid: (value: string) => true | "Big image tooltip must be not longer than 128 characters.";
        };
        imageSmall: {
            type: OptionType.STRING;
            description: string;
            onChange: typeof onChange;
            isValid: typeof isImageKeyValid;
        };
        imageSmallTooltip: {
            type: OptionType.STRING;
            description: string;
            onChange: typeof onChange;
            isValid: (value: string) => true | "Small image tooltip must be not longer than 128 characters.";
        };
        buttonOneText: {
            type: OptionType.STRING;
            description: string;
            onChange: typeof onChange;
            isValid: (value: string) => true | "Button 1 text must be not longer than 31 characters.";
        };
        buttonOneURL: {
            type: OptionType.STRING;
            description: string;
            onChange: typeof onChange;
        };
        buttonTwoText: {
            type: OptionType.STRING;
            description: string;
            onChange: typeof onChange;
            isValid: (value: string) => true | "Button 2 text must be not longer than 31 characters.";
        };
        buttonTwoURL: {
            type: OptionType.STRING;
            description: string;
            onChange: typeof onChange;
        };
    }>, {}>;
    patches: {
        find: string;
        all: true;
        replacement: {
            match: RegExp;
            replace: string;
        };
    }[];
    settingsAboutComponent: () => import("react").JSX.Element;
} & Record<string, any>;
export default _default;
