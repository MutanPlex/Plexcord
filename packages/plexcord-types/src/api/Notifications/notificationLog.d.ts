import type { NotificationData } from "./Notifications";
interface PersistentNotificationData extends Pick<NotificationData, "title" | "body" | "image" | "icon" | "color"> {
    timestamp: number;
    id: string;
}
export declare function persistNotification(notification: NotificationData): Promise<void>;
export declare function deleteNotification(timestamp: number): Promise<void>;
export declare function useLogs(): readonly [PersistentNotificationData[], boolean];
export declare function NotificationLog({ log, pending }: {
    log: PersistentNotificationData[];
    pending: boolean;
}): import("react").JSX.Element;
export declare function openNotificationLogModal(): void;
export {};
