import { ApplicationCommandInputType, ApplicationCommandOptionType } from "../../api/Commands";
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    commands: ({
        name: string;
        description: string;
        options: import("../../api/Commands").Option[];
        inputType: ApplicationCommandInputType.BOT;
        execute: (opts: import("../../api/Commands").Argument[], ctx: import("../../api/Commands").CommandContext) => void;
    } | {
        name: string;
        description: string;
        options: import("../../api/Commands").Option[];
        execute: (opts: import("../../api/Commands").Argument[]) => {
            content: string;
        };
        inputType?: undefined;
    } | {
        name: string;
        description: string;
        options: never[];
        execute: (opts: import("../../api/Commands").Argument[], ctx: import("../../api/Commands").CommandContext) => {
            content: string;
        };
        inputType?: undefined;
    } | {
        name: string;
        description: string;
        options: {
            name: string;
            description: string;
            type: ApplicationCommandOptionType.STRING;
            required: true;
            choices: {
                name: string;
                value: string;
                label: string;
            }[];
        }[];
        execute: (opts: import("../../api/Commands").Argument[], ctx: import("../../api/Commands").CommandContext) => Promise<{
            content: any;
        } | undefined>;
        inputType?: undefined;
    } | {
        name: string;
        description: string;
        execute: (opts: import("../../api/Commands").Argument[], ctx: import("../../api/Commands").CommandContext) => Promise<{
            content: string;
        } | undefined>;
        options?: undefined;
        inputType?: undefined;
    })[];
} & Record<string, any>;
export default _default;
