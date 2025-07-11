import { ApplicationCommandOptionType } from "../../api/Commands";
import { OptionType } from "../../utils/types";
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    tags: string[];
    settings: import("../../utils/types").DefinedSettings<{
        hyperlink: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
        };
        defaultEngine: {
            type: OptionType.SELECT;
            description: string;
            options: {
                label: string;
                value: string;
                default: boolean;
            }[];
        };
        customEngineURL: {
            description: string;
            type: OptionType.STRING;
            placeholder: string;
        };
    }, import("../../utils/types").SettingsChecks<{
        hyperlink: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
        };
        defaultEngine: {
            type: OptionType.SELECT;
            description: string;
            options: {
                label: string;
                value: string;
                default: boolean;
            }[];
        };
        customEngineURL: {
            description: string;
            type: OptionType.STRING;
            placeholder: string;
        };
    }>, {}>;
    commands: {
        name: string;
        description: string;
        options: {
            name: string;
            description: string;
            type: ApplicationCommandOptionType.STRING;
            required: true;
        }[];
        execute: (opts: import("../../api/Commands").Argument[]) => {
            content: string;
        };
    }[];
} & Record<string, any>;
export default _default;
