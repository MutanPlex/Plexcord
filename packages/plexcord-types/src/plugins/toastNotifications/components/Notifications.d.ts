import type { ReactNode } from "react";
export interface NotificationData {
    title: string;
    body: string;
    richBody?: ReactNode;
    icon?: string;
    image?: string;
    permanent?: boolean;
    dismissOnClick?: boolean;
    attachments: number;
    onClick?(): void;
    onClose?(): void;
}
export declare function showNotification(notification: NotificationData): Promise<void>;
