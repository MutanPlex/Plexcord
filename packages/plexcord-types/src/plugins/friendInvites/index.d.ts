import { ApplicationCommandInputType } from "../../api/Commands";
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
        execute: (args: import("../../api/Commands").Argument[], ctx: import("../../api/Commands").CommandContext) => Promise<void>;
    }[];
} & Record<string, any>;
export default _default;
