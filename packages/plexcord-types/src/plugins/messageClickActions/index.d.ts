import { OptionType } from "../../utils/types";
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    settings: import("../../utils/types").DefinedSettings<{
        enableDeleteOnClick: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        enableDoubleClickToEdit: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        enableDoubleClickToReply: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        requireModifier: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
        };
    }, import("../../utils/types").SettingsChecks<{
        enableDeleteOnClick: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        enableDoubleClickToEdit: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        enableDoubleClickToReply: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        requireModifier: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
        };
    }>, {}>;
    start(): void;
    stop(): void;
    onMessageClick(msg: any, channel: import("discord-types/general").Channel, event: MouseEvent): void;
} & Record<string, any>;
export default _default;
