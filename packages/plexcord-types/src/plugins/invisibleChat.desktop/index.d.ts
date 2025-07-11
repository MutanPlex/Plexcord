import { ChatBarButtonFactory } from "../../api/ChatButtons";
import { OptionType, ReporterTestable } from "../../utils/types";
import { Message } from "discord-types/general";
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    dependencies: string[];
    reporterTestable: ReporterTestable;
    settings: import("../../utils/types").DefinedSettings<{
        savedPasswords: {
            type: OptionType.STRING;
            default: string;
            description: string;
        };
    }, import("../../utils/types").SettingsChecks<{
        savedPasswords: {
            type: OptionType.STRING;
            default: string;
            description: string;
        };
    }>, {}>;
    patches: {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
    }[];
    EMBED_API_URL: string;
    INV_REGEX: RegExp;
    URL_REGEX: RegExp;
    start(): Promise<void>;
    renderMessagePopoverButton(message: Message): {
        label: string;
        icon: any;
        message: Message;
        channel: import("discord-types/general").Channel;
        onClick: () => Promise<void>;
    } | null;
    renderChatBarButton: ChatBarButtonFactory;
    colorCodeFromNumber(color: number): string;
    getEmbed(url: URL): Promise<Object | {}>;
    buildEmbed(message: any, revealed: string): Promise<void>;
    popOverIcon: () => import("react").JSX.Element;
    indicator: import("react").FunctionComponent<any>;
} & Record<string, any>;
export default _default;
export declare function encrypt(secret: string, password: string, cover: string): string;
export declare function decrypt(encrypted: string, password: string, removeIndicator: boolean): string;
export declare function isCorrectPassword(result: string): boolean;
export declare function iteratePasswords(message: Message): Promise<string | false>;
