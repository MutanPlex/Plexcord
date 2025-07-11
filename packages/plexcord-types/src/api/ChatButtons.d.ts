import "./ChatButton.css";
import { Channel } from "discord-types/general";
import { HTMLProps, JSX, MouseEventHandler, ReactNode } from "react";
export interface ChatBarProps {
    channel: Channel;
    disabled: boolean;
    isEmpty: boolean;
    type: {
        analyticsName: string;
        attachments: boolean;
        autocomplete: {
            addReactionShortcut: boolean;
            forceChatLayer: boolean;
            reactions: boolean;
        };
        commands: {
            enabled: boolean;
        };
        drafts: {
            type: number;
            commandType: number;
            autoSave: boolean;
        };
        emojis: {
            button: boolean;
        };
        gifs: {
            button: boolean;
            allowSending: boolean;
        };
        gifts: {
            button: boolean;
        };
        permissions: {
            requireSendMessages: boolean;
        };
        showThreadPromptOnReply: boolean;
        stickers: {
            button: boolean;
            allowSending: boolean;
            autoSuggest: boolean;
        };
        users: {
            allowMentioning: boolean;
        };
        submit: {
            button: boolean;
            ignorePreference: boolean;
            disableEnterToSubmit: boolean;
            clearOnSubmit: boolean;
            useDisabledStylesOnSubmit: boolean;
        };
        uploadLongMessages: boolean;
        upsellLongMessages: {
            iconOnly: boolean;
        };
        showCharacterCount: boolean;
        sedReplace: boolean;
    };
}
export type ChatBarButtonFactory = (props: ChatBarProps & {
    isMainChat: boolean;
}) => JSX.Element | null;
export declare function _injectButtons(buttons: ReactNode[], props: ChatBarProps): void;
export declare const addChatBarButton: (id: string, button: ChatBarButtonFactory) => Map<string, ChatBarButtonFactory>;
export declare const removeChatBarButton: (id: string) => boolean;
export interface ChatBarButtonProps {
    children: ReactNode;
    tooltip: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
    onContextMenu?: MouseEventHandler<HTMLButtonElement>;
    onAuxClick?: MouseEventHandler<HTMLButtonElement>;
    buttonProps?: Omit<HTMLProps<HTMLButtonElement>, "size" | "onClick" | "onContextMenu" | "onAuxClick">;
}
export declare const ChatBarButton: import("react").FunctionComponent<ChatBarButtonProps>;
