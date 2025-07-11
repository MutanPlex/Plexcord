import { OptionType } from "../../utils/types";
export declare const settings: import("../../utils/types").DefinedSettings<{
    receivedInput: {
        type: OptionType.STRING;
        description: string;
        default: string;
        hidden: true;
    };
    receivedOutput: {
        type: OptionType.STRING;
        description: string;
        default: string;
        hidden: true;
    };
    sentInput: {
        type: OptionType.STRING;
        description: string;
        default: string;
        hidden: true;
    };
    sentOutput: {
        type: OptionType.STRING;
        description: string;
        default: string;
        hidden: true;
    };
    showChatBarButton: {
        type: OptionType.BOOLEAN;
        description: string;
        default: true;
    };
    service: {
        type: OptionType.SELECT;
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
        onChange: typeof resetLanguageDefaults;
    };
    deeplApiKey: {
        type: OptionType.STRING;
        description: string;
        default: string;
        placeholder: string;
        disabled: () => boolean;
    };
    autoTranslate: {
        type: OptionType.BOOLEAN;
        description: string;
        default: false;
    };
    showAutoTranslateTooltip: {
        type: OptionType.BOOLEAN;
        description: string;
        default: true;
    };
}, import("../../utils/types").SettingsChecks<{
    receivedInput: {
        type: OptionType.STRING;
        description: string;
        default: string;
        hidden: true;
    };
    receivedOutput: {
        type: OptionType.STRING;
        description: string;
        default: string;
        hidden: true;
    };
    sentInput: {
        type: OptionType.STRING;
        description: string;
        default: string;
        hidden: true;
    };
    sentOutput: {
        type: OptionType.STRING;
        description: string;
        default: string;
        hidden: true;
    };
    showChatBarButton: {
        type: OptionType.BOOLEAN;
        description: string;
        default: true;
    };
    service: {
        type: OptionType.SELECT;
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
        onChange: typeof resetLanguageDefaults;
    };
    deeplApiKey: {
        type: OptionType.STRING;
        description: string;
        default: string;
        placeholder: string;
        disabled: () => boolean;
    };
    autoTranslate: {
        type: OptionType.BOOLEAN;
        description: string;
        default: false;
    };
    showAutoTranslateTooltip: {
        type: OptionType.BOOLEAN;
        description: string;
        default: true;
    };
}>, {
    showAutoTranslateAlert: boolean;
}>;
export declare function resetLanguageDefaults(): void;
