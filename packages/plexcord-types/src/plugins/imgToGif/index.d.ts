import { ApplicationCommandInputType, ApplicationCommandOptionType, Argument, CommandContext } from "../../api/Commands";
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    commands: {
        inputType: ApplicationCommandInputType.BUILT_IN;
        name: string;
        description: string;
        options: ({
            name: string;
            description: string;
            type: ApplicationCommandOptionType.ATTACHMENT;
        } | {
            name: string;
            description: string;
            type: ApplicationCommandOptionType.INTEGER;
        })[];
        execute: (opts: Argument[], cmdCtx: CommandContext) => Promise<void>;
    }[];
} & Record<string, any>;
export default _default;
