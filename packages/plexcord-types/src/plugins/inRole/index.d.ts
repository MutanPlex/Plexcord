import "./style.css";
import { ApplicationCommandInputType, ApplicationCommandOptionType } from "../../api/Commands";
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    dependencies: string[];
    start(): void;
    settingsAboutComponent: () => import("react").JSX.Element;
    commands: {
        name: string;
        description: string;
        inputType: ApplicationCommandInputType.BUILT_IN;
        options: {
            name: string;
            description: string;
            type: ApplicationCommandOptionType.ROLE;
            required: true;
        }[];
        execute: (args: import("../../api/Commands").Argument[], ctx: import("../../api/Commands").CommandContext) => import("discord-types/general").Message | undefined;
    }[];
    contextMenus: {
        "dev-context"(children: (import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null)[], { id }: {
            id: string;
        }): void;
        message(children: (import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null)[], { message }: {
            message: any;
        }): void;
    };
} & Record<string, any>;
export default _default;
