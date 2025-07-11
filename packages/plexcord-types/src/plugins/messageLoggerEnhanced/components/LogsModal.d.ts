import { ModalProps } from "../../../utils/modal";
import { User } from "discord-types/general";
import { LoggedMessage } from "../types";
export interface MessagePreviewProps {
    className: string;
    author: User;
    message: LoggedMessage;
    compact: boolean;
    isGroupStart: boolean;
    hideSimpleEmbedContent: boolean;
    childrenAccessories: any;
}
export interface ChildrenAccProops {
    channelMessageProps: {
        compact: boolean;
        channel: any;
        message: LoggedMessage;
        groupId: string;
        id: string;
        isLastItem: boolean;
        isHighlight: boolean;
        renderContentOnly: boolean;
    };
    hasSpoilerEmbeds: boolean;
    isInteracting: boolean;
    isAutomodBlockedMessage: boolean;
    showClydeAiEmbeds: boolean;
}
export declare enum LogTabs {
    DELETED = "Deleted",
    EDITED = "Edited",
    GHOST_PING = "Ghost Pinged"
}
interface Props {
    modalProps: ModalProps;
    initalQuery?: string;
}
export declare function LogsModal({ modalProps, initalQuery }: Props): import("react").JSX.Element;
export declare const openLogModal: (initalQuery?: string) => string;
export {};
