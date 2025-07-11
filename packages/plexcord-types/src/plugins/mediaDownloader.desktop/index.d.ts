import "./style.css";
import { ApplicationCommandInputType, ApplicationCommandOptionType } from "../../api/Commands";
import { OptionType, ReporterTestable } from "../../utils/types";
type ButtonComponent = {
    customId?: string;
    disabled?: boolean;
    emoji?: {
        animated?: boolean | string;
        id?: string;
        name?: string;
        src?: string;
    };
    id: string;
    label?: string;
    style: number;
    type: number;
    url?: string;
};
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    reporterTestable: ReporterTestable;
    settings: import("../../utils/types").DefinedSettings<{
        supportedWebsites: {
            description: string;
            type: OptionType.COMPONENT;
            default: string;
            component: () => import("react").JSX.Element;
        };
        showProgress: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        showFfmpegWarning: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        defaultGifQuality: {
            type: OptionType.NUMBER;
            description: string;
            default: number;
        };
        ytdlpArgs: {
            type: OptionType.STRING;
            description: string;
            placeholder: string;
        };
        ffmpegArgs: {
            type: OptionType.STRING;
            description: string;
            placeholder: string;
        };
    }, {
        defaultGifQuality: {
            isValid(this: import("../../utils/types").DefinedSettings<{
                supportedWebsites: {
                    description: string;
                    type: OptionType.COMPONENT;
                    default: string;
                    component: () => import("react").JSX.Element;
                };
                showProgress: {
                    type: OptionType.BOOLEAN;
                    description: string;
                    default: true;
                };
                showFfmpegWarning: {
                    type: OptionType.BOOLEAN;
                    description: string;
                    default: true;
                };
                defaultGifQuality: {
                    type: OptionType.NUMBER;
                    description: string;
                    default: number;
                };
                ytdlpArgs: {
                    type: OptionType.STRING;
                    description: string;
                    placeholder: string;
                };
                ffmpegArgs: {
                    type: OptionType.STRING;
                    description: string;
                    placeholder: string;
                };
            }, {}, {}>, value: number): boolean;
        };
    }, {}>;
    commands: {
        inputType: ApplicationCommandInputType.BUILT_IN;
        name: string;
        description: string;
        options: ({
            name: string;
            description: string;
            required: true;
            type: ApplicationCommandOptionType.STRING;
            choices?: undefined;
        } | {
            name: string;
            description: string;
            type: ApplicationCommandOptionType.STRING;
            choices: {
                name: string;
                value: string;
                label: string;
            }[];
            required: false;
        } | {
            name: string;
            type: ApplicationCommandOptionType.INTEGER;
            description: string;
            required: false;
            choices: {
                name: string;
                value: string;
                label: string;
            }[];
        } | {
            name: string;
            description: string;
            required: false;
            type: ApplicationCommandOptionType.STRING;
            choices?: undefined;
        })[];
        execute: (args: import("../../api/Commands").Argument[], ctx: import("../../api/Commands").CommandContext) => Promise<void | import("discord-types/general").Message>;
    }[];
    patches: {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
    }[];
    handleButtonClick: (buttonComponent: ButtonComponent) => void;
    start: () => Promise<void>;
    stop: () => Promise<void>;
} & Record<string, any>;
export default _default;
