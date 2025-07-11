import { Channel, Message } from "discord-types/general";
import type { ComponentType, MouseEventHandler } from "react";
export interface MessagePopoverButtonItem {
    key?: string;
    label: string;
    icon: ComponentType<any>;
    message: Message;
    channel: Channel;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    onContextMenu?: MouseEventHandler<HTMLButtonElement>;
}
export type MessagePopoverButtonFactory = (message: Message) => MessagePopoverButtonItem | null;
export declare const buttons: Map<string, MessagePopoverButtonFactory>;
export declare function addMessagePopoverButton(identifier: string, item: MessagePopoverButtonFactory): void;
export declare function removeMessagePopoverButton(identifier: string): void;
export declare function _buildPopoverElements(Component: React.ComponentType<MessagePopoverButtonItem>, message: Message): import("react").JSX.Element;
