import { ApplicationCommandInputType, ApplicationCommandOptionType } from "../../api/Commands";
import { Message } from "discord-types/general";
interface IMessageCreate {
    type: "MESSAGE_CREATE";
    optimistic: boolean;
    isPushNotification: boolean;
    channelId: string;
    message: Message;
}
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    patches: {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
    }[];
    interactionHandler(interaction: any): Promise<void>;
    flux: {
        MESSAGE_CREATE({ optimistic, type, message, channelId }: IMessageCreate): Promise<void>;
    };
    commands: {
        name: string;
        description: string;
        options: {
            name: string;
            description: string;
            options: never[];
            type: ApplicationCommandOptionType.SUB_COMMAND;
        }[];
        inputType: ApplicationCommandInputType.BUILT_IN;
        execute: (opts: import("../../api/Commands").Argument[], ctx: import("../../api/Commands").CommandContext) => void;
    }[];
    start(): Promise<void>;
    stop(): Promise<void>;
} & Record<string, any>;
export default _default;
