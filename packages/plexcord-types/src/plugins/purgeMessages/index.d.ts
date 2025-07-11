import { ApplicationCommandInputType, ApplicationCommandOptionType } from "../../api/Commands";
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    settingsAboutComponent: () => import("react").JSX.Element;
    commands: {
        name: string;
        description: string;
        options: ({
            name: string;
            description: string;
            type: ApplicationCommandOptionType.INTEGER;
            required: true;
        } | {
            name: string;
            description: string;
            type: ApplicationCommandOptionType.CHANNEL;
            required: false;
        } | {
            name: string;
            description: string;
            type: ApplicationCommandOptionType.INTEGER;
            required: false;
        })[];
        inputType: ApplicationCommandInputType.BUILT_IN;
        execute: (opts: import("../../api/Commands").Argument[], ctx: import("../../api/Commands").CommandContext) => Promise<void>;
    }[];
} & Record<string, any>;
export default _default;
