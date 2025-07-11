import { ApplicationCommandInputType, ApplicationCommandOptionType } from "../../api/Commands";
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    commands: {
        name: string;
        description: string;
        inputType: ApplicationCommandInputType.BUILT_IN;
        options: {
            name: string;
            description: string;
            type: ApplicationCommandOptionType.STRING;
            required: true;
        }[];
        execute: (opts: import("../../api/Commands").Argument[], ctx: import("../../api/Commands").CommandContext) => void;
    }[];
} & Record<string, any>;
export default _default;
