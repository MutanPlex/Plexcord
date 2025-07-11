import { Message } from "discord-types/general";
import { TranslationValue } from "./utils";
export declare function handleTranslate(messageId: string, data: TranslationValue): void;
export declare function TranslationAccessory({ message }: {
    message: Message;
}): import("react").JSX.Element | null;
