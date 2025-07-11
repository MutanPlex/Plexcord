import { ChatBarButtonFactory } from "../../api/ChatButtons";
import { OptionType } from "../../utils/types";
declare const _default: {
    name: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    description: string;
    settings: import("../../utils/types").DefinedSettings<{
        persistState: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
            onChange(newValue: boolean): void;
        };
        autoDisable: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
    }, import("../../utils/types").SettingsChecks<{
        persistState: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
            onChange(newValue: boolean): void;
        };
        autoDisable: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
    }>, {}>;
    renderChatBarButton: ChatBarButtonFactory;
} & Record<string, any>;
export default _default;
