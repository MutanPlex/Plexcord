import { ChatBarButtonFactory } from "../../api/ChatButtons";
import { OptionType } from "../../utils/types";
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    settings: import("../../utils/types").DefinedSettings<{
        showIcon: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        showMs: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        iconColor: {
            type: OptionType.STRING;
            description: string;
            default: string;
        };
    }, import("../../utils/types").SettingsChecks<{
        showIcon: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        showMs: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        iconColor: {
            type: OptionType.STRING;
            description: string;
            default: string;
        };
    }>, {}>;
    start(): void;
    stop(): void;
    renderChatBarButton: ChatBarButtonFactory;
} & Record<string, any>;
export default _default;
