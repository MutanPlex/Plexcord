import { ApplicationCommandInputType, ApplicationCommandOptionType } from "../../api/Commands";
import { OptionType } from "../../utils/types";
interface Tag {
    name: string;
    message: string;
}
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    settings: import("../../utils/types").DefinedSettings<{
        clyde: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
        };
        tagsList: {
            type: OptionType.CUSTOM;
            description: string;
            default: Record<string, Tag>;
        };
    }, import("../../utils/types").SettingsChecks<{
        clyde: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
        };
        tagsList: {
            type: OptionType.CUSTOM;
            description: string;
            default: Record<string, Tag>;
        };
    }>, {}>;
    start(): Promise<void>;
    commands: {
        name: string;
        description: string;
        inputType: ApplicationCommandInputType.BUILT_IN;
        options: {
            name: string;
            description: string;
            type: ApplicationCommandOptionType.SUB_COMMAND;
            options: {
                name: string;
                description: string;
                type: ApplicationCommandOptionType.STRING;
                required: true;
            }[];
        }[];
        execute(args: import("../../api/Commands").Argument[], ctx: import("../../api/Commands").CommandContext): Promise<import("discord-types/general").Message | undefined>;
    }[];
} & Record<string, any>;
export default _default;
