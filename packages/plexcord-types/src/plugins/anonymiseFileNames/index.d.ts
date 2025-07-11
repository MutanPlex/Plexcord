import { ApplicationCommandInputType, ApplicationCommandOptionType } from "../../api/Commands";
import { Upload } from "../../api/MessageEvents";
import { OptionType } from "../../utils/types";
declare const enum Methods {
    Random = 0,
    Consistent = 1,
    Timestamp = 2
}
export declare const tarExtMatcher: RegExp;
declare const _default: {
    name: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    description: string;
    settings: import("../../utils/types").DefinedSettings<{
        anonymiseByDefault: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
        };
        spoilerMessages: {
            description: string;
            type: OptionType.BOOLEAN;
            default: false;
        };
        method: {
            description: string;
            type: OptionType.SELECT;
            options: ({
                label: string;
                value: Methods;
                default: true;
            } | {
                label: string;
                value: Methods;
                default?: undefined;
            })[];
        };
        randomisedLength: {
            description: string;
            type: OptionType.NUMBER;
            default: number;
            disabled: () => boolean;
        };
        consistent: {
            description: string;
            type: OptionType.STRING;
            default: string;
            disabled: () => boolean;
        };
    }, import("../../utils/types").SettingsChecks<{
        anonymiseByDefault: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
        };
        spoilerMessages: {
            description: string;
            type: OptionType.BOOLEAN;
            default: false;
        };
        method: {
            description: string;
            type: OptionType.SELECT;
            options: ({
                label: string;
                value: Methods;
                default: true;
            } | {
                label: string;
                value: Methods;
                default?: undefined;
            })[];
        };
        randomisedLength: {
            description: string;
            type: OptionType.NUMBER;
            default: number;
            disabled: () => boolean;
        };
        consistent: {
            description: string;
            type: OptionType.STRING;
            default: string;
            disabled: () => boolean;
        };
    }>, {}>;
    patches: ({
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        }[];
    } | {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
    })[];
    AnonymiseUploadButton: import("react").FunctionComponent<{
        upload: Upload;
    }>;
    anonymise(upload: Upload): string | undefined;
    commands: {
        name: string;
        description: string;
        inputType: ApplicationCommandInputType.BUILT_IN;
        options: {
            name: string;
            description: string;
            required: false;
            type: ApplicationCommandOptionType.BOOLEAN;
        }[];
        execute: (args: import("../../api/Commands").Argument[], ctx: import("../../api/Commands").CommandContext) => Promise<void>;
    }[];
} & Record<string, any>;
export default _default;
