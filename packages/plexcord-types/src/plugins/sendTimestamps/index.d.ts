import "./styles.css";
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
        replaceMessageContents: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
        };
    }, import("../../utils/types").SettingsChecks<{
        replaceMessageContents: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
        };
    }>, {}>;
    renderChatBarButton: ChatBarButtonFactory;
    onBeforeMessageSend(_: string, msg: import("../../api/MessageEvents").MessageObject): void;
    settingsAboutComponent(): import("react").JSX.Element;
} & Record<string, any>;
export default _default;
