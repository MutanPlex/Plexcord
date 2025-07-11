import "./styles.css";
import { NavContextMenuPatchCallback } from "../../api/ContextMenu";
import { TranslateIcon } from "./TranslateIcon";
import { translate } from "./utils";
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    settings: import("../../utils/types").DefinedSettings<{
        receivedInput: {
            type: import("../../utils/types").OptionType.STRING;
            description: string;
            default: string;
            hidden: true;
        };
        receivedOutput: {
            type: import("../../utils/types").OptionType.STRING;
            description: string;
            default: string;
            hidden: true;
        };
        sentInput: {
            type: import("../../utils/types").OptionType.STRING;
            description: string;
            default: string;
            hidden: true;
        };
        sentOutput: {
            type: import("../../utils/types").OptionType.STRING;
            description: string;
            default: string;
            hidden: true;
        };
        showChatBarButton: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        service: {
            type: import("../../utils/types").OptionType.SELECT;
            description: string;
            disabled: () => boolean;
            options: readonly [{
                readonly label: "Google Translate";
                readonly value: "google";
                readonly default: true;
            }, {
                readonly label: "DeepL Free";
                readonly value: "deepl";
            }, {
                readonly label: "DeepL Pro";
                readonly value: "deepl-pro";
            }];
            onChange: typeof import("./settings").resetLanguageDefaults;
        };
        deeplApiKey: {
            type: import("../../utils/types").OptionType.STRING;
            description: string;
            default: string;
            placeholder: string;
            disabled: () => boolean;
        };
        autoTranslate: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
            default: false;
        };
        showAutoTranslateTooltip: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
            default: true;
        };
    }, import("../../utils/types").SettingsChecks<{
        receivedInput: {
            type: import("../../utils/types").OptionType.STRING;
            description: string;
            default: string;
            hidden: true;
        };
        receivedOutput: {
            type: import("../../utils/types").OptionType.STRING;
            description: string;
            default: string;
            hidden: true;
        };
        sentInput: {
            type: import("../../utils/types").OptionType.STRING;
            description: string;
            default: string;
            hidden: true;
        };
        sentOutput: {
            type: import("../../utils/types").OptionType.STRING;
            description: string;
            default: string;
            hidden: true;
        };
        showChatBarButton: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        service: {
            type: import("../../utils/types").OptionType.SELECT;
            description: string;
            disabled: () => boolean;
            options: readonly [{
                readonly label: "Google Translate";
                readonly value: "google";
                readonly default: true;
            }, {
                readonly label: "DeepL Free";
                readonly value: "deepl";
            }, {
                readonly label: "DeepL Pro";
                readonly value: "deepl-pro";
            }];
            onChange: typeof import("./settings").resetLanguageDefaults;
        };
        deeplApiKey: {
            type: import("../../utils/types").OptionType.STRING;
            description: string;
            default: string;
            placeholder: string;
            disabled: () => boolean;
        };
        autoTranslate: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
            default: false;
        };
        showAutoTranslateTooltip: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
            default: true;
        };
    }>, {
        showAutoTranslateAlert: boolean;
    }>;
    contextMenus: {
        message: NavContextMenuPatchCallback;
    };
    translate: typeof translate;
    renderMessageAccessory: (props: Record<string, any>) => import("react").JSX.Element;
    renderChatBarButton: import("../../api/ChatButtons").ChatBarButtonFactory;
    renderMessagePopoverButton(message: import("discord-types/general").Message): {
        label: string;
        icon: typeof TranslateIcon;
        message: import("discord-types/general").Message;
        channel: import("discord-types/general").Channel;
        onClick: () => Promise<void>;
    } | null;
    onBeforeMessageSend(_: string, message: import("../../api/MessageEvents").MessageObject): Promise<void>;
} & Record<string, any>;
export default _default;
