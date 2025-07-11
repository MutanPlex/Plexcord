import type { ReactNode } from "react";
export interface NotificationData {
    title: string;
    body: string;
    /**
     * Same as body but can be a custom component.
     * Will be used over body if present.
     * Not supported on desktop notifications, those will fall back to body */
    richBody?: ReactNode;
    /** Small icon. This is for things like profile pictures and should be square */
    icon?: string;
    /** Large image. Optimally, this should be around 16x9 but it doesn't matter much. Desktop Notifications might not support this */
    image?: string;
    onClick?(): void;
    onClose?(): void;
    color?: string;
    /** Whether this notification should not have a timeout */
    permanent?: boolean;
    /** Whether this notification should not be persisted in the Notification Log */
    noPersist?: boolean;
    /** Whether this notification should be dismissed when clicked (defaults to true) */
    dismissOnClick?: boolean;
}
export declare function requestPermission(): Promise<boolean>;
export declare function showNotification(data: NotificationData): Promise<void>;
